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
} from "lucide-react";
import courseService from "../../api/services/courseService";
import { courses as fallbackCourses } from "../../data/courseData";
import SearchModal from "../../components/shared/SearchModal";
import LocationCards from "../../components/ui/LocationCards";
import Loader from "../../components/ui/Loader";
import Feedback from "../../components/ui/Feedback";
import TrustBadges from "../../components/ui/TrustBadges";
import CourseResultsFilter from "../../components/ui/CourseResultsFilter";
import {
  geocodeLocation,
  geocodePostcode,
  calculateDistanceMiles,
  formatDistanceFromUser,
  formatVenueAddress,
  getGoogleMapsUrl,
} from "../../utils/distance";
import { deriveLocationAmenities } from "../../utils/locationAmenities";

const CourseResults = () => {
  const [searchParams] = useSearchParams();
  const postcode = searchParams.get("postcode") || "";
  const courseId = searchParams.get("courseid");

  const [course, setCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const [filter, setFilter] = useState("Closest");
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [distanceByLocationId, setDistanceByLocationId] = useState({});
  const [amenitiesByLocationId, setAmenitiesByLocationId] = useState({});
  const [isCalculatingDistances, setIsCalculatingDistances] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        if (!courseId) {
          setIsLoading(false);
          return;
        }
        const response = await courseService.getCourseById(courseId);
        setCourse(response.data.data);
      } catch (err) {
        console.error("Error fetching course:", err);
        setError("Failed to load results");
      } finally {
        setIsLoading(false);
      }
    };
    fetchCourse();
  }, [courseId]);

  useEffect(() => {
    if (!course?.locations?.length) {
      setAmenitiesByLocationId({});
      return;
    }

    let cancelled = false;

    const loadAmenities = async () => {
      const entries = await Promise.all(
        course.locations.map(async (loc) => {
          let geocodeMeta = {};

          if (loc.postcode) {
            const lookup = await geocodePostcode(loc.postcode).catch(
              () => null,
            );
            if (lookup) {
              geocodeMeta = {
                region: lookup.region,
                adminDistrict: lookup.adminDistrict,
              };
            }
          }

          return [String(loc._id), deriveLocationAmenities(loc, geocodeMeta)];
        }),
      );

      if (!cancelled) {
        setAmenitiesByLocationId(Object.fromEntries(entries));
      }
    };

    loadAmenities();

    return () => {
      cancelled = true;
    };
  }, [course]);

  useEffect(() => {
    if (!course?.locations?.length) {
      setDistanceByLocationId({});
      setIsCalculatingDistances(false);
      return;
    }

    if (!postcode.trim()) {
      setDistanceByLocationId({});
      setIsCalculatingDistances(false);
      return;
    }

    let cancelled = false;

    const calculateDistances = async () => {
      setIsCalculatingDistances(true);
      setDistanceByLocationId({});

      try {
        const userCoords = postcode
          ? await geocodeLocation(postcode).catch(() => null)
          : null;

        const entries = await Promise.all(
          course.locations.map(async (loc) => {
            let latitude = loc.latitude;
            let longitude = loc.longitude;

            if ((latitude == null || longitude == null) && loc.postcode) {
              const venueCoords = await geocodePostcode(loc.postcode).catch(
                () => null,
              );
              if (venueCoords) {
                latitude = venueCoords.latitude;
                longitude = venueCoords.longitude;
              }
            }

            if (!userCoords || latitude == null || longitude == null) {
              return [String(loc._id), null];
            }

            const miles = calculateDistanceMiles(
              userCoords.latitude,
              userCoords.longitude,
              latitude,
              longitude,
            );

            return [
              String(loc._id),
              {
                miles,
                label: formatDistanceFromUser(miles),
              },
            ];
          }),
        );

        if (!cancelled) {
          setDistanceByLocationId(Object.fromEntries(entries));
        }
      } finally {
        if (!cancelled) {
          setIsCalculatingDistances(false);
        }
      }
    };

    calculateDistances();

    return () => {
      cancelled = true;
    };
  }, [course, postcode]);

  // Map Backend Hierarchy to UI Format
  const locations = useMemo(() => {
    if (!course?.locations) return [];

    const flatLocations = [];
    course.locations.forEach((loc) => {
      const venueAddress = formatVenueAddress(loc);
      const distanceInfo = distanceByLocationId[String(loc._id)];
      const amenities =
        amenitiesByLocationId[String(loc._id)] || deriveLocationAmenities(loc);

      flatLocations.push({
        id: loc._id,
        name: loc.name,
        recommended:
          loc.name.includes("Central") || loc.name.includes("Ilford"),
        address: venueAddress || loc.name,
        mapsUrl: getGoogleMapsUrl(loc),
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
        duration: course.duration,
        booked: "500+",
        price: course.pricing?.basePrice || 139.99,
        nextDate: loc.schedules?.[0]?.startDate
          ? new Date(loc.schedules[0].startDate).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
            })
          : "TBA",
        dates: loc.schedules.map((sch) => ({
          id: sch._id,
          range: `${new Date(sch.startDate).toLocaleDateString("en-GB", { day: "numeric", month: "short" })} - ${new Date(sch.endDate).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}`,
          price: sch.price || course.pricing?.basePrice,
          bookingFee: sch.seatsAvailable < 5,
          startDate: sch.startDate,
        })),
      });
    });
    return flatLocations;
  }, [
    course,
    distanceByLocationId,
    amenitiesByLocationId,
    isCalculatingDistances,
    postcode,
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

  const totalSchedules = useMemo(
    () =>
      course?.locations?.reduce(
        (count, loc) => count + (loc.schedules?.length || 0),
        0,
      ) || 0,
    [course],
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
    <div className="bg-[#F8FAFC] min-h-screen mt-5 ">
      {/* <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        initialCourse={course.title}
        initialLocation={postcode}
      /> */}
      {/* Search Header */}
      {/* <header className="sticky bg-white border-b border-gray-200 py-3 top-0 w-full shadow-xs z-30">
        <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between">
          <div className="flex-1 max-w-[600px] relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={16}
            />
            <input
              type="text"
              readOnly
              value={`${course.title} - ${postcode}`}
              onClick={() => setIsSearchModalOpen(true)}
              className="w-full pl-9 pr-4 py-2 bg-[#F8FAFC] border border-gray-200 rounded-md text-sm outline-none cursor-pointer hover:bg-gray-50 focus:ring-1 focus:ring-[#F15A24] transition-colors font-medium text-[#1C1C1C]"
            />
          </div>
          <div className="flex items-center gap-2 text-sm">
            <MessageCircle className="text-[#F15A24]" size={16} />
            <span className="text-gray-500">Not sure?</span>
            <span className="text-[#F15A24] font-bold cursor-pointer hover:underline">
              Chat with us
            </span>
          </div>
        </div>
      </header> */}

      <main className="max-w-300 mx-auto px-4 py-6 md:py-20">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-400 cursor-pointer hover:text-[#d84a1a] transition-colors text-xs font-bold uppercase tracking-widest mb-6"
        >
          <ArrowLeft size={16} /> Back
        </button>
        <div className="flex flex-col lg:flex-row gap-5">
          {/* 4. Left Sidebar (Filters) */}
          <CourseResultsFilter filter={filter} setFilter={setFilter} />
          {/* 5. Main Content (Course Listings) */}
          <div className="flex-1 space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-[#1C1C1C] mb-1">
                {course.title}
              </h1>
              <p className="text-gray-500 font-medium">
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

            {/* Location Cards */}
            {sortedLocations.map((loc) => (
              <LocationCards key={loc.id} loc={loc} course={course} />
            ))}

            {/* Trust Badges */}
            <TrustBadges />
          </div>

          {/* Right Sidebar */}
          <Feedback price={course.pricing.basePrice} date={course.date} />
        </div>
      </main>
    </div>
  );
};

export default CourseResults;
