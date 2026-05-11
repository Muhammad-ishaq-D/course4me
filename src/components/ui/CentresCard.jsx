import React, { useState } from "react";
import { MapPin, Clock, Star, Sparkles, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CentreDetailsModal from "../locationComponents/CentreDetailsModal";

const courseTitleToId = (title) => {
  const t = title.toLowerCase();
  if (t.includes("door supervisor")) return "door-supervisor";
  if (t.includes("security guard")) return "security-guard";
  if (t.includes("cctv")) return "cctv-training";
  if (t.includes("first aid")) return "first-aid-at-work";
  return "door-supervisor";
};

const CentresCard = ({ centre, index }) => {
  const [showMoreCourses, setShowMoreCourses] = useState({});
  const [showDetails, setShowDetails] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <div className="group relative bg-white rounded-4xl border border-white overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_65px_rgba(0,0,0,0.10)] transition-all duration-500 hover:-translate-y-2">
        {/* Hover Glow */}
        <div className="absolute inset-0 bg-linear-to-br from-[#F15A24]/0 via-transparent to-[#F15A24]/5 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />

        {/* ================= IMAGE ================= */}
        <div className="relative h-62.5 overflow-hidden">
          <img
            src={centre.image}
            alt={centre.city}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-[#101820]/90 via-[#101820]/20 to-transparent" />

          {/* Top Tags */}
          <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
            {/* Featured */}
            {centre.featured && (
              <div className="bg-[#F15A24] text-white text-[11px] font-bold px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                <Sparkles size={12} className="fill-white" />
                Featured
              </div>
            )}

            {/* Rating */}
            <div className="bg-black/50 backdrop-blur-md text-white text-xs font-bold px-3 py-2 rounded-full flex items-center gap-1.5 border border-white/10">
              <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />

              {centre.rating}
            </div>
          </div>

          {/* Bottom Overlay Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            {/* Location Tag */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 text-white text-[11px] font-semibold px-3 py-1.5 rounded-full mb-4">
              <MapPin size={12} />

              {centre.city}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold leading-tight">{centre.name}</h3>

            {/* Availability */}
            <div className="flex items-center gap-2 mt-2 text-[#4ade80] font-semibold text-sm">
              <div className="w-2 h-2 rounded-full bg-[#4ade80]" />
              Next Available:
              {centre.next}
            </div>
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="p-6">
          {/* Info */}
          <div className="space-y-4">
            {/* Address */}
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <div className="w-10 h-10 rounded-xl bg-[#fff7f3] flex items-center justify-center shrink-0">
                <MapPin size={16} className="text-[#F15A24]" />
              </div>

              <span className="leading-relaxed">{centre.address}</span>
            </div>

            {/* Hours */}
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <div className="w-10 h-10 rounded-xl bg-[#f5f3ff] flex items-center justify-center shrink-0">
                <Clock size={16} className="text-purple-600" />
              </div>

              <span className="leading-relaxed">{centre.hours}</span>
            </div>
          </div>

          {/* ================= COURSES ================= */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-3">
              <div className="text-[11px] uppercase tracking-wider text-gray-400 font-bold">
                Courses Available
              </div>

              <div className="text-xs text-[#F15A24] font-semibold">
                {centre.courses.length} Courses
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {(showMoreCourses[index]
                ? centre.courses
                : centre.courses.slice(0, 2)
              ).map((courseName, i) => (
                <span
                  key={i}
                  onClick={() =>
                    navigate(
                      `/booking/course?courseid=${courseTitleToId(courseName)}&postcode=${encodeURIComponent(centre.city)}`,
                    )
                  }
                  className="bg-[#f8fafc] border border-[#edf1f5] text-[#243443] text-[11px] font-semibold px-3 py-2 rounded-full cursor-pointer hover:bg-[#F15A24] hover:text-white hover:border-[#F15A24] transition-all duration-300"
                >
                  {courseName}
                </span>
              ))}

              {/* +More Button */}
              {centre.courses.length > 2 && !showMoreCourses[index] && (
                <button
                  onClick={() =>
                    setShowMoreCourses((prev) => ({
                      ...prev,
                      [index]: true,
                    }))
                  }
                  className="bg-[#FFE9DC] hover:bg-[#F15A24] hover:text-white text-[#243443] text-[11px] font-bold px-3 py-2 rounded-full transition-all duration-300"
                >
                  +{centre.courses.length - 2} More
                </button>
              )}

              {/* Show Less */}
              {showMoreCourses[index] && (
                <button
                  onClick={() =>
                    setShowMoreCourses((prev) => ({
                      ...prev,
                      [index]: false,
                    }))
                  }
                  className="bg-[#fff7f3] hover:bg-[#F15A24] hover:text-white text-[#F15A24] text-[11px] font-bold px-3 py-2 rounded-full transition-all duration-300"
                >
                  Show Less
                </button>
              )}
            </div>
          </div>

          {/* ================= BUTTONS ================= */}
          <div className="mt-7 flex items-center gap-3">
            {/* Book Button */}
            <button
              onClick={() => {
                const courseId =
                  centre.courses.length > 0
                    ? courseTitleToId(centre.courses[0])
                    : "door-supervisor";

                navigate(
                  `/booking/course?courseid=${courseId}&postcode=${encodeURIComponent(centre.city)}`,
                );
              }}
              className="group/button flex-1 bg-[#F15A24] hover:bg-[#de4d18] text-white py-4 rounded-2xl font-semibold text-sm transition-all duration-300 shadow-[0_12px_30px_rgba(241,90,36,0.25)] hover:shadow-[0_18px_45px_rgba(241,90,36,0.45)] hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Book My Place
              <ArrowRight
                size={17}
                className="group-hover/button:translate-x-1 transition"
              />
            </button>

            {/* View Details */}
            <button
              onClick={() => setShowDetails(true)}
              className="group/details px-5 py-3.5 rounded-2xl bg-[#f8fafc] border border-gray-300 hover:bg-[#243443] hover:border-[#243443] text-[#243443] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 font-semibold text-sm"
            >
              <span>Details</span>
            </button>
          </div>
        </div>
      </div>
      {/* ================= DETAILS MODAL ================= */}
      {showDetails && (
        <CentreDetailsModal
          centre={centre}
          onClose={() => setShowDetails(false)}
        />
      )}
    </>
  );
};

export default CentresCard;
