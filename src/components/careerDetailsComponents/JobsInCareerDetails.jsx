import React from "react";
import { Briefcase, Shield, ArrowRight } from "lucide-react";
import ApplyModal from "./ApplyJob";
import JobsCard from "../ui/JobsCard";
import { jobs } from "../../data/jobsData";

const JobsInCareerDetails = ({ career }) => {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#FFF8F5]" />

      {/* Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#F8510C]/5 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* ================= HEADER ================= */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF1EB] border border-[#FFE2D6] text-[#F8510C] text-xs font-black uppercase tracking-[0.14em]">
              Career Opportunities
            </div>

            {/* Title */}
            <h2 className="mt-5 text-[34px] md:text-[46px] leading-[1.05] font-black tracking-tight text-[#111827]">
              Explore {career.title} Jobs
            </h2>

            {/* Description */}
            <p className="mt-4 text-[#667085] text-[15px] md:text-[16px] leading-[1.9]">
              Discover verified opportunities related to this profession and
              start building your successful career journey today.
            </p>
          </div>

          {/* Button */}
          <button className="group inline-flex items-center justify-center gap-3 h-13 px-7 rounded-2xl bg-[#F8510C] hover:bg-[#E04809] text-white font-bold shadow-[0_20px_40px_rgba(248,81,12,0.25)] transition-all duration-300 hover:gap-4">
            Browse All Jobs
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* ================= JOBS GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {" "}
          {jobs.map((job) => (
            <JobsCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobsInCareerDetails;
