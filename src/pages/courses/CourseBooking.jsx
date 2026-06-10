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
  ChevronLeft,
  CalendarDays,
  PoundSterling,
} from "lucide-react";
import courseService from "../../api/services/courseService";
import courseLocationService from "../../api/services/courseLocationService";
import BookingSkeleton from "../../components/ui/BookingSkeleton";
import Loader from "../../components/ui/Loader";
import Feedback from "../../components/ui/Feedback";

const fmtDate = (d) =>
  d
    ? new Date(d).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
    : null;

const CourseBooking = () => {
  const navigate = useNavigate();
  const { courseId: paramCourseId } = useParams();
  const [searchParams] = useSearchParams();

  const courseIdFromUrl = paramCourseId || searchParams.get("courseid");

  const [course, setCourse] = useState(null);
  const [courseLocations, setCourseLocations] = useState([]);
  const [isLoadingCourse, setIsLoadingCourse] = useState(true);
  const [isLoadingLocations, setIsLoadingLocations] = useState(true);

  const [searchLocation, setSearchLocation] = useState(
    searchParams.get("postcode") || "",
  );
  const [filter, setFilter] = useState("Closest");
  const [loadingStep, setLoadingStep] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchInputRef = React.useRef(null);

  // Fetch course
  useEffect(() => {
    if (!courseIdFromUrl) { setIsLoadingCourse(false); return; }
    courseService.getCourseById(courseIdFromUrl)
      .then((res) => setCourse(res.data.data))
      .catch(() => { })
      .finally(() => setIsLoadingCourse(false));
  }, [courseIdFromUrl]);

  // Fetch linked locations
  useEffect(() => {
    if (!courseIdFromUrl) { setIsLoadingLocations(false); return; }
    courseLocationService.getByCourse(courseIdFromUrl)
      .then((res) => setCourseLocations(res.data.data || []))
      .catch(() => setCourseLocations([]))
      .finally(() => setIsLoadingLocations(false));
  }, [courseIdFromUrl]);

  useEffect(() => {
    if (loadingStep > 0) window.scrollTo(0, 0);
  }, [loadingStep]);

  // Active linked locations with a populated locationId object
  const linkedLocations = React.useMemo(
    () =>
      courseLocations.filter(
        (link) => link.locationId && typeof link.locationId === "object",
      ),
    [courseLocations],
  );

  // Suggestions shown in the dropdown (filter by typed text)
  const filteredSuggestions = React.useMemo(() => {
    if (!searchLocation.trim()) return linkedLocations;
    const q = searchLocation.toLowerCase();
    return linkedLocations.filter(
      (link) =>
        link.locationId.name?.toLowerCase().includes(q) ||
        link.locationId.city?.toLowerCase().includes(q) ||
        link.locationId.postcode?.toLowerCase().includes(q) ||
        link.locationId.addressLine1?.toLowerCase().includes(q),
    );
  }, [linkedLocations, searchLocation]);

  const sortMap = { Closest: "distance", Cheapest: "price", Earliest: "date" };

  const handleSearch = (locationText) => {
    const loc = locationText || searchLocation;
    if (!loc) return;
    setLoadingStep(1);
    setTimeout(() => setLoadingStep(2), 1200);
    setTimeout(() => setLoadingStep(3), 2400);
    setTimeout(() => {
      navigate(
        `/booking/results?courseid=${course._id}&postcode=${encodeURIComponent(loc)}&sortby=${sortMap[filter] ?? "distance"}&view=all`,
      );
    }, 3600);
  };

  const selectLocation = (link) => {
    const loc = link.locationId;
    const searchTerm = loc.postcode || loc.city || loc.name;
    setSearchLocation(searchTerm);
    setShowSuggestions(false);
    handleSearch(searchTerm);
  };

  if (isLoadingCourse) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader text="Loading course information..." />
      </div>
    );
  }

  if (!course) return <Navigate to="/courses" replace />;

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
    return <BookingSkeleton currentStep={steps[loadingStep - 1]} />;
  }

  return (
    <div className="bg-[#F8FAFC] min-h-screen mt-5">
      <main className="max-w-300 mx-auto px-4 md:px-6 py-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-[13px] text-gray-400 mb-8 overflow-x-auto no-scrollbar">
          <Link to="/" className="hover:text-gray-600">Home</Link>
          <ChevronRight size={14} />
          <Link to="/courses" className="hover:text-gray-600">Courses</Link>
          <ChevronRight size={14} />
          <Link to={`/course/${course._id}`} className="hover:text-gray-600">{course.title}</Link>
          <ChevronRight size={14} />
          <span className="text-[#F15A24] font-medium">Book</span>
        </nav>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#1C1C1C] mb-2">
          {course.title}
        </h1>
        <p className="text-[#64748B] mb-10 text-lg">
          Search for training centres near you and choose the date and location that best suits your schedule.
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar — Sort filters */}
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
                    className={`flex items-center justify-between px-5 py-4 rounded-2xl border-2 transition-all duration-300 group ${isActive
                      ? "border-[#F15A24] bg-[#F15A24]/5 shadow-sm"
                      : "border-gray-100 bg-white hover:border-gray-200"
                      }`}
                  >
                    <span className={`text-[15px] font-bold ${isActive ? "text-[#F15A24]" : "text-gray-600"}`}>
                      {option}
                    </span>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${isActive ? "border-[#F15A24] bg-[#F15A24]" : "border-gray-200"}`}>
                      {isActive && <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-8 p-4 rounded-2xl bg-gray-50 border border-dashed border-gray-200">
              <p className="text-[13px] text-gray-500 leading-relaxed">
                <button
                  className="text-[#F15A24] font-bold hover:underline"
                  onClick={() => searchInputRef.current?.focus()}
                >Add your postcode</button>{" "}
                to unlock distance-based filters.
              </p>
            </div>
          </aside>

          {/* Center Content */}
          <div className="flex-1 space-y-6">
            {/* Search Card */}
            <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
              <h3 className="font-bold text-[#1C1C1C] mb-5">Your Location</h3>
              <div className="flex gap-4" onClick={() => setShowSuggestions(false)}>
                <div className="relative flex-1" onClick={(e) => e.stopPropagation()}>
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={20} />
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Enter postcode, city or address"
                    className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl outline-none focus:border-[#F15A24] transition-colors"
                    value={searchLocation}
                    onChange={(e) => { setSearchLocation(e.target.value); setShowSuggestions(true); }}
                    onFocus={() => setShowSuggestions(true)}
                    onKeyDown={(e) => { if (e.key === "Enter") { setShowSuggestions(false); handleSearch(); } }}
                  />
                  {showSuggestions && filteredSuggestions.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl border border-gray-100 shadow-xl z-10 py-2 max-h-72 overflow-y-auto">
                      {filteredSuggestions.map((link) => (
                        <div
                          key={link._id}
                          onMouseDown={() => selectLocation(link)}
                          className="px-4 py-3 hover:bg-[#FFF5F1] cursor-pointer border-b border-gray-50 last:border-0 flex items-center gap-3"
                        >
                          <MapPin size={14} className="text-[#F15A24] shrink-0" />
                          <div>
                            <p className="text-sm font-semibold text-[#1C1C1C]">{link.locationId.name}</p>
                            <p className="text-xs text-gray-400">{[link.locationId.city, link.locationId.postcode].filter(Boolean).join(" · ")}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <button
                  onClick={() => { setShowSuggestions(false); handleSearch(); }}
                  className="bg-[#F15A24] text-white px-8 py-3.5 rounded-xl font-bold hover:brightness-110 transition-all shadow-md shadow-[#F15A24]/10"
                >
                  Search
                </button>
              </div>
            </div>

            {/* Locations Card */}
            <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-[#1C1C1C]">Available Locations</h3>
                <span className="text-[12px] text-gray-400 font-medium">
                  {isLoadingLocations ? "Loading..." : `${linkedLocations.length} venue${linkedLocations.length !== 1 ? "s" : ""}`}
                </span>
              </div>

              {isLoadingLocations ? (
                <div className="flex items-center justify-center py-10">
                  <div className="w-6 h-6 rounded-full border-[3px] border-orange-200 border-t-[#F15A24] animate-spin" />
                </div>
              ) : linkedLocations.length === 0 ? (
                <div className="text-center py-10 text-gray-400">
                  <MapPin size={32} className="mx-auto mb-3 opacity-30" />
                  <p className="text-sm font-medium">No locations available for this course yet.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* "All" tile */}
                  <button
                    onClick={() => handleSearch(searchLocation || linkedLocations[0]?.locationId?.city || "")}
                    className="flex items-center gap-3 bg-[#FFF5F1] text-[#F15A24] px-5 py-4 rounded-2xl text-sm font-bold border-2 border-[#F15A24]/20 hover:border-[#F15A24]/50 transition-all"
                  >
                    <MapPin size={16} />
                    All Locations
                  </button>

                  {linkedLocations.map((link) => {
                    const loc = link.locationId;
                    const upcomingDates = (link.dates || []).filter(
                      (d) => d.startDate && new Date(d.startDate) >= new Date(),
                    );
                    const nextDate = upcomingDates[0];

                    return (
                      <button
                        key={link._id}
                        onClick={() => selectLocation(link)}
                        className="flex flex-col items-start gap-2 bg-white border border-gray-100 hover:border-[#F15A24]/30 hover:bg-[#FFF5F1]/50 px-5 py-4 rounded-2xl text-left transition-all group shadow-sm"
                      >
                        <p className="text-[13px] font-bold text-[#1C1C1C] group-hover:text-[#F15A24] transition-colors leading-tight">
                          {loc.name}
                        </p>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Back link */}
            <div className="flex justify-center pt-8">
              <Link to={`/course/${course._id}`} className="flex items-center gap-2 group">
                <ChevronLeft size={16} className="text-gray-300 group-hover:text-[#F15A24] transition-colors" />
                <span className="text-sm font-medium text-gray-400 group-hover:text-[#F15A24] transition-colors">
                  Back to {course.title}
                </span>
              </Link>
            </div>
          </div>

          {/* Right Sidebar */}
          <Feedback />
        </div>
      </main>
    </div>
  );
};

export default CourseBooking;
