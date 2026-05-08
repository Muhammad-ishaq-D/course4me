import React, { useState, useEffect } from "react";
import {
  useParams,
  Link,
  Navigate,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import {
  MessageCircle,
  ChevronRight,
  MapPin,
  ShieldCheck,
  ArrowLeft,
  ChevronLeft,
  Search,
} from "lucide-react";
import { courses } from "../../data/courseData";
import SearchModal from "../../components/shared/SearchModal";
import courseService from "../../api/services/courseService";
import BookingSkeleton from "../../components/ui/BookingSkeleton";
import Loader from "../../components/ui/Loader";
import Feedback from "../../components/ui/Feedback";

const CourseBooking = () => {
  const navigate = useNavigate();
  const { courseId: paramCourseId } = useParams();
  const [searchParams] = useSearchParams();

  // Unified course ID retrieval: URL param first, then query param
  const courseIdFromUrl = paramCourseId || searchParams.get("courseid");

  const [course, setCourse] = useState(null);
  const [error, setError] = useState("");
  const [isLoadingCourse, setIsLoadingCourse] = useState(true);

  const [searchLocation, setSearchLocation] = useState(
    searchParams.get("postcode") || "",
  );
  const [filter, setFilter] = useState("Closest");
  const [loadingStep, setLoadingStep] = useState(0); // 0: not loading, 1-3: steps
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  // Extract all location names from the course data
  const availableLocations = React.useMemo(() => {
    if (!course?.locations) return [];
    return course.locations.map((loc) => loc.name);
  }, [course]);

  useEffect(() => {
    const fetchCourse = async () => {
      if (!courseIdFromUrl) {
        setIsLoadingCourse(false);
        return;
      }
      try {
        const response = await courseService.getCourseById(courseIdFromUrl);
        setCourse(response.data.data);
      } catch (err) {
        console.error("Error fetching course:", err);
        setError("Course not found");
      } finally {
        setIsLoadingCourse(false);
      }
    };
    fetchCourse();
  }, [courseIdFromUrl]);

  useEffect(() => {
    if (loadingStep > 0) {
      window.scrollTo(0, 0);
    }
  }, [loadingStep]);

  const handleSearch = (location) => {
    const loc = location || searchLocation;
    if (!loc) return;

    setLoadingStep(1);

    setTimeout(() => setLoadingStep(2), 1200);
    setTimeout(() => setLoadingStep(3), 2400);
    setTimeout(() => {
      // Navigate to results page (unified path)
      navigate(
        `/booking/results?courseid=${course._id}&postcode=${loc}&sortby=distance&view=all`,
      );
    }, 3600);
  };

  if (isLoadingCourse) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader text="Loading course information..." />
      </div>
    );
  }

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  if (loadingStep > 0) {
    const steps = [
      {
        title: `Searching across thousands of courses near ${searchLocation || "you"}`,
        subtitle: "We're checking all available venues and dates",
        progress: 33,
      },
      {
        title: "Preparing the best results...",
        subtitle: "Checking available seats and best prices",
        progress: 66,
      },
      {
        title: "Nearly done...",
        subtitle: "Listing the best choices first",
        progress: 100,
      },
    ];
    const currentStep = steps[loadingStep - 1];

    return <BookingSkeleton currentStep={currentStep} />;
  }

  return (
    <div className="bg-[#F8FAFC] min-h-screen mt-5">
      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        initialCourse={course.title}
        initialLocation={searchLocation}
      />
      {/* 1. Specialized Booking Header */}
      <header className=" border-b border-gray-200 py-3 bg-white sticky top-0 w-full shadow-md z-30 px-4 md:px-0">
        <div className="max-w-300 mx-auto flex items-center justify-between px-4 md:px-6">
          <div className="flex-1 max-w-150 relative ml-4 md:ml-0">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              readOnly
              value={course.title}
              onClick={() => setIsSearchModalOpen(true)}
              className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-md text-sm outline-none focus:ring-1 focus:ring-[#F15A24] cursor-pointer hover:bg-gray-50 transition-colors text-[#1C1C1C] font-medium"
            />
          </div>
          <div className="flex items-center gap-2 text-sm text-[#2f3a47] font-medium mr-4 md:mr-0">
            <MessageCircle className="text-[#F15A24]" size={18} />
            <span className="hidden sm:inline text-gray-500">Not sure?</span>
            <span className="text-[#F15A24] cursor-pointer hover:underline font-bold">
              Chat with us
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-300 mx-auto px-4 md:px-6 py-8">
        {/* 2. Breadcrumbs */}
        <nav className="flex items-center gap-2 text-[13px] text-gray-400 mb-8 overflow-x-auto no-scrollbar">
          <Link to="/" className="hover:text-gray-600">
            Home
          </Link>
          <ChevronRight size={14} />
          <Link to="/courses" className="hover:text-gray-600">
            Courses
          </Link>
          <ChevronRight size={14} />
          <Link to={`/course/${course._id}`} className="hover:text-gray-600">
            {course.title}
          </Link>
          <ChevronRight size={14} />
          <span className="text-[#F15A24] font-medium">Book</span>
        </nav>

        {/* 3. Title & Subtitle */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#1C1C1C] mb-2">
          {course.title}
        </h1>
        <p className="text-[#64748B] mb-10 text-lg">
          We have several{" "}
          <span className="text-[#F15A24] cursor-pointer hover:underline">
            locations nationwide
          </span>
          . Enter your location to find a course near you.
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* 4. Left Sidebar (Filters) */}
          <aside className="w-full lg:w-64 shrink-0">
            <h3 className="text-[11px] font-black text-gray-400 tracking-[2px] uppercase mb-5">
              Sort Results By
            </h3>

            <div className="flex flex-col gap-2">
              {["Closest", "Cheapest", "Earliest"].map((option) => {
                const isActive = filter === option;
                return (
                  <button
                    key={option}
                    onClick={() => setFilter(option)}
                    className={`flex items-center justify-between px-5 py-4 rounded-2xl border-2 transition-all duration-300 group ${
                      isActive
                        ? "border-[#F15A24] bg-[#F15A24]/5 shadow-sm"
                        : "border-gray-100 bg-white hover:border-gray-200"
                    }`}
                  >
                    <span
                      className={`text-[15px] font-bold ${isActive ? "text-[#F15A24]" : "text-gray-600"}`}
                    >
                      {option}
                    </span>

                    {/* Custom Radio Indicator */}
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                        isActive
                          ? "border-[#F15A24] bg-[#F15A24]"
                          : "border-gray-200"
                      }`}
                    >
                      {isActive && (
                        <div className="w-2 h-2 rounded-full bg-white" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Postcode Alert Box */}
            <div className="mt-8 p-4 rounded-2xl bg-gray-50 border border-dashed border-gray-200">
              <p className="text-[13px] text-gray-500 leading-relaxed">
                <button className="text-[#F15A24] font-bold hover:underline">
                  Add your postcode
                </button>{" "}
                to unlock distance-based filters.
              </p>
            </div>
          </aside>

          {/* 5. Center Content (Search & Locations) */}
          <div className="flex-1 space-y-6">
            {/* Search Card */}
            <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
              <h3 className="font-bold text-[#1C1C1C] mb-5">Your Location</h3>
              <div className="flex gap-4">
                <div className="relative flex-1">
                  <MapPin
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                    size={20}
                  />
                  <input
                    type="text"
                    placeholder="Enter postcode or address"
                    className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl outline-none focus:border-[#F15A24] transition-colors"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    onFocus={() => setShowSuggestions(true)}
                  />
                  {showSuggestions && searchLocation === "" && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl border border-gray-100 shadow-xl z-10 py-2 max-h-75 overflow-y-auto">
                      {availableLocations.map((loc) => (
                        <div
                          key={loc}
                          onClick={() => {
                            setSearchLocation(loc);
                            setShowSuggestions(false);
                          }}
                          className="px-4 py-3 hover:bg-[#FFF5F1] hover:text-[#F15A24] cursor-pointer text-sm font-medium border-b border-gray-50 last:border-0"
                        >
                          {loc}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <button
                  onClick={() => handleSearch()}
                  className="bg-[#F15A24] text-white px-8 py-3.5 rounded-xl font-bold hover:brightness-110 transition-all shadow-md shadow-[#F15A24]/10"
                >
                  Search
                </button>
              </div>
            </div>

            {/* Locations Card */}
            <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
              <div className="flex justify-between items-center mb-8">
                <h3 className="font-bold text-[#1C1C1C]">Locations</h3>
                <span className="text-[12px] text-gray-400 font-medium">
                  Click to select
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4">
                <div className="bg-[#FFF5F1] text-[#F15A24] px-4 py-3 rounded-lg text-sm font-bold flex items-center justify-start cursor-pointer w-fit pr-20">
                  All
                </div>
                {availableLocations.map((loc) => (
                  <div
                    key={loc}
                    onClick={() => {
                      setSearchLocation(loc);
                      handleSearch(loc);
                    }}
                    className="text-gray-700 hover:text-[#F15A24] px-4 py-3 text-sm font-medium cursor-pointer transition-colors"
                  >
                    {loc}
                  </div>
                ))}
              </div>
            </div>

            {/* Back link */}
            <div className="flex justify-center pt-8">
              <Link
                to={`/course/${course._id}`}
                className="flex items-center gap-2 group"
              >
                <ChevronLeft
                  size={16}
                  className="text-gray-300 group-hover:text-[#F15A24] transition-colors"
                />
                <span className="text-sm font-medium text-gray-400 group-hover:text-[#F15A24] transition-colors">
                  Back to {course.title}
                </span>
              </Link>
            </div>
          </div>

          {/* 6. Right Sidebar */}
          <Feedback />
        </div>
      </main>
    </div>
  );
};

export default CourseBooking;
