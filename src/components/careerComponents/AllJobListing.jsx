import {
  MapPin,
  DollarSign,
  Clock,
  ArrowRight
} from "lucide-react";
import { useState } from "react";
import ApplyModal from "./ApplyModal";
const AllJobListings = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const jobs = [
    {
      title: "Security Guard - Retail",
      company: "SecureLife Ltd",
      location: "London",
      salary: "£24,000 - £26,000",
      posted: "2 days ago",
      type: "Full-time",
      role: "Security Guards",
      description:
        "Busy shopping centre requires experienced SIA licensed security guards for day and night shifts.",
      requirements: [
        "Valid SIA License",
        "Retail experience preferred",
        "Customer service skills"
      ]
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
        "Smart appearance"
      ]
    },
    {
      title: "CCTV Control Room Operator",
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
        "Good IT skills"
      ]
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
        "Languages beneficial"
      ]
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
        "Professional demeanor"
      ]
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
        "Own transport initially"
      ]
    }
  ];

  // Duplicate to make 12 cards
  const allJobs = [...jobs, ...jobs];

  const filters = [
    "All (12)",
    "Security Guard (5)",
    "Door Supervisor (3)",
    "CCTV Operator (2)",
    "Close Protection Officer (2)"
  ];

  const typeStyles = {
    "Full-time": "bg-[#E3E9FF] text-[#2D5BFF]",
    "Part-time": "bg-[#E3E9FF] text-[#2D5BFF]",
    Contract: "bg-[#E3E9FF] text-[#2D5BFF]"
  };

  const roleStyles = {
    "Security Guard": "bg-gradient-to-r from-[#155DFC] to-[#155DFC] text-white",
    "Door Supervisor": "bg-[#9333EA] text-white",
    "CCTV Operator": "bg-[#16A34A] text-white",
    "Close Protection Officer": "bg-[#F59E0B] text-white"
  };

  return (
    <section className="bg-[#F3F4F6] py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-6">

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E]">
              All Job Listings
            </h2>
            <p className="text-gray-500 mt-2">
              Showing 12 jobs
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            {filters.map((item, i) => (
              <div
                key={i}
                className={`px-5 py-2 rounded-full text-sm font-semibold cursor-pointer ${i === 0
                  ? "bg-[#F8510C] text-white"
                  : "bg-[#E5E7EB] text-[#374151]"
                  }`}
              >
                {item}
              </div>
            ))}
          </div>

        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {allJobs.map((job, index) => (
            <div
              key={index}
              className="bg-[#F9FAFB] rounded-[22px] p-7 shadow-[0_6px_20px_rgba(0,0,0,0.05)] border border-transparent hover:border-[#F8510C] transition"
            >

              {/* Badges */}
              <div className="flex items-center gap-2 mb-4 flex-wrap">

                <div className={`text-xs font-semibold px-3 py-[6px] rounded-full ${typeStyles[job.type]}`}>
                  {job.type}
                </div>

                <div className={`text-xs font-semibold px-3 py-[6px] rounded-full ${roleStyles[job.role]}`}>
                  {job.role}
                </div>

              </div>

              {/* Title */}
              <h3 className="text-[20px] font-bold text-[#1E1E1E]">
                {job.title}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                {job.company}
              </p>

              {/* Meta */}
              <div className="mt-4 space-y-2 text-sm">

                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin size={16} className="text-[#F8510C]" />
                  {job.location}
                </div>

                <div className="flex items-center gap-2 text-[#00A63E] font-semibold">
                  <DollarSign size={16} />
                  {job.salary}
                </div>

                <div className="flex items-center gap-2 text-gray-500">
                  <Clock size={16} />
                  Posted {job.posted}
                </div>

              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 mt-5 leading-relaxed">
                {job.description}
              </p>

              {/* Requirements */}
              <div className="mt-6">
                <div className="text-xs font-semibold text-gray-400 mb-3">
                  KEY REQUIREMENTS
                </div>

                <div className="flex flex-wrap gap-2">
                  {job.requirements.map((req, i) => (
                    <span
                      key={i}
                      className="bg-[#EEF2F6] text-gray-600 text-xs px-3 py-1 rounded-full"
                    >
                      {req}
                    </span>
                  ))}
                </div>
              </div>

              {/* Button */}
              <button
                onClick={() => setSelectedJob(job)}
                className="mt-7 w-full bg-[#1E1E1E] text-white py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-black transition"
              >
                Apply Now
                <ArrowRight size={16} />
              </button>

            </div>
          ))}

        </div>
        {selectedJob && (
          <ApplyModal
            job={selectedJob}
            onClose={() => setSelectedJob(null)}
          />
        )}

      </div>
    </section>
  );
};

export default AllJobListings;