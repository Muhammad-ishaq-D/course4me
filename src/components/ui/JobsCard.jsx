import React from "react";
import {
  ArrowRight,
  Clock,
  DollarSign,
  MapPin,
  Star,
  Briefcase,
} from "lucide-react";

const JobsCard = ({ job, index, setSelectedJob }) => {
  return (
    <div
      key={index}
      className="group relative flex flex-col h-full rounded-[28px] border border-[#F15A24]/70 bg-white p-6 overflow-hidden shadow-[0_8px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_45px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
    >
      {/* HOVER GLOW */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-[#F15A24]/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-300" />

      {/* ================= TAGS ================= */}
      <div className="flex items-center gap-2 flex-wrap">
        {/* FEATURED */}
        <div className="flex items-center gap-1 bg-[#F15A24] text-white text-[10px] font-bold px-3 py-1.5 rounded-full">
          <Star size={10} fill="white" />
          Featured
        </div>

        {/* TYPE */}
        <div className="bg-[#EEF4FF] text-[#155DFC] text-[10px] font-semibold px-3 py-1.5 rounded-full">
          {job.type}
        </div>

        {/* ROLE */}
        <div className="bg-[#155DFC] text-white text-[10px] font-semibold px-3 py-1.5 rounded-full">
          {job.role}
        </div>
      </div>

      {/* ================= TITLE ================= */}
      <div className="mt-5">
        <h3 className="text-[28px] leading-[1.2] font-black text-[#111111] group-hover:text-[#F15A24] transition duration-300 line-clamp-2">
          {job.title}
        </h3>

        <p className="mt-1.5 text-[14px] text-gray-500 font-medium">
          {job.company}
        </p>
      </div>

      {/* ================= META ================= */}
      <div className="mt-5 space-y-2.5">
        {/* LOCATION */}
        <div className="flex items-center gap-2.5">
          <MapPin size={16} className="text-[#F15A24] shrink-0" />

          <p className="text-[15px] text-[#111111] font-medium">
            {job.location}
          </p>
        </div>

        {/* SALARY */}
        <div className="flex items-center gap-2.5">
          <DollarSign size={16} className="text-[#00A63E] shrink-0" />

          <p className="text-[15px] font-bold text-[#00A63E]">{job.salary}</p>
        </div>

        {/* POSTED */}
        <div className="flex items-center gap-2.5">
          <Clock size={16} className="text-gray-500 shrink-0" />

          <p className="text-[15px] text-gray-500 font-medium">
            Posted {job.posted}
          </p>
        </div>
      </div>

      {/* ================= DESCRIPTION ================= */}
      <div className="mt-5">
        <p className="text-[14px] text-gray-600 leading-[1.8] line-clamp-2">
          {job.description}
        </p>
      </div>

      {/* ================= REQUIREMENTS ================= */}
      <div className="mt-5">
        <h4 className="text-[11px] uppercase tracking-wide font-bold text-gray-400 mb-2.5">
          Key Requirements
        </h4>

        <div className="flex flex-wrap gap-2">
          {job.requirements.slice(0, 2).map((req, i) => (
            <span
              key={i}
              className="bg-[#F4F6F8] text-[#4B5563] text-[12px] font-medium px-3 py-1.5 rounded-full"
            >
              {req}
            </span>
          ))}
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <div className="mt-6 flex items-center justify-between gap-4">
        {/* STATUS */}
        <div>
          <p className="text-[10px] uppercase tracking-wide text-gray-400 font-semibold">
            Hiring Status
          </p>

          <div className="flex items-center gap-1.5 mt-1">
            <p className="text-[13px] font-bold text-[#00A63E]">Recruiting</p>
          </div>
        </div>

        {/* BUTTON */}
        <button
          onClick={() => setSelectedJob(job)}
          className="group/button px-5 py-3 rounded-full bg-[#111111] hover:bg-[#F15A24] text-white text-[15px] font-semibold flex items-center justify-center gap-2 transition-all duration-300"
        >
          Apply Now
          <ArrowRight
            size={16}
            className="group-hover/button:translate-x-1 transition"
          />
        </button>
      </div>
    </div>
  );
};

export default JobsCard;
