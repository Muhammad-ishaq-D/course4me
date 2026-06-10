import React, { useState, useEffect, useMemo } from "react";
import {
  Search,
  MapPin,
  Filter,
  Plus,
  Minus,
  LocateFixed,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import courseLocationService from "../../api/services/courseLocationService";

const BACKEND_URL = import.meta.env.VITE_API_URL?.replace("/api", "") || "";

const getImageSrc = (thumbnail) => {
  if (!thumbnail) return null;
  if (thumbnail.startsWith("http")) return thumbnail;
  return `${BACKEND_URL}/${thumbnail.replace(/\\/g, "/")}`;
};

const ITEMS_PER_PAGE = 6;

const LocationSearch = () => {
  const navigate = useNavigate();

  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [allLinks, setAllLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeLinkId, setActiveLinkId] = useState(null);
  const [page, setPage] = useState(1);

  // Fetch all active course-location links for published courses
  useEffect(() => {
    courseLocationService
      .getAll()
      .then((res) => setAllLinks(res?.data?.data || []))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  // Filter links client-side by location name/city/postcode/address
  const filteredLinks = useMemo(() => {
    if (!search.trim()) return [];
    const term = search.trim().toLowerCase();
    return allLinks.filter((link) => {
      const loc = link.locationId;
      if (!loc || typeof loc !== "object") return false;
      return (
        loc.name?.toLowerCase().includes(term) ||
        loc.city?.toLowerCase().includes(term) ||
        loc.postcode?.toLowerCase().includes(term) ||
        loc.addressLine1?.toLowerCase().includes(term)
      );
    });
  }, [search, allLinks]);

  // Dropdown suggestions while typing
  const locationSuggestions = useMemo(() => {
    if (!searchInput.trim()) return [];
    const term = searchInput.trim().toLowerCase();
    const seen = new Set();
    const results = [];
    allLinks.forEach((link) => {
      const loc = link.locationId;
      if (!loc || typeof loc !== "object") return;
      const matches =
        loc.name?.toLowerCase().includes(term) ||
        loc.city?.toLowerCase().includes(term) ||
        loc.postcode?.toLowerCase().includes(term) ||
        loc.addressLine1?.toLowerCase().includes(term);
      if (!matches) return;
      const label = [loc.name, loc.city, loc.postcode].filter(Boolean).join(", ");
      if (!label || seen.has(label)) return;
      seen.add(label);
      const filterKey = loc.postcode || loc.city || loc.name || label;
      results.push({ label, filterKey });
    });
    return results.slice(0, 8);
  }, [searchInput, allLinks]);

  const totalPages = Math.ceil(filteredLinks.length / ITEMS_PER_PAGE);
  const paginated = filteredLinks.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const handleSearch = () => {
    setPage(1);
    setSearch(searchInput);
    setShowSuggestions(false);
  };

  return (
    <div className="min-h-screen bg-[#F4F7FB] py-6 px-4">
      <div className="max-w-7xl mx-auto">

        {/* =========================================================
              SEARCH SECTION
        ========================================================= */}
        <div className="relative mb-5">
          <div className="absolute inset-0 bg-linear-to-r from-orange-100/40 via-white to-orange-100/40 blur-3xl rounded-full pointer-events-none" />

          <div className="relative bg-white/90 backdrop-blur-xl border border-gray-200 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] px-5 py-5 overflow-visible z-999">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

              {/* Left */}
              <div>
                <h2 className="text-[26px] font-bold text-gray-900 leading-tight">
                  Find Courses Near You
                </h2>
                <p className="text-sm text-gray-500 mt-1 max-w-xl leading-relaxed">
                  Search by town, city, or postcode to discover available
                  training courses at your nearest location.
                </p>
              </div>

              {/* ================= SEARCH BAR ================= */}
              <div className="sticky top-0 z-50 lg:static bg-[#F4F7FB] py-3">
                <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 w-full md:w-auto">

                  {/* Search Input */}
                  <div className="relative flex-1 lg:w-[420px]">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-2xl bg-orange-50 flex items-center justify-center z-20">
                      <MapPin className="w-5 h-5 text-orange-500" />
                    </div>

                    <input
                      type="text"
                      placeholder="Search by town, city or postcode..."
                      value={searchInput}
                      onFocus={() => setShowSuggestions(true)}
                      onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
                      onChange={(e) => {
                        setSearchInput(e.target.value);
                        setShowSuggestions(true);
                      }}
                      onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                      className="w-full h-14 pl-16 pr-5 rounded-2xl border border-gray-200 bg-[#FAFBFD] focus:bg-white focus:border-orange-400 focus:ring-4 focus:ring-orange-100 outline-none transition-all text-[15px] font-medium text-gray-700 placeholder:text-gray-400"
                    />

                    {/* ===================== DROPDOWN ===================== */}
                    {showSuggestions && locationSuggestions.length > 0 && (
                      <div className="absolute top-full mt-3 w-full bg-white border border-gray-200 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] overflow-hidden z-50">
                        <div className="px-4 py-3 border-b border-gray-100">
                          <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                            Matching Locations
                          </p>
                        </div>
                        <div className="max-h-[280px] overflow-y-auto scrollbar-hide">
                          {locationSuggestions.map((item, i) => (
                            <button
                              key={i}
                              onMouseDown={() => {
                                setSearchInput(item.label);
                                setPage(1);
                                setSearch(item.filterKey);
                                setShowSuggestions(false);
                              }}
                              className="w-full flex items-center gap-3 px-4 py-4 hover:bg-orange-50 transition-all duration-200 text-left border-b border-gray-100 last:border-b-0"
                            >
                              <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center shrink-0">
                                <MapPin className="w-4 h-4 text-orange-500" />
                              </div>
                              <p className="text-sm font-medium text-gray-800 line-clamp-2">
                                {item.label}
                              </p>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Search Button */}
                  <button
                    onClick={handleSearch}
                    className="h-14 px-7 rounded-2xl bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold shadow-lg shadow-orange-200 transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap w-full md:w-auto"
                  >
                    <Search className="w-4 h-4" />
                    <span>Search</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
              CONTENT AREA
        ========================================================= */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-start">

          {/* =========================================================
                LEFT SIDE — COURSE CARDS
          ========================================================= */}
          <div className="bg-white border border-gray-200 rounded-3xl shadow-sm overflow-hidden">

            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Available Courses
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  {search ? (
                    <>
                      <span className="text-orange-500 font-semibold">
                        {loading ? "..." : filteredLinks.length}
                      </span>{" "}
                      {filteredLinks.length === 1 ? "course" : "courses"} found near &quot;{search}&quot;
                    </>
                  ) : (
                    "Search a location to see results"
                  )}
                </p>
              </div>

              <button className="h-12 px-5 rounded-2xl border border-gray-200 hover:bg-gray-50 transition-all flex items-center gap-2">
                <Filter className="w-4 h-4" />
                <span className="text-sm font-medium">Filters</span>
              </button>
            </div>

            {/* =========================================================
                  CARDS
            ========================================================= */}
            <div className="p-5 space-y-3">

              {/* Loading skeleton */}
              {loading && (
                <div className="py-20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-10 h-10 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin mx-auto" />
                    <p className="text-gray-500 mt-4 text-sm">Searching courses...</p>
                  </div>
                </div>
              )}

              {/* Course-location cards */}
              {!loading &&
                paginated.map((link) => {
                  const loc = link.locationId || {};
                  const course = link.courseId || {};
                  const address = [loc.name, loc.city, loc.postcode].filter(Boolean).join(", ");
                  const upcomingDates = (link.dates || [])
                    .filter((d) => d.startDate && new Date(d.startDate) >= new Date())
                    .sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
                  const nextDate = upcomingDates[0]?.startDate
                    ? new Date(upcomingDates[0].startDate).toLocaleDateString("en-GB", {
                        day: "numeric", month: "short", year: "numeric",
                      })
                    : null;
                  const price = link.price || course.pricing?.salePrice || course.pricing?.basePrice || 0;

                  return (
                    <div
                      key={link._id}
                      onMouseEnter={() => setActiveLinkId(link._id)}
                      onMouseLeave={() => setActiveLinkId(null)}
                      className={`group relative bg-white border rounded-[28px] p-3 transition-all duration-300 cursor-pointer overflow-hidden
                      ${
                        activeLinkId === link._id
                          ? "border-orange-300 shadow-[0_20px_60px_rgba(249,115,22,0.15)]"
                          : "border-gray-200 hover:border-orange-200 hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)]"
                      }`}
                    >
                      {/* Hover gradient */}
                      <div className="absolute inset-0 bg-linear-to-r from-orange-50/0 via-orange-50/40 to-orange-50/0 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />

                      <div className="relative flex flex-col sm:flex-row gap-4">

                        {/* Thumbnail */}
                        <div className="w-full sm:w-32 md:w-36 h-52 sm:h-32 md:h-28 rounded-3xl overflow-hidden shrink-0 bg-orange-50 flex items-center justify-center">
                          {getImageSrc(course.thumbnail) ? (
                            <img
                              src={getImageSrc(course.thumbnail)}
                              alt={course.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          ) : (
                            <BookOpen className="w-10 h-10 text-orange-300" />
                          )}
                        </div>

                        {/* Right content */}
                        <div className="flex-1 min-w-0 flex flex-col">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">

                            {/* Left info */}
                            <div className="flex-1 min-w-0">
                              {/* Category badge */}
                              {course.category && (
                                <span className="inline-block text-[11px] font-semibold px-3 py-1 rounded-full bg-orange-50 text-orange-600 mb-2">
                                  {course.category}
                                </span>
                              )}

                              {/* Title */}
                              <h3 className="text-[16px] sm:text-[18px] font-bold text-gray-900 leading-tight wrap-break-word line-clamp-2">
                                {course.title}
                              </h3>

                              {/* Location address */}
                              {address && (
                                <div className="flex items-center gap-2 mt-2">
                                  <div className="w-7 h-7 rounded-xl bg-orange-50 flex items-center justify-center shrink-0">
                                    <MapPin className="w-3.5 h-3.5 text-orange-500" />
                                  </div>
                                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-1">
                                    {address}
                                  </p>
                                </div>
                              )}

                              {/* Price & next date */}
                              <div className="flex flex-wrap items-center gap-3 mt-3">
                                <span className="text-lg font-black text-gray-900">
                                  £{price}
                                </span>
                                {nextDate && (
                                  <span className="text-sm text-orange-500 font-semibold">
                                    Next: {nextDate}
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* Actions */}
                            <div className="flex sm:flex-col items-center sm:items-end gap-2 shrink-0">
                              <button
                                onClick={() => navigate(`/booking/course?courseid=${course._id}`)}
                                className="h-10 px-5 rounded-2xl bg-linear-to-r from-orange-500 to-orange-600 text-white text-sm font-semibold hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-orange-200 whitespace-nowrap"
                              >
                                Book Now
                              </button>
                              <button
                                onClick={() => navigate(`/locations/locationdetails/${link._id}`)}
                                className="h-10 px-5 rounded-2xl border border-gray-200 hover:border-orange-200 hover:bg-orange-50 text-sm font-semibold flex items-center gap-1.5 transition-all duration-300 whitespace-nowrap"
                              >
                                Details
                                <ArrowRight className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

              {/* Empty state — no search entered yet */}
              {!loading && !search && (
                <div className="py-20 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-14 h-14 text-orange-200 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-700">
                      Search for a Location
                    </h3>
                    <p className="text-gray-400 mt-2 text-sm">
                      Enter a town, city, or postcode above to see available courses near you.
                    </p>
                  </div>
                </div>
              )}

              {/* Empty state — searched but no results */}
              {!loading && search && filteredLinks.length === 0 && (
                <div className="py-20 flex items-center justify-center">
                  <div className="text-center">
                    <GraduationCap className="w-14 h-14 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-800">
                      No Courses Found
                    </h3>
                    <p className="text-gray-500 mt-2">
                      No courses available at &quot;{search}&quot;. Try a different location or postcode.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* =========================================================
                  PAGINATION
            ========================================================= */}
            {!loading && filteredLinks.length > 0 && (
              <div className="border-t border-gray-100 p-5 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <p className="text-sm text-gray-500">
                  Showing {(page - 1) * ITEMS_PER_PAGE + 1}–
                  {Math.min(page * ITEMS_PER_PAGE, filteredLinks.length)} of{" "}
                  {filteredLinks.length} results
                </p>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="w-11 h-11 rounded-2xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition disabled:opacity-40"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <button
                      key={p}
                      onClick={() => setPage(p)}
                      className={`w-11 h-11 rounded-2xl font-semibold transition ${
                        p === page
                          ? "bg-orange-500 text-white"
                          : "border border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      {p}
                    </button>
                  ))}

                  <button
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className="w-11 h-11 rounded-2xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition disabled:opacity-40"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* =========================================================
                RIGHT SIDE — MAP
          ========================================================= */}
          <div className="sticky top-0">
            <div className="relative h-[88vh] rounded-3xl overflow-hidden border border-gray-200 shadow-sm bg-white">
              <iframe
                title="Google Map"
                src={`https://www.google.com/maps?q=${encodeURIComponent(search || "United Kingdom")}&output=embed`}
                loading="lazy"
                className="w-full h-full"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/5 to-transparent pointer-events-none" />

              {/* Map Controls */}
              <div className="absolute bottom-6 right-6 flex flex-col gap-3 z-30">
                <button className="w-14 h-14 rounded-2xl bg-white border border-gray-200 shadow-lg flex items-center justify-center hover:bg-gray-50 transition">
                  <LocateFixed className="w-5 h-5 text-gray-700" />
                </button>
                <button className="w-14 h-14 rounded-2xl bg-white border border-gray-200 shadow-lg flex items-center justify-center hover:bg-gray-50 transition">
                  <Plus className="w-5 h-5 text-gray-700" />
                </button>
                <button className="w-14 h-14 rounded-2xl bg-white border border-gray-200 shadow-lg flex items-center justify-center hover:bg-gray-50 transition">
                  <Minus className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSearch;
