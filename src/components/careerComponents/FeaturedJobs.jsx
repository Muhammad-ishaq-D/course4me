import {
  Sparkles,
  MapPin,
  DollarSign,
  Clock,
  Star,
  ArrowRight
} from "lucide-react";
import { useState } from "react";
import ApplyModal from "./ApplyModal";

const FeaturedJobs = () => {

  const [selectedJob, setSelectedJob] = useState(null);

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
    }
  ];

  return (
    <section className="bg-[#F3F4F6] py-14 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="flex items-center gap-3 mb-10">
          <Sparkles className="text-[#F8510C]" size={26} />
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E]">
            Featured Job Opportunities
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-[#F9FAFB] border border-[#F8510C] rounded-[22px] p-7 shadow-[0_6px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition"
            >

              {/* Badges */}
              <div className="flex items-center gap-2 mb-5 flex-wrap">

                <div className="flex items-center gap-1 bg-[#F8510C] text-white text-xs font-semibold px-3 py-[6px] rounded-full">
                  <Star size={12} />
                  Featured
                </div>

                <div className="bg-[#DBEAFE] text-[#1D4ED8] text-xs font-semibold px-3 py-[6px] rounded-full">
                  {job.type}
                </div>

                <div className="bg-gradient-to-r from-[#155DFC] to-[#155DFC] text-white text-xs font-semibold px-3 py-[6px] rounded-full">
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

              {/* ✅ BUTTON FIX */}
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

        {/* ✅ MODAL SHOW HERE (IMPORTANT) */}
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

export default FeaturedJobs;