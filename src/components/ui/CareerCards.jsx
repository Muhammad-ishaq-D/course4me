import React from "react";
import { Briefcase, Shield, ArrowRight } from "lucide-react";

import { NavLink } from "react-router-dom";

const CareerCards = ({ filteredCareers }) => {
  return (
    <>
      {filteredCareers.map((career) => (
        <div
          key={career.id}
          className="group bg-white rounded-[28px] border border-gray-200 overflow-visible hover:border-[#F8510C]/20 hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)] transition-all duration-500"
        >
          {/* Image */}
          <div className="relative h-44 overflow-hidden rounded-t-[28px]">
            <img
              src={career.image}
              alt={career.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

            {/* Popular Badge */}
            {career.popular && (
              <div className="absolute top-4 left-4">
                <div className="px-3 py-1 rounded-full bg-[#111111] text-white text-[11px] font-bold tracking-wide border border-white/10 backdrop-blur-md">
                  Popular
                </div>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-5">
            {/* Category */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF1EB] text-[#F8510C] text-[11px] font-bold tracking-wide mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#F8510C]" />

              {career.category}
            </div>

            {/* Title */}
            <h3 className="text-[22px] leading-tight font-black text-[#111827]">
              {career.title}
            </h3>

            {/* Salary */}
            <p className="text-[#F8510C] text-lg font-black mt-3">
              {career.salary}
            </p>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 mt-4 text-[13px] text-[#667085]">
              <div className="flex items-center gap-1.5">
                <Briefcase className="w-4 h-4" />

                <span className="font-medium">{career.level}</span>
              </div>

              <div className="w-1 h-1 rounded-full bg-gray-300" />

              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4" />

                <span className="font-medium">{career.licence}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-[#667085] text-[14px] leading-relaxed mt-4 line-clamp-2">
              {career.description}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between mt-6">
              {/* Button */}
              <NavLink
                to={`/careers/careerdetails/${career.id}`}
                className="inline-flex items-center gap-2 text-[#F8510C] text-sm font-bold hover:gap-3 transition-all"
              >
                Details
                <ArrowRight className="w-4 h-4" />
              </NavLink>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CareerCards;
