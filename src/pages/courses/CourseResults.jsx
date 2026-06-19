import React, { useState, useEffect, useMemo } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import {
  Search,
  MessageCircle,
  Calendar,
  Star,
  Users,
  Zap,
  CreditCard,
  GraduationCap,
  Loader2,
  Navigation,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";
import courseService from "../../api/services/courseService";
import courseLocationService from "../../api/services/courseLocationService";
import LocationCards from "../../components/ui/LocationCards";
import Loader from "../../components/ui/Loader";
import Feedback from "../../components/ui/Feedback";
import TrustBadges from "../../components/ui/TrustBadges";
import CourseResultsFilter from "../../components/ui/CourseResultsFilter";
import StripePaymentModal from "../../components/modals/StripePaymentModal";
import { useAuth } from "../../context/AuthContext";
import bookingService from "../../api/services/bookingService";
import {
  geocodeLocation,
  geocodePostcode,
  calculateDistanceMiles,
  formatDistanceFromUser,
  getGoogleMapsUrl,
} from "../../utils/distance";
import { deriveLocationAmenities } from "../../utils/locationAmenities";

const CourseResults = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const postcode = searchParams.get("postcode") || "";
  const courseId = searchParams.get("courseid");

  const [course, setCourse] = useState(null);
  const [courseLocations, setCourseLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [filter, setFilter] = useState("Closest");
  const [distanceByLinkId, setDistanceByLinkId] = useState({});
  const [amenitiesByLinkId, setAmenitiesByLinkId] = useState({});
  const [isCalculatingDistances, setIsCalculatingDistances] = useState(false);
  const [bookedSchedules, setBookedSchedules] = useState([]);
  const [overallBookingStatus, setOverallBookingStatus] = useState(null);

  const [stripeModalOpen, setStripeModalOpen] = useState(false);
  const [clientSecret, setClientSecret] = useState(null);
  const [activeBookingRef, setActiveBookingRef] = useState(null);

  const { user } = useAuth();

  // Fetch course + linked locations in parallel
  useEffect(() => {
    if (!courseId) {
      setIsLoading(false);
      return;
    }

    Promise.all([
      courseService.getCourseById(courseId),
      courseLocationService.getByCourse(courseId),
    ])
      .then(([courseRes, locRes]) => {
        setCourse(courseRes.data.data);
        setCourseLocations(locRes.data.data || []);
      })
      .catch((err) => console.error("Error fetching course data:", err))
      .finally(() => setIsLoading(false));

    if (user) {
      bookingService
        .getMyBookingStatus(courseId)
        .then((res) => {
          if (res.data) {
            setOverallBookingStatus(res.data.status);
            if (res.data.bookedSchedules) {
              setBookedSchedules(res.data.bookedSchedules);
            }
          }
        })
        .catch((err) => console.error("Error fetching booking status:", err));
    }
  }, [courseId, user]);

  const handlePayPending = async (bookingId, bookingRef) => {
    try {
      const res = await bookingService.createPaymentIntent(bookingId);
      if (res.data?.success) {
        setClientSecret(res.data.clientSecret);
        setActiveBookingRef(bookingRef);
        setStripeModalOpen(true);
      }
    } catch (err) {
      console.error("Error creating payment intent:", err);
    }
  };

  // Active links with a populated locationId object
  const activeLinks = useMemo(
    () =>
      courseLocations.filter(
        (l) => l.locationId && typeof l.locationId === "object",
      ),
    [courseLocations],
  );

  // Derive amenities (uses postcode geocoding for parking/commute)
  useEffect(() => {
    if (!activeLinks.length) {
      setAmenitiesByLinkId({});
      return;
    }
    let cancelled = false;

    (async () => {
      const entries = await Promise.all(
        activeLinks.map(async (link) => {
          const loc = link.locationId;
          let geocodeMeta = {};
          if (loc.postcode) {
            const lookup = await geocodePostcode(loc.postcode).catch(
              () => null,
            );
            if (lookup)
              geocodeMeta = {
                region: lookup.region,
                adminDistrict: lookup.adminDistrict,
              };
          }
          return [String(link._id), deriveLocationAmenities(loc, geocodeMeta)];
        }),
      );
      if (!cancelled) setAmenitiesByLinkId(Object.fromEntries(entries));
    })();

    return () => {
      cancelled = true;
    };
  }, [activeLinks]);

  // Calculate distances from user's postcode to each venue
  useEffect(() => {
    if (!activeLinks.length || !postcode.trim()) {
      setDistanceByLinkId({});
      setIsCalculatingDistances(false);
      return;
    }
    let cancelled = false;

    (async () => {
      setIsCalculatingDistances(true);
      setDistanceByLinkId({});
      try {
        const userCoords = await geocodeLocation(postcode).catch(() => null);
        const entries = await Promise.all(
          activeLinks.map(async (link) => {
            const loc = link.locationId;
            let lat = loc.latitude;
            let lng = loc.longitude;
            if ((lat == null || lng == null) && loc.postcode) {
              const vc = await geocodePostcode(loc.postcode).catch(() => null);
              if (vc) {
                lat = vc.latitude;
                lng = vc.longitude;
              }
            }
            if (!userCoords || lat == null || lng == null)
              return [String(link._id), null];
            const miles = calculateDistanceMiles(
              userCoords.latitude,
              userCoords.longitude,
              lat,
              lng,
            );
            return [
              String(link._id),
              { miles, label: formatDistanceFromUser(miles) },
            ];
          }),
        );
        if (!cancelled) setDistanceByLinkId(Object.fromEntries(entries));
      } finally {
        if (!cancelled) setIsCalculatingDistances(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [activeLinks, postcode]);

  // Map CourseLocation links → format LocationCards expects
  const locations = useMemo(() => {
    return activeLinks.map((link) => {
      const loc = link.locationId;
      const address = [loc.addressLine1, loc.city, loc.postcode]
        .filter(Boolean)
        .join(", ");
      const distanceInfo = distanceByLinkId[String(link._id)];
      const amenities =
        amenitiesByLinkId[String(link._id)] || deriveLocationAmenities(loc);

      const upcomingDates = (link.dates || [])
        .filter((d) => d.startDate)
        .sort((a, b) => new Date(a.startDate) - new Date(b.startDate));

      return {
        id: link._id,
        name: loc.name,
        recommended:
          loc.name?.includes("Central") || loc.name?.includes("Ilford"),
        address,
        mapsUrl:
          loc.mapsUrl ||
          getGoogleMapsUrl({ ...loc, address: loc.addressLine1 }),
        latitude: loc.latitude,
        longitude: loc.longitude,
        distance: postcode.trim()
          ? isCalculatingDistances
            ? "Calculating..."
            : distanceInfo?.label || ""
          : "",
        distanceMiles: distanceInfo?.miles ?? null,
        parking: amenities.parking,
        commute: amenities.commute,
        duration: course?.duration,
        booked: "500+",
        price: link.price || course?.pricing?.basePrice || 139.99,
        nextDate: upcomingDates[0]?.startDate
          ? new Date(upcomingDates[0].startDate).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
            })
          : "TBA",
        dates: upcomingDates.map((d) => ({
          id: d._id,
          range: `${new Date(d.startDate).toLocaleDateString("en-GB", { day: "numeric", month: "short" })} – ${new Date(d.endDate).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}`,
          price: link.price || course?.pricing?.basePrice,
          bookingFee: d.availableSeats != null && d.availableSeats < 5,
          startDate: d.startDate,
          availableSeats: d.availableSeats,
        })),
      };
    });
  }, [
    activeLinks,
    distanceByLinkId,
    amenitiesByLinkId,
    isCalculatingDistances,
    postcode,
    course,
  ]);

  const sortedLocations = useMemo(() => {
    const copy = [...locations];
    if (filter === "Closest") {
      copy.sort((a, b) => {
        if (a.distanceMiles == null && b.distanceMiles == null) return 0;
        if (a.distanceMiles == null) return 1;
        if (b.distanceMiles == null) return -1;
        return a.distanceMiles - b.distanceMiles;
      });
    } else if (filter === "Cheapest") {
      copy.sort((a, b) => a.price - b.price);
    } else if (filter === "Earliest") {
      copy.sort((a, b) => {
        const aDate = a.dates?.[0]?.startDate
          ? new Date(a.dates[0].startDate).getTime()
          : Infinity;
        const bDate = b.dates?.[0]?.startDate
          ? new Date(b.dates[0].startDate).getTime()
          : Infinity;
        return aDate - bDate;
      });
    }
    return copy;
  }, [locations, filter]);

  const filterPrices = useMemo(() => {
    if (!locations.length) return {};
    const fmt = (p) =>
      p != null && isFinite(p) ? `£${Number(p).toFixed(0)}` : "";

    const byClosest = [...locations].sort((a, b) => {
      if (a.distanceMiles == null && b.distanceMiles == null) return 0;
      if (a.distanceMiles == null) return 1;
      if (b.distanceMiles == null) return -1;
      return a.distanceMiles - b.distanceMiles;
    });

    const cheapest = Math.min(...locations.map((l) => l.price ?? Infinity));

    const byEarliest = [...locations].sort((a, b) => {
      const aDate = a.dates?.[0]?.startDate
        ? new Date(a.dates[0].startDate).getTime()
        : Infinity;
      const bDate = b.dates?.[0]?.startDate
        ? new Date(b.dates[0].startDate).getTime()
        : Infinity;
      return aDate - bDate;
    });

    return {
      Closest: fmt(byClosest[0]?.price),
      Cheapest: fmt(cheapest),
      Earliest: fmt(byEarliest[0]?.price),
    };
  }, [locations]);

  const totalSchedules = useMemo(
    () => activeLinks.reduce((sum, l) => sum + (l.dates?.length || 0), 0),
    [activeLinks],
  );

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader text="Loading course results..." />
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Course not found
      </div>
    );
  }

  return (
    <div className="bg-[#F8FAFC] min-h-screen mt-5">
      <main className="max-w-300 mx-auto px-4 py-6 md:py-20">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-400 cursor-pointer hover:text-[#d84a1a] transition-colors text-xs font-bold uppercase tracking-widest mb-6"
        >
          <ArrowLeft size={16} /> Back
        </button>
        <div className="flex flex-col lg:flex-row gap-5">
          <CourseResultsFilter
            filter={filter}
            setFilter={setFilter}
            filterPrices={filterPrices}
          />

          <div className="flex-1 space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-[#1C1C1C] mb-1">
                {course.title}
              </h1>
              <p className=" text-sm md:text-base mb-2 text-gray-500 font-medium">
                We've found{" "}
                <span className="text-[#1C1C1C] font-bold">
                  {totalSchedules} course date{totalSchedules === 1 ? "" : "s"}
                </span>{" "}
                across{" "}
                <span className="text-[#1C1C1C] font-bold">
                  {locations.length} location{locations.length === 1 ? "" : "s"}
                </span>
              </p>
            </div>

            {overallBookingStatus === "PAID" ? (
              <div className="relative overflow-hidden bg-white border border-[#F15A24]/15 rounded-[32px] p-10 md:p-12 text-center shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                {/* Background Glow */}
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#F15A24]/10 blur-[100px] rounded-full" />
                <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#F15A24]/5 blur-[100px] rounded-full" />

                <div className="relative z-10">
                  {/* Success Icon */}
                  <div className="mx-auto w-20 h-20 bg-[#FFF4EE] border border-[#F15A24]/10 rounded-full flex items-center justify-center mb-6 shadow-sm">
                    <CheckCircle2 size={42} className="text-[#F15A24]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-black text-[#0F2B46] mb-4">
                    🎉 You are already enrolled!
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                    You have successfully purchased this course. You can view
                    your training schedule, details, and receipt in your
                    profile.
                  </p>

                  {/* Divider */}
                  <div className="w-24 h-1 bg-[#F15A24] rounded-full mx-auto mb-8" />

                  {/* Button */}
                  <Link
                    to="/dashboard?tab=overview"
                    className="inline-flex items-center justify-center px-12 py-4 bg-[#F15A24] text-white font-semibold rounded-2xl hover:bg-[#df4c18] transition-all duration-300 shadow-[0_12px_35px_rgba(241,90,36,0.30)] hover:scale-[1.02]"
                  >
                    View Booking
                  </Link>
                </div>
              </div>
            ) : sortedLocations.length === 0 ? (
              <div className="bg-white rounded-3xl border border-gray-100 p-12 text-center shadow-sm">
                <p className="text-gray-500 font-medium text-lg">
                  No locations available for this course yet.
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  Please check back soon or contact us for more information.
                </p>
              </div>
            ) : (
              sortedLocations.map((loc, index) => (
                <LocationCards
                  key={loc.id}
                  loc={{
                    ...loc,
                    recommended: index === 0,
                  }}
                  course={course}
                  bookedSchedules={bookedSchedules}
                  overallBookingStatus={overallBookingStatus}
                  onPayPending={handlePayPending}
                />
              ))
            )}

            <TrustBadges />
          </div>

          <Feedback price={course.pricing?.basePrice} date={course.date} />
        </div>
      </main>

      <StripePaymentModal
        isOpen={stripeModalOpen}
        onClose={() => setStripeModalOpen(false)}
        clientSecret={clientSecret}
        bookingRef={activeBookingRef}
        onSuccess={() => {
          setStripeModalOpen(false);
          navigate(`/booking-success?bookingRef=${activeBookingRef}`);
        }}
      />
    </div>
  );
};

export default CourseResults;
