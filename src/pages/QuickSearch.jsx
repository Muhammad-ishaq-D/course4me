import React, { useState, useRef, useEffect } from "react";
import { Search, MapPin, ArrowRight, Sparkles } from "lucide-react";

import CourseCard from "../components/ui/CourseCard";
import LicenseCard from "../components/ui/LicenseCard";
import CareerCards from "../components/ui/CareerCards";
import Loader from "../components/ui/Loader";
import NoResults from "../components/ui/NoResults";
import EmptyStateQuickSearch from "../components/ui/EmptyStateQuickSearch";
import CustomDropdown from "../components/ui/CustomDropdown";
import CenterSearchCard from "../components/ui/CenterSearchCard";

// ================= API SERVICES =================
import courseService from "../api/services/courseService";
import licenseService from "../api/services/licenseService";
import careerService from "../api/services/careerService";
import locationService from "../api/services/locationService";

/** Only include centers that match the search keyword and/or location field */
const centerMatchesFilters = (center, loc, searchTerm, locationTerm) => {
  if (!center.name?.trim()) return false;

  const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const matches = (text, term) =>
    term && new RegExp(escape(term), "i").test(text || "");

  if (locationTerm && !matches(loc.location, locationTerm)) {
    return false;
  }

  if (!searchTerm) {
    return true;
  }

  return (
    matches(center.name, searchTerm) ||
    matches(center.address, searchTerm) ||
    matches(center.postcode, searchTerm) ||
    matches(loc.location, searchTerm)
  );
};

const QuickSearch = () => {
  // ================= STATES =================

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("all");

  const [hasSearched, setHasSearched] = useState(false);
  const [filteredResults, setFilteredResults] = useState([]);

  const [loading, setLoading] = useState(false);

  // ================= LOCATION SUGGESTIONS =================

  const [showLocationSuggestions, setShowLocationSuggestions] = useState(false);

  const [locationSuggestions, setLocationSuggestions] = useState([]);

  // ================= REFS =================

  const resultsRef = useRef(null);

  const locationRef = useRef(null);

  // ================= LOCATION FILTER =================

  useEffect(() => {
    let cancelled = false;

    const fetchLocationSuggestions = async () => {
      if (location.trim() === "") {
        setLocationSuggestions([]);
        setShowLocationSuggestions(false);
        return;
      }

      try {
        const res = await locationService.searchLocations({
          location: location.trim(),
        });
        if (cancelled) return;

        const suggestions = [
          ...new Set((res.data || []).map((item) => item.location)),
        ].filter((loc) =>
          loc.toLowerCase().includes(location.toLowerCase()),
        );

        setLocationSuggestions(suggestions);
        setShowLocationSuggestions(suggestions.length > 0);
      } catch (error) {
        console.error("Failed to fetch location suggestions:", error);
        if (!cancelled) {
          setLocationSuggestions([]);
          setShowLocationSuggestions(false);
        }
      }
    };

    const debounce = setTimeout(fetchLocationSuggestions, 250);
    return () => {
      cancelled = true;
      clearTimeout(debounce);
    };
  }, [location]);

  // ================= CLOSE DROPDOWN =================

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (locationRef.current && !locationRef.current.contains(event.target)) {
        setShowLocationSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // ================= SEARCH FUNCTION =================

  const handleSearch = async () => {
    setLoading(true);
    setHasSearched(true);

    // SCROLL TO RESULTS
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);

    try {
      const params = {
        status: "Published",
      };

      if (search.trim()) {
        params.search = search;
      }
      if (location.trim()) {
        params.location = location;
      }

      let fetchedCourses = [];
      let fetchedLicenses = [];
      let fetchedCareers = [];
      let fetchedCenters = [];

      // Only fetch the requested type (or all if type is 'all')
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
        promises.push(
          licenseService.getAllLicenses(params).then((res) => {
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
        promises.push(
          careerService.getAllCareers(params).then((res) => {
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
      const centerSearchTerm = search.trim();
      const centerLocationTerm = location.trim();
      const shouldFetchCenters =
        (type === "all" || type === "location") &&
        (centerSearchTerm || centerLocationTerm);

      if (shouldFetchCenters) {
        promises.push(
          locationService
            .searchLocations({
              search: centerSearchTerm,
              location: centerLocationTerm,
            })
            .then(async (res) => {
              const locations = res.data || [];
              const locationIds = [...new Set(locations.map((loc) => loc._id))];
              const coursesByLocation = {};

              await Promise.all(
                locationIds.map(async (locationId) => {
                  try {
                    const coursesRes =
                      await locationService.getLocationCourses(locationId);
                    coursesByLocation[locationId] = coursesRes.data || [];
                  } catch {
                    coursesByLocation[locationId] = [];
                  }
                }),
              );

              const countCoursesForCenter = (loc, centerId) => {
                const courses = coursesByLocation[loc._id] || [];
                const hasCenterLinks = courses.some((course) => course.centerId);

                if (hasCenterLinks) {
                  return courses.filter(
                    (course) => String(course.centerId) === String(centerId),
                  ).length;
                }

                const namedCenters = (loc.centers || []).filter((c) =>
                  c.name?.trim(),
                );
                if (namedCenters.length === 1) return courses.length;
                return 0;
              };

              fetchedCenters = locations.flatMap((loc) =>
                (loc.centers || [])
                  .filter((center) =>
                    centerMatchesFilters(
                      center,
                      loc,
                      centerSearchTerm,
                      centerLocationTerm,
                    ),
                  )
                  .map((center) => {
                    const centerPayload = {
                      ...center,
                      locationId: loc._id,
                      locationName: loc.location,
                    };

                    return {
                      id: center._id,
                      type: "location",
                      title: center.name,
                      location: loc.location,
                      image: center.image,
                      courseCount: countCoursesForCenter(loc, center._id),
                      center: centerPayload,
                    };
                  }),
              );
            }),
        );
      }

      await Promise.all(promises);

      setFilteredResults([
        ...fetchedCourses,
        ...fetchedLicenses,
        ...fetchedCareers,
        ...fetchedCenters,
      ]);
    } catch (error) {
      console.error("Error fetching search results:", error);
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

            <h1 className="mt-6 text-4xl md:text-6xl font-black text-gray-900 leading-tight">
              Find The Right
              <span className="text-[#F15A24]"> Course</span>,
              <br />
              Career & License Faster
            </h1>

            <p className="mt-6 text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Explore thousands of professional courses, certifications,
              licenses, careers and nearby learning opportunities.
            </p>
          </div>

          {/* ================= SEARCH BOX ================= */}

          <div className="mt-10 bg-white border border-gray-100 shadow-2xl shadow-gray-100 rounded-[32px] p-5 md:p-7">
            {/* TOP */}

            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Quick Search</h2>

              <p className="text-gray-500 mt-1 text-sm">
                Search everything from one intelligent search system
              </p>
            </div>

            {/* SEARCH BAR */}

            <div className="grid grid-cols-1 xl:grid-cols-[220px_1fr_1fr_170px] gap-4">
              {/* TYPE */}

              <div className="relative">
                <label className="text-sm font-semibold text-gray-700 mb-2 block">
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
                    { label: "Centers", value: "location" },
                  ]}
                />
              </div>

              {/* SEARCH */}

              <div className="relative">
                <label className="text-sm font-semibold text-gray-700 mb-2 block">
                  Search Keyword
                </label>

                <Search
                  size={18}
                  className="absolute left-5 top-[55px] -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search courses, licenses, careers..."
                  className="w-full h-[60px] rounded-2xl border border-gray-200 focus:border-[#F15A24] bg-[#FAFAFC] pl-14 pr-4 outline-none"
                />
              </div>

              {/* LOCATION */}

              <div className="relative" ref={locationRef}>
                <label className="text-sm font-semibold text-gray-700 mb-2 block">
                  Location
                </label>

                <MapPin
                  size={18}
                  className="absolute left-5 top-[55px] -translate-y-1/2 text-gray-400 z-10"
                />

                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  onFocus={() => {
                    if (locationSuggestions.length > 0) {
                      setShowLocationSuggestions(true);
                    }
                  }}
                  placeholder="Enter city or location"
                  className="w-full h-[60px] rounded-2xl border focus:border-[#F15A24] border-gray-200 bg-[#FAFAFC] pl-14 pr-4 outline-none"
                />

                {/* ================= SUGGESTIONS ================= */}

                {showLocationSuggestions && locationSuggestions.length > 0 && (
                  <div className="absolute top-[105%] left-0 w-full bg-white border border-gray-200 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] overflow-hidden z-50">
                    {locationSuggestions.map((loc, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => {
                          setLocation(loc);
                          setLocationSuggestions([]);
                          setTimeout(() => {
                            setShowLocationSuggestions(false);
                          }, 0);
                        }}
                        className="w-full px-5 py-4 flex items-center gap-3 hover:bg-[#FFF4EF] transition-all text-left border-b last:border-b-0 border-gray-100"
                      >
                        <div className="w-10 h-10 rounded-full bg-[#FFF1EB] flex items-center justify-center">
                          <MapPin size={16} className="text-[#F15A24]" />
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-gray-800">
                            {loc}
                          </h4>
                        </div>
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
              {/* TOP */}

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

              {/* GRID */}

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredResults.map((item, index) => {
                  // ================= COURSE =================

                  if (item.type === "course") {
                    return (
                      <div key={index} className="relative">
                        <div className="absolute top-5 right-5 z-20">
                          <div className="px-4 py-1.5 rounded-full bg-[#F15A24] text-white text-[11px] font-bold uppercase tracking-wide shadow-lg">
                            Course
                          </div>
                        </div>

                        <CourseCard
                          id={item.id}
                          image={item.image}
                          title={item.title}
                          description={item.description}
                          badge={item.badge}
                          price={item.price}
                          date={item.date}
                          category={item.category}
                          duration={item.duration}
                          isPopular={item.isPopular}
                          isOnline={item.isOnline}
                        />
                      </div>
                    );
                  }

                  // ================= LICENSE =================

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

                  // ================= CAREER =================

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

                  // ================= TRAINING CENTER =================

                  return (
                    <CenterSearchCard key={item.id || index} item={item} />
                  );
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
