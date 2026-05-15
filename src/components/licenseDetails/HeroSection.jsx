import React from "react";
import { ChevronRight, Shield, Clock3, BadgeCheck } from "lucide-react";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#16202A] via-[#18232E] to-[#0F1720] border-b border-white/5">
      {/* ================= BACKGROUND GLOWS ================= */}
      <div className="absolute -top-20 -right-20 w-[320px] h-80 bg-[#F8510C] rounded-full blur-[120px] opacity-30 pointer-events-none" />

      <div className="absolute -bottom-30 -left-30 w-75 h-75 bg-[#F15A24] rounded-full blur-[120px] opacity-10 pointer-events-none" />

      {/* ================= GRID OVERLAY ================= */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[60px_60px]" />

      {/* ====================CONTAINER====================== */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-14 lg:py-20">
        {/* =======================BREADCRUMB================= */}
        <div className="flex items-center gap-3 text-sm text-white/50 mb-4">
          <span className="hover:text-[#F15A24] cursor-pointer transition-all duration-300">
            Home
          </span>

          <ChevronRight size={16} />

          <span className="hover:text-[#F15A24] cursor-pointer transition-all duration-300">
            SIA Training
          </span>

          <ChevronRight size={16} />

          <span className="text-white font-semibold">
            Door Supervisor Licence
          </span>
        </div>

        {/* ===================HERO CONTENT====================== */}
        <div className="grid xl:grid-cols-[1fr_360px] gap-10 items-end">
          {/* ===================LEFT CONTENT======================= */}
          <div className="max-w-4xl">
            {/* TOP BADGES */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              {/* ICON */}
              <div className="w-16 h-16 rounded-[24px] bg-white/10 border border-white/10 backdrop-blur-xl flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                <Shield size={30} className="text-[#F15A24]" />
              </div>

              {/* VERIFIED */}
              <div className="inline-flex items-center gap-2 bg-[#22C55E]/10 border border-[#22C55E]/20 text-[#4ADE80] px-5 py-3 rounded-full font-semibold text-sm backdrop-blur-xl">
                <BadgeCheck size={18} />
                Verified provider
              </div>

              {/* CATEGORY */}
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white px-5 py-3 rounded-full text-sm font-medium backdrop-blur-xl">
                SIA Training
              </div>
            </div>

            {/* TITLE */}
            <h1 className="text-4xl md:text-6xl xl:text-[74px] font-black leading-[0.95] tracking-tight text-white">
              SIA Door
              <span className="block text-[#F15A24]">Supervisor Licence</span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-7 text-lg md:text-[19px] leading-8 text-white/70 max-w-3xl">
              Professional security training and certification required for
              working in licensed venues, events, and security environments
              across the UK.
            </p>

            {/* TAGS */}
            <div className="flex flex-wrap gap-4 mt-10">
              {/* DURATION */}
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-4 rounded-2xl backdrop-blur-xl">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Clock3 size={18} className="text-[#F15A24]" />
                </div>

                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wide">
                    Duration
                  </p>

                  <p className="text-white font-semibold text-sm">6 Days</p>
                </div>
              </div>

              {/* VALIDITY */}
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-4 rounded-2xl backdrop-blur-xl">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Shield size={18} className="text-[#F15A24]" />
                </div>

                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wide">
                    Validity
                  </p>

                  <p className="text-white font-semibold text-sm">3 Years</p>
                </div>
              </div>
            </div>
          </div>

          {/* =======================RIGHT CARD======================== */}
          <div className="w-full">
            <div className="relative overflow-hidden bg-white/10 border border-white/10 backdrop-blur-2xl rounded-4xl p-7 shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
              {/* CARD GLOW */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#F15A24]/20 blur-[80px] rounded-full pointer-events-none" />

              {/* LABEL */}
              <p className="relative uppercase tracking-[0.25em] text-white/50 text-xs font-bold">
                Starting From
              </p>

              {/* PRICE */}
              <div className="relative flex items-end gap-2 mt-5">
                <span className="text-white/70 text-2xl font-semibold">£</span>

                <h2 className="text-6xl font-black text-white leading-none">
                  219
                </h2>
              </div>

              {/* DESCRIPTION */}
              <p className="relative text-white/60 mt-5 leading-7 text-[15px]">
                Includes training materials, assessments, certification support,
                and professional guidance.
              </p>

              {/* FEATURES */}
              <div className="relative mt-6 space-y-3">
                <div className="flex items-center gap-3 text-white/70 text-sm">
                  <div className="w-2 h-2 rounded-full bg-[#22C55E]" />
                  Accredited training provider
                </div>

                <div className="flex items-center gap-3 text-white/70 text-sm">
                  <div className="w-2 h-2 rounded-full bg-[#22C55E]" />
                  Flexible booking dates
                </div>

                <div className="flex items-center gap-3 text-white/70 text-sm">
                  <div className="w-2 h-2 rounded-full bg-[#22C55E]" />
                  Certificate included
                </div>
              </div>

              {/* BUTTON */}
              <NavLink
                to={`/booking/course`}
                className="relative mt-8 w-full bg-[#F15A24] hover:bg-[#db4c14] text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-[0_15px_40px_rgba(241,90,36,0.35)] hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                Book Now
                <ChevronRight size={20} />
              </NavLink>

              {/* FOOTER */}
              <p className="relative text-center text-white/40 text-sm mt-5">
                No payment until enrolment confirmed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
