import React, { useState, useRef, useEffect, useMemo } from "react";
import { Search, MapPin, ArrowRight, Sparkles, X } from "lucide-react";

import CourseCard from "../components/ui/CourseCard";
import LicenseCard from "../components/ui/LicenseCard";
import CareerCards from "../components/ui/CareerCards";
import Loader from "../components/ui/Loader";
import NoResults from "../components/ui/NoResults";
import EmptyStateQuickSearch from "../components/ui/EmptyStateQuickSearch";
import CustomDropdown from "../components/ui/CustomDropdown";

import courseService from "../api/services/courseService";
import licenseService from "../api/services/licenseService";
import careerService from "../api/services/careerService";
import courseLocationService from "../api/services/courseLocationService";

const QuickSearch = () => {
  // ================= STATES =================
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("all");

  const [hasSearched, setHasSearched] = useState(false);
  const [filteredResults, setFilteredResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // All active course-location links — loaded once, used for location suggestions + filtering
  const [allCourseLinks, setAllCourseLinks] = useState([]);

  // ================= LOCATION SUGGESTIONS =================
  const [showLocationSuggestions, setShowLocationSuggestions] = useState(false);

  // ================= KEYWORD SUGGESTIONS =================
  const [showKeywordSuggestions, setShowKeywordSuggestions] = useState(false);
  const [keywordSuggestions, setKeywordSuggestions] = useState([]);
  const [keywordLoading, setKeywordLoading] = useState(false);

  // ================= REFS =================
  const resultsRef = useRef(null);
  const locationRef = useRef(null);
  const searchRef = useRef(null);
  const keywordInputRef = useRef(null);

  // =====================================================================
  // LOAD ALL COURSE-LOCATION LINKS ONCE (used for location suggestions)
  // =====================================================================
  useEffect(() => {
    courseLocationService
      .getAll()
      .then((res) => setAllCourseLinks(res?.data?.data || []))
      .catch(() => {});
  }, []);

  // =====================================================================
  // LOCATION SUGGESTIONS — derived from course-location links (new model)
  // =====================================================================
  const locationSuggestions = useMemo(() => {
    if (!location.trim()) return [];
    const term = location.trim().toLowerCase();
    const seen = new Set();
    const results = [];
    allCourseLinks.forEach((link) => {
      const loc = link.locationId;
      if (!loc || typeof loc !== "object") return;
      const matches =
        loc.name?.toLowerCase().includes(term) ||
        loc.city?.toLowerCase().includes(term) ||
        loc.postcode?.toLowerCase().includes(term) ||
        loc.addressLine1?.toLowerCase().includes(term);
      if (!matches) return;
      const label = [loc.city, loc.postcode].filter(Boolean).join(", ");
      if (!label || seen.has(label)) return;
      seen.add(label);
      results.push({
        label,
        value: [loc.city, loc.postcode].filter(Boolean).join(", "),
      });
    });
    return results.slice(0, 8);
  }, [location, allCourseLinks]);

  // Show/hide dropdown reactively
  useEffect(() => {
    setShowLocationSuggestions(
      locationSuggestions.length > 0 && location.trim().length > 0,
    );
  }, [locationSuggestions, location]);

  // =====================================================================
  // KEYWORD SUGGESTIONS — courses, licenses, careers
  // =====================================================================
  useEffect(() => {
    let cancelled = false;

    const fetchKeywordSuggestions = async () => {
      if (!search.trim()) {
        setKeywordSuggestions([]);
        setKeywordLoading(false);
        setShowKeywordSuggestions(false);
        return;
      }

      setKeywordLoading(true);
      setShowKeywordSuggestions(true);

      try {
        const params = { status: "Published", search: search.trim() };
        const suggestions = [];
        const promises = [];

        if (type === "all" || type === "course") {
          promises.push(
            courseService.getAllCourses(params).then((res) => {
              (res.data?.data || []).forEach((c) =>
                suggestions.push({ title: c.title, type: "Course" }),
              );
            }),
          );
        }
        if (type === "all" || type === "license") {
          promises.push(
            licenseService.getAllLicenses(params).then((res) => {
              (res.data?.data || []).forEach((l) =>
                suggestions.push({ title: l.title, type: "License" }),
              );
            }),
          );
        }
        if (type === "all" || type === "career") {
          promises.push(
            careerService.getAllCareers?.(params).then((res) => {
              (res.data?.data || []).forEach((c) =>
                suggestions.push({ title: c.title, type: "Career" }),
              );
            }),
          );
        }

        await Promise.all(promises.map((p) => p?.catch(() => {})));
        if (cancelled) return;

        const seen = new Set();
        const unique = [];
        suggestions.forEach((item) => {
          if (!seen.has(item.title)) {
            seen.add(item.title);
            unique.push(item);
          }
        });

        setKeywordSuggestions(unique.slice(0, 8));
        setShowKeywordSuggestions(unique.length > 0);
        setKeywordLoading(false);
      } catch {
        if (!cancelled) {
          setKeywordSuggestions([]);
          setShowKeywordSuggestions(false);
          setKeywordLoading(false);
        }
      }
    };

    const debounce = setTimeout(fetchKeywordSuggestions, 300);
    return () => {
      cancelled = true;
      clearTimeout(debounce);
    };
  }, [search, type]);

  // ================= CLOSE DROPDOWNS ON OUTSIDE CLICK =================
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (locationRef.current && !locationRef.current.contains(e.target)) {
        setShowLocationSuggestions(false);
      }
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowKeywordSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // =====================================================================
  // SEARCH — fetch courses/licenses/careers, then filter by location
  // =====================================================================
  const handleSearch = async () => {
    setLoading(true);
    setHasSearched(true);

    setTimeout(() => {
      resultsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);

    try {
      const params = { status: "Published" };
      if (search.trim()) params.search = search.trim();

      let fetchedCourses = [];
      let fetchedLicenses = [];
      let fetchedCareers = [];

      const promises = [];

      if (type === "all" || type === "course") {
        promises.push(
          courseService.getAllCourses(params).then((res) => {
            fetchedCourses = (res.data?.data || []).map((course) => ({
              ...course,
              id: course._id,
              type: "course",
              badge: course.isPopular ? "Popular" : "",
              image:
                course.image ||
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
            }));
          }),
        );
      }

      if (type === "all" || type === "license") {
        const licenseParams = { status: "Published" };
        if (search.trim()) licenseParams.search = search.trim();
        promises.push(
          licenseService.getAllLicenses(licenseParams).then((res) => {
            fetchedLicenses = (res.data?.data || []).map((licence) => ({
              ...licence,
              id: licence._id,
              type: "license",
              thumbnail:
                licence.thumbnail ||
                "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
            }));
          }),
        );
      }

      if (type === "all" || type === "career") {
        const careerParams = { status: "Published" };
        if (search.trim()) careerParams.search = search.trim();
        promises.push(
          careerService.getAllCareers?.(careerParams).then((res) => {
            fetchedCareers = (res.data?.data || []).map((career) => ({
              ...career,
              id: career._id,
              type: "career",
              image:
                career.image ||
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
            }));
          }),
        );
      }

      await Promise.all(promises.map((p) => p?.catch(() => {})));

      // Filter courses by location using course-location links (new model)
      if (location.trim() && fetchedCourses.length > 0) {
        const term = location.trim().toLowerCase();
        const matchingCourseIds = new Set(
          allCourseLinks
            .filter((link) => {
              const loc = link.locationId;
              if (!loc || typeof loc !== "object") return false;
              return (
                loc.name?.toLowerCase().includes(term) ||
                loc.city?.toLowerCase().includes(term) ||
                loc.postcode?.toLowerCase().includes(term) ||
                loc.addressLine1?.toLowerCase().includes(term)
              );
            })
            .map((link) => String(link.courseId?._id || link.courseId))
            .filter(Boolean),
        );
        fetchedCourses = fetchedCourses.filter((c) =>
          matchingCourseIds.has(String(c._id || c.id)),
        );
      }

      setFilteredResults([
        ...fetchedCourses,
        ...fetchedLicenses,
        ...fetchedCareers,
      ]);
    } catch (error) {
      console.error("Search error:", error);
      setFilteredResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFC] overflow-hidden relative">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-[#F15A24]/10 blur-[120px] rounded-full" />
      <div className="absolute top-20 right-0 w-[300px] h-[300px] bg-orange-200/20 blur-[120px] rounded-full" />

      {/* ================= MAIN ================= */}
      <section className="relative px-4 sm:px-6 lg:px-10 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          {/* ================= HERO ================= */}
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FFF3EE] text-[#F15A24] text-sm font-semibold border border-[#F15A24]/10">
              <Sparkles size={16} />
              Smart Discovery Platform
            </span>

            <h1 className="mt-6 text-4xl md:text-6xl font-black text-gray-900 leading-[1.05]">
              Find The Right
              <span className="text-[#F15A24]"> Course</span>,
              <br />
              Career & License Faster
            </h1>

            <p className="mt-3 text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Explore thousands of professional courses, certifications,
              licenses, careers and nearby learning opportunities.
            </p>
          </div>

          {/* ================= SEARCH BOX ================= */}
          <div className="mt-10 bg-white border border-gray-100 shadow-2xl shadow-gray-100 rounded-[32px] p-5 md:p-7">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-900">Quick Search</h2>
              <p className="text-gray-500 mt-1 text-base">
                Search everything from one intelligent search system
              </p>
            </div>

            {/* ================= SEARCH FIELDS ================= */}
            <div className="grid grid-cols-1 xl:grid-cols-[220px_1fr_1fr_170px] gap-4">
              {/* TYPE */}
              <div className="relative">
                <label className="text-base font-semibold text-gray-700 mb-2 block">
                  Search Type
                </label>
                <CustomDropdown
                  value={type}
                  onChange={setType}
                  placeholder="Select Types"
                  options={[
                    { label: "Courses", value: "course" },
                    { label: "Licenses", value: "license" },
                    { label: "Careers", value: "career" },
                  ]}
                />
              </div>

              {/* KEYWORD */}
              <div className="relative" ref={searchRef}>
                <label className="text-base font-semibold text-gray-700 mb-2 block">
                  Search Keyword
                </label>
                <Search
                  size={18}
                  className="absolute left-5 top-15 -translate-y-1/2 text-gray-400 z-10"
                />
                <input
                  ref={keywordInputRef}
                  type="text"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);

                    if (e.target.value.trim()) {
                      setShowKeywordSuggestions(true);
                    } else {
                      setShowKeywordSuggestions(false);
                    }
                  }}
                  onFocus={() => {
                    if (search.trim()) {
                      setShowKeywordSuggestions(true);
                    }
                  }}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  placeholder="Search courses, licenses, careers..."
                  className="w-full py-4 rounded-2xl border border-gray-200 focus:border-[#F15A24] bg-[#FAFAFC] pl-14 pr-10 outline-none"
                />
                {search && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearch("");
                      setShowKeywordSuggestions(false);
                    }}
                    className="absolute right-4 top-15 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer z-20"
                  >
                    <X size={18} />
                  </button>
                )}

                {showKeywordSuggestions && (
                  <div className="absolute top-[105%] left-0 w-full bg-white border border-gray-200 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] overflow-hidden z-50">
                    {keywordLoading ? (
                      <div className="px-5 py-4 flex items-center gap-3">
                        <div className="w-4 h-4 border-2 border-[#F15A24] border-t-transparent rounded-full animate-spin"></div>
                        <span className="text-sm text-gray-500">
                          Searching...
                        </span>
                      </div>
                    ) : (
                      keywordSuggestions.map((item, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => {
                            setSearch(item.title);
                            setShowKeywordSuggestions(false);

                            keywordInputRef.current?.blur();
                          }}
                          className="w-full px-5 py-4 flex items-center justify-between hover:bg-[#FFF4EF] transition-all text-left border-b last:border-b-0 border-gray-100 group"
                        >
                          <div className="flex items-center gap-3">
                            <h4 className="text-base font-medium text-gray-800">
                              {item.title}
                            </h4>
                          </div>
                          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider bg-gray-50 px-2 py-1 rounded-md">
                            {item.type}
                          </span>
                        </button>
                      ))
                    )}
                  </div>
                )}
              </div>

              {/* LOCATION */}
              <div className="relative" ref={locationRef}>
                <label className="text-base font-semibold text-gray-700 mb-2 block">
                  Location
                </label>
                <MapPin
                  size={18}
                  className="absolute left-5 top-15 -translate-y-1/2 text-gray-400 z-10"
                />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  onFocus={() =>
                    locationSuggestions.length > 0 &&
                    setShowLocationSuggestions(true)
                  }
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  placeholder="Town, city or postcode..."
                  className="w-full py-4 rounded-2xl border border-gray-200 focus:border-[#F15A24] bg-[#FAFAFC] pl-14 pr-12 outline-none"
                />
                {location && (
                  <button
                    type="button"
                    onClick={() => {
                      setLocation("");
                      setShowLocationSuggestions(false);
                    }}
                    className="absolute right-4 top-15 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer z-20"
                  >
                    <X size={18} />
                  </button>
                )}

                {showLocationSuggestions && locationSuggestions.length > 0 && (
                  <div className="absolute top-[105%] left-0 w-full bg-white border border-gray-200 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] overflow-hidden z-50">
                    {locationSuggestions.map((item, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => {
                          setShowLocationSuggestions(false);
                          setLocation(item.value);
                        }}
                        className="w-full px-5 py-4 flex items-center gap-3 hover:bg-[#FFF4EF] transition-all text-left border-b last:border-b-0 border-gray-100"
                      >
                        <div className="p-3 rounded-full bg-[#FFF1EB] flex items-center justify-center shrink-0">
                          <MapPin size={16} className="text-[#F15A24]" />
                        </div>
                        <p className="text-base font-medium text-gray-800 line-clamp-2">
                          {item.label}
                        </p>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* BUTTON */}
              <div className="flex items-end">
                <button
                  onClick={handleSearch}
                  className="w-full h-[60px] rounded-2xl bg-[#F15A24] hover:bg-[#E14D17] transition-all text-white font-semibold flex items-center justify-center gap-2"
                >
                  Search Now
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* ================= LOADER ================= */}
          {loading && (
            <div
              ref={resultsRef}
              className="flex items-center justify-center py-32"
            >
              <Loader text="Finding the best opportunities for you.." />
            </div>
          )}

          {/* ================= EMPTY STATE ================= */}
          {!hasSearched && (
            <div ref={resultsRef}>
              <EmptyStateQuickSearch />
            </div>
          )}

          {/* ================= NO RESULTS ================= */}
          {!loading && hasSearched && filteredResults.length === 0 && (
            <div ref={resultsRef}>
              <NoResults />
            </div>
          )}

          {/* ================= RESULTS ================= */}
          {!loading && hasSearched && filteredResults.length > 0 && (
            <div ref={resultsRef} className="mt-16">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
                <div>
                  <h2 className="text-4xl font-black text-[#111827]">
                    Results in{" "}
                    <span className="text-[#F15A24] capitalize">
                      {type === "all" ? "All Types" : type}
                    </span>
                  </h2>
                  <p className="text-gray-500 mt-2">
                    {filteredResults.length} results found
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredResults.map((item, index) => {
                  if (item.type === "course") {
                    return (
                      <div key={index} className="relative">
                        <div className="absolute top-5 right-5 z-20">
                          <div className="px-4 py-1.5 rounded-full bg-[#F15A24] text-white text-[11px] font-bold uppercase tracking-wide shadow-lg">
                            Course
                          </div>
                        </div>
                        {console.log(item)}
                        <CourseCard
                          id={item.id}
                          image={item.image}
                          title={item.title}
                          description={item.fullDescription}
                          badge={item.badge}
                          price={item.pricing.basePrice}
                          date={item.date}
                          category={item.category}
                          duration={item.duration}
                          isPopular={item.isPopular}
                          isOnline={item.isOnline}
                        />
                      </div>
                    );
                  }

                  if (item.type === "license") {
                    return (
                      <div key={index} className="relative">
                        <div className="absolute top-5 right-5 z-20">
                          <div className="px-4 py-1.5 rounded-full bg-[#0F172A] text-white text-[11px] font-bold uppercase tracking-wide shadow-lg">
                            Licence
                          </div>
                        </div>
                        <LicenseCard item={item} index={index} />
                      </div>
                    );
                  }

                  if (item.type === "career") {
                    return (
                      <div key={index} className="relative">
                        <div className="absolute top-5 right-5 z-20">
                          <div className="px-4 py-1.5 rounded-full bg-[#7C3AED] text-white text-[11px] font-bold uppercase tracking-wide shadow-lg">
                            Career
                          </div>
                        </div>
                        <CareerCards filteredCareers={[item]} />
                      </div>
                    );
                  }

                  return null;
                })}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default QuickSearch;
