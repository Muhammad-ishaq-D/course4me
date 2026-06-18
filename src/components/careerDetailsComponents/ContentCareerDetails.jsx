import React from "react";
import { NavLink } from "react-router-dom";
import {
  ArrowLeft,
  Briefcase,
  Shield,
  Wallet,
  Rocket,
  Sparkles,
} from "lucide-react";

const ContentCareerDetails = ({ career }) => {
  return (
    /* ==================== MAIN WRAPPER ==================== */
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 md:py-10">
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-5 lg:gap-6">
        {/* ================= LEFT CONTENT ================= */}
        <div className="space-y-5 md:space-y-6">
          {/* ================= ABOUT CAREER ================= */}
          <div className="bg-white rounded-[24px] md:rounded-[30px] border border-gray-200 p-5 sm:p-6 md:p-7 shadow-sm">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#FFF1EB] flex items-center justify-center shrink-0">
                <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-[#F8510C]" />
              </div>

              <div>
                <h2 className="text-[22px] sm:text-[24px] md:text-[26px] font-black text-[#111827] leading-tight">
                  About This Career
                </h2>

                <p className="mt-2 text-base text-[#667085] leading-relaxed">
                  Learn about the responsibilities, work environment and
                  opportunities in this profession.
                </p>
              </div>
            </div>

            <p className="mt-5 md:mt-6 text-[#667085] leading-[1.9] text-[14px] sm:text-base">
              {career.jobDescription}
            </p>
          </div>

          {/* ================= HOW TO BECOME ================= */}
          <div className="bg-white rounded-[24px] md:rounded-[30px] border border-gray-200 p-5 sm:p-6 md:p-7 shadow-sm">
            {/* Header */}
            <div className="flex items-start gap-3 sm:gap-4 mb-7 md:mb-8">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#FFF1EB] flex items-center justify-center shrink-0">
                <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-[#F8510C]" />
              </div>

              <div>
                <h2 className="text-[22px] sm:text-[24px] md:text-[26px] font-black text-[#111827] leading-tight">
                  How To Become a {career.title}
                </h2>

                <p className="mt-2 text-base text-[#667085] leading-relaxed">
                  Follow these professional steps to start your career journey.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-6 md:space-y-7">
              {/* STEP */}
              {[
                {
                  number: "01",
                  title: "Choose The Required Course",
                  desc: `Select the professional training course required for becoming a successful ${career.title}.`,
                },
                {
                  number: "02",
                  title: "Enroll In The Course",
                  desc: "Register with an approved training centre and begin your practical learning experience.",
                  button: true,
                },
                {
                  number: "03",
                  title: "Complete Training & Pass Assessment",
                  desc: "Successfully complete your course modules and pass the required assessments.",
                },
                {
                  number: "04",
                  title: "Achieve Your Licence",
                  desc: "Receive your recognised licence and become job-ready for the industry.",
                },
                {
                  number: "05",
                  title: "Apply For Jobs",
                  desc: `Start applying for jobs related to ${career.title} roles across different industries.`,
                },
              ].map((step, index) => (
                <div key={index} className="relative flex gap-4 sm:gap-5">
                  {/* Number */}
                  <div className="relative z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#F8510C] text-white flex items-center justify-center font-black text-sm sm:text-base shadow-lg shadow-[#F8510C]/20 shrink-0">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-1 pl-5 sm:pl-6 ml-[-10px] ${
                      index !== 4
                        ? "pb-6 md:pb-7 border-l-2 border-dashed border-[#FFD5C4]"
                        : ""
                    }`}
                  >
                    <h3 className="text-[18px] sm:text-lg font-black text-[#111827] leading-snug">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-[14px] sm:text-[16px] leading-[1.8] text-[#667085]">
                      {step.desc}
                    </p>

                    {/* NEW BUTTON */}
                    {step.button && (
                      <button className="mt-5 w-full sm:w-auto inline-flex items-center justify-center gap-2 h-11 px-5 rounded-2xl bg-[#F8510C] hover:bg-[#E04809] text-white text-sm font-bold transition-all duration-300 hover:gap-3 shadow-lg shadow-[#F8510C]/20">
                        Find Your Course Now
                        <Rocket className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= PERSONALITY TRAITS ================= */}
          <div className="bg-white rounded-[24px] md:rounded-[30px] border border-gray-200 p-5 sm:p-6 md:p-7 shadow-sm">
            <div className="flex items-center gap-3 sm:gap-4 mb-5 md:mb-6">
              <div className="p-4 rounded-2xl bg-[#FFF1EB] flex items-center justify-center">
                <Sparkles size={18} className=" text-[#F8510C]" />
              </div>

              <div>
                <h2 className="text-[22px] sm:text-[24px] md:text-[26px] font-black text-[#111827]">
                  Personality Traits
                </h2>

                <p className="mt-1 text-base text-[#667085]">
                  Important qualities and strengths required for success.
                </p>
              </div>
            </div>

            {/* Traits */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {career.personalityTraits.map((trait, index) => (
                <div
                  key={index}
                  className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl bg-[#FFF7F3] border border-[#FFE2D6] text-[#F8510C] font-bold text-xs sm:text-sm hover:bg-[#F8510C] hover:text-white transition-all duration-300"
                >
                  {trait}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDEBAR ================= */}
        <div className="space-y-5 xl:sticky xl:top-5 h-fit">
          {/* Wage Card */}
          <div className="bg-gradient-to-br from-[#111827] to-[#1F2937] rounded-[24px] md:rounded-[30px] p-5 sm:p-6 text-white overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#F8510C]/20 blur-[90px]" />

            <div className="relative z-10">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#F8510C]/15 border border-[#F8510C]/20 flex items-center justify-center">
                <Wallet className="w-5 h-5 sm:w-6 sm:h-6 text-[#F8510C]" />
              </div>

              <p className="mt-5 text-white/60 text-xs sm:text-sm uppercase tracking-[0.14em]">
                Average Wage Rate
              </p>

              <h2 className="mt-2 text-[34px] sm:text-[40px] leading-none font-black">
                {career.salary}
              </h2>

              <p className="mt-4 text-base text-white/70 leading-relaxed">
                Estimated salary based on experience and employer demand.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-white/50">Entry Level</p>

                  <h4 className="mt-2 font-black text-lg sm:text-xl">£22K</h4>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-white/50">Demand</p>

                  <h4 className="mt-2 font-black text-lg sm:text-xl">High</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Overview */}
          <div className="bg-white rounded-[24px] md:rounded-[30px] border border-gray-200 p-5 sm:p-6 shadow-sm">
            <h3 className="text-[22px] sm:text-[24px] font-black text-[#111827]">
              Career Overview
            </h3>

            <div className="space-y-5 mt-6 md:mt-7">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#FFF1EB] flex items-center justify-center shrink-0">
                  <Briefcase className="w-5 h-5 text-[#F8510C]" />
                </div>

                <div>
                  <p className="text-base text-[#667085]">Experience Level</p>

                  <h4 className="mt-1 text-lg font-bold text-[#111827]">
                    {career.level}
                  </h4>
                </div>
              </div>

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
            </div>

            {/* CTA */}
            <button
              onClick={() => {
                const el = document.getElementById("jobs-section");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full mt-7 h-12 sm:h-13 rounded-2xl bg-[#F8510C] hover:bg-[#E04809] transition-all text-white text-sm sm:text-base font-bold shadow-lg shadow-[#F8510C]/20 active:scale-95"
            >
              Apply For This Career Jobs
            </button>
          </div>

          {/* Back */}
          <NavLink
            to="/careers"
            className="flex items-center justify-center gap-2 w-full h-12 sm:h-13 rounded-2xl border border-gray-200 bg-white font-semibold text-[#111827] hover:border-[#F8510C]/20 hover:text-[#F8510C] transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back To Careers
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ContentCareerDetails;
