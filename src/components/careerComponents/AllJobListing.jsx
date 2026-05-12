import { useState } from "react";
import ApplyModal from "./ApplyModal";
import JobsCard from "../ui/JobsCard";

const AllJobListings = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const jobs = [
    {
      title: "Security Guard - Retail",
      company: "SecureLife Ltd",
      location: "London",
      salary: "£24,000 - £26,000",
      posted: "2 days ago",
      type: "Full-time",
      role: "Security Guard",
      description:
        "Busy shopping centre requires experienced SIA licensed security guards for day and night shifts.",
      requirements: [
        "Valid SIA License",
        "Retail experience preferred",
        "Customer service skills",
      ],
    },

    {
      title: "Door Supervisor - Nightclub",
      company: "Elite Security Group",
      location: "Manchester",
      salary: "£12 - £15 per hour",
      posted: "1 day ago",
      type: "Part-time",
      role: "Door Supervisor",
      description:
        "High-end nightclub seeking professional door supervisors for weekend shifts.",
      requirements: [
        "SIA Door Supervisor License",
        "Conflict management",
        "Smart appearance",
      ],
    },

    {
      title: "CCTV Room Operator",
      company: "Guardian Security",
      location: "Birmingham",
      salary: "£22,000 - £24,000",
      posted: "3 days ago",
      type: "Full-time",
      role: "CCTV Operator",
      description:
        "Modern control room monitoring city centre locations. Training provided.",
      requirements: [
        "SIA CCTV License",
        "Shift work available",
        "Good IT skills",
      ],
    },

    {
      title: "Close Protection Officer",
      company: "VIP Protection Services",
      location: "London",
      salary: "£50,000 - £70,000",
      posted: "5 days ago",
      type: "Contract",
      role: "Close Protection Officer",
      description:
        "Experienced CPO required for high-profile client. International travel involved.",
      requirements: [
        "SIA CP License",
        "5+ years experience",
        "Advanced driving",
        "Languages beneficial",
      ],
    },

    {
      title: "Security Officer - Corporate",
      company: "Corporate Guard Solutions",
      location: "Leeds",
      salary: "£23,000 - £27,000",
      posted: "1 week ago",
      type: "Full-time",
      role: "Security Guard",
      description:
        "Professional office environment seeking security officers for 24/7 coverage.",
      requirements: [
        "SIA License",
        "Corporate experience",
        "Professional demeanor",
      ],
    },

    {
      title: "Mobile Security Patrol Officer",
      company: "Rapid Response Security",
      location: "Bristol",
      salary: "£25,000 - £30,000",
      posted: "4 days ago",
      type: "Full-time",
      role: "Security Guard",
      description:
        "Mobile patrol covering multiple sites. Company vehicle and phone provided.",
      requirements: [
        "Full UK Driving License",
        "SIA License",
        "Own transport initially",
      ],
    },
  ];

  // ===== FILTERS WITH COUNTS =====
  const filters = [
    {
      label: "All",
      count: jobs.length,
    },

    {
      label: "Security Guard",
      count: jobs.filter((job) =>
        job.role.toLowerCase().includes("security guard"),
      ).length,
    },

    {
      label: "Door Supervisor",
      count: jobs.filter((job) =>
        job.role.toLowerCase().includes("door supervisor"),
      ).length,
    },

    {
      label: "CCTV Operator",
      count: jobs.filter((job) => job.role.toLowerCase().includes("cctv"))
        .length,
    },

    {
      label: "Close Protection Officer",
      count: jobs.filter((job) =>
        job.role.toLowerCase().includes("close protection"),
      ).length,
    },
  ];

  // ===== FILTERED JOBS =====
  const filteredJobs =
    activeFilter === "All"
      ? jobs
      : jobs.filter((job) =>
          job.role.toLowerCase().includes(activeFilter.toLowerCase()),
        );

  return (
    <section className="bg-[#F3F4F6] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* ===== HEADER ===== */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-12">
          {/* Left */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#111111]">
              All Job Listings
            </h2>

            <p className="text-gray-500 mt-3 text-lg">
              Showing {filteredJobs.length} jobs
            </p>
          </div>

          {/* ===== FILTERS ===== */}
          <div className="flex flex-wrap gap-3">
            {filters.map((item, i) => {
              const isActive = activeFilter === item.label;

              return (
                <button
                  key={i}
                  onClick={() => setActiveFilter(item.label)}
                  className={`relative px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 overflow-hidden
                  
                  ${
                    isActive
                      ? "bg-[#F8510C] text-white shadow-[0_10px_25px_rgba(248,81,12,0.30)]"
                      : "bg-white border border-gray-200 text-[#374151] hover:border-[#F8510C]/30 hover:text-[#F8510C]"
                  }
                `}
                >
                  {/* Active Glow */}
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#F8510C] to-orange-500 opacity-90" />
                  )}

                  <span className="relative z-10">
                    {item.label} ({item.count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ===== JOBS GRID ===== */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filteredJobs.map((job, index) => (
            <JobsCard
              key={index}
              job={job}
              index={index}
              setSelectedJob={setSelectedJob}
            />
          ))}
        </div>

        {/* ===== MODAL ===== */}
        {selectedJob && (
          <ApplyModal job={selectedJob} onClose={() => setSelectedJob(null)} />
        )}
      </div>
    </section>
  );
};

export default AllJobListings;
