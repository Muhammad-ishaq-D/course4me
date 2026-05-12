import { Search, Briefcase } from "lucide-react";

const CareerHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#111111] py-14 lg:py-16">
      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_35%)]" />

      {/* Blue Glow */}
      <div className="absolute bottom-[-180px] left-[-120px] w-[420px] h-[420px] bg-cyan-500/25 blur-[140px] rounded-full pointer-events-none" />

      {/* Orange Glow */}
      <div className="absolute top-[-160px] right-[-100px] w-[420px] h-[420px] bg-[#F8510C]/25 blur-[140px] rounded-full pointer-events-none" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#161616] to-[#111111]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ===== BADGE ===== */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 bg-[#F8510C1A] border border-[#F8510C33] text-[#F8510C] px-5 py-2 rounded-full text-sm font-medium backdrop-blur-xl shadow-[0_0_30px_rgba(248,81,12,0.15)]">
            <Briefcase size={15} />
            Start Your Security Career Today
          </div>
        </div>

        {/* ===== HEADING ===== */}
        <div className="max-w-5xl mx-auto text-center mt-10">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
            Build a Rewarding
            <br />
            Career in <span className="text-[#F8510C]">Security</span>
          </h1>

          {/* SUBTITLE */}
          <p className="mt-7 text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Join thousands of professionals who’ve launched successful careers
            in the security industry. We provide the training, support, and
            guidance — you bring the ambition.
          </p>
        </div>

        {/* ===== SEARCH BAR ===== */}
        <div className="mt-8 max-w-4xl mx-auto">
          {/* Input */}
          <div className="relative flex items-center w-full max-w-2xl mx-auto">
            <Search size={18} className="absolute left-4 text-gray-400" />

            <input
              type="text"
              placeholder="Search by job title or company..."
              className="w-full h-14 pl-12 pr-40 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-xl text-white placeholder:text-gray-500 text-sm outline-none focus:border-[#F8510C] transition"
            />

            {/* Button Inside Input */}
            <button className="absolute right-2 h-10 px-6 rounded-xl bg-[#F8510C] hover:bg-[#de4707] transition-all duration-300 text-white text-sm font-semibold shadow-[0_8px_30px_rgba(248,81,12,0.45)] whitespace-nowrap">
              Search Jobs
            </button>
          </div>
        </div>

        {/* ===== STATS ===== */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              value: "15,000+",
              label: "Careers Started",
            },
            {
              value: "£28,500",
              label: "Average Salary",
            },
            {
              value: "95%",
              label: "Job Placement Rate",
            },
            {
              value: "500+",
              label: "Hiring Partners",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl py-8 px-2 text-center shadow-[0_8px_40px_rgba(0,0,0,0.25)]"
            >
              {/* Card Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />

              <div className="relative z-10">
                <h3 className="text-[#F8510C] text-4xl font-extrabold tracking-tight">
                  {item.value}
                </h3>

                <p className="mt-3 text-sm text-gray-300">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerHero;
