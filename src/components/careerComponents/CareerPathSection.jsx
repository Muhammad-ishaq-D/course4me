import React, { useState } from "react";
import {
  Shield,
  Users,
  ArrowRight,
  CheckCircle,
  TrendingUp,
} from "lucide-react";
import ApplyModal from "./ApplyModal";

const CareerPathSection = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const data = [
    {
      title: "Security Guard",
      salary: "£20,000 - £28,000",
      description:
        "Protect premises, assets, and people as a licensed security professional",
      progression:
        "Senior Security Officer → Security Supervisor → Security Manager",
      badge: "High Demand",
      badgeColor: "bg-[#F8510C]",
      icon: Shield,
      jobs: 5,
      image: "/src/assets/careers/Security Guard Licence.png",
    },
    {
      title: "Door Supervisor",
      salary: "£22,000 - £32,000",
      description:
        "Control entry to licensed venues, manage crowds, and ensure patron safety",
      progression:
        "Senior Door Supervisor → Head Doorman → Venue Security Manager",
      badge: "Very High Demand",
      badgeColor: "bg-red-500",
      icon: Users,
      jobs: 3,
      image: "/src/assets/careers/Door Supervisor Licence.png",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-24 px-4 sm:px-6 lg:px-8">
      {/* ===== BACKGROUND GLOWS ===== */}
      <div className="absolute top-[-200px] left-[-120px] w-[400px] h-[400px] bg-cyan-500/10 blur-[140px] rounded-full" />

      <div className="absolute bottom-[-200px] right-[-120px] w-[400px] h-[400px] bg-[#F8510C]/10 blur-[140px] rounded-full" />

      <div className="relative max-w-7xl mx-auto">
        {/* ===== HEADING ===== */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-[#F8510C1A] border border-[#F8510C33] text-[#F8510C] text-sm font-medium px-5 py-2 rounded-full backdrop-blur-xl">
            <TrendingUp size={14} />
            Explore Career Paths
          </div>

          <h2 className="mt-6 text-4xl sm:text-5xl font-bold text-[#111111] leading-tight">
            Choose Your
            <span className="text-[#F8510C]"> Security Career </span>
            Path
          </h2>

          <p className="mt-5 text-gray-600 text-lg leading-relaxed">
            From entry-level opportunities to specialist security roles,
            discover the ideal career path aligned with your skills, experience,
            and future ambitions.
          </p>
        </div>

        {/* ===== CARDS ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-8">
          {data.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="group relative overflow-hidden rounded-[30px] border border-gray-200 bg-white shadow-[0_10px_50px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_70px_rgba(0,0,0,0.12)] transition-all duration-500"
              >
                {/* ===== IMAGE ===== */}
                <div className="relative h-[280px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />

                  {/* Top Badges */}
                  <div className="absolute top-5 left-5 flex items-center gap-3">
                    <div className="bg-white/20 backdrop-blur-xl border border-white/20 text-white text-xs font-medium px-4 py-2 rounded-full">
                      {item.jobs} Jobs Available
                    </div>

                    <div
                      className={`${item.badgeColor} text-white text-xs font-semibold px-4 py-2 rounded-full`}
                    >
                      {item.badge}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="absolute left-6 bottom-24 w-14 h-14 rounded-2xl bg-[#F8510C] shadow-[0_10px_40px_rgba(248,81,12,0.35)] flex items-center justify-center">
                    <Icon size={24} className="text-white" />
                  </div>

                  {/* Title */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-3xl font-bold text-white">
                      {item.title}
                    </h3>

                    <div className="mt-2 text-[#F8510C] text-lg font-semibold">
                      £ {item.salary} Average Salary
                    </div>
                  </div>
                </div>

                {/* ===== CONTENT ===== */}
                <div className="p-7">
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Career Progression */}
                  <div className="mt-6 bg-[#F8FAFC] border border-gray-200 rounded-2xl p-5 relative">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-[#111111]">
                        Career Progression
                      </span>

                      <CheckCircle size={18} className="text-[#22C55E]" />
                    </div>

                    <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                      {item.progression}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="mt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center lg:gap-2 text-sm text-gray-700 cursor-pointer hover:text-[#F8510C] transition">
                      View Requirements
                      <ArrowRight size={16} />
                    </div>

                    <button
                      onClick={() => setSelectedJob(item)}
                      className="group/button inline-flex items-center justify-center gap-2 bg-[#F8510C] hover:bg-[#de4707] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-[0_10px_30px_rgba(248,81,12,0.25)]"
                    >
                      View Jobs
                      <ArrowRight
                        size={17}
                        className="group-hover/button:translate-x-1 transition"
                      />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ✅ MODAL SHOW HERE (IMPORTANT) */}
      {selectedJob && (
        <ApplyModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </section>
  );
};

export default CareerPathSection;
