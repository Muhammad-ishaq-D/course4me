import React from "react";
import { ArrowRight, Star } from "lucide-react";

const CourseModalCard = ({ course, Icon, iconBg, handleCourseClick }) => {
  return (
    <button
      key={course._id}
      onClick={() => handleCourseClick(course._id)}
      className="w-full flex items-center cursor-pointer gap-5 border border-gray-100 bg-white rounded-2xl p-2 hover:border-[#FF5421]/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 group text-left relative overflow-hidden"
    >
      <div
        className={`w-16 h-16 rounded-2xl ${iconBg} flex items-center justify-center shrink-0 relative z-10 shadow-sm group-hover:scale-105 transition-transform duration-300`}
      >
        <Icon size={26} className="text-white" />

        <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1.5">
          <h3 className="text-[15px] font-bold text-[#1A1A1A] group-hover:text-[#FF5421] transition-colors duration-300">
            {course.title}
          </h3>
          {course.isPopular && (
            <span className="bg-[#FF5421]/10 text-[#FF5421] text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border border-[#FF5421]/20">
              Popular
            </span>
          )}
        </div>

        <div className="flex items-center flex-wrap gap-x-3 gap-y-1 text-[13px]">
          <span className="text-gray-500 font-medium">{course.duration}</span>

          <div className="flex items-center gap-1 bg-yellow-50 px-1.5 py-0.5 rounded-md">
            <Star size={12} className="text-yellow-500 fill-yellow-500" />
            <span className="font-bold text-yellow-700">4.9</span>
          </div>

          <div className="flex items-center text-[#FF5421]">
            <span className="text-gray-400 font-normal mr-1">from</span>
            <span className="font-extrabold text-[15px]">
              £{course.pricing?.basePrice}
            </span>
          </div>
        </div>
      </div>

      {/* Animated Arrow Container */}
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 group-hover:bg-[#FF5421] transition-all duration-300">
        <ArrowRight
          size={20}
          className="text-gray-400 group-hover:text-white transition-all duration-300 transform group-hover:translate-x-0.5"
        />
      </div>
    </button>
  );
};

export default CourseModalCard;
