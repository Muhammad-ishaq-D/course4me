import React from "react";
import { Search, TrendingUp, BookOpen, ShieldCheck } from "lucide-react";

const BlogHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#0B1120] text-white">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#111827] via-[#0B1120] to-[#050816]" />

      {/* ORANGE GLOW */}
      <div className="absolute top-[-150px] right-[-100px] w-[350px] h-[350px] bg-[#F15A24]/20 blur-[120px] rounded-full" />

      {/* BLUE GLOW */}
      <div className="absolute bottom-[-150px] left-[-100px] w-[350px] h-[350px] bg-[#00A3FF]/10 blur-[120px] rounded-full" />

      {/* GRID EFFECT */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24">
        {/* ================= HERO CONTENT ================= */}
        <div className="grid lg:grid-cols-[1fr_340px] gap-14 items-center">
          {/* ================= LEFT SIDE ================= */}
          <div>
            {/* BREADCRUMB */}
            <nav className="flex items-center gap-2 text-sm font-medium mb-8">
              <span className="text-gray-500 hover:text-white transition cursor-pointer">
                Home
              </span>

              <span className="text-gray-700">/</span>

              <span className="text-[#F15A24]">Blog & News</span>
            </nav>

            {/* BADGE */}
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-xl text-[#F15A24] text-xs font-bold tracking-[0.2em] uppercase px-5 py-2 rounded-full">
              <TrendingUp size={14} />
              Latest Articles & Industry News
            </div>

            {/* HEADING */}
            <h1 className="mt-8 text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight">
              Explore The Latest
              <br />
              <span className="text-[#F15A24]">Security Insights</span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-7 text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl">
              Discover expert career advice, industry updates, training guides,
              licensing information, and professional insights from Courses4me.
            </p>

            {/* ================= SEARCH SECTION ================= */}
            <div className="max-w-2xl w-full mt-8 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[28px] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
              <div className="flex flex-col sm:flex-row gap-3">
                {/* INPUT */}
                <div className="flex items-center w-full h-14 rounded-2xl bg-[#111827]/60 border border-white/5 px-4 overflow-hidden">
                  <Search size={18} className="text-[#F15A24] shrink-0" />

                  <input
                    type="text"
                    placeholder="Search articles, guides, news..."
                    className="ml-3 flex-1 min-w-0 bg-transparent outline-none text-white placeholder:text-gray-500 text-sm"
                  />
                </div>

                {/* BUTTON */}
                <button className="w-full sm:w-auto sm:min-w-45 h-14 px-7 rounded-2xl bg-[#F15A24] hover:bg-[#df4c18] transition-all duration-300 text-white font-bold shadow-[0_10px_40px_rgba(241,90,36,0.35)] whitespace-nowrap">
                  Search Blog
                </button>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE CARDS ================= */}
          <div className="hidden lg:flex flex-col gap-5">
            {/* CARD 1 */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-6 shadow-[0_15px_40px_rgba(0,0,0,0.25)]">
              <div className="w-14 h-14 rounded-2xl bg-[#F15A24]/10 flex items-center justify-center">
                <BookOpen size={26} className="text-[#F15A24]" />
              </div>

              <h3 className="mt-5 text-2xl font-bold">250+ Articles</h3>

              <p className="mt-2 text-gray-400 leading-relaxed">
                Career advice, training help, licensing updates, and industry
                insights.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-linear-to-br from-[#F15A24] to-[#df4c18] rounded-3xl p-6 shadow-[0_20px_60px_rgba(241,90,36,0.35)]">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-md">
                <ShieldCheck size={26} className="text-white" />
              </div>

              <h3 className="mt-5 text-2xl font-bold text-white">
                Security Career Tips
              </h3>

              <p className="mt-2 text-white/80 leading-relaxed">
                Learn how to start and grow your professional security career in
                the UK.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
