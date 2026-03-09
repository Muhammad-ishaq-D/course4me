import { Search, Briefcase } from "lucide-react";

const CareerHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#0f1f2f]">

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1b3b5f] via-[#14293d] to-[#0e1a26]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_70%,rgba(59,130,246,0.35),transparent_20%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.25),transparent_20%)]" />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-32 text-center">

        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 bg-[#2a3f33] text-[#a3ff5a] text-sm px-5 py-2 rounded-full border border-[#3c5e48]">
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
          <div className="flex items-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-2 shadow-lg">

            <div className="flex items-center flex-1 px-4">
              <Search size={18} className="text-gray-300" />
              <input
                type="text"
                placeholder="Job title or company..."
                className="ml-3 w-full bg-transparent outline-none text-white placeholder-gray-400 text-sm"
              />
            </div>

            <button className="bg-[#a3ff5a] text-[#0f1f2f] font-semibold px-6 py-3 rounded-xl hover:brightness-105 transition">
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
              className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl px-8 py-10 text-center shadow-inner"
            >
              <div className="text-[#a3ff5a] text-4xl font-bold">
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