import React from "react";
import { MapPin, CheckCircle2, Clock3, Mail, Phone } from "lucide-react";

const CenterDetails = ({ center }) => {
  return (
    <div>
      {" "}
      {/* Heading */}
      <div className="mb-14">
        <p className="text-orange-500 uppercase tracking-widest font-bold text-sm">
          Center Information
        </p>

        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-3">
          Training Center Details
        </h2>
      </div>
      {/* Details Layout */}
      <div className="bg-white rounded-4xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* ================= LEFT SIDE ================= */}
          <div className="p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-gray-100">
            {/* Section Header */}
            <div className="mb-8">
              <p className="text-[11px] uppercase tracking-[3px] text-orange-500 font-semibold">
                Center Information
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-2">
                Contact Details
              </h2>
            </div>

            {/* Info Items */}
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-orange-500" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[2px] text-gray-400 font-medium">
                    Address
                  </p>

                  <h3 className="text-base font-semibold text-gray-900 mt-2 leading-relaxed">
                    {center.address}
                  </h3>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-orange-500" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[2px] text-gray-400 font-medium">
                    Phone Number
                  </p>

                  <h3 className="text-base font-semibold text-gray-900 mt-2">
                    {center.phone}
                  </h3>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-orange-500" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[2px] text-gray-400 font-medium">
                    Email Address
                  </p>

                  <h3 className="text-base font-semibold text-gray-900 mt-2 break-all">
                    {center.email}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="p-6 lg:p-8 bg-gradient-to-br from-orange-50/60 via-white to-orange-50/40">
            {/* Header */}
            <div className="mb-8">
              <p className="text-[11px] uppercase tracking-[3px] text-orange-500 font-semibold">
                Schedule
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-2">
                Opening Hours
              </h2>
            </div>

            {/* Hours Card */}
            <div className="bg-white rounded-[28px] border border-orange-100 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center">
                  <Clock3 className="w-5 h-5 text-orange-500" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[2px] text-gray-400 font-medium">
                    Weekly Schedule
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mt-1">
                    {center.hours}
                  </h3>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-100 my-6" />

              {/* Next Session */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[2px] text-gray-400 font-medium">
                    Next Available Session
                  </p>

                  <h2 className="text-3xl font-bold text-orange-500 mt-2">
                    {center.next}
                  </h2>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/20">
                  <Clock3 className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ====================FACILITIES========================== */}
      <div className="mt-20">
        <div className="mb-14">
          <p className="text-orange-500 uppercase tracking-widest font-bold text-sm">
            Facilities
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-3">
            Center Facilities
          </h2>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
          {center.facilities.map((facility, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-[24px] p-5 hover:border-orange-200 hover:shadow-lg transition-all duration-300"
            >
              {/* Top */}
              <div className="flex items-center justify-between">
                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-orange-50 group-hover:bg-orange-500 transition-all duration-300 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 group-hover:text-white transition-all duration-300" />
                </div>

                {/* Badge */}
                <span className="text-[10px] uppercase tracking-[2px] text-green-600 bg-green-50 px-3 py-1 rounded-full font-medium">
                  Available
                </span>
              </div>

              {/* Content */}
              <div className="mt-5">
                <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                  {facility}
                </h3>

                <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                  Included with all student training sessions.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CenterDetails;
