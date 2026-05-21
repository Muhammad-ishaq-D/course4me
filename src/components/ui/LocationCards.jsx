import React, { useState } from "react";
import {
  Car,
  Navigation,
  MapPin,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Clock,
  Calendar,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const LocationCards = ({ loc, course }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative mb-8">
      {/* Recommended Badge */}
      {loc.recommended && (
        <div className="absolute -top-3 left-8 z-10 bg-[#F15A24] text-white text-[10px] font-black py-1 px-4 rounded-full uppercase tracking-widest shadow-lg shadow-[#F15A24]/20">
          <Zap size={10} fill="currentColor" className="inline mr-1 mb-0.5" />
          Recommended
        </div>
      )}

      <div
        className={`bg-white rounded-3xl border transition-all duration-300 ${loc.recommended ? "border-[#F15A24]/30 shadow-xl" : "border-gray-100 shadow-sm"}`}
      >
        <div className="p-6 md:p-6">
          {/* Header Section: Title & Price in one line */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <span className="bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider mb-2 inline-block">
                SIA Training
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-[#1C1C1C] tracking-tight">
                {loc.name}
              </h2>
              <div className="flex items-center gap-1.5 mt-1 text-gray-400 font-medium text-sm">
                <MapPin size={14} className="text-[#F15A24]" />
                {loc.address} •{" "}
                <span className="text-[#F15A24]">{loc.distance}</span>
              </div>
            </div>

            <div className="md:text-right">
              <p className="text-[13px] font-bold text-[#F15A24] mb-1">
                Next Session: {loc.nextDate}
              </p>
              <div className="flex items-baseline md:justify-end">
                <span className="text-sm font-bold text-gray-400 mr-2">
                  From
                </span>
                <span className="text-4xl font-black text-[#1C1C1C]">
                  £{Math.floor(loc.price)}
                </span>
              </div>
              <p className="text-[11px] text-gray-400 font-medium">
                Interest-free finance available
              </p>
            </div>
          </div>

          {/* Infographics Row - Horizontal Layout */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-5 border-y border-gray-50">
            {/* Parking */}
            <div className="flex flex-col items-start">
              <p className="text-[10px] uppercase tracking-widest font-black text-gray-400 mb-1.5">
                Parking
              </p>
              <p className="text-[14px] font-bold text-gray-700 leading-snug">
                Available
                <span className="text-gray-400 font-normal block text-xs mt-0.5">
                  nearby
                </span>
              </p>
            </div>

            {/* Commute */}
            <div className="flex flex-col items-start">
              <p className="text-[10px] uppercase tracking-widest font-black text-gray-400 mb-1.5">
                Commute
              </p>
              <p className="text-[14px] font-bold text-gray-700 leading-snug">
                Short walk
                <span className="text-gray-400 font-normal block text-xs mt-0.5">
                  from station
                </span>
              </p>
            </div>

            {/* Duration */}
            <div className="flex flex-col items-start">
              <p className="text-[10px] uppercase tracking-widest font-black text-gray-400 mb-1.5">
                Duration
              </p>
              <p className="text-[14px] font-bold text-gray-700">
                {loc.duration}
              </p>
            </div>

            {/* Popularity */}
            <div className="flex flex-col items-start">
              <p className="text-[10px] uppercase tracking-widest font-black text-gray-400 mb-1.5">
                Popularity
              </p>
              <p className="text-[14px] font-bold text-[#F15A24]">
                {loc.booked}+
                <span className="text-gray-400 font-normal text-xs ml-1">
                  Booked
                </span>
              </p>
            </div>
          </div>

          {/* Centered Button Section */}
          <div className="mt-5 flex flex-col items-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`group min-w-70 flex items-center justify-center gap-3 py-4 px-8 rounded-2xl font-black text-sm transition-all duration-300 bg-[#F15A24] text-white hover:bg-[#d84a1a] shadow-xl shadow-[#F15A24]/25 hover:-translate-y-1
              ${isExpanded ? "bg-[#d84a1a] hover:bg-[#c0392b]" : "bg-[#F15A24] hover:bg-[#d84a1a]"}`}
            >
              Select Training Date
              {isExpanded ? (
                <ChevronUp size={18} />
              ) : (
                <ChevronDown size={18} className="animate-bounce" />
              )}
            </button>
          </div>
        </div>

        {/* Expanded Content (Same as before but styled to match) */}
        {isExpanded && (
          <div className="bg-slate-50 border-t rounded-3xl border-slate-100 p-6 md:p-8 space-y-3 animate-in fade-in slide-in-from-top-2">
            <h4 className="text-[11px] text-slate-400 font-black uppercase tracking-widest flex items-center gap-2 mb-4">
              <Calendar size={14} /> Available Course Slots
            </h4>

            {(
              loc.dates || [
                {
                  range: "Mon 23rd Mar 2026 - Thu 26th Mar 2026",
                  price: loc.price,
                  id: 1,
                },
                {
                  range: "Mon 30th Mar 2026 - Thu 2nd Apr 2026",
                  price: loc.price,
                  id: 2,
                },
                {
                  range: "Mon 6th Apr 2026 - Thu 9th Apr 2026",
                  price: (parseFloat(loc.price) + 10).toFixed(2),
                  id: 3,
                },
              ]
            ).map((date, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:row sm:flex-row items-center justify-between gap-4 p-4 bg-white rounded-xl border border-[#F15A24] hover:shadow-md transition-all group/date"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center  bg-[#F15A24] text-white transition-colors">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      {date.range}
                    </p>
                    <p className="text-[11px] text-slate-500 font-medium">
                      9:00 AM - 5:00 PM Daily
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6 w-full sm:w-auto justify-between">
                  <div className="text-right">
                    <p className="text-lg font-black text-slate-900">
                      £{date.price}
                    </p>
                  </div>
                  <Link
                    to={`/booking/packages?courseId=${course._id}&scheduleId=${date.id}`}
                    className="hover:bg-[#d84a1a] text-white px-6 py-2.5 rounded-lg text-xs font-bold bg-[#F15A24] transition-all shadow-sm"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationCards;
