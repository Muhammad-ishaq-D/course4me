import React from "react";
import {
  ChevronRight,
  Shield,
  Clock3,
  BadgeCheck,
  BookOpen,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const HeroSection = ({ license }) => {
  const scrollToTraining = () => {
    const el = document.getElementById("required-training");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
  let titleMain = license?.title || "Door Supervisor Licence";
  let titleHighlight = "";

  if (
    titleMain.toLowerCase().endsWith("licence") ||
    titleMain.toLowerCase().endsWith("license")
  ) {
    const words = titleMain.split(" ");
    titleHighlight = words.pop();
    titleMain = words.join(" ") + " ";
  }

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
        <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-white/50 mb-4">
          <NavLink
            to="/"
            className="hover:text-[#F15A24] cursor-pointer transition-all duration-300"
          >
            Home
          </NavLink>

          <ChevronRight size={16} />

          <NavLink
            to="/licences"
            className="hover:text-[#F15A24] cursor-pointer transition-all duration-300"
          >
            Licenses
          </NavLink>

          <ChevronRight size={16} />

          <span className="text-white font-semibold">
            {license?.title || "Door Supervisor Licence"}
          </span>
        </div>

        {/* ===================HERO CONTENT====================== */}
        <div className="grid xl:grid-cols-[1fr_360px] gap-10 ">
          {/* ===================LEFT CONTENT======================= */}
          <div className="max-w-4xl pt-5  md:pt-10">
            {/* TOP BADGES */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              {/* VERIFIED */}
              <div className="inline-flex items-center gap-2 bg-[#22C55E]/10 border border-[#22C55E]/20 text-[#4ADE80] py-1 px-2 rounded-full font-semibold text-xs md:text-sm backdrop-blur-xl">
                <BadgeCheck size={18} />
                Verified provider
              </div>

              {/* CATEGORY */}
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white px-3 py-1 rounded-full text-xs md:text-sm font-medium backdrop-blur-xl">
                {license?.category || "SIA Training"}
              </div>
            </div>

            {/* TITLE */}
            <h1 className="text-4xl md:text-6xl xl:text-[74px] font-black leading-[0.95] tracking-tight text-white">
              {titleMain}{" "}
              <span className="block text-[#F15A24]">{titleHighlight}</span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-7 text-base md:text-lg leading-8 text-white/70 max-w-3xl">
              {license?.shortDescription ||
                "Professional security training and certification required for working in licensed venues, events, and security environments across the UK."}
            </p>

            {/* TAGS */}
            <div className="flex gap-2 md:gap-4 mt-10">
              {/* DURATION */}
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-4 rounded-2xl backdrop-blur-xl">
                <div className="p-3 rounded-xl bg-white/10 flex items-center justify-center">
                  <Clock3 size={20} className="text-[#F15A24]" />
                </div>

                <div className="flex flex-col items-center">
                  <p className="text-white/50 text-sm uppercase tracking-wide">
                    Duration
                  </p>

                  <p className="text-white font-semibold text-base">
                    {license?.duration || "6 Days"}
                  </p>
                </div>
              </div>

              {/* VALIDITY */}
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-3 md:px-5 py-2 md:py-4 rounded-2xl backdrop-blur-xl">
                <div className="p-3 rounded-xl bg-white/10 flex items-center justify-center">
                  <Shield size={20} className="text-[#F15A24]" />
                </div>

                <div className="flex flex-col items-center">
                  <p className="text-white/50 text-sm uppercase tracking-wide">
                    Validity
                  </p>

                  <p className="text-white font-semibold text-md">
                    {license?.valid || "3 Years"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =======================RIGHT CARD======================== */}
          <div className="w-full  ">
            <div className="relative overflow-hidden bg-white/10 border border-white/10 backdrop-blur-2xl rounded-4xl p-7 shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
              {/* CARD GLOW */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#F15A24]/20 blur-[80px] rounded-full pointer-events-none" />

              {/* THUMBNAIL IMAGE */}
              {license?.thumbnail && (
                <div className="relative w-full h-[150px] rounded-3xl overflow-hidden mb-6 border border-white/10 shadow-[0_8px_25px_rgba(0,0,0,0.3)]">
                  <img
                    src={license.thumbnail}
                    alt={license.title || "License Thumbnail"}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </div>
              )}

              {/* LABEL */}
              <p className="relative uppercase tracking-[0.25em] text-white/50 text-xs font-bold">
                Training Starts From
              </p>

              {/* PRICE */}
              <div className="relative flex items-end  mt-5">
                <span className="text-white/70 text-2xl font-semibold">£</span>

                <h2 className="text-6xl font-black text-white leading-none">
                  {license?.pricing && typeof license.pricing === "object"
                    ? license.pricing.salePrice || license.pricing.basePrice
                    : "219"}
                </h2>
              </div>

              {/* DESCRIPTION */}
              <p className="relative text-white/60 mt-5 leading-7 text-base">
                {license?.shortDescription ||
                  "Includes training materials, assessments, certification support, and professional guidance."}
              </p>

              {/* FEATURES */}
              <div className="relative mt-6 space-y-3">
                <div className="flex items-center gap-3 text-white/70 text-base">
                  <div className="w-2 h-2 rounded-full bg-[#F15A24]" />
                  Accredited training provider
                </div>

                <div className="flex items-center gap-3 text-white/70 text-base">
                  <div className="w-2 h-2 rounded-full bg-[#F15A24]" />
                  Flexible booking dates
                </div>

                <div className="flex items-center gap-3 text-white/70 text-base">
                  <div className="w-2 h-2 rounded-full bg-[#F15A24]" />
                  Certificate included
                </div>
              </div>

              {/* PRIMARY BUTTON */}
              <button
                onClick={scrollToTraining}
                className="relative mt-8 w-full cursor-pointer bg-[#F15A24] hover:bg-[#db4c14] text-white py-4 rounded-2xl font-bold text-base md:text-lg transition-all duration-300 shadow-[0_15px_40px_rgba(241,90,36,0.35)] hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <BookOpen size={20} />
                View Required Courses
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
