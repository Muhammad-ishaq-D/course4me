import React, { useState } from "react";
import {
  X,
  Star,
  MapPin,
  Clock,
  Calendar,
  Phone,
  Mail,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import BookCourseModal from "./BookCourseModal";

const courseTitleToId = (title) => {
  const t = title.toLowerCase();
  if (t.includes("door supervisor")) return "door-supervisor";
  if (t.includes("security guard")) return "security-guard";
  if (t.includes("cctv")) return "cctv-training";
  if (t.includes("first aid")) return "first-aid-at-work";
  return "door-supervisor";
};

const CentreDetailsModal = ({ centre, onClose }) => {
  const navigate = useNavigate();
  if (!centre) return null;

  const handleBookNow = () => {
    const courseId =
      centre.courses.length > 0
        ? courseTitleToId(centre.courses[0])
        : "door-supervisor";
    navigate(
      `/booking/course?courseid=${courseId}&postcode=${encodeURIComponent(centre.city)}`,
    );
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 overflow-y-auto">
      {/* ================= MODAL WRAPPER ================= */}
      <div className="min-h-screen flex items-center justify-center px-4 py-5">
        {/* ================= MODAL ================= */}
        <div className="relative bg-white w-full max-w-[680px] rounded-[24px] overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.30)] animate-in fade-in zoom-in duration-300 mx-auto">
          {/* ================= CLOSE BUTTON ================= */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 w-10 h-10 rounded-2xl bg-white/90 backdrop-blur-md hover:bg-[#243443] hover:text-white flex items-center justify-center text-[#243443] transition-all duration-300"
          >
            <X size={20} />
          </button>

          {/* ================= HERO IMAGE ================= */}
          <div className="relative h-[180px] sm:h-[200px] overflow-hidden">
            <img
              src={centre.image}
              alt={centre.city}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#101820] via-[#101820]/20 to-transparent" />

            {/* Featured */}
            {centre.featured && (
              <div className="absolute top-4 left-4 bg-[#F15A24] text-white text-[11px] font-bold px-4 py-2 rounded-full shadow-[0_10px_30px_rgba(241,90,36,0.35)] flex items-center gap-2">
                <Sparkles size={12} className="fill-white" />
                Featured
              </div>
            )}

            {/* ================= IMAGE CONTENT ================= */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              {/* City */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full text-[11px] font-semibold mb-3">
                <MapPin size={12} />
                {centre.city}
              </div>

              {/* Centre Name */}
              <h2 className="text-[22px] sm:text-[26px] font-extrabold leading-tight tracking-tight">
                {centre.name}
              </h2>

              {/* Bottom Row */}
              <div className="flex items-center justify-between gap-3 mt-3 flex-wrap">
                {/* Availability */}
                <div className="flex items-center gap-2 text-[#4ade80]">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#4ade80]" />

                  <span className="text-[13px] font-semibold">
                    Next Available:
                    <span className="ml-1">{centre.next}</span>
                  </span>
                </div>

                {/* Rating */}
                <div className="bg-black/40 backdrop-blur-md text-white text-[12px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/10">
                  <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />

                  {centre.rating}
                </div>
              </div>
            </div>
          </div>

          {/* ================= CONTENT ================= */}
          <div className="p-4 sm:p-5">
            {/* ================= LOCATION + TIME ================= */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {/* Address */}
              <div className="flex items-center gap-3 bg-[#f8fafc] border border-[#edf1f5] rounded-2xl px-3 py-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#fff7f3] flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-[#F15A24]" />
                </div>

                <div>
                  <div className="text-[11px] text-gray-400 font-semibold uppercase tracking-wide">
                    Location
                  </div>

                  <div className="text-[12px] text-[#243443] font-medium leading-snug mt-0.5">
                    {centre.address}
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-3 bg-[#f8fafc] border border-[#edf1f5] rounded-2xl px-3 py-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#f5f3ff] flex items-center justify-center shrink-0">
                  <Clock size={16} className="text-purple-600" />
                </div>

                <div>
                  <div className="text-[11px] text-gray-400 font-semibold uppercase tracking-wide">
                    Opening Hours
                  </div>

                  <div className="text-[12px] text-[#243443] font-medium leading-snug mt-0.5">
                    {centre.hours}
                  </div>
                </div>
              </div>
            </div>

            {/* ================= COURSES + CONTACT ================= */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {/* ================= COURSES ================= */}
              <div>
                <h3 className="text-[16px] sm:text-[17px] font-bold text-[#243443] mb-2.5">
                  Courses Available
                </h3>

                <div className="flex flex-wrap gap-2">
                  {centre.courses.map((course, i) => (
                    <span
                      key={i}
                      className="bg-[#f4f6f8] border border-[#edf1f5] text-[#243443] text-[11px] px-3 py-1.5 rounded-full font-semibold"
                    >
                      {course}
                    </span>
                  ))}
                </div>

                {/* Facilities */}
                {centre.facilities && centre.facilities.length > 0 && (
                  <div className="mt-4">
                    <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wide mb-2.5">
                      Facilities
                    </div>

                    <div className="space-y-2">
                      {centre.facilities.map((facility, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 text-[12px] text-[#4b5563] font-medium"
                        >
                          <div className="w-2 h-2 rounded-full bg-[#F15A24]" />

                          {facility}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* ================= CONTACT INFO ================= */}
              <div>
                <h3 className="text-[16px] sm:text-[17px] font-bold text-[#243443] mb-2.5">
                  Contact Information
                </h3>

                <div className="space-y-3">
                  {/* Phone */}
                  {centre.phone && (
                    <div className="flex items-center gap-3 bg-[#f8fafc] border border-[#edf1f5] rounded-2xl px-3 py-2.5">
                      <div className="w-10 h-10 rounded-xl bg-[#fff7f3] flex items-center justify-center shrink-0">
                        <Phone size={16} className="text-[#F15A24]" />
                      </div>

                      <div className="text-[13px] text-[#243443] font-semibold">
                        {centre.phone}
                      </div>
                    </div>
                  )}

                  {/* Email */}
                  {centre.email && (
                    <div className="flex items-center gap-3 bg-[#f8fafc] border border-[#edf1f5] rounded-2xl px-3 py-2.5">
                      <div className="w-10 h-10 rounded-xl bg-[#fff7f3] flex items-center justify-center shrink-0">
                        <Mail size={16} className="text-[#F15A24]" />
                      </div>

                      <div className="text-[13px] text-[#243443] font-semibold break-all">
                        {centre.email}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* ================= BUTTON ================= */}
            <div className="flex justify-center mt-5">
              <button
                onClick={handleBookNow}
                className="group w-full sm:w-auto bg-[#F15A24] hover:bg-[#de4d18] text-white px-6 sm:px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300"
              >
                Book Training Now
                <ArrowRight
                  size={17}
                  className="group-hover:translate-x-1 transition"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CentreDetailsModal;
