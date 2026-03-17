import React from 'react';
import { Star, MapPin, Calendar, ChevronRight } from 'lucide-react';

export default function RegularTrainingCentreCard({
  image,
  city,
  subtitle,
  rating,
  address,
  nextAvailable,
  nextAvailableColor = 'text-[#22C55E]',
  courses,
  extraCoursesCount
}) {
  return (
    <div className="bg-white rounded-[24px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 transform hover:-translate-y-1 w-full">
      {/* Image Header wrapper for rounded crop */}
      <div className="relative h-[200px] w-full shrink-0">
        <img
          src={image}
          alt={city}
          className="w-full h-full object-cover"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/80"></div>

        {/* Top Badges */}
        <div className="absolute top-4 right-4">
          <div className="bg-[#18181B]/80 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-[13px] font-bold flex items-center gap-1.5 shadow-sm">
            <Star size={14} className="fill-[#FBBF24] text-[#FBBF24]" />
            {rating}
          </div>
        </div>

        {/* Bottom Text */}
        <div className="absolute bottom-4 left-5 pr-5">
          <h3 className="text-white text-[24px] font-extrabold mb-0 leading-tight tracking-tight">{city}</h3>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-5 flex flex-col flex-1">

        {/* Subtitle */}
        <h4 className="text-[#3F3F46] font-bold text-[15px] mb-3 leading-tight">{subtitle}</h4>

        {/* Details List */}
        <div className="space-y-2.5 mb-5">
          <div className="flex items-start gap-2.5">
            <MapPin size={16} className="text-[#F15A24] shrink-0 mt-0.5" />
            <span className="text-[#71717A] text-[13px] font-medium leading-[1.4] line-clamp-1">{address}</span>
          </div>
          <div className="flex items-start gap-2.5">
            <Calendar size={16} className="text-[#22C55E] shrink-0 mt-0.5" />
            <span className={`text-[13px] font-bold leading-[1.4] ${nextAvailableColor}`}>Next: {nextAvailable}</span>
          </div>
        </div>

        {/* Courses Section */}
        <div className="mb-6 mt-1">
          <div className="flex flex-wrap gap-2 text-left">
            {courses.map((course, idx) => (
              <span key={idx} className="bg-[#F4F4F5] text-[#52525B] px-3 py-1.5 rounded-full text-[11px] font-semibold whitespace-nowrap">
                {course}
              </span>
            ))}
            {extraCoursesCount > 0 && (
              <span className="bg-[#FFEDD5] text-[#EA580C] px-3 py-1.5 rounded-full text-[11px] font-bold whitespace-nowrap">
                +{extraCoursesCount}
              </span>
            )}
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-1"></div>

        {/* Action Button */}
        <button className="w-full bg-[#18181B] hover:bg-[#27272A] text-white rounded-full py-3.5 px-4 flex items-center justify-center gap-2 font-bold transition-colors text-[14px] mt-auto">
          View Details
          <ChevronRight size={18} className="text-gray-400" />
        </button>
      </div>
    </div>
  );
}
