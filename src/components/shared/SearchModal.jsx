import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Search, MapPin, X, Loader2, BookOpen } from "lucide-react";
import { courses } from "../../data/courseData";

const SearchModal = ({ isOpen, onClose, initialCourse = "", initialLocation = "" }) => {
  const navigate = useNavigate();
  const [courseQuery, setCourseQuery] = useState(initialCourse);
  const [locationQuery, setLocationQuery] = useState(initialLocation);
  
  const [isCourseDropdownOpen, setIsCourseDropdownOpen] = useState(false);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);

  const courseList = Object.values(courses);
  const steps = [
    {
      title: `Searching across thousands of courses near ${locationQuery || 'you'}`,
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

  const locations = [
    "London Central", "Manchester", "Birmingham", "Leeds",
    "Bristol", "Liverpool", "Glasgow", "Edinburgh"
  ];

  const handleSearch = () => {
    if (!courseQuery) return;

    // Find the course ID by matching the name, or default to door-supervisor
    const matchedCourse = courseList.find(c => c.title.toLowerCase() === courseQuery.toLowerCase());
    const courseId = matchedCourse ? matchedCourse.id : "door-supervisor";
    const postCodeObj = locationQuery || "Andover";

    setIsLoading(true);
    setLoadingStep(0);

    // 3-step loading simulation
    setTimeout(() => setLoadingStep(1), 800);
    setTimeout(() => setLoadingStep(2), 1600);
    
    setTimeout(() => {
      setIsLoading(false);
      onClose();
      navigate(`/booking/course?courseid=${courseId}&postcode=${encodeURIComponent(postCodeObj)}`);
    }, 2400);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Background Overlay */}
      <div 
        className="fixed inset-0 bg-black/60 z-100 transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="fixed top-0 left-0 w-full bg-[#1C1C1C] z-101 shadow-2xl animate-in slide-in-from-top-4 duration-300">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-8">
          <div className="flex justify-between items-center mb-6 text-white">
            <h2 className="text-xl font-bold tracking-tight">Refine Your Search</h2>
            <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <X size={20} />
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            
            {/* Course Input with Dropdown */}
            <div className="flex-1 relative flex flex-col gap-2">
              <label className="text-xs font-bold text-white uppercase tracking-widest">Find your perfect course</label>
              <div className="relative">
                <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  value={courseQuery}
                  onChange={(e) => {
                    setCourseQuery(e.target.value);
                    setIsCourseDropdownOpen(true);
                  }}
                  onFocus={() => setIsCourseDropdownOpen(true)}
                  className="w-full pl-12 pr-10 py-3.5 bg-white rounded-xl text-[#1C1C1C] font-semibold outline-none focus:ring-2 focus:ring-[#F15A24] transition-all"
                  placeholder="e.g. Door Supervisor Training"
                />
                {courseQuery && (
                  <button 
                    onClick={() => {
                        setCourseQuery("");
                        setIsCourseDropdownOpen(true);
                    }} 
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              {/* Course Dropdown */}
              {isCourseDropdownOpen && (
                <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-xl shadow-xl overflow-hidden z-20 border border-gray-100">
                  <div className="bg-[#FFF5F1] px-5 py-3 border-b border-[#F15A24]/10 flex justify-between items-center">
                    <span className="font-extrabold text-[#F15A24] flex items-center gap-2">
                      SECURITY
                    </span>
                    <span className="text-xs font-bold text-[#F15A24] bg-white px-2 py-1 rounded-md border border-[#F15A24]/20">
                      {courseList.length} COURSES
                    </span>
                  </div>
                  <div className="max-h-[300px] overflow-y-auto">
                    {courseList.filter(c => c.title.toLowerCase().includes(courseQuery.toLowerCase())).map((course, idx) => (
                      <div 
                        key={course.id}
                        onClick={() => {
                          setCourseQuery(course.title);
                          setIsCourseDropdownOpen(false);
                        }}
                        className="px-5 py-3 hover:bg-gray-50 cursor-pointer text-sm font-semibold text-[#2f3a47] flex items-center gap-3 border-b border-gray-50 last:border-b-0"
                      >
                        <span className="text-gray-300">-</span> {course.title}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Location Input */}
            <div className="flex-1 relative flex flex-col gap-2">
              <label className="text-xs font-bold text-white uppercase tracking-widest">Your location</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  value={locationQuery}
                  onChange={(e) => {
                    setLocationQuery(e.target.value);
                    setIsLocationDropdownOpen(true);
                  }}
                  onFocus={() => setIsLocationDropdownOpen(true)}
                  className="w-full pl-12 pr-4 py-3.5 bg-white rounded-xl text-[#1C1C1C] font-semibold outline-none focus:ring-2 focus:ring-[#F15A24] transition-all"
                  placeholder="Enter postcode or city"
                />

                {/* Location Dropdown */}
                {isLocationDropdownOpen && (
                  <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-xl shadow-xl overflow-hidden z-20 border border-gray-100 max-h-[300px] overflow-y-auto">
                    {locations
                      .filter(loc => loc.toLowerCase().includes(locationQuery.toLowerCase()))
                      .map((loc, idx) => (
                        <div 
                          key={idx}
                          onClick={() => {
                            setLocationQuery(loc);
                            setIsLocationDropdownOpen(false);
                          }}
                          className="px-5 py-3 hover:bg-gray-50 cursor-pointer text-sm font-semibold text-[#2f3a47] flex items-center gap-3 border-b border-gray-50 last:border-b-0"
                        >
                          <MapPin size={16} className="text-gray-400" />
                          {loc}
                        </div>
                      ))
                    }
                  </div>
                )}
              </div>
            </div>

            {/* Search Button */}
            <div className="flex items-end mt-4 md:mt-0">
              <button 
                onClick={handleSearch}
                disabled={isLoading}
                className="w-full md:w-auto h-[52px] px-10 bg-[#F15A24] text-white font-extrabold rounded-xl hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-[#F15A24]/20 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Loading...
                  </>
                ) : (
                  "Search"
                )}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* 3-Step Loading Overlay */}
      {isLoading && steps[loadingStep] && (
        <div className="fixed inset-0 bg-[#F1F3F5] z-100 font-sans p-4 overflow-y-auto">
          <div className="pt-[280px] w-full max-w-[800px] mx-auto flex gap-6 items-start">
            {/* Skeleton Sidebar */}
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
                    style={{ width: `${steps[loadingStep].progress}%` }}
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
                    <h2 className="text-[22px] font-bold text-[#1a1a1a] mb-1">{steps[loadingStep].title}</h2>
                    <p className="text-gray-500 text-[15px]">{steps[loadingStep].subtitle}</p>
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
      )}
    </>
  );
};

export default SearchModal;
