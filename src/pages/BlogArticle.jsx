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
} from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import Blog1 from "../assets/home/blog1.png";
import AuthorImg from "../assets/home/Sarah Mitchell.png";
import Blog4 from "../assets/home/blog4.png";
import Blog5 from "../assets/home/blog5.png";
import Blog6 from "../assets/home/blog6.png";
import ArticleCard from "../components/blogComponents/ArticleCard";

const articles = [
  {
    image: Blog6,
    category: "Career Guide",
    title: "Security Career Salaries in 2026: What to Expect",
    excerpt:
      "A detailed breakdown of average pay across security roles, from door supervision to close protection.",
    author: "John Redfern",
    date: "Feb 5, 2026",
    readTime: "7 min read",
  },

  {
    image: Blog5,
    category: "Career Guide",
    title: "Building an Effective Security Team: A Manager's Guide",
    excerpt:
      "From recruitment to retention, learn the best practices for assembling and managing a high-performing team.",
    author: "David Clarkson",
    date: "Jan 12, 2026",
    readTime: "5 min read",
  },

  {
    image: Blog4,
    category: "Career Guide",
    title: "Event Security: From Festivals to Corporate Functions",
    excerpt:
      "Discover the exciting world of event security, one of the fastest-growing and highest-paying sectors.",
    author: "Emma Whitfield",
    date: "Jan 5, 2026",
    readTime: "5 min read",
  },
];

const BlogArticle = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            <p>Home</p>

            <span>/</span>

            <p>Blog</p>

            <span>/</span>

            <span className="text-[#F15A24]">Career Guide</span>
          </div>

          {/* TAGS */}
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="bg-[#F15A24] text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.18em]">
              Featured Article
            </span>

            <span className="bg-white/10 border border-white/10 backdrop-blur-xl text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.18em]">
              Career Guide
            </span>
          </div>

          {/* TITLE */}
          <h1 className="max-w-5xl text-4xl md:text-6xl font-black leading-[1.05] text-white tracking-tight">
            How to Become a Door Supervisor in 2026: The Complete Guide
          </h1>

          <p className="mt-8 max-w-3xl text-lg md:text-xl text-gray-300 leading-relaxed">
            Everything you need to know about getting your SIA Door Supervisor
            licence, career opportunities, expected salaries, and how to start
            working quickly in the UK security industry.
          </p>

          {/* AUTHOR SECTION */}
          <div className="mt-10 flex flex-wrap items-center gap-6">
            {/* AUTHOR */}
            <div className="flex items-center gap-4">
              <img
                src={AuthorImg}
                alt=""
                className="w-14 h-14 rounded-full object-cover border-2 border-white/10"
              />

              <div>
                <h4 className="text-white font-bold">Sarah Mitchell</h4>

                <p className="text-gray-400 text-sm">Senior Training Manager</p>
              </div>
            </div>

            {/* META */}
            <div className="flex items-center gap-5 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                Feb 28, 2026
              </div>

              <div className="w-1 h-1 rounded-full bg-gray-600" />

              <div className="flex items-center gap-2">
                <Clock size={16} />8 min read
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
            src={Blog1}
            alt="Door Supervisor"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Container */}
        <div className="bg-white rounded-b-[32px] sm:rounded-[32px] sm:-mt-10 p-8 sm:p-12 md:p-16 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 relative mb-16">
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
            <div className="flex items-center gap-4">
              {/* LABEL */}
              <div className="hidden sm:flex items-center gap-2 text-orange-600 text-xs font-bold uppercase tracking-[0.18em]">
                <Share2 size={15} />
                Share Article
              </div>

              {/* SOCIAL BUTTONS */}
              <div className="flex items-center gap-3">
                {/* FACEBOOK */}
                <button className="group/social cursor-pointer w-11 h-11 rounded-2xl border border-gray-200 bg-white flex items-center justify-center hover:bg-[#1877F2] hover:border-[#1877F2] transition-all duration-300 shadow-sm">
                  <Facebook
                    size={16}
                    className="text-gray-500 group-hover/social:text-white transition"
                  />
                </button>

                {/* TWITTER */}
                <button className="group/social cursor-pointer w-11 h-11 rounded-2xl border border-gray-200 bg-white flex items-center justify-center hover:bg-[#1DA1F2] hover:border-[#1DA1F2] transition-all duration-300 shadow-sm">
                  <Twitter
                    size={16}
                    className="text-gray-500 group-hover/social:text-white transition"
                  />
                </button>

                {/* LINKEDIN */}
                <button className="group/social cursor-pointer w-11 h-11 rounded-2xl border border-gray-200 bg-white flex items-center justify-center hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all duration-300 shadow-sm">
                  <Linkedin
                    size={16}
                    className="text-gray-500 group-hover/social:text-white transition"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Article Typography */}
          <div className="prose prose-lg max-w-none text-gray-600 font-regular leading-relaxed">
            <p className="text-xl leading-relaxed text-gray-700 mb-10">
              Becoming a door supervisor is one of the most accessible and
              rewarding career paths in the UK security industry. With growing
              demand across pubs, clubs, events, and retail venues, door
              supervisors are essential to public safety.
            </p>

            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6 tracking-tight">
              What is a Door Supervisor?
            </h2>
            <p className="mb-10">
              A door supervisor is a licensed security professional responsible
              for controlling entry to venues, managing conflict situations, and
              ensuring the safety of staff and patrons. The role requires an SIA
              (Security Industry Authority) licence, which you can obtain
              through approved training.
            </p>

            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6 tracking-tight">
              Training Requirements
            </h2>
            <p className="mb-6">
              To become a door supervisor, you need to complete an SIA-approved
              Level 2 Award for Door Supervisors. This typically includes:
            </p>
            <ul className="mb-10 space-y-4 list-none pl-0">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#FF5421] mt-2.5 shrink-0"></span>
                <span>
                  <strong className="text-[#1A1A1A]">
                    Conflict Management
                  </strong>{" "}
                  — Learn de-escalation techniques and how to handle difficult
                  situations professionally
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#FF5421] mt-2.5 shrink-0"></span>
                <span>
                  <strong className="text-[#1A1A1A]">
                    Physical Intervention
                  </strong>{" "}
                  — Understand approved methods of physical intervention when
                  necessary
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#FF5421] mt-2.5 shrink-0"></span>
                <span>
                  <strong className="text-[#1A1A1A]">Legal Knowledge</strong> —
                  Study the laws relating to security, licensing, and your
                  responsibilities
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#FF5421] mt-2.5 shrink-0"></span>
                <span>
                  <strong className="text-[#1A1A1A]">First Aid</strong> —
                  Complete Emergency First Aid training
                </span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6 tracking-tight">
              How Long Does It Take?
            </h2>
            <p className="mb-10">
              Most door supervisor courses run for 4-6 days, with exams taken on
              the final day. At Courses4Me, we offer same-day results so you can
              start applying for your licence immediately.
            </p>

            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6 tracking-tight">
              Expected Salaries
            </h2>
            <ul className="mb-10 space-y-4 list-none pl-0">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#FF5421] mt-2.5 shrink-0"></span>
                <span>
                  <strong className="text-[#1A1A1A]">Entry level:</strong>{" "}
                  £10-£12 per hour
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#FF5421] mt-2.5 shrink-0"></span>
                <span>
                  <strong className="text-[#1A1A1A]">Experienced:</strong>{" "}
                  £12-£16 per hour
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#FF5421] mt-2.5 shrink-0"></span>
                <span>
                  <strong className="text-[#1A1A1A]">
                    Senior/Head Door Supervisor:
                  </strong>{" "}
                  £16-£22 per hour
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#FF5421] mt-2.5 shrink-0"></span>
                <span>
                  <strong className="text-[#1A1A1A]">
                    Event security (festivals, concerts):
                  </strong>{" "}
                  £14-£20 per hour
                </span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6 tracking-tight">
              Career Progression
            </h2>
            <p className="mb-12">
              Starting as a door supervisor opens doors to many advanced roles
              including close protection, security management, and even starting
              your own security firm.
            </p>
          </div>

          {/* ================= ARTICLE FOOTER ================= */}
          <div className="mt-16 pt-8 border-t border-gray-100">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              {/* LEFT */}
              <div className="flex flex-col gap-5">
                {/* LABEL */}
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-2xl bg-[#FFF4EE] flex items-center justify-center">
                    <Tag size={18} className="text-[#F15A24]" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] font-bold text-gray-400">
                      Article Category
                    </p>

                    <div className="mt-2 flex flex-wrap gap-3">
                      <span className="bg-[#EEF4FF] text-[#155DFC] text-[11px] font-bold uppercase tracking-wide px-4 py-2 rounded-full">
                        Career Guide
                      </span>

                      <span className="bg-[#FFF4EE] text-[#F15A24] text-[11px] font-bold uppercase tracking-wide px-4 py-2 rounded-full">
                        Security Training
                      </span>
                    </div>
                  </div>
                </div>

                {/* AUTHOR */}
                <div className="flex items-center gap-4">
                  <img
                    src={AuthorImg}
                    alt="Author"
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#F15A24]/10"
                  />

                  <div>
                    <h4 className="text-[16px] font-bold text-[#111827]">
                      Sarah Mitchell
                    </h4>

                    <p className="text-sm text-gray-500">
                      Senior Training Manager at Courses4me
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT CTA */}
              <div className="relative overflow-hidden rounded-[28px] bg-[#0B1D33] p-6 sm:p-7 min-w-full sm:min-w-[360px] shadow-[0_20px_50px_rgba(0,0,0,0.10)]">
                {/* GLOW */}
                <div className="absolute top-[-60px] right-[-50px] w-[180px] h-[180px] bg-[#F15A24]/15 blur-[80px] rounded-full" />

                <div className="relative z-10">
                  <p className="text-[#F15A24] text-xs font-bold uppercase tracking-[0.2em]">
                    Start Your Career
                  </p>

                  <h3 className="mt-3 text-2xl font-black text-white leading-tight">
                    Ready to Get Qualified?
                  </h3>

                  <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                    Browse SIA approved courses near you and start working in
                    the security industry fast.
                  </p>

                  <button
                    onClick={() => navigate("/courses")}
                    className="mt-6 cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#F15A24] hover:bg-[#df4c18] text-white font-bold px-7 py-4 rounded-full transition-all duration-300 shadow-[0_12px_35px_rgba(241,90,36,0.30)] hover:scale-[1.02] active:scale-95"
                  >
                    Find a Course Near You
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── RELATED ARTICLES ─── */}
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8 mt-12">
        <h2 className="text-3xl font-bold text-[#1A1A1A] mb-10 tracking-tight">
          Related Articles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogArticle;
