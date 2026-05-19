import React from "react";
import { NavLink } from "react-router-dom";
import {
  Briefcase,
  Shield,
  CheckCircle2,
  ArrowRight,
  Star,
  Heart,
} from "lucide-react";

const HeroCareerDetails = ({ career }) => {
  return (
    <>
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative overflow-hidden bg-[#071120]">
        {/* ================== BACKGROUND GLOWS ================== */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Left Glow */}
          <div className="absolute left-0 top-0 w-[350px] h-[350px] bg-blue-600/20 blur-[110px]" />

          {/* Right Glow */}
          <div className="absolute right-0 top-0 w-[350px] h-[350px] bg-orange-500/20 blur-[110px]" />

          {/* Center Glow */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-orange-500/10 blur-[140px]" />
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 items-center">
            {/* ================= LEFT CONTENT ================= */}
            <div>
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-[13px] mb-4">
                <NavLink
                  to="/"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Home
                </NavLink>

                <span className="text-white/30">›</span>

                <NavLink
                  to="/careers"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Careers
                </NavLink>

                <span className="text-white/30">›</span>

                <span className="text-white font-medium truncate">
                  {career.title}
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-2 mb-5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0B8F55]/15 border border-[#0B8F55]/20 text-[#22C55E] text-xs font-bold backdrop-blur-md">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Career Path
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-white text-xs font-semibold backdrop-blur-md">
                  <Shield className="w-3.5 h-3.5 text-[#F8510C]" />

                  {career.licence}
                </div>
              </div>

              {/* Title */}
              <h1 className="text-[36px] md:text-[54px] leading-[1.02] font-black tracking-tight text-white max-w-4xl">
                {career.title}
              </h1>

              {/* Description */}
              <p className="mt-4 text-[15px] md:text-[17px] text-white/75 leading-relaxed max-w-2xl">
                {career.description}
              </p>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-5 mt-6 text-white/80 text-sm">
                {/* Popular */}
                {career.popular && (
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />

                    <span>Popular Career</span>
                  </div>
                )}
              </div>

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-3 mt-5 max-w-2xl">
                {career.personalityTraits.map((trait, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2.5 text-white/90"
                  >
                    <div className="w-4 h-4 rounded-full bg-[#F8510C]/20 border border-[#F8510C]/20 flex items-center justify-center">
                      <CheckCircle2 className="w-2.5 h-2.5 text-[#F8510C]" />
                    </div>

                    <span className="text-[14px]">{trait}</span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <div className="mt-8">
                <button className="inline-flex cursor-pointer items-center gap-3 h-12 px-6 rounded-2xl bg-[#F8510C] hover:bg-[#E04809] text-white text-[14px] font-bold shadow-[0_15px_35px_rgba(248,81,12,0.30)] transition-all duration-300 hover:gap-4">
                  Apply for This Career Course
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* ================= RIGHT CARD ================= */}
            <div className="relative">
              <div className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.30)]">
                {/* Image */}
                <div className="relative overflow-hidden rounded-[20px]">
                  <img
                    src={career.image}
                    alt={career.title}
                    className="w-full h-[210px] object-cover"
                  />

                  {/* Popular */}
                  {career.popular && (
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-2xl bg-[#FF3B30] flex items-center justify-center shadow-xl">
                      <Heart className="w-4 h-4 text-white fill-white" />
                    </div>
                  )}

                  {/* Badge */}
                  <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-bold">
                    High Demand
                  </div>
                </div>

                {/* Salary */}
                <div className="mt-4">
                  <p className="text-white/60 text-xs">Average Salary</p>

                  <h2 className="mt-1 text-3xl font-black text-white">
                    {career.salary}
                  </h2>
                </div>

                {/* Details */}
                <div className="mt-5 space-y-3 text-sm">
                  <div className="flex items-center justify-between text-white/80">
                    <div className="flex items-center gap-2.5">
                      <Briefcase className="w-4 h-4 text-[#F8510C]" />

                      <span>Experience</span>
                    </div>

                    <span className="font-semibold text-white">
                      {career.level}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-white/80">
                    <div className="flex items-center gap-2.5">
                      <Shield className="w-4 h-4 text-[#F8510C]" />

                      <span>Licence</span>
                    </div>

                    <span className="font-semibold text-white">
                      {career.licence}
                    </span>
                  </div>
                </div>

                {/* Bottom Card */}
                <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#00C853] mt-0.5" />

                    <div>
                      <h3 className="text-white text-sm font-bold">
                        Career Growth Opportunity
                      </h3>

                      <p className="text-xs text-white/60 mt-1 leading-relaxed">
                        Strong long-term demand and career progression
                        opportunities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroCareerDetails;
