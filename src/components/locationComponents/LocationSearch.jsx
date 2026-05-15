import React, { useMemo, useState } from "react";
import {
  Search,
  MapPin,
  Heart,
  Star,
  Filter,
  Plus,
  Minus,
  LocateFixed,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { locationsData } from "../../data/locationData";

const CentersMapPage = () => {
  // ===================== STATES =====================

  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [activeCenter, setActiveCenter] = useState(null);

  const [showSuggestions, setShowSuggestions] = useState(false);

  // ===================== FIND LOCATION =====================
  const selectedLocation = useMemo(() => {
    return locationsData.find((item) =>
      item.location.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  // ===================== FILTER CENTERS =====================
  const filteredCenters = useMemo(() => {
    // If location found → show all centers
    if (selectedLocation) {
      return selectedLocation.centers.map((center, index) => ({
        ...center,

        // dynamic marker positions
        top: `${20 + index * 15}%`,
        left: `${40 + index * 10}%`,
      }));
    }

    // Otherwise search globally
    const allCenters = locationsData.flatMap((location) =>
      location.centers.map((center, index) => ({
        ...center,
        locationName: location.location,

        top: `${20 + index * 15}%`,
        left: `${40 + index * 10}%`,
      })),
    );

    return allCenters.filter(
      (center) =>
        center.name.toLowerCase().includes(search.toLowerCase()) ||
        center.address.toLowerCase().includes(search.toLowerCase()) ||
        center.locationName?.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search, selectedLocation]);

  // ===================== LOCATION SUGGESTIONS =====================
  const locationSuggestions = useMemo(() => {
    if (!searchInput.trim()) return [];

    return locationsData.filter((item) =>
      item.location.toLowerCase().includes(searchInput.toLowerCase()),
    );
  }, [searchInput]);

  return (
    <div className="min-h-screen bg-[#F4F7FB] py-6 px-4">
      {/* =========================================================
            MAIN CONTAINER
      ========================================================= */}
      <div className="max-w-7xl mx-auto">
        {/* =========================================================
              SEARCH SECTION
        ========================================================= */}
        <div className="relative mb-5">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-100/40 via-white to-orange-100/40 blur-3xl rounded-full pointer-events-none" />

          <div className="relative bg-white/90 backdrop-blur-xl border border-gray-200 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] px-5 py-5 overflow-visible z-[999]">
            {/* Top Content */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
              {/* Left */}
              <div>
                <h2 className="text-[26px] font-bold text-gray-900 leading-tight">
                  Find Training Centers
                </h2>

                <p className="text-sm text-gray-500 mt-1 max-w-xl leading-relaxed">
                  Explore the best institutes, academies, and professional
                  learning centers near your location with verified reviews and
                  ratings.
                </p>
              </div>

              {/* ================= SEARCH BAR ================= */}
              <div className="sticky top-0 z-50 lg:static bg-[#F4F7FB] py-3">
                <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 w-full md:w-auto">
                  {/* Search Input */}
                  <div className="relative flex-1 lg:w-[420px]">
                    {/* Icon */}
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-2xl bg-orange-50 flex items-center justify-center z-20">
                      <MapPin className="w-5 h-5 text-orange-500" />
                    </div>

                    <input
                      type="text"
                      placeholder="Search centers or locations..."
                      value={searchInput}
                      onFocus={() => setShowSuggestions(true)}
                      onChange={(e) => {
                        setSearchInput(e.target.value);
                        setShowSuggestions(true);
                      }}
                      className="w-full h-14 pl-16 pr-5 rounded-2xl border border-gray-200 bg-[#FAFBFD] focus:bg-white focus:border-orange-400 focus:ring-4 focus:ring-orange-100 outline-none transition-all text-[15px] font-medium text-gray-700 placeholder:text-gray-400"
                    />

                    {/* ===================== DROPDOWN ===================== */}
                    {showSuggestions && locationSuggestions.length > 0 && (
                      <div className="absolute top-full mt-3  w-full bg-white border border-gray-200 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] overflow-hidden z-50">
                        {/* Header */}
                        <div className="px-4 py-3 border-b border-gray-100">
                          <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                            Available Locations
                          </p>
                        </div>

                        {/* Suggestions */}
                        <div className="max-h-[280px] overflow-y-auto scrollbar-hide ">
                          {locationSuggestions.map((item) => (
                            <button
                              key={item.id}
                              onClick={() => {
                                setSearchInput(item.location);
                                setSearch(item.location);
                                setShowSuggestions(false);
                              }}
                              className="w-full flex items-center gap-3 px-4 py-4 hover:bg-orange-50 transition-all duration-200 text-left border-b border-gray-100 last:border-b-0"
                            >
                              {/* Icon */}
                              <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0">
                                <MapPin className="w-4 h-4 text-orange-500" />
                              </div>

                              {/* Content */}
                              <div>
                                <h4 className="text-sm font-semibold text-gray-800">
                                  {item.location}
                                </h4>

                                <p className="text-xs text-gray-500 mt-1">
                                  {item.centers.length} centers available
                                </p>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  {/* Search Button */}
                  <button
                    onClick={() => setSearch(searchInput)}
                    className="h-14 px-7 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold shadow-lg shadow-orange-200 transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap w-full md:w-auto"
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
                LEFT SIDE - CENTERS
          ========================================================= */}
          <div className="bg-white border border-gray-200 rounded-3xl shadow-sm overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Training Centers
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  <span className="text-orange-500 font-semibold">
                    {filteredCenters.length}
                  </span>{" "}
                  centers found in {selectedLocation?.location || search}
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
              {filteredCenters.map((center) => (
                <div
                  key={center.id}
                  onMouseEnter={() => setActiveCenter(center.id)}
                  onMouseLeave={() => setActiveCenter(null)}
                  className={`group relative bg-white border rounded-[28px] p-3 transition-all duration-300 cursor-pointer overflow-hidden
                  ${
                    activeCenter === center.id
                      ? "border-orange-300 shadow-[0_20px_60px_rgba(249,115,22,0.15)]"
                      : "border-gray-200 hover:border-orange-200 hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)]"
                  }`}
                >
                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-50/0 via-orange-50/40 to-orange-50/0 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />

                  {/* ======================================================
                        MAIN CONTENT
                  ====================================================== */}
                  <div className="relative flex flex-col sm:flex-row gap-4">
                    {/* ======================================================
                          IMAGE
                    ====================================================== */}
                    <div className="w-full sm:w-32 md:w-36 h-52 sm:h-32 md:h-28 rounded-3xl overflow-hidden flex-shrink-0">
                      <img
                        src={center.image}
                        alt={center.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* ======================================================
                          RIGHT CONTENT
                    ====================================================== */}
                    <div className="flex-1 min-w-0 flex flex-col">
                      {/* ======================================================
                            TOP SECTION
                      ====================================================== */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                        {/* ======================================================
                              LEFT CONTENT
                        ====================================================== */}
                        <div className="flex-1 min-w-0">
                          {/* Title */}
                          <h3 className="text-[18px] sm:text-[20px] font-bold text-gray-900 leading-tight break-words">
                            {center.name}
                          </h3>

                          {/* Address */}
                          <div className="flex items-center gap-2 mt-3">
                            <div className="w-8 h-8 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0">
                              <MapPin className="w-4 h-4 text-orange-500" />
                            </div>

                            <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                              {center.address}
                            </p>
                          </div>

                          {/* Rating */}
                          <div className="flex flex-wrap items-center gap-2 mt-4">
                            {/* Stars */}
                            <div className="flex items-center gap-1">
                              {[...Array(1)].map((_, index) => (
                                <Star
                                  key={index}
                                  className="w-4 h-4 fill-orange-500 text-orange-500"
                                />
                              ))}
                            </div>

                            {/* Rating */}
                            <span className="text-sm font-semibold text-gray-800">
                              {center.rating}
                            </span>

                            {/* Reviews */}
                            <span className="text-sm text-gray-400">
                              ({center.reviews} reviews)
                            </span>
                          </div>
                        </div>

                        {/* ======================================================
                              ACTIONS
                        ====================================================== */}
                        <div className="flex sm:flex-col items-center sm:items-end gap-2 flex-shrink-0">
                          {/* Heart Button */}
                          <button className="w-11 h-11 rounded-2xl border border-gray-200 bg-white flex items-center justify-center hover:bg-orange-50 hover:border-orange-200 transition-all duration-300">
                            <Heart className="w-4 h-4 text-gray-500 hover:text-orange-500 transition-colors" />
                          </button>

                          {/* View Button */}
                          <button className="h-11 px-5 sm:px-6 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-semibold hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-orange-200 whitespace-nowrap w-full sm:w-auto">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* =========================================================
                    EMPTY STATE
              ========================================================= */}
              {filteredCenters.length === 0 && (
                <div className="py-20 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800">
                      No Centers Found
                    </h3>

                    <p className="text-gray-500 mt-2">
                      Try searching with another keyword.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* =========================================================
                  PAGINATION
            ========================================================= */}
            <div className="border-t border-gray-100 p-5 flex flex-col sm:flex-row gap-4 items-center justify-between">
              <p className="text-sm text-gray-500">
                Showing 1 to {filteredCenters.length} results
              </p>

              <div className="flex items-center gap-2">
                <button className="w-11 h-11 rounded-2xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition">
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button className="w-11 h-11 rounded-2xl bg-orange-500 text-white font-semibold">
                  1
                </button>

                <button className="w-11 h-11 rounded-2xl border border-gray-200 hover:bg-gray-50 transition">
                  2
                </button>

                <button className="w-11 h-11 rounded-2xl border border-gray-200 hover:bg-gray-50 transition">
                  3
                </button>

                <button className="w-11 h-11 rounded-2xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* =========================================================
                RIGHT SIDE - MAP
          ========================================================= */}
          <div className="sticky top-0 ">
            <div className="relative h-[88vh] rounded-3xl overflow-hidden border border-gray-200 shadow-sm bg-white">
              {/* Google Map */}
              <iframe
                title="Google Map"
                src={`https://www.google.com/maps?q=${
                  selectedLocation?.location || search
                }&output=embed`}
                loading="lazy"
                className="w-full h-full"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />

              {/* =========================================================
                    MAP MARKERS
              ========================================================= */}
              {filteredCenters.map((center) => (
                <div
                  key={center.id}
                  style={{
                    top: center.top,
                    left: center.left,
                  }}
                  className="absolute z-20"
                >
                  <div className="group relative">
                    {/* Marker */}
                    <div
                      className={`w-14 h-14 rounded-full border-4 border-white shadow-2xl flex items-center justify-center transition-all duration-300 cursor-pointer
                      ${
                        activeCenter === center.id
                          ? "bg-orange-600 scale-110"
                          : "bg-orange-500 hover:scale-110"
                      }`}
                    >
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>

                    {/* Tooltip */}
                    <div className="absolute left-1/2 -translate-x-1/2 mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="bg-white px-4 py-2 rounded-xl shadow-xl whitespace-nowrap text-sm font-semibold text-gray-800">
                        {center.name}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* =========================================================
                    MAP CONTROLS
              ========================================================= */}
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

export default CentersMapPage;
