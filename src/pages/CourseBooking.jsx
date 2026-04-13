import React, { useState, useEffect } from "react";
import { useParams, Link, Navigate, useNavigate, useSearchParams } from "react-router-dom";
import {
  Search,
  MessageCircle,
  ChevronRight,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Phone,
  ArrowLeft,
  ChevronLeft
} from "lucide-react";
import { courses } from "../data/courseData";
import SearchModal from "../components/shared/SearchModal";

const CourseBooking = () => {
  const navigate = useNavigate();
  const { courseId: paramCourseId } = useParams();
  const [searchParams] = useSearchParams();

  // Unified course ID retrieval: URL param first, then query param, then default
  const courseId = paramCourseId || searchParams.get("courseid") || "door-supervisor";
  const course = courses[courseId];

  const [searchLocation, setSearchLocation] = useState(searchParams.get("postcode") || "");
  const [filter, setFilter] = useState("Closest");
  const [loadingStep, setLoadingStep] = useState(0); // 0: not loading, 1-3: steps
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

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
      navigate(`/booking/results?courseid=${courseId}&postcode=${loc}&sortby=distance&view=all`);
    }, 3600);
  };

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  const locations = [
    "London Central", "Manchester", "Birmingham", "Leeds",
    "Bristol", "Liverpool", "Glasgow", "Edinburgh"
  ];

  if (loadingStep > 0) {
    const steps = [
      {
        title: `Searching across thousands of courses near ${searchLocation || 'you'}`,
        subtitle: "We're checking all available venues and dates",
        progress: 33
      },
      {
        title: "Preparing the best results...",
        subtitle: "Checking available seats and best prices",
        progress: 66
      },
      {
        title: "Nearly done...",
        subtitle: "Listing the best choices first",
        progress: 100
      }
    ];
    const currentStep = steps[loadingStep - 1];

    return (
      <div className="bg-[#F1F3F5] min-h-screen pt-[120px] font-sans p-4">
        <div className="w-full max-w-[800px] mx-auto flex gap-6 items-start">
          {/* Skeleton Sidebar - fixed small width as per image */}
          <div className="w-[180px] bg-white rounded-lg p-5 space-y-4 hidden md:block opacity-40">
            <div className="h-4 bg-gray-200 rounded w-2/3 mb-2" />
            <div className="h-8 bg-gray-100 rounded w-full" />
            <div className="h-8 bg-gray-100 rounded w-full" />
            <div className="h-8 bg-gray-100 rounded w-full" />
          </div>

          <div className="flex-1 space-y-6">
            {/* Progress Card */}
            <div className="bg-white rounded-lg p-8 shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-gray-100">
              {/* Progress Bar Container */}
              <div className="w-full h-[6px] bg-gray-100 rounded-full mb-8 overflow-hidden">
                <div
                  className="h-full bg-[#F15A24] transition-all duration-700 ease-out"
                  style={{ width: `${currentStep.progress}%` }}
                />
              </div>

              <div className="flex items-start gap-6">
                <div className="relative">
                  <div className="w-16 h-10 bg-gray-100 rounded border border-gray-200 flex items-end justify-end p-1">
                    <div className="w-8 h-1 bg-gray-200 rounded-full mb-1 mr-1" />
                  </div>
                  <Search className="absolute -bottom-2 -left-2 text-black bg-white rounded-full p-0.5" size={24} strokeWidth={3} />
                </div>
                <div>
                  <h2 className="text-[22px] font-bold text-[#1a1a1a] mb-1">{currentStep.title}</h2>
                  <p className="text-gray-500 text-[15px]">{currentStep.subtitle}</p>
                </div>
              </div>
            </div>

            {/* Skeleton Results */}
            {[1, 2].map(i => (
              <div key={i} className="bg-white rounded-lg p-8 opacity-40 shadow-sm border border-gray-50 ring-1 ring-black/5">
                <div className="flex justify-between items-start mb-6">
                  <div className="space-y-3 flex-1">
                    <div className="h-4 bg-gray-200 rounded w-1/4" />
                    <div className="h-8 bg-gray-100 rounded w-1/2" />
                    <div className="h-4 bg-gray-100 rounded w-2/3" />
                  </div>
                  <div className="space-y-3 w-32">
                    <div className="h-4 bg-gray-200 rounded w-full ml-auto" />
                    <div className="h-8 bg-gray-100 rounded w-full ml-auto" />
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 bg-gray-100 rounded-md flex-1" />
                  <div className="h-10 bg-gray-200 rounded-md w-32" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F8FAFC] min-h-screen mt-28 font-sans">
      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        initialCourse={course.title}
        initialLocation={searchLocation}
      />
      {/* 1. Specialized Booking Header */}
      <header className="bg-white border-b border-gray-200 py-3 fixed top-28 w-full shadow-md z-50 px-4 md:px-0">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 md:px-6">
          <div className="flex-1 max-w-[600px] relative ml-4 md:ml-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
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
            <span className="text-[#F15A24] cursor-pointer hover:underline font-bold">Chat with us</span>
          </div>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-4 md:px-6 py-8">
        {/* 2. Breadcrumbs */}
        <nav className="flex items-center gap-2 text-[13px] text-gray-400 mb-8 overflow-x-auto no-scrollbar">
          <Link to="/" className="hover:text-gray-600">Home</Link>
          <ChevronRight size={14} />
          <Link to="/courses" className="hover:text-gray-600">Courses</Link>
          <ChevronRight size={14} />
          <Link to={`/course/${courseId}`} className="hover:text-gray-600">{course.title}</Link>
          <ChevronRight size={14} />
          <span className="text-[#F15A24] font-medium">Book</span>
        </nav>

        {/* 3. Title & Subtitle */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#1C1C1C] mb-2">
          {course.title}
        </h1>
        <p className="text-[#64748B] mb-10 text-lg">
          We have several <span className="text-[#F15A24] cursor-pointer hover:underline">locations nationwide</span>. Enter your location to find a course near you.
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* 4. Left Sidebar (Filters) */}
          <aside className="w-full lg:w-[200px] shrink-0">
            <h3 className="text-xs font-bold text-[#1C1C1C] tracking-wider uppercase mb-5">FILTERS</h3>
            <div className="space-y-4">
              {["Closest", "Cheapest", "Earliest"].map((option) => (
                <label key={option} className="flex items-center gap-4 cursor-pointer group">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${filter === option ? 'border-[#F15A24]' : 'border-gray-200 group-hover:border-gray-300'}`}>
                    {filter === option && <div className="w-2.5 h-2.5 rounded-full bg-[#F15A24]" />}
                  </div>
                  <input
                    type="radio"
                    name="filter"
                    className="hidden"
                    checked={filter === option}
                    onChange={() => setFilter(option)}
                  />
                  <span className={`text-[15px] font-bold ${filter === option ? 'text-[#F15A24]' : 'text-gray-600'}`}>{option}</span>
                </label>
              ))}
            </div>
            <p className="text-[13px] text-[#F15A24] mt-8 leading-relaxed">
              <span className="cursor-pointer hover:underline">Add your postcode</span> to enable filters
            </p>
          </aside>

          {/* 5. Center Content (Search & Locations) */}
          <div className="flex-1 space-y-6">
            {/* Search Card */}
            <div className="bg-white rounded-[24px] border border-gray-100 p-8 shadow-sm">
              <h3 className="font-bold text-[#1C1C1C] mb-5">Your Location</h3>
              <div className="flex gap-4">
                <div className="relative flex-1">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={20} />
                  <input
                    type="text"
                    placeholder="Enter postcode or address"
                    className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl outline-none focus:border-[#F15A24] transition-colors"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    onFocus={() => setShowSuggestions(true)}
                  />
                  {showSuggestions && searchLocation === "" && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl border border-gray-100 shadow-xl z-10 py-2 max-h-[300px] overflow-y-auto">
                      {locations.map((loc) => (
                        <div
                          key={loc}
                          onClick={() => {
                            setSearchLocation(loc);
                            setShowSuggestions(false);
                            handleSearch(loc);
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
            <div className="bg-white rounded-[24px] border border-gray-100 p-8 shadow-sm">
              <div className="flex justify-between items-center mb-8">
                <h3 className="font-bold text-[#1C1C1C]">Locations</h3>
                <span className="text-[12px] text-gray-400 font-medium">Click to select</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4">
                <div className="bg-[#FFF5F1] text-[#F15A24] px-4 py-3 rounded-lg text-sm font-bold flex items-center justify-start cursor-pointer w-fit pr-20">
                  All
                </div>
                {locations.map((loc) => (
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
              {/* Add remaining locations manually to match grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 mt-0">
                <div className="text-gray-700 hover:text-[#F15A24] px-4 py-3 text-sm font-medium cursor-pointer transition-colors">London Ilford-CP</div>
                <div className="text-gray-700 hover:text-[#F15A24] px-4 py-3 text-sm font-medium cursor-pointer transition-colors">Manchester</div>
                <div className="text-gray-700 hover:text-[#F15A24] px-4 py-3 text-sm font-medium cursor-pointer transition-colors">Birmingham</div>
                <div className="text-gray-700 hover:text-[#F15A24] px-4 py-3 text-sm font-medium cursor-pointer transition-colors">Leeds</div>
                <div className="text-gray-700 hover:text-[#F15A24] px-4 py-3 text-sm font-medium cursor-pointer transition-colors">Bristol</div>
                <div className="text-gray-700 hover:text-[#F15A24] px-4 py-3 text-sm font-medium cursor-pointer transition-colors">Liverpool</div>
                <div className="text-gray-700 hover:text-[#F15A24] px-4 py-3 text-sm font-medium cursor-pointer transition-colors">Glasgow</div>
                <div className="text-gray-700 hover:text-[#F15A24] px-4 py-3 text-sm font-medium cursor-pointer transition-colors">Edinburgh</div>
              </div>
            </div>

            {/* Back link */}
            <div className="flex justify-center pt-8">
              <Link to={`/course/${courseId}`} className="flex items-center gap-2 group">
                <ChevronLeft size={16} className="text-gray-300 group-hover:text-[#F15A24] transition-colors" />
                <span className="text-sm font-medium text-gray-400 group-hover:text-[#F15A24] transition-colors">
                  Back to {course.title}
                </span>
              </Link>
            </div>
          </div>

          {/* 6. Right Sidebar */}
          <aside className="w-full lg:w-[280px] space-y-4">
            {/* Guarantee Box */}
            <div className="bg-[#F15A24] rounded-[18px] p-6 text-white relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-[17px] font-bold leading-tight mb-4">
                  Zero Risk With<br />Training Guarantee
                </h3>
                <button className="bg-white text-[#1C1C1C] text-[13px] font-extrabold px-5 py-2.5 rounded-lg active:scale-95 transition-all">
                  More details
                </button>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 p-2.5 rounded-2xl backdrop-blur-sm shadow-xl">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <CheckCircle2 className="text-[#F15A24]" size={24} strokeWidth={3} />
                </div>
              </div>
            </div>

            {/* Testimonial Box */}
            <div className="bg-white rounded-[18px] border border-gray-100 p-6 shadow-sm">
              <p className="text-[13px] leading-relaxed text-gray-700 mb-6">
                Fantastic course. <span className="text-[#F15A24] font-bold">The instructor was very knowledgeable</span> and he spoke in a way that everyone could understand. If you didn't understand what he meant, he would find a way to explain it. The instructor made sure you read the <span className="text-[#F15A24] font-bold">helpful handbook.</span> It was quite an intensive course but very comprehensive.
              </p>
              <div className="mb-4">
                <span className="font-bold text-[14px]">- Henry Oparaji</span>
              </div>
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[#1C1C1C]" />
                <div className="w-2 h-2 rounded-full bg-gray-200" />
                <div className="w-2 h-2 rounded-full bg-gray-200" />
              </div>
            </div>

            {/* Reviews Box */}
            <div className="bg-white rounded-[18px] border border-gray-100 p-6 shadow-sm space-y-6">
              <div className="text-center">
                <p className="text-[11px] text-gray-400 italic mb-3 font-medium tracking-wide">Consistently rated 5-stars</p>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-xs font-bold text-[#1C1C1C]">Excellent</span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-[#00b67a] flex items-center justify-center">
                        <span className="text-white text-[10px]">★</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-0.5 ml-1">
                    <span className="text-[#00b67a] text-[10px] uppercase font-extrabold tracking-tighter">Trustpilot</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <div className="flex items-center justify-center gap-1.5 mb-2">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-4 h-4">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                  </div>
                  <span className="font-bold text-[14px] text-[#1C1C1C]">Google Reviews</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-3xl font-extrabold text-[#1C1C1C]">4.9</span>
                    <div className="flex text-[#ffb800]">
                      {[...Array(5)].map((_, i) => <span key={i} className="text-[18px]">★</span>)}
                    </div>
                  </div>
                  <span className="text-[11px] text-gray-400 font-medium tracking-wide">9,511 reviews</span>
                </div>
              </div>
            </div>

            {/* Help Box */}
            <div className="bg-white rounded-[18px] border border-gray-100 p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#FFF5F1] flex items-center justify-center">
                  <Phone size={18} className="text-[#F15A24] fill-current" />
                </div>
                <h3 className="font-bold text-[#1C1C1C] text-[15px]">Need Help?</h3>
              </div>
              <p className="text-[15px] font-extrabold text-[#F15A24] cursor-pointer hover:underline">
                Call 0204 572 5828
              </p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default CourseBooking;
