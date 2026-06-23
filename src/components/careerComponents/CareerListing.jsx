import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Search,
  MapPin,
  Shield,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  HeartPulse,
  ShieldCheck,
  BriefcaseBusiness,
  ChevronDown,
  Filter,
  X,
  Check,
} from "lucide-react";
import { careersData } from "../../data/careerData";
import CareerSidebar from "../ui/CareerSidebar";
import CareerCards from "../ui/CareerCards";
import EmptyState from "../ui/EmptyState";
import Loader from "../ui/Loader";
import { NavLink, useNavigate } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "All Careers",
    icon: LayoutGrid,
    color: "from-[#F8510C] to-[#FF7A45]",
  },

  {
    id: 2,
    name: "SIA Training",
    icon: Shield,
    color: "from-[#FF2D55] to-[#FF5B7F]",
  },

  {
    id: 3,
    name: "First Aid",
    icon: HeartPulse,
    color: "from-[#22C55E] to-[#4ADE80]",
  },

  {
    id: 4,
    name: "Health & Safety",
    icon: ShieldCheck,
    color: "from-[#0A84FF] to-[#4DA3FF]",
  },

  {
    id: 5,
    name: "Specialist",
    icon: BriefcaseBusiness,
    color: "from-[#5856D6] to-[#7B79FF]",
  },
];

const CareerListing = () => {
  const [careerSearch, setCareerSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedCareer, setSelectedCareer] = useState(null);

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const sortOptions = [
    { label: "Sort by: All", value: "all" },
    { label: "Sort by: Popular", value: "popular" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All Careers");

  const [sortBy, setSortBy] = useState("all");

  const [loading, setLoading] = useState(true);

  const [showFilters, setShowFilters] = useState(false);

  const mainSectionRef = useRef(null);

  const [currentPage, setCurrentPage] = useState(1);
  const careersPerPage = 6;

  const filteredCareers = careersData.filter((career) => {
    const categoryMatch =
      selectedCategory === "All Careers"
        ? true
        : career.category === selectedCategory;

    const popularMatch = sortBy === "popular" ? career.popular === true : true;

    return categoryMatch && popularMatch;
  });

  const totalPages = Math.ceil(filteredCareers.length / careersPerPage);
  const startIndex = (currentPage - 1) * careersPerPage;

  const currentCareers = filteredCareers.slice(
    startIndex,
    startIndex + careersPerPage,
  );

  const topSkills = useMemo(() => {
    const skillCounts = {};
    let maxCount = 0;

    const popularCareers = careersData.filter((c) => c.popular);

    popularCareers.forEach((career) => {
      if (career.personalityTraits) {
        career.personalityTraits.forEach((skill) => {
          skillCounts[skill] = (skillCounts[skill] || 0) + 1;
          if (skillCounts[skill] > maxCount) {
            maxCount = skillCounts[skill];
          }
        });
      }
    });

    return Object.entries(skillCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([skill, count]) => {
        const percentage = Math.round(60 + (count / maxCount) * 35);
        return [skill, `${percentage}%`];
      });
  }, []);

  useEffect(() => {
    setCurrentPage(1);
    setLoading(true);

    if (mainSectionRef.current) {
      mainSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    const timer = setTimeout(() => {
      setLoading(false);
      setShowFilters(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [selectedCategory, sortBy]);

  const handlePageChange = (page) => {
    setCurrentPage(page);

    setTimeout(() => {
      mainSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  const careerSuggestions = useMemo(() => {
    if (!careerSearch.trim()) return [];

    return careersData
      .filter((career) =>
        career.title.toLowerCase().includes(careerSearch.toLowerCase()),
      )
      .slice(0, 6);
  }, [careerSearch]);

  const handleCareerSearch = () => {
    if (!selectedCareer) return;

    navigate(`/careers/careerdetails/${selectedCareer.id}`);
  };

  return (
    <div className="bg-[#F7F8FA] max-w-8xl  min-h-screen">
      <div className="max-w-350 mx-auto px-4 md:px-6 py-6">
        {/* ======================================================
                    HERO SECTION
====================================================== */}
        <div className="mb-5 relative z-40">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-base mb-5">
            <NavLink
              to="/"
              className="text-[#98A2B3] cursor-pointer font-medium"
            >
              Home
            </NavLink>

            <span className="text-[#D0D5DD]">/</span>

            <span className="text-[#111827]  font-bold">Careers</span>
          </div>

          {/* Hero Box */}
          <div className="relative overflow-visible rounded-[32px] border border-[#FFE2D6] bg-gradient-to-br from-[#FFF7F3] via-white to-[#FFF1EB] p-5 md:p-7 shadow-sm">
            {/* Glow */}
            <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-[#F8510C]/10 blur-3xl rounded-full pointer-events-none" />

            <div className="relative z-10">
              {/* Top Content */}
              <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-7">
                {/* Left */}
                <div className="max-w-3xl">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF1EB] border border-[#FFD7C7] mb-5">
                    <div className="w-2 h-2 rounded-full bg-[#F8510C]" />

                    <span className="text-[12px] font-black tracking-[0.12em] uppercase text-[#F8510C]">
                      Security Career Platform
                    </span>
                  </div>

                  {/* Title */}
                  <h1 className="text-[34px] md:text-[48px] leading-[1.05] font-black tracking-tight text-[#111827]">
                    Explore Security
                    <span className="block text-[#F8510C]">
                      Careers Near You
                    </span>
                  </h1>

                  {/* Description */}
                  <p className="mt-3 text-base md:text-lg leading-relaxed text-[#667085] max-w-2xl">
                    Discover the right career path for you. Get trained, get
                    licensed and build your future in the security industry.
                  </p>

                  {/* Stats */}
                  <div className="flex flex-wrap items-center gap-6 mt-7">
                    <div>
                      <h3 className="text-xl md:text-2xl font-black text-[#111827]">
                        120+
                      </h3>

                      <p className="text-sm md:text-base text-[#667085] mt-1">
                        Career Opportunities
                      </p>
                    </div>

                    <div className="w-px h-10 bg-[#E4E7EC]" />

                    <div>
                      <h3 className="text-xl md:text-2xl font-black text-[#111827]">
                        45K+
                      </h3>

                      <p className="text-sm md:text-base text-[#667085] mt-1">
                        Students Trained
                      </p>
                    </div>

                    <div className="w-px h-10 bg-[#E4E7EC]" />

                    <div>
                      <h3 className="text-xl md:text-2xl font-black text-[#111827]">
                        98%
                      </h3>

                      <p className="text-sm md:text-base text-[#667085] mt-1">
                        Success Rate
                      </p>
                    </div>
                  </div>
                </div>

                {/* Search Box */}
                <div className="w-full xl:w-110">
                  <div className="bg-white rounded-[28px] border border-white shadow-[0_20px_50px_rgba(0,0,0,0.06)] md:px-5 py-5 px-2 py-3 ">
                    <h2 className="text-3xl font-black text-[#111827]">
                      Quick Search
                    </h2>

                    <p className="text-base text-[#667085] mt-2">
                      Find the perfect career instantly.
                    </p>

                    {/* Search Inputs */}
                    <div className="mt-5 space-y-4">
                      {/* Career Search */}
                      <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#F8510C]" />

                        <input
                          type="text"
                          placeholder="Career title or keyword"
                          value={careerSearch}
                          onChange={(e) => {
                            setCareerSearch(e.target.value);
                            setSelectedCareer(null);
                            setShowSuggestions(true);
                          }}
                          onFocus={() => {
                            if (careerSearch.trim()) {
                              setShowSuggestions(true);
                            }
                          }}
                          className="w-full h-13 rounded-2xl border border-[#EAECF0] bg-[#FAFAFA] pl-12 pr-12 outline-none focus:border-[#F8510C] focus:ring-4 focus:ring-[#F8510C]/10 transition-all"
                        />

                        {careerSearch && (
                          <button
                            type="button"
                            onClick={() => setCareerSearch("")}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                          >
                            <X size={18} />
                          </button>
                        )}
                        {showSuggestions && careerSuggestions.length > 0 && (
                          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-2xl shadow-xl z-[999] max-h-[280px] overflow-y-auto overflow-x-hidden custom-scrollbar">
                            {careerSuggestions.map((career) => (
                              <button
                                key={career.id}
                                type="button"
                                onClick={() => {
                                  setCareerSearch(career.title);
                                  setSelectedCareer(career);
                                  setShowSuggestions(false);
                                }}
                                className="w-full px-4 py-3 text-left hover:bg-[#FFF4EF] border-b border-gray-100 last:border-b-0"
                              >
                                <div>
                                  <h4 className="font-semibold text-gray-800">
                                    {career.title}
                                  </h4>

                                  <p className="text-sm text-gray-500">
                                    {career.category}
                                  </p>
                                </div>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Button */}
                      <button
                        onClick={handleCareerSearch}
                        disabled={!selectedCareer}
                        className="w-full cursor-pointer px-3 py-4 rounded-2xl bg-[#F8510C] hover:bg-[#E04809] transition-all text-white font-bold shadow-lg shadow-[#F8510C]/20"
                      >
                        Search Careers
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[280px_1fr_320px] gap-3 overflow-visible">
          {/* ==================SIDEBAR====================== */}
          <div className="hidden relative xl:block">
            <CareerSidebar
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              careersData={careersData}
            />
          </div>
          {/* =========================================
          MOBILE FILTER SIDEBAR
========================================= */}
          {showFilters && (
            <>
              {/* Overlay */}
              <div
                onClick={() => setShowFilters(false)}
                className="fixed inset-0  backdrop-blur-sm z-998 xl:hidden"
              />

              {/* Sidebar */}
              <div className="fixed top-0 left-0 h-full w-77.5 bg-white z-1000 shadow-2xl overflow-y-auto xl:hidden">
                {/* Header */}
                <div className="sticky top-0 bg-white border-b border-gray-100 px-5 py-4 flex items-center justify-between">
                  <h2 className="text-lg font-black text-[#111827]">Filters</h2>

                  <button
                    onClick={() => setShowFilters(false)}
                    className="w-10 h-10 rounded-xl bg-[#FFF1EB] flex items-center justify-center"
                  >
                    <X className="w-5 h-5 text-[#F8510C]" />
                  </button>
                </div>

                {/* Sidebar */}
                <div className="p-4">
                  <CareerSidebar
                    categories={categories}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    careersData={careersData}
                  />
                </div>
              </div>
            </>
          )}
          {/* ======================================================
                    MAIN CONTENT
          ====================================================== */}

          <div ref={mainSectionRef} className="relative z-20 overflow-visible">
            {/* ==================HEADER=================== */}
            <div className="bg-white rounded-[24px] border border-gray-100 px-5 py-4 mb-5 shadow-sm sticky top-0 z-999 backdrop-blur-xl bg-white/95 overflow-visible">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 md:gap-4">
                {/* Left Content */}
                <div className="flex items-center gap-4">
                  <div>
                    <h2 className="text-2xl font-black text-[#111827] leading-none">
                      {selectedCategory}
                    </h2>
                    <p className="text-base text-[#667085] mt-2 font-medium">
                      Showing{" "}
                      <span className="text-[#F8510C] font-bold">
                        {filteredCareers.length}
                      </span>{" "}
                      available careers
                    </p>
                  </div>
                </div>
                {/* Right Side */}
                <div className="flex items-center gap-3">
                  {/* Mobile Filter Button */}
                  <button
                    onClick={() => setShowFilters(true)}
                    className="xl:hidden py-3 px-5 rounded-2xl text-base border border-gray-200 bg-white flex items-center gap-2 font-semibold text-[#111827]"
                  >
                    <Filter className="w-4 h-4 text-[#F8510C]" /> Filters
                  </button>
                  {/* Popular Badge */}
                  {sortBy === "popular" && (
                    <div className="hidden sm:flex items-center gap-2 px-4 h-11 rounded-2xl bg-[#FFF1EB] border border-[#FFD9CC]">
                      <div className="w-2 h-2 rounded-full bg-[#F8510C]" />
                      <span className="text-sm font-bold text-[#F8510C]">
                        Popular Careers
                      </span>
                    </div>
                  )}
                  {/* ================= CUSTOM DROPDOWN ================= */}
                  <div className="relative">
                    {/* Button */}
                    <button
                      onClick={() => setOpen(!open)}
                      className=" w-[140px] md:w-[170px] h-11 px-2 md:px-4 rounded-2xl border-2 border-[#e46612] bg-white flex items-center justify-between text-[#111827]  text-sm font-bold shadow-sm hover:shadow-md transition-all "
                    >
                      {sortOptions.find((item) => item.value === sortBy)?.label}
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                      />
                    </button>
                    {/* Dropdown */}
                    {open && (
                      <div className=" absolute top-13 right-0 w-[150px] md:w-[170px] rounded-2xl bg-white border border-gray-200 shadow-[0_20px_45px_rgba(0,0,0,0.12)] overflow-hidden z-[999999] ">
                        {sortOptions.map((item) => (
                          <button
                            key={item.value}
                            onClick={() => {
                              setSortBy(item.value);
                              setOpen(false);
                            }}
                            className={` w-full px-5 py-3 flex items-center justify-between text-[15px] font-semibold transition-all ${sortBy === item.value ? "bg-[#F8510C] text-white" : "text-[#111827] hover:bg-[#FFF1EB]"} `}
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* Cards */}
            {loading ? (
              <Loader text={`Loading Careers...`} />
            ) : filteredCareers.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 relative z-10 gap-3">
                <CareerCards filteredCareers={currentCareers} />
              </div>
            ) : (
              <EmptyState text={selectedCategory} />
            )}
            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-10">
              <button
                className="w-10 h-10 rounded-xl  border border-gray-200 bg-white flex items-center justify-center cursor-pointer"
                onClick={() => {
                  if (currentPage > 1) {
                    handlePageChange(currentPage - 1);
                  }
                }}
                disabled={currentPage === 1}
              >
                <ChevronLeft />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-10 h-10 rounded-xl cursor-pointer text-base font-semibold ${
                      page === currentPage
                        ? "bg-[#F8510C] text-white"
                        : "bg-white border border-gray-200 text-gray-700"
                    }`}
                  >
                    {page}
                  </button>
                ),
              )}

              <button
                className="w-10 h-10 rounded-xl cursor-pointer border border-gray-200 bg-white flex items-center justify-center"
                onClick={() => {
                  if (currentPage < totalPages) {
                    handlePageChange(currentPage + 1);
                  }
                }}
                disabled={currentPage === totalPages}
              >
                <ChevronRight />
              </button>
            </div>
          </div>
          {/* ======================================================
                    RIGHT SIDEBAR
          ====================================================== */}
          <div className="space-y-5 lg:sticky lg:top-5 self-start">
            {/* Skills */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Top In-Demand Skills
              </h2>

              <div className="space-y-5">
                {topSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-base font-medium text-gray-700">
                        {skill[0]}
                      </span>

                      <span className="text-base text-gray-500">
                        {skill[1]}
                      </span>
                    </div>

                    <div className="w-full h-2 rounded-full bg-gray-100 overflow-hidden">
                      <div
                        className="h-full bg-[#F8510C] rounded-full"
                        style={{ width: skill[1] }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Help Card */}
            {/* <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900">
                Need Help Choosing?
              </h2>

              <p className="text-base text-gray-500 mt-2 leading-relaxed">
                Our career advisors are here to help you find the right path.
              </p>

              <button className="mt-5 h-11 px-5 rounded-xl bg-[#F8510C] hover:bg-[#c04b19] transition-all text-white font-semibold">
                Talk to an Advisor
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerListing;
