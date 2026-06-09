import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
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
} from "lucide-react";
import courseService from "../../api/services/courseService";
import { courses as fallbackCourses } from "../../data/courseData";
import SearchModal from "../../components/shared/SearchModal";
import LocationCards from "../../components/ui/LocationCards";
import Loader from "../../components/ui/Loader";
import Feedback from "../../components/ui/Feedback";
import TrustBadges from "../../components/ui/TrustBadges";
import CourseResultsFilter from "../../components/ui/CourseResultsFilter";

const CourseResults = () => {
  const [searchParams] = useSearchParams();
  const postcode = searchParams.get("postcode") || "";
  const courseId = searchParams.get("courseid");

  const [course, setCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const [filter, setFilter] = useState("Closest");
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

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

  // Map Backend Hierarchy to UI Format
  const locations = React.useMemo(() => {
    if (!course?.locations) return [];

    const flatLocations = [];
    course.locations.forEach((loc) => {
      flatLocations.push({
        id: loc._id,
        name: loc.name,
        recommended:
          loc.name.includes("Central") || loc.name.includes("Ilford"),
        address: loc.name,
        distance: "Calculating...", // Placeholder for real distance logic
        parking: "Parking available nearby",
        walk: "Short walk from station",
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
        })),
      });
    });
    return flatLocations;
  }, [course]);

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
                  12 course dates
                </span>{" "}
                across{" "}
                <span className="text-[#1C1C1C] font-bold">5 locations</span>
              </p>
            </div>

            {/* Weekend Alert */}
            {/* <div className="bg-white rounded-xl border border-gray-100 p-4 flex items-start gap-4">
              <div className="bg-[#FFF5F1] p-2 rounded-lg">
                <Calendar className="text-[#F15A24]" size={20} />
              </div>
              <div className="text-sm">
                <p className="font-bold text-[#1C1C1C] mb-0.5">
                  Weekend Training Now Available!
                </p>
                <p className="text-gray-500">
                  Complete your training on Saturdays and Sundays across three
                  weekends.{" "}
                  <span className="text-[#F15A24] cursor-pointer hover:underline">
                    Learn more
                  </span>
                </p>
              </div>
            </div> */}

            {/* Location Cards */}
            {locations.map((loc) => (
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
