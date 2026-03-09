import {
  Sparkles,
  MapPin,
  DollarSign,
  Clock,
  Star,
  ArrowRight
} from "lucide-react";

const FeaturedJobs = () => {
  const jobs = [
    {
      title: "Security Guard - Retail",
      company: "SecureLife Ltd",
      location: "London",
      salary: "£24,000 - £26,000",
      posted: "2 days ago",
      type: "Full-time",
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
    <section className="bg-[#f4f7fb] py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="flex items-center gap-3 mb-12">
          <Sparkles className="text-[#a3ff5a]" size={28} />
          <h2 className="text-3xl md:text-4xl font-bold text-[#2f3a47]">
            Featured Job Opportunities
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white border-2 border-[#a3ff5a] rounded-[22px] p-7 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition duration-300 flex flex-col"
            >

              {/* Top Badges */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-1 bg-[#e7f5d4] text-[#2f3a47] text-xs font-semibold px-3 py-1 rounded-full">
                  <Star size={12} />
                  Featured
                </div>

                <div className="bg-[#e3e9ff] text-[#2d5bff] text-xs font-semibold px-3 py-1 rounded-full">
                  {job.type}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-[#2f3a47]">
                {job.title}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                {job.company}
              </p>

              {/* Meta Info */}
              <div className="mt-4 space-y-2 text-sm">

                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin size={16} className="text-[#a3ff5a]" />
                  {job.location}
                </div>

                <div className="flex items-center gap-2 text-green-600 font-semibold">
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
                      className="bg-[#f1f3f6] text-gray-600 text-xs px-3 py-1 rounded-full"
                    >
                      {req}
                    </span>
                  ))}
                </div>
              </div>

              {/* Button */}
              <button className="mt-8 bg-[#2f3a47] text-white py-3 rounded-full font-medium hover:bg-black transition flex items-center justify-center gap-2">
                Apply Now
                <ArrowRight size={18} />
              </button>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;