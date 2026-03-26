import React from 'react';
import { createPortal } from 'react-dom';
import { X, MapPin, Clock, Calendar, Phone, Mail, User, BookOpen, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function BookingModal({ centre, onClose, onSubmit }) {
  if (!centre) return null;

  return createPortal(
    <div className="fixed inset-0 bg-[#00000066] backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
      <div className="bg-white w-full max-w-[1000px] max-h-[95vh] rounded-[32px] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300">

        {/* Header */}
        <div className="p-8 pb-4 flex justify-between items-start">
          <div>
            <h2 className="text-[32px] font-black text-[#1E293B] leading-tight mb-1">Book Your Course</h2>
            <p className="text-[#64748B] text-[16px] font-medium">{centre.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-[#64748B]"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content Area - Scrollable */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="px-8 pb-8">
            <div className="flex flex-col lg:flex-row gap-8 items-start relative">

              {/* Left Sidebar - Info (Sticky on Desktop) */}
              <div className="lg:w-[320px] shrink-0 lg:sticky lg:top-0 h-fit">
                <div className="bg-[#F8FAFC] rounded-[24px] p-6 border border-gray-100 mt-4">
                  {/* Image */}
                  <div className="relative h-[200px] rounded-[18px] overflow-hidden mb-6">
                    <img src={centre.image} alt={centre.city} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-white text-[20px] font-extrabold">{centre.city}</h3>
                    </div>
                  </div>

                  {/* Info List */}
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="bg-[#F15A2415] p-2.5 rounded-xl shrink-0 h-fit">
                        <MapPin size={18} className="text-[#F15A24]" />
                      </div>
                      <div>
                        <h4 className="text-[11px] font-bold text-[#A1A1AA] uppercase tracking-wider mb-1">LOCATION</h4>
                        <p className="text-[#3F3F46] text-[13px] font-semibold leading-relaxed">
                          123 Oxford Street, London, <br />W1D 2HG
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="bg-[#F15A2415] p-2.5 rounded-xl shrink-0 h-fit">
                        <Clock size={18} className="text-[#F15A24]" />
                      </div>
                      <div>
                        <h4 className="text-[11px] font-bold text-[#A1A1AA] uppercase tracking-wider mb-1">OPENING HOURS</h4>
                        <p className="text-[#3F3F46] text-[13px] font-semibold leading-relaxed">
                          Mon-Sun: 8:00 AM - 8:00 PM
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="bg-[#22C55E15] p-2.5 rounded-xl shrink-0 h-fit">
                        <Calendar size={18} className="text-[#22C55E]" />
                      </div>
                      <div>
                        <h4 className="text-[11px] font-bold text-[#A1A1AA] uppercase tracking-wider mb-1">AVAILABILITY</h4>
                        <p className="text-[#22C55E] text-[13px] font-bold leading-relaxed">
                          Next available: Tomorrow
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h4 className="text-[11px] font-bold text-[#A1A1AA] uppercase tracking-wider mb-4">NEED HELP?</h4>
                    <div className="space-y-3">
                      <a href="tel:02012345678" className="flex items-center gap-2.5 text-[#3F3F46] hover:text-[#F15A24] transition-colors text-[13px] font-bold">
                        <Phone size={16} />
                        020 1234 5678
                      </a>
                      <a href="mailto:london@getlicensed.co.uk" className="flex items-center gap-2.5 text-[#3F3F46] hover:text-[#F15A24] transition-colors text-[13px] font-bold">
                        <Mail size={16} />
                        london@getlicensed.co.uk
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Main - Form */}
              <div className="flex-1 mt-40">
                <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }} className="space-y-8">

                  {/* Personal Information */}
                  <div>
                    <div className="flex  items-center gap-2 mb-6">
                      <User size={18} className="text-[#F15A24]" />
                      <h3 className="text-[18px] font-bold text-[#1E293B]">Personal Information</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-[14px] font-bold text-[#3F3F46]">First Name *</label>
                        <input
                          type="text"
                          placeholder="John"
                          className="w-full bg-white border border-gray-200 rounded-[14px] px-4 py-3.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#F15A24]/10 focus:border-[#F15A24] transition-all"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[14px] font-bold text-[#3F3F46]">Last Name *</label>
                        <input
                          type="text"
                          placeholder="Smith"
                          className="w-full bg-white border border-gray-200 rounded-[14px] px-4 py-3.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#F15A24]/10 focus:border-[#F15A24] transition-all"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[14px] font-bold text-[#3F3F46]">Email Address *</label>
                        <input
                          type="email"
                          placeholder="john.smith@email.com"
                          className="w-full bg-white border border-gray-200 rounded-[14px] px-4 py-3.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#F15A24]/10 focus:border-[#F15A24] transition-all"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[14px] font-bold text-[#3F3F46]">Phone Number *</label>
                        <input
                          type="tel"
                          placeholder="07XXX XXX XXX"
                          className="w-full bg-white border border-gray-200 rounded-[14px] px-4 py-3.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#F15A24]/10 focus:border-[#F15A24] transition-all"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Course Details */}
                  <div>
                    <div className="flex items-center gap-2 mb-6">
                      <Calendar size={18} className="text-[#F15A24]" />
                      <h3 className="text-[18px] font-bold text-[#1E293B]">Course Details</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-[14px] font-bold text-[#3F3F46]">Select Course *</label>
                        <select className="w-full bg-white border border-gray-200 rounded-[14px] px-4 py-3.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#F15A24]/10 focus:border-[#F15A24] transition-all appearance-none cursor-pointer">
                          <option value="">Select a course</option>
                          {centre.courses.map((c, i) => (
                            <option key={i} value={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[14px] font-bold text-[#3F3F46]">Preferred Start Date *</label>
                        <input
                          type="date"
                          className="w-full bg-white border border-gray-200 rounded-[14px] px-4 py-3.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#F15A24]/10 focus:border-[#F15A24] transition-all cursor-pointer"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="space-y-2">
                    <label className="text-[14px] font-bold text-[#3F3F46]">Additional Information (Optional)</label>
                    <textarea
                      placeholder="Any special requirements or questions..."
                      rows={4}
                      className="w-full bg-white border border-gray-200 rounded-[18px] px-4 py-3.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#F15A24]/10 focus:border-[#F15A24] transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* What happens next box */}
                  <div className="bg-[#FFF8F6] border border-[#F15A2420] rounded-[20px] p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <CheckCircle2 size={20} className="text-[#1E293B]" />
                      <h4 className="text-[15px] font-bold text-[#1E293B]">What happens next?</h4>
                    </div>
                    <ul className="space-y-2.5">
                      <li className="flex items-center gap-2 text-[13px] text-[#475569] font-medium">
                        <span className="text-[#F15A24]">✓</span> We'll review your booking request
                      </li>
                      <li className="flex items-center gap-2 text-[13px] text-[#475569] font-medium">
                        <span className="text-[#F15A24]">✓</span> You'll receive confirmation within 24 hours
                      </li>
                      <li className="flex items-center gap-2 text-[13px] text-[#475569] font-medium">
                        <span className="text-[#F15A24]">✓</span> Payment details will be sent via email
                      </li>
                    </ul>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-8 pt-4 border-t border-gray-100 flex justify-end items-center gap-4 bg-gray-50/50">
          <button
            type="button"
            onClick={onClose}
            className="px-10 py-3.5 rounded-full text-[15px] font-bold text-[#3F3F46] hover:bg-gray-100 transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onSubmit}
            className="bg-[#2D3339] hover:bg-[#1E2429] text-white px-10 py-3.5 rounded-full text-[15px] font-bold flex items-center gap-2 transition-all shadow-lg shadow-black/10"
          >
            Submit Booking
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
