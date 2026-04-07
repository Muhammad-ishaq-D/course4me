import { Search, Briefcase } from "lucide-react";

const CareerHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#121212]">

      {/* 🔥 Main Dark Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E1E1E] via-[#2A2A2A] to-[#121212]" />

      {/* 🔵 Blue Glow (Bottom Left) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.35),transparent_30%)]" />

      {/* 🟠 Orange Glow (Top Right) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(248,81,12,0.4),transparent_30%)]" />

      <div className="relative max-w-6xl mx-auto px-6 mt-36 md:mt-50 pb-32 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#F8510C1A] text-[#F8510C] text-sm px-5 py-2 rounded-full border border-[#F8510C]">
          <Briefcase size={16} />
          Start Your Security Career Today
        </div>

        {/* Heading */}
        <h1 className="mt-10 text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight">
          Build a Rewarding Career in
          <br />
          Security
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Join thousands of professionals who've launched successful careers
          in the security industry. We provide the training, you provide the
          commitment.
        </p>

        {/* Search Bar */}
        <div className="mt-10 max-w-3xl mx-auto">
          <div className="flex items-center bg-[#2A2A2A]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-lg">

            <div className="flex items-center flex-1 px-4">
              <Search size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="Job title or company..."
                className="ml-3 w-full bg-transparent outline-none text-white placeholder-gray-400 text-sm"
              />
            </div>

            <button className="bg-[#F8510C] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#d9440a] transition">
              Search Jobs
            </button>

          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {[
            { value: "15,000+", label: "Careers Started" },
            { value: "£28,500", label: "Average Salary" },
            { value: "95%", label: "Job Placement" },
            { value: "500+", label: "Partner Companies" }
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-[#2A2A2A]/70 border border-white/10 backdrop-blur-lg rounded-2xl px-8 py-10 text-center shadow-lg"
            >
              <div className="text-[#F8510C] text-4xl font-bold">
                {stat.value}
              </div>
              <div className="mt-3 text-gray-300 text-sm">
                {stat.label}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default CareerHero;