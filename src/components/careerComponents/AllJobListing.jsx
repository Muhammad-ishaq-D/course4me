import {
  MapPin,
  DollarSign,
  Clock,
  ArrowRight
} from "lucide-react";

const AllJobListings = () => {
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
      title: "CCTV Control Room Operator",
      company: "Guardian Security",
      location: "Birmingham",
      salary: "£22,000 - £24,000",
      posted: "3 days ago",
      type: "Full-time",
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
      description:
        "Mobile patrol covering multiple sites. Company vehicle and phone provided.",
      requirements: [
        "Full UK Driving License",
        "SIA License",
        "Own transport initially"
      ]
    }
  ];

  const typeStyles = {
    "Full-time": "bg-[#e3e9ff] text-[#2d5bff]",
    "Part-time": "bg-[#e3e9ff] text-[#2d5bff]",
    Contract: "bg-[#e3e9ff] text-[#2d5bff]"
  };

  return (
    <section className="bg-[#f4f7fb] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2f3a47]">
            All Job Listings
          </h2>
          <p className="text-gray-500 mt-2">
            Showing {jobs.length} jobs
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px] p-7 shadow-[0_10px_25px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition duration-300 flex flex-col"
            >

              {/* Job Type Badge */}
              <div className={`text-xs font-semibold px-3 py-1 rounded-full w-fit mb-4 ${typeStyles[job.type]}`}>
                {job.type}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-[#2f3a47]">
                {job.title}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                {job.company}
              </p>

              {/* Meta */}
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
                      className="bg-[#eef1f5] text-gray-600 text-xs px-3 py-1 rounded-full"
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

export default AllJobListings;