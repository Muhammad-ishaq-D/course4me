import React from "react";
import { Star, MapPin, Award, ShieldCheck, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

function TrainerCard({ trainer, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-[30px] bg-white border border-gray-100 shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_60px_rgba(248,81,12,0.12)] transition-all duration-500 h-full flex flex-col justify-between"
    >
      {/* TOP ACCENT BAR */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF5421] to-[#FF7A4D] z-10" />

      <div>
        {/* IMAGE & OVERLAY AREA */}
        <div className="relative h-[220px] overflow-hidden bg-black shrink-0">
          <img
            src={trainer.image}
            alt={trainer.name}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-700"
          />
          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/20 to-transparent" />

          {/* BADGE */}
          <div className="absolute top-4 left-4 z-10">
            <div className="flex items-center gap-1.5 bg-[#FF5421] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              <ShieldCheck size={15} />
              {trainer.badge}
            </div>
          </div>

          {/* RATING */}
          <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 text-xs font-bold shadow-lg">
            <Star size={15} className="text-[#FF5421] fill-[#FF5421]" />
            <span className="text-[#111111]">{trainer.rating}</span>
          </div>

          {/* NAME & ROLE */}
          <div className="absolute bottom-4 left-5 right-5 z-10">
            <h3 className="text-xl font-bold text-white leading-tight">
              {trainer.name}
            </h3>
            <p className="text-sm text-gray-300 font-medium mt-0.5">
              {trainer.role}
            </p>
          </div>
        </div>

        {/* CONTENT BODY */}
        <div className="p-5 sm:p-6 flex flex-col flex-1">
          {/* TITLE */}
          <h4 className="text-lg font-bold text-[#111111] leading-tight line-clamp-2 min-h-[2.5rem]">
            {trainer.title}
          </h4>

          {/* STATS GRID */}
          <div className="grid grid-cols-2 gap-2.5 mt-4">
            {/* EXPERIENCE */}
            <div className="flex items-center gap-2.5 bg-[#FFF7F4] border border-[#FFE1D5] rounded-xl p-2.5 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-[#FF5421] flex items-center justify-center shrink-0">
                <Award size={18} className="text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-wide text-gray-400 font-extrabold truncate">
                  Experience
                </p>
                <p className="text-xs font-bold text-[#111111] truncate">
                  {trainer.experience}
                </p>
              </div>
            </div>

            {/* LOCATIONS */}
            <div className="flex items-center gap-2.5 bg-[#FFF7F4] border border-[#FFE1D5] rounded-xl p-2.5 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-[#FF5421] flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-wide text-gray-400 font-extrabold truncate">
                  Locations
                </p>
                <p className="text-xs font-bold text-[#111111] truncate">
                  {trainer.locations?.length || 0} Cities
                </p>
              </div>
            </div>
          </div>

          {/* CITY TAGS */}
          <div className="flex flex-wrap gap-1.5 mt-4">
            {trainer.locations?.slice(0, 3).map((city, i) => (
              <span
                key={i}
                className="bg-[#F9FAFB] border border-gray-100 text-gray-600 px-2.5 py-1 rounded-lg text-xs font-semibold hover:bg-[#FF5421] hover:text-white transition-all duration-300"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER BUTTON (ALIGNED AT BOTTOM) */}
      <div className="p-5 sm:p-6 pt-0 mt-auto">
        <button
          onClick={onClick}
          className="group/btn w-full bg-[#FF5421] hover:bg-[#FF6A3D] text-white rounded-xl py-3 font-bold transition-all cursor-pointer duration-300 text-sm flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(248,81,12,0.2)] active:scale-95"
        >
          <span>View Profile</span>
          <ChevronRight
            size={16}
            className="transition-transform duration-300 group-hover/btn:translate-x-1"
          />
        </button>
      </div>

      {/* HOVER ACCENT BORDER */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#FF5421]/10 rounded-[30px] transition-all duration-500 pointer-events-none" />
    </motion.div>
  );
}

export default TrainerCard;
