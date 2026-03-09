import React from "react";
import {
  X,
  MapPin,
  Clock,
  Calendar,
  Phone,
  Mail,
  CheckCircle
} from "lucide-react";

const BookCourseModal = ({ centre, onClose, showModal }) => {
  if (!centre || !showModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-[1px] px-4">

      {/* Modal Container */}
      <div className="
        bg-white
        w-full
        max-w-[900px]
        h-[90vh]
        max-h-[90vh]
        rounded-[32px]
        shadow-2xl
        relative
        flex
        flex-col
        p-6 md:p-8
      ">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-black transition"
        >
          <X size={22} />
        </button>

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-xl md:text-3xl font-bold text-[#2f3a47]">
            Book Your Course
          </h2>
          <p className="text-gray-500 mt-1">
            {centre.name}
          </p>
        </div>

        {/* Scroll Area */}
        <div className="flex-1 overflow-y-auto pr-4 custom-scroll">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* LEFT SIDE */}
            <div>

              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={centre.image}
                  alt={centre.city}
                  className="w-full h-[220px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5 text-white">
                  <h3 className="text-xl font-semibold">
                    {centre.city}
                  </h3>
                </div>
              </div>

              {/* Info Box */}
              <div className="mt-6 bg-[#f7f9fb] rounded-2xl p-5 space-y-5">

                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-[#B9FF5A]" />
                  <div>
                    <div className="text-xs text-gray-400 font-semibold">
                      LOCATION
                    </div>
                    <div className="text-sm text-gray-700">
                      {centre.address}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Clock className="w-5 h-5 text-[#B9FF5A]" />
                  <div>
                    <div className="text-xs text-gray-400 font-semibold">
                      OPENING HOURS
                    </div>
                    <div className="text-sm text-gray-700">
                      {centre.hours}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Calendar className="w-5 h-5 text-[#B9FF5A]" />
                  <div>
                    <div className="text-xs text-gray-400 font-semibold">
                      AVAILABILITY
                    </div>
                    <div className="text-sm text-[#0fa968] font-medium">
                      Next available: {centre.next}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t space-y-2">
                  <div className="text-xs text-gray-400 font-semibold">
                    NEED HELP?
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Phone className="w-4 h-4 text-[#B9FF5A]" />
                    {centre.phone}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Mail className="w-4 h-4 text-[#B9FF5A]" />
                    {centre.email}
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <div className="space-y-6">

              {/* Personal Info */}
              <div>
                <h3 className="text-lg font-semibold text-[#2f3a47] mb-4">
                  Personal Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    placeholder="First Name *"
                    className="border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#B9FF5A]"
                  />
                  <input
                    placeholder="Last Name *"
                    className="border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#B9FF5A]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <input
                    placeholder="Email Address *"
                    className="border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#B9FF5A]"
                  />
                  <input
                    placeholder="Phone Number *"
                    className="border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#B9FF5A]"
                  />
                </div>
              </div>

              {/* Course Details */}
              <div>
                <h3 className="text-lg font-semibold text-[#2f3a47] mb-4">
                  Course Details
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <select className="border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#B9FF5A]">
                    <option>Select Course *</option>
                    {centre.courses.map((course, i) => (
                      <option key={i}>{course}</option>
                    ))}
                  </select>

                  <input
                    type="date"
                    className="border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#B9FF5A]"
                  />
                </div>

                <textarea
                  rows="4"
                  placeholder="Additional Information (Optional)"
                  className="mt-4 w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#B9FF5A]"
                />
              </div>

              {/* What Happens Next */}
              <div className="bg-[#f1f9ea] border border-[#d4f3b2] rounded-2xl p-5 text-sm text-gray-700">
                <div className="flex items-center gap-2 font-semibold mb-2">
                  <CheckCircle className="w-4 h-4 text-[#0fa968]" />
                  What happens next?
                </div>
                <ul className="space-y-1 ml-6 list-disc">
                  <li>We'll review your booking request</li>
                  <li>You'll receive confirmation within 24 hours</li>
                  <li>Payment details will be sent via email</li>
                </ul>
              </div>

            </div>

          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={onClose}
            className="px-5 py-2 md:px-6 md:py-3 text-xs md:text-lg rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
          >
            Cancel
          </button>

          <button className="px-5 py-2 md:px-8 md:py-3 text-xs md:text-lg rounded-full bg-[#2f3a47] text-white hover:bg-black transition shadow-md">
            Submit Booking →
          </button>
        </div>

      </div>
    </div>
  );
};

export default BookCourseModal;