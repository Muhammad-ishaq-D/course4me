import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Calendar,
  Clock,
  User,
  TrendingUp,
  BookOpen,
} from "lucide-react";
import { blogsData } from "../../data/blogs";

const FeaturedArticle = () => {
  const navigate = useNavigate();
  const featuredBlog = blogsData[0];

  return (
    <section className=" px-4 sm:px-6  mb-20 ">
      <div className="max-w-7xl mx-auto">
        {/* ================= FEATURED CARD ================= */}
        <div className="group relative overflow-hidden rounded-4xl lg:rounded-[40px] bg-white border border-gray-100 shadow-[0_25px_80px_rgba(0,0,0,0.08)] hover:shadow-[0_35px_100px_rgba(0,0,0,0.12)] transition-all duration-500 ">
          {/* BACKGROUND GLOW */}
          <div className="absolute -top-30 -right-25 w-65 h-65 bg-[#F15A24]/10 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition duration-700" />

          <div className="grid lg:grid-cols-2">
            {/* ================= CONTENT SIDE ================= */}
            <div className="relative p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
              {/* SMALL LABEL */}
              <div className="inline-flex items-center gap-2 bg-[#FFF4EE] text-[#F15A24] border border-[#F15A24]/10 text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full w-fit">
                <TrendingUp size={14} />
                Trending Now
              </div>

              {/* TITLE */}
              <h2 className="mt-7 text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight text-[#111827] group-hover:text-[#F15A24] transition duration-300">
                {featuredBlog?.title}
              </h2>

              {/* DESCRIPTION */}
              <p className="mt-6 text-[#6B7280] text-base sm:text-lg leading-relaxed max-w-2xl">
                {featuredBlog?.excerpt}
              </p>

              {/* META INFO */}
              <div className="flex flex-wrap items-center gap-5 mt-8">
                {/* DATE */}
                <div className="flex items-center gap-2 text-sm text-[#6B7280] font-semibold">
                  <Calendar size={16} className="text-[#F15A24]" />
                  {featuredBlog?.publishDate}
                </div>

                {/* READ */}
                <div className="flex items-center gap-2 text-sm text-[#6B7280] font-semibold">
                  <BookOpen size={16} className="text-[#F15A24]" />
                  {featuredBlog?.category}
                </div>
              </div>

              {/* BUTTON */}
              <div className="mt-10">
                <button
                  onClick={() => navigate(`/blog/article/${featuredBlog.id}`)}
                  className="group/button inline-flex items-center gap-3 bg-[#F15A24] cursor-pointer text-white px-7 sm:px-8 py-4 rounded-2xl font-bold transition-all duration-300 shadow-[0_10px_40px_rgba(0,0,0,0.12)]"
                >
                  Read Full Article
                  <ArrowRight
                    size={18}
                    className="group-hover/button:translate-x-1 transition"
                  />
                </button>
              </div>
            </div>

            {/* ================= IMAGE SIDE ================= */}
            <div className="relative overflow-hidden h-70 sm:h-90 lg:h-full">
              {/* IMAGE */}
              <img
                src={featuredBlog?.image}
                alt="Featured Article"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

              {/* FEATURED BADGE */}
              <div className="absolute top-5 left-5 flex flex-wrap gap-3">
                <span className="bg-[#F15A24] text-white text-[11px] font-bold uppercase tracking-wider px-4 py-2 rounded-full shadow-lg">
                  Featured Article
                </span>
              </div>

              {/* IMAGE BOTTOM INFO */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4">
                {/* AUTHOR */}
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-2">
                  <div className="w-10 h-10 rounded-full bg-[#F15A24] flex items-center justify-center text-white font-bold text-sm">
                    SM
                  </div>

                  <div>
                    <p className="text-white text-sm font-semibold">
                      {featuredBlog?.author}
                    </p>

                    <span className="text-white/60 text-xs">
                      {featuredBlog?.role}
                    </span>
                  </div>
                </div>

                {/* READ TIME */}
                <div className="hidden sm:flex items-center gap-2 bg-black/30 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 text-white text-sm font-semibold">
                  <Clock size={15} />
                  {featuredBlog?.readTime}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticle;
