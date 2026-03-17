import React from 'react';
import { Star, MapPin, Clock, Calendar, ArrowRight, Phone } from 'lucide-react';

export default function TrainingCentreCard({
  image,
  city,
  subtitle,
  rating,
  address,
  timing,
  nextAvailable,
  nextAvailableColor = 'text-[#22C55E]',
  courses,
  extraCoursesCount
}) {
  return (
    <div className="bg-white rounded-[24px] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300 transform hover:-translate-y-1 w-full max-w-sm mx-auto md:max-w-none">
      {/* Image Header wrapper for rounded crop in some designs, but we cropped the main container */}
      <div className="relative h-[230px] w-full shrink-0">
        <img
          src={image}
          alt={city}
          className="w-full h-full object-cover"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/80"></div>

        {/* Top Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          <div className="bg-[#F15A24] text-white px-3 py-1.5 rounded-full text-[12px] font-bold flex items-center gap-1.5 shadow-sm">
            <Star size={12} className="fill-white" />
            Featured
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <div className="bg-[#18181B]/80 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-[13px] font-bold flex items-center gap-1.5 shadow-sm">
            <Star size={14} className="fill-[#FBBF24] text-[#FBBF24]" />
            {rating}
          </div>
        </div>

        {/* Bottom Text */}
        <div className="absolute bottom-5 left-5 pr-5">
          <h3 className="text-white text-[28px] font-extrabold mb-1.5 leading-tight tracking-tight">{city}</h3>
          <p className="text-gray-200 text-[14px] font-medium">{subtitle}</p>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-5 flex flex-col flex-1">
        {/* Details List */}
        <div className="space-y-3.5 mb-7">
          <div className="flex items-start gap-3">
            <MapPin size={18} className="text-[#F15A24] shrink-0 mt-0.5" />
            <span className="text-[#52525B] text-[14px] font-medium leading-[1.4] line-clamp-2">{address}</span>
          </div>
          <div className="flex items-start gap-3">
            <Clock size={18} className="text-[#F15A24] shrink-0 mt-0.5" />
            <span className="text-[#52525B] text-[14px] font-medium leading-[1.4]">{timing}</span>
          </div>
          <div className="flex items-start gap-3">
            <Calendar size={18} className="text-[#22C55E] shrink-0 mt-0.5" />
            <span className={`text-[14px] font-bold leading-[1.4] ${nextAvailableColor}`}>Next available: {nextAvailable}</span>
          </div>
        </div>

        {/* Courses Section */}
        <div className="mb-8">
          <p className="text-[#A1A1AA] text-[11px] font-bold uppercase tracking-wider mb-3">COURSES AVAILABLE</p>
          <div className="flex flex-wrap gap-2 text-left">
            {courses.map((course, idx) => (
              <span key={idx} className="bg-[#F4F4F5] text-[#52525B] px-3 py-1.5 rounded-full text-[12px] font-semibold whitespace-nowrap">
                {course}
              </span>
            ))}
            {extraCoursesCount > 0 && (
              <span className="bg-[#FFEDD5] text-[#EA580C] px-3 py-1.5 rounded-full text-[12px] font-bold whitespace-nowrap">
                +{extraCoursesCount} more
              </span>
            )}
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-1"></div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          <button className="flex-1 bg-[#18181B] hover:bg-[#27272A] text-white rounded-full py-4 px-4 flex items-center justify-center gap-2 font-bold transition-colors text-[15px]">
            Book Now
            <ArrowRight size={18} />
          </button>
          <button className="w-[56px] h-[56px] shrink-0 bg-[#F4F4F5] hover:bg-[#E4E4E5] rounded-full flex items-center justify-center transition-colors">
            <Phone size={20} className="text-[#3F3F46]" />
          </button>
        </div>
      </div>
    </div>
  );
}
