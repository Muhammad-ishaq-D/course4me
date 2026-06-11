import React from "react";
import { Star, MapPin, Award, ShieldCheck, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function TrainerCard({ trainer, onClick }) {
  console.log(trainer);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className=" group relative overflow-hidden rounded-[30px]  bg-white border border-gray-100 shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_60px_rgba(248,81,12,0.12)] transition-all duration-500"
    >
      {/* TOP ORANGE LINE */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF5421] to-[#FF7A4D]" />

      {/* IMAGE */}
      <div className="relative h-[220px] overflow-hidden">
        <img
          src={trainer.image}
          alt={trainer.name}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
        />
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/20 to-transparent" />
        {/* BADGE */}
        <div className="absolute top-4 left-4">
          <div className="flex items-center gap-2 bg-[#FF5421] text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
            <ShieldCheck size={16} />
            {trainer.badge}
          </div>
        </div>

        {/* RATING */}
        <div className="absolute top-4 right-4 bg-white px-3 py-1.5 rounded-full flex items-center gap-1 text-xs font-bold shadow-lg">
          <Star size={16} className="text-[#FF5421] fill-[#FF5421]" />
          {trainer.rating}
        </div>

        {/* INFO */}
        <div className="absolute bottom-5 left-5 right-5">
          <h3 className="text-2xl font-bold text-white leading-tight">
            {trainer.name}
          </h3>

          <p className="text-base text-gray-300 mt-1">{trainer.role}</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        {/* TITLE */}
        <h4 className="text-2xl font-bold text-[#111111] leading-snug">
          {trainer.title}
        </h4>

        {/* STATS */}
        <div className="flex items-center justify-between mt-6 gap-3">
          {/* EXPERIENCE */}
          <div className="flex items-center gap-3 bg-[#FFF7F4] border border-[#FFE1D5] rounded-2xl px-4 py-3 flex-1">
            <div className="w-10 h-10 rounded-xl bg-[#FF5421] flex items-center justify-center flex-shrink-0">
              <Award size={22} className="text-white" />
            </div>

            <div>
              <p className="text-sm uppercase tracking-wide text-gray-400 font-bold">
                Experience
              </p>

              <p className="text-base font-bold text-[#111111]">
                {trainer.experience}
              </p>
            </div>
          </div>

          {/* LOCATIONS */}
          <div className="flex items-center gap-3 bg-[#FFF7F4] border border-[#FFE1D5] rounded-2xl px-4 py-3 flex-1">
            <div className="w-10 h-10 rounded-xl bg-[#FF5421] flex items-center justify-center flex-shrink-0">
              <MapPin size={22} className="text-white" />
            </div>

            <div>
              <p className="text-sm uppercase tracking-wide text-gray-400 font-bold">
                Locations
              </p>

              <p className="text-base font-bold text-[#111111]">
                {trainer.locations.length} Cities
              </p>
            </div>
          </div>
        </div>

        {/* CITY TAGS */}
        <div className="flex flex-wrap gap-2 mt-5">
          {trainer.locations.slice(0, 3).map((city, i) => (
            <span
              key={i}
              className=" bg-[#F9FAFB] border border-gray-100  text-gray-600 px-3 py-1.5 rounded-xl text-base  hover:bg-[#FF5421]  hover:text-white transition-all duration-300"
            >
              {city}
            </span>
          ))}
        </div>

        {/* BUTTON */}
        <button
          onClick={onClick}
          className=" group/btn mt-6 w-full bg-[#FF5421] hover:bg-[#FF6A3D]  text-white rounded-2xl py-3.5 font-bold transition-all cursor-pointer duration-300 text-base flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(248,81,12,0.25)]"
        >
          View Profile
          <ChevronRight
            size={17}
            className="transition-transform duration-300 group-hover/btn:translate-x-1"
          />
        </button>
      </div>

      {/* HOVER EFFECT */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#FF5421]/10 rounded-[30px] transition-all duration-500 pointer-events-none" />
    </motion.div>
  );
}
export default TrainerCard;
