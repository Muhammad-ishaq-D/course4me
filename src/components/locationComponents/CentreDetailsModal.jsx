import React, { useState } from "react";
import {
  X,
  Star,
  MapPin,
  Clock,
  Calendar,
  Phone,
  Mail
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
    const courseId = centre.courses.length > 0 ? courseTitleToId(centre.courses[0]) : "door-supervisor";
    navigate(`/booking/course?courseid=${courseId}&postcode=${encodeURIComponent(centre.city)}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-[1px] px-4">

      {/* Centre Details Modal */}
      <div className="
        bg-white
        w-full
        max-w-[520px]
        md:max-w-[600px]
        h-fit
        max-h-[85vh]
        rounded-[28px]
        shadow-2xl
        relative
        p-6 md:p-8
        flex
        flex-col
      ">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-black transition"
        >
          <X size={24} />
        </button>

        {/* Title */}
        <h2 className="text-md md:text-2xl font-bold text-[#2f3a47] mb-8 pr-8">
          {centre.name}
        </h2>

        <div className="max-h-[60vh] overflow-y-auto pr-4 md:pr-1 custom-scroll">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

            {/* LEFT SIDE */}
            <div>

              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={centre.image}
                  alt={centre.city}
                  className="w-full h-[150px] object-cover"
                />

                {/* Rating */}
                <div className="absolute top-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  {centre.rating}
                </div>

                {/* Overlay City */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5 text-white">
                  <h3 className="text-xl font-semibold">
                    {centre.city}
                  </h3>
                  <p className="text-sm text-white/80">
                    {centre.name}
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="mt-4 space-y-2 text-gray-600">

                <div className="flex items-center gap-2 text-xs">
                  <MapPin className="w-3 h-3 text-[#F15A24] " />
                  {centre.address}
                </div>

                <div className="flex items-center gap-2 text-xs">
                  <Clock className="w-3 h-3 text-[#F15A24] " />
                  {centre.hours}
                </div>

                <div className="flex mt-4 items-center gap-2 font-semibold text-[#0fa968] text-sm">
                  <Calendar className="w-4 h-4" />
                  Next available: {centre.next}
                </div>

              </div>

              {/* Courses */}
              <div className="mt-4">
                <div className="text-xs font-semibold text-gray-400 mb-2">
                  COURSES AVAILABLE
                </div>

                <div className="flex flex-wrap gap-2">
                  {centre.courses.map((course, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full"
                    >
                      {course}
                    </span>
                  ))}
                  <span className="bg-[#eafad1] text-[#2f3a47] text-xs px-3 py-1 rounded-full">
                    +1 more
                  </span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-4 mt-6">
                <button
                  onClick={handleBookNow}
                  className="flex-1 bg-[#2f3a47] text-white py-2 rounded-full font-medium hover:bg-black transition flex items-center justify-center gap-2"
                >
                  Book Now →
                </button>

                <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition">
                  <Phone className="w-4 h-4 text-[#2f3a47]" />
                </button>
              </div>

            </div>

            {/* RIGHT SIDE */}
            <div>

              {/* Facilities */}
              {centre.facilities && centre.facilities.length > 0 && (
                <div className="mb-5">
                  <h3 className="text-md font-semibold text-[#2f3a47] mb-4">
                    Facilities
                  </h3>

                  <ul className="text-xs text-gray-600 space-y-2">
                    {centre.facilities.map((facility, index) => (
                      <li key={index}>{facility}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Contact */}
              <div>
                <h3 className="text-md font-semibold text-[#2f3a47] mb-4">
                  Contact Information
                </h3>

                <div className="text-xs space-y-3 text-gray-600">

                  {centre.phone && (
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#F15A24] " />
                      {centre.phone}
                    </div>
                  )}

                  {centre.email && (
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#F15A24] " />
                      {centre.email}
                    </div>
                  )}

                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CentreDetailsModal;