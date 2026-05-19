import {
  Sparkles,
  MapPin,
  DollarSign,
  Clock,
  Star,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import ApplyModal from "../careerDetailsComponents/ApplyJob";
import JobsCard from "../ui/JobsCard";

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
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {jobs.map((job, index) => (
            <JobsCard
              key={index}
              job={job}
              index={index}
              setSelectedJob={setSelectedJob}
            />
          ))}
        </div>

        {/* ✅ MODAL SHOW HERE (IMPORTANT) */}
        {selectedJob && (
          <ApplyModal job={selectedJob} onClose={() => setSelectedJob(null)} />
        )}
      </div>
    </section>
  );
};

export default FeaturedJobs;
