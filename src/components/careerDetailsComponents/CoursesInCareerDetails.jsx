import React from "react";
import { ArrowRight } from "lucide-react";

const CoursesInCareerDetails = ({ career }) => {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-4 pb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF1EB] border border-[#FFE2D6] text-[#F8510C] text-xs font-black uppercase tracking-[0.12em]">
            Career Training
          </div>

          <h2 className="mt-4 text-[32px] md:text-[42px] leading-tight font-black text-[#111827]">
            Courses Required For This Career
          </h2>

          <p className="mt-3 text-[#667085] text-[15px] max-w-2xl leading-[1.8]">
            Complete these professional training courses to begin your journey
            as a successful {career.title}.
          </p>
        </div>

        <button className="h-12 cursor-pointer px-6 rounded-2xl border border-[#F8510C]/20 text-[#F8510C] font-bold hover:bg-[#F8510C] hover:text-white transition-all duration-300">
          View All Courses
        </button>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="group bg-white rounded-[30px] border border-gray-200 overflow-hidden hover:border-[#F8510C]/30 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={career.image}
                alt=""
                className="w-full h-[230px] object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

              {/* Badge */}
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white text-[#F8510C] text-xs font-black shadow-lg">
                SIA Approved
              </div>

              {/* Price */}
              <div className="absolute bottom-4 right-4 px-4 py-2 rounded-2xl bg-[#F8510C] text-white font-black shadow-lg">
                £299
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Title */}
              <h3 className="text-[22px] font-black text-[#111827] leading-snug">
                {career.title} Training Course
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm text-[#667085] leading-[1.8]">
                Professional training course designed to help you become
                industry-ready and achieve your licence successfully.
              </p>

              {/* Meta */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-[#F8FAFC] border border-gray-100 p-4">
                  <p className="text-xs text-[#667085]">Duration</p>

                  <h4 className="mt-2 font-black text-[#111827]">5 Days</h4>
                </div>

                <div className="rounded-2xl bg-[#F8FAFC] border border-gray-100 p-4">
                  <p className="text-xs text-[#667085]">Location</p>

                  <h4 className="mt-2 font-black text-[#111827]">London</h4>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="text-xs text-[#667085]">Starting From</p>

                  <h4 className="mt-1 text-[24px] font-black text-[#F8510C]">
                    £299
                  </h4>
                </div>

                <button className="inline-flex items-center gap-2 h-12 px-5 rounded-2xl bg-[#F8510C] hover:bg-[#E04809] text-white font-bold transition-all duration-300 hover:gap-3 shadow-lg shadow-[#F8510C]/20">
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesInCareerDetails;
