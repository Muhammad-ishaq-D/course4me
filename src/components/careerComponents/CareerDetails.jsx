import React from "react";
import { useParams, NavLink } from "react-router-dom";
import {
  ArrowLeft,
  Briefcase,
  Shield,
  Wallet,
  CheckCircle2,
  ArrowRight,
  Star,
  Heart,
  Rocket,
  Sparkles,
} from "lucide-react";

import { careersData } from "../../data/careerData";

const CareerDetails = () => {
  const { id } = useParams();

  const career = careersData.find((item) => item.id === Number(id));

  if (!career) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">Career Not Found</h2>
      </div>
    );
  }

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
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
                <button className="inline-flex items-center gap-3 h-12 px-6 rounded-2xl bg-[#F8510C] hover:bg-[#E04809] text-white text-[14px] font-bold shadow-[0_15px_35px_rgba(248,81,12,0.30)] transition-all duration-300 hover:gap-4">
                  Apply For This Career
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

      {/* ==================== CONTENT ==================== */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-6">
          {/* ================= LEFT CONTENT ================= */}
          <div className="space-y-5">
            {/* Job Description */}
            <div className="bg-white rounded-[30px] border border-gray-200 p-6 md:p-7 shadow-sm">
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-[#FFF1EB] flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-[#F8510C]" />
                </div>

                <div>
                  <h2 className="text-[24px] font-black text-[#111827]">
                    Job Description
                  </h2>

                  <p className="text-sm text-[#667085] mt-1">
                    Understand the responsibilities and daily tasks involved in
                    this role.
                  </p>
                </div>
              </div>

              {/* Content */}
              <p className="text-[#667085] leading-[1.9] text-[15px]">
                {career.jobDescription}
              </p>
            </div>

            {/* How To Start */}
            <div className="bg-white rounded-[30px] border border-gray-200 p-6 md:p-7 shadow-sm">
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-[#FFF1EB] flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-[#F8510C]" />
                </div>

                <div>
                  <h2 className="text-[24px] font-black text-[#111827]">
                    How To Start
                  </h2>

                  <p className="text-sm text-[#667085] mt-1">
                    Step-by-step guidance to begin your career journey
                    successfully.
                  </p>
                </div>
              </div>

              {/* Content */}
              <p className="text-[#667085] leading-[1.9] text-[15px]">
                {career.howTo}
              </p>
            </div>

            {/* Personality Traits */}
            <div className="bg-white rounded-[30px] border border-gray-200 p-6 md:p-7 shadow-sm">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#FFF1EB] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[#F8510C]" />
                </div>

                <div>
                  <h2 className="text-[24px] font-black text-[#111827]">
                    Personality Traits
                  </h2>

                  <p className="text-sm text-[#667085] mt-1">
                    Key strengths and qualities needed for success in this role.
                  </p>
                </div>
              </div>

              {/* Traits */}
              <div className="flex flex-wrap gap-3">
                {career.personalityTraits.map((trait, index) => (
                  <div
                    key={index}
                    className="px-5 py-3 rounded-2xl bg-[#FFF7F3] border border-[#FFE2D6] text-[#F8510C] font-bold text-sm hover:bg-[#F8510C] hover:text-white transition-all duration-300 cursor-default"
                  >
                    {trait}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDEBAR ================= */}
          <div className="space-y-5 md:sticky md:top-5 h-fit">
            {/* Salary Card */}
            <div className="bg-gradient-to-br from-[#111827] to-[#1F2937] rounded-[30px] p-6 text-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden relative">
              {/* Glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#F8510C]/20 blur-[90px]" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#F8510C]/15 border border-[#F8510C]/20 flex items-center justify-center">
                  <Wallet className="w-6 h-6 text-[#F8510C]" />
                </div>

                <p className="mt-5 text-white/60 text-sm uppercase tracking-[0.14em]">
                  Average Wage Rate
                </p>

                <h2 className="mt-2 text-[38px] leading-none font-black">
                  {career.salary}
                </h2>

                <p className="mt-4 text-sm text-white/70 leading-relaxed">
                  Estimated salary may vary depending on experience, location
                  and employer.
                </p>
              </div>
            </div>

            {/* Overview */}
            <div className="bg-white rounded-[30px] border border-gray-200 p-6 shadow-sm">
              <h3 className="text-[22px] font-black text-[#111827]">
                Career Overview
              </h3>

              <div className="space-y-5 mt-7">
                {/* Experience */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#FFF1EB] flex items-center justify-center shrink-0">
                    <Briefcase className="w-5 h-5 text-[#F8510C]" />
                  </div>

                  <div>
                    <p className="text-sm text-[#667085]">Experience Level</p>

                    <h4 className="mt-1 font-bold text-[#111827]">
                      {career.level}
                    </h4>
                  </div>
                </div>

                {/* Licence */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#FFF1EB] flex items-center justify-center shrink-0">
                    <Shield className="w-5 h-5 text-[#F8510C]" />
                  </div>

                  <div>
                    <p className="text-sm text-[#667085]">Required Licence</p>

                    <h4 className="mt-1 font-bold text-[#111827]">
                      {career.licence}
                    </h4>
                  </div>
                </div>

                {/* Popular */}
                {career.popular && (
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-[#FFF1EB] flex items-center justify-center shrink-0">
                      <Star className="w-5 h-5 text-[#F8510C] fill-[#F8510C]" />
                    </div>

                    <div>
                      <p className="text-sm text-[#667085]">Career Status</p>

                      <h4 className="mt-1 font-bold text-[#111827]">
                        High Demand Career
                      </h4>
                    </div>
                  </div>
                )}
              </div>

              {/* Apply Button */}
              <button className="w-full mt-8 h-13 rounded-2xl bg-[#F8510C] hover:bg-[#E04809] transition-all text-white font-bold shadow-lg shadow-[#F8510C]/20">
                Apply Now
              </button>
            </div>

            {/* Back */}
            <NavLink
              to="/careers"
              className="flex items-center justify-center gap-2 w-full h-13 rounded-2xl border border-gray-200 bg-white font-semibold text-[#111827] hover:border-[#F8510C]/20 hover:text-[#F8510C] transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Back To Careers
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerDetails;
