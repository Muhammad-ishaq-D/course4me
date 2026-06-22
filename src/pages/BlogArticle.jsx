import React, { useEffect } from "react";
import {
  ArrowLeft,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Calendar,
  Clock,
  User,
  ArrowRight,
  Tag,
  User2,
} from "lucide-react";
import { useNavigate, Link, useParams, NavLink } from "react-router-dom";
import Blog1 from "../assets/home/blog1.png";
import AuthorImg from "../assets/home/Sarah Mitchell.png";
import Blog4 from "../assets/home/blog4.png";
import Blog5 from "../assets/home/blog5.png";
import Blog6 from "../assets/home/blog6.png";
import ArticleCard from "../components/blogComponents/ArticleCard";
import { blogsData } from "../data/blogs";

const BlogArticle = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const blog = blogsData.find((item) => item.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentIndex = blogsData.findIndex((item) => item.id === Number(id));

  let relatedArticles = blogsData.slice(currentIndex + 1, currentIndex + 4);

  if (relatedArticles.length < 3) {
    relatedArticles = [
      ...relatedArticles,
      ...blogsData
        .filter((item) => item.id !== blog.id)
        .slice(0, 3 - relatedArticles.length),
    ];
  }

  return (
    <div className="bg-[#f9fafb] min-h-screen pb-20">
      {/* ─── HERO CONTENT ─── */}
      <div className="relative bg-[#0B1D33] overflow-hidden">
        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1D33] via-[#102743] to-[#183B63]" />

        {/* GLOW */}
        <div className="absolute top-[-200px] left-[-120px] w-[400px] h-[400px] bg-[#F15A24]/10 blur-[120px] rounded-full" />

        <div className="absolute bottom-[-200px] right-[-120px] w-[400px] h-[400px] bg-[#00A3FF]/10 blur-[120px] rounded-full" />

        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-10 md:pt-14 lg:pt-32 pb-48">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <NavLink to="/">Home</NavLink>

            <span>/</span>

            <NavLink to="/blog">Blog</NavLink>

            <span>/</span>

            <span className="text-[#F15A24]">Career Guide</span>
          </div>

          {/* TAGS */}
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="bg-[#F15A24] text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.18em]">
              {blog?.category}
            </span>
          </div>

          {/* TITLE */}
          <h1 className="max-w-5xl text-4xl md:text-6xl font-black leading-[1.05] text-white tracking-tight">
            <h1>{blog?.title}</h1>
          </h1>

          <p className="mt-8 max-w-3xl text-lg md:text-xl text-gray-300 leading-relaxed">
            <p>{blog?.excerpt}</p>
          </p>

          {/* AUTHOR SECTION */}
          <div className="mt-10 flex flex-wrap items-center gap-6">
            {/* AUTHOR */}
            <div className="flex items-center gap-2">
              <User2
                size={36}
                className="text-black bg-orange-600 p-1 rounded-full"
              />
              <div>
                <h4 className="text-white font-bold">{blog?.author}</h4>

                <p className="text-gray-400 text-sm">{blog?.role}</p>
              </div>
            </div>

            {/* META */}
            <div className="flex items-center gap-5 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                {blog?.publishDate}
              </div>

              <div className="w-1 h-1 rounded-full bg-gray-600" />

              <div className="flex items-center gap-2">
                <Clock size={16} />
                {blog?.readTime}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── ARTICLE CONTENT ─── */}
      <div className="max-w-[1000px] mx-auto px-6 lg:px-8 -mt-32 relative z-10">
        {/* Main Image */}
        <div className="w-full h-[300px] md:h-[500px] rounded-t-[32px] overflow-hidden shadow-2xl border-4 border-white">
          <img
            src={blog?.image}
            alt="Door Supervisor"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Container */}
        <div className="bg-white rounded-b-[32px] sm:rounded-[32px] sm:-mt-10 p-6  md:p-16 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 relative mb-16">
          {/* ================= TOP ACTION BAR ================= */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 pb-8 border-b border-gray-100 mb-12">
            {/* BACK BUTTON */}
            <button
              onClick={() => navigate("/blog")}
              className="group inline-flex cursor-pointer items-center gap-3 self-start"
            >
              {/* ICON */}
              <div className="w-11 h-11 rounded-2xl border border-gray-200 bg-[#F8FAFC] flex items-center justify-center text-gray-500 group-hover:bg-[#F15A24] group-hover:border-[#F15A24] group-hover:text-white transition-all duration-300">
                <ArrowLeft
                  size={18}
                  className="group-hover:-translate-x-0.5 transition-transform duration-300"
                />
              </div>

              {/* TEXT */}
              <div className="text-left">
                <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-gray-400">
                  Back Navigation
                </p>

                <p className="text-[15px] font-bold text-[#111827] group-hover:text-[#F15A24] transition">
                  All Articles
                </p>
              </div>
            </button>

            {/* SHARE SECTION */}
            {/* <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 text-orange-600 text-xs font-bold uppercase tracking-[0.18em]">
                <Share2 size={15} />
                Share Article
              </div>

              <div className="flex items-center gap-3">
                <button className="group/social cursor-pointer w-11 h-11 rounded-2xl border border-gray-200 bg-white flex items-center justify-center hover:bg-[#1877F2] hover:border-[#1877F2] transition-all duration-300 shadow-sm">
                  <Facebook
                    size={16}
                    className="text-gray-500 group-hover/social:text-white transition"
                  />
                </button>

                <button className="group/social cursor-pointer w-11 h-11 rounded-2xl border border-gray-200 bg-white flex items-center justify-center hover:bg-[#1DA1F2] hover:border-[#1DA1F2] transition-all duration-300 shadow-sm">
                  <Twitter
                    size={16}
                    className="text-gray-500 group-hover/social:text-white transition"
                  />
                </button>

                <button className="group/social cursor-pointer w-11 h-11 rounded-2xl border border-gray-200 bg-white flex items-center justify-center hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all duration-300 shadow-sm">
                  <Linkedin
                    size={16}
                    className="text-gray-500 group-hover/social:text-white transition"
                  />
                </button>
              </div>
            </div> */}
          </div>

          {/* Article Typography */}

          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
            {blog.content.map((section, index) => {
              if (section.type === "heading") {
                return (
                  <h2
                    key={index}
                    className="text-3xl font-bold text-[#1A1A1A] mb-6 mt-10 tracking-tight"
                  >
                    {section.text}
                  </h2>
                );
              }
              if (section.type === "subheading") {
                return (
                  <h3
                    key={index}
                    className="text-2xl font-bold text-[#1A1A1A] mb-4 mt-8"
                  >
                    {section.text}
                  </h3>
                );
              }

              if (section.type === "paragraph") {
                return (
                  <p
                    key={index}
                    className="mb-8 text-lg leading-relaxed text-gray-700"
                  >
                    {section.text}
                  </p>
                );
              }

              if (section.type === "list") {
                return (
                  <ul key={index} className="mb-10 space-y-4 list-none pl-0">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#FF5421] mt-2.5 shrink-0"></span>

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              if (section.type === "numberedList") {
                return (
                  <div key={index} className="mb-10 space-y-3">
                    {section.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-[#0B1D33] text-white text-sm font-bold flex items-center justify-center">
                          {i + 1}
                        </div>

                        <span className="text-lg text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                );
              }

              return null;

              <div>
                <p
                  key={index}
                  className="mb-8 text-lg leading-relaxed text-gray-700"
                >
                  {section.category}
                </p>
                <NavLink
                  to="/courses"
                  className="text-[#FF5421] hover:text-[#FF5421]/80 font-bold"
                >
                  Find a Course
                </NavLink>
              </div>;
            })}
          </div>

          {/* ARTICLE BOTTOM */}
          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className="bg-[#EEF4FF] text-[#155DFC] text-[11px] font-bold uppercase tracking-wide px-4 py-2 rounded-full">
                {blog.category}
              </span>
            </div>

            <NavLink
              to="/courses"
              className="inline-flex items-center gap-3 bg-[#F15A24] hover:bg-[#df4c18] text-sm text-white font-bold px-9 py-4 rounded-full transition-all duration-300 shadow-[0_12px_35px_rgba(241,90,36,0.30)]"
            >
              Find a Course Near You
              <ArrowRight size={18} />
            </NavLink>
          </div>
        </div>
      </div>

      {/* ─── RELATED ARTICLES ─── */}
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8 mt-12">
        <h2 className="text-3xl font-bold text-[#1A1A1A] mb-10 tracking-tight">
          Related Articles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
          {relatedArticles.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogArticle;
