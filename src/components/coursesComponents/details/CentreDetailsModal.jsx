import React from 'react';
import { createPortal } from 'react-dom';
import { X, MapPin, Clock, Calendar, Phone, Mail, Star, Check } from 'lucide-react';

export default function CentreDetailsModal({ centre, onClose, onBookNow }) {
  if (!centre) return null;

  const facilities = [
    "Free Parking",
    "WiFi Access",
    "Cafe On-Site",
    "Disabled Access"
  ];

  return createPortal(
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
      <div className="bg-white w-full max-w-[1000px] max-h-[95vh] rounded-[32px] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300">

        {/* Header */}
        <div className="p-8 pb-6 flex justify-between items-center bg-white border-b border-gray-50 shrink-0">
          <h2 className="text-[28px] font-black text-[#18181B] tracking-tight">{centre.subtitle}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content Wrapper with Left Scroller */}
        <div className="flex-1 overflow-hidden flex">
          {/* Left Sidebar - Image & Basic Info (Scrolling) */}
          <div className="w-[400px] shrink-0 overflow-y-auto px-8 pb-8 custom-scrollbar border-r border-gray-100">
            <div>
              <div className="relative h-[240px] rounded-[24px] overflow-hidden mb-6 shadow-md">
                <img src={centre.image} alt={centre.city} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4">
                  <div className="bg-black/60 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-[14px] font-bold flex items-center gap-1.5 shadow-sm border border-white/10">
                    <Star size={14} className="fill-[#FBBF24] text-[#FBBF24]" />
                    {centre.rating}
                  </div>
                </div>
                <div className="absolute bottom-4 left-5">
                  <h3 className="text-white text-[24px] font-extrabold mb-0 leading-tight tracking-tight shadow-sm drop-shadow-md">{centre.city}</h3>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#F15A24] shrink-0 mt-0.5" />
                  <span className="text-[#52525B] text-[15px] font-medium leading-[1.4]">{centre.address || "123 Oxford Street, London, W1D 2HG"}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-[#F15A24] shrink-0 mt-0.5" />
                  <span className="text-[#52525B] text-[15px] font-medium leading-[1.4]">Mon-Sun: 8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar size={18} className="text-[#22C55E] shrink-0 mt-0.5" />
                  <span className="text-[#22C55E] text-[15px] font-bold leading-[1.4]">Next available: {centre.nextAvailable}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Facilities, Contact & Courses (Scrolling) */}
          <div className="flex-1 overflow-y-auto px-8 pb-8 custom-scrollbar">
            <div className="flex flex-col">
              <div className="mb-8">
                <h4 className="text-[18px] font-extrabold text-[#18181B] mb-5 tracking-tight">Facilities</h4>
                <div className="grid grid-cols-1 gap-y-3.5">
                  {facilities.map((fac, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-[#52525B] text-[15px] font-semibold">
                      <div className="w-5 h-5 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100">
                        <Check size={12} className="text-[#F15A24]" />
                      </div>
                      <span className="leading-none">{fac}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-[18px] font-extrabold text-[#18181B] mb-5 tracking-tight">Contact Information</h4>
                <div className="space-y-4">
                  <a href="tel:02012345678" className="flex items-center gap-3 text-[#52525B] hover:text-[#F15A24] transition-colors text-[15px] font-semibold">
                    <Phone size={18} className="text-[#F15A24]" />
                    020 1234 5678
                  </a>
                  <a href="mailto:london@getlicensed.co.uk" className="flex items-center gap-3 text-[#52525B] hover:text-[#F15A24] transition-colors text-[15px] font-semibold">
                    <Mail size={18} className="text-[#F15A24]" />
                    london@getlicensed.co.uk
                  </a>
                </div>
              </div>

              {/* Courses Available */}
              <div>
                <h4 className="text-[#A1A1AA] text-[11px] font-black uppercase tracking-[0.1em] mb-4">COURSES AVAILABLE</h4>
                <div className="flex flex-wrap gap-2.5">
                  {centre.courses.map((course, idx) => (
                    <span key={idx} className="bg-[#F4F4F5] text-[#3F3F46] px-4 py-2 rounded-full text-[13px] font-bold transition-all hover:bg-[#E4E4E7]">
                      {course}
                    </span>
                  ))}
                  {centre.extraCoursesCount > 0 && (
                    <span className="bg-[#FFEDD5] text-[#EA580C] px-4 py-2 rounded-full text-[13px] font-black">
                      +{centre.extraCoursesCount} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-8 pt-4 flex gap-4 mt-auto border-t border-gray-100 bg-white shrink-0">
          <button
            onClick={onBookNow}
            className="flex-1 bg-[#18181B] hover:bg-[#000000] text-white rounded-full py-5 px-6 flex items-center justify-center gap-2.5 font-black transition-all text-[16px] shadow-lg shadow-black/10 active:scale-[0.98]"
          >
            Book Now
            <X size={20} className="rotate-45" />
          </button>
          <button className="w-[68px] h-[68px] shrink-0 bg-[#F4F4F5] hover:bg-[#E4E4E5] rounded-full flex items-center justify-center transition-all active:scale-[0.95]">
            <Phone size={24} className="text-[#18181B]" />
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}