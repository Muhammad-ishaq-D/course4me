import React, { useEffect } from "react";
import { ArrowLeft, Share2, Facebook, Twitter, Linkedin, Calendar, Clock, User, ArrowRight, Tag } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import Blog1 from "../assets/home/blog1.png";
import AuthorImg from "../assets/home/Sarah Mitchell.png";
import Blog4 from "../assets/home/blog4.png";
import Blog5 from "../assets/home/blog5.png";
import Blog6 from "../assets/home/blog6.png";

const BlogArticle = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#f9fafb] min-h-screen font-sans pb-20">
            {/* ─── HERO SECTION ─── */}
            <div className="bg-[#182335] pt-32 pb-48 px-6 lg:px-8">
                <div className="max-w-[1000px] mx-auto">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-8 tracking-wide font-medium">
                        <Link to="/" className="hover:text-white transition">Home</Link>
                        <span>›</span>
                        <Link to="/blog" className="hover:text-white transition">Blog</Link>
                        <span>›</span>
                        <span className="text-gray-300">How to Become a Door Supervisor in 2026: The Complete Guide</span>
                    </div>

                    {/* Tags */}
                    <div className="flex gap-4 mb-8 flex-wrap">
                        <span className="bg-[#00A3FF] text-white text-[10px] font-extrabold uppercase tracking-widest px-5 py-2.5 rounded-full shadow-lg">
                            Career Guide
                        </span>
                        <span className="bg-[#2D3B4E] border border-[#3E4E63] text-white text-[10px] font-extrabold uppercase tracking-widest px-5 py-2.5 rounded-full shadow-lg">
                            Featured Article
                        </span>
                    </div>

                    {/* Title & Description */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.15] tracking-tight">
                        How to Become a Door Supervisor <br className="hidden lg:block" />
                        in 2026: The Complete Guide
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed font-regular max-w-3xl">
                        Everything you need to know about getting your SIA Door Supervisor licence, from training requirements to career opportunities and expected salaries across the UK.
                    </p>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-6">
                        <div className="flex items-center gap-3">
                            <img src={AuthorImg} alt="Sarah Mitchell" className="w-12 h-12 rounded-full border-2 border-white/10 bg-[#FF5421] object-cover" />
                            <div>
                                <div className="text-white font-bold text-sm">Sarah Mitchell</div>
                                <div className="text-gray-400 text-xs">Senior Training Manager</div>
                            </div>
                        </div>

                        <div className="hidden sm:block h-8 w-px bg-white/10"></div>

                        <div className="flex items-center gap-2 text-sm text-gray-400 font-medium">
                            <Calendar size={18} className="text-gray-500" />
                            Feb 28, 2026
                        </div>

                        <div className="hidden sm:block h-8 w-px bg-white/10"></div>

                        <div className="flex items-center gap-2 text-sm text-gray-400 font-medium">
                            <Clock size={18} className="text-gray-500" />
                            8 min read
                        </div>
                    </div>
                </div>
            </div>

            {/* ─── ARTICLE CONTENT ─── */}
            <div className="max-w-[1000px] mx-auto px-6 lg:px-8 -mt-32 relative z-10">

                {/* Main Image */}
                <div className="w-full h-[300px] md:h-[500px] rounded-t-[32px] overflow-hidden shadow-2xl border-4 border-white">
                    <img src={Blog1} alt="Door Supervisor" className="w-full h-full object-cover" />
                </div>

                {/* Content Container */}
                <div className="bg-white rounded-b-[32px] sm:rounded-[32px] sm:-mt-10 p-8 sm:p-12 md:p-16 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 relative mb-16">

                    {/* Top Bar inside content */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-6 border-b border-gray-100 mb-10 gap-6">
                        <button
                            onClick={() => navigate('/blog')}
                            className="flex items-center gap-2 text-gray-400 hover:text-[#1A1A1A] transition font-semibold text-sm uppercase tracking-wider"
                        >
                            <ArrowLeft size={18} />
                            Back to all articles
                        </button>
                        <div className="flex items-center gap-4">
                            <span className="text-gray-400 font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
                                <Share2 size={16} /> Share
                            </span>
                            <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#00A3FF] hover:border-[#00A3FF] transition"><Facebook size={14} /></button>
                            <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#00A3FF] hover:border-[#00A3FF] transition"><Twitter size={14} /></button>
                            <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#00A3FF] hover:border-[#00A3FF] transition"><Linkedin size={14} /></button>
                        </div>
                    </div>

                    {/* Article Typography */}
                    <div className="prose prose-lg max-w-none text-gray-600 font-regular leading-relaxed">
                        <p className="text-xl leading-relaxed text-gray-700 mb-10">
                            Becoming a door supervisor is one of the most accessible and rewarding career paths in the UK security industry. With growing demand across pubs, clubs, events, and retail venues, door supervisors are essential to public safety.
                        </p>

                        <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6 tracking-tight">What is a Door Supervisor?</h2>
                        <p className="mb-10">
                            A door supervisor is a licensed security professional responsible for controlling entry to venues, managing conflict situations, and ensuring the safety of staff and patrons. The role requires an SIA (Security Industry Authority) licence, which you can obtain through approved training.
                        </p>

                        <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6 tracking-tight">Training Requirements</h2>
                        <p className="mb-6">
                            To become a door supervisor, you need to complete an SIA-approved Level 2 Award for Door Supervisors. This typically includes:
                        </p>
                        <ul className="mb-10 space-y-4 list-none pl-0">
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 rounded-full bg-[#FF5421] mt-2.5 shrink-0"></span>
                                <span><strong className="text-[#1A1A1A]">Conflict Management</strong> — Learn de-escalation techniques and how to handle difficult situations professionally</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 rounded-full bg-[#FF5421] mt-2.5 shrink-0"></span>
                                <span><strong className="text-[#1A1A1A]">Physical Intervention</strong> — Understand approved methods of physical intervention when necessary</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 rounded-full bg-[#FF5421] mt-2.5 shrink-0"></span>
                                <span><strong className="text-[#1A1A1A]">Legal Knowledge</strong> — Study the laws relating to security, licensing, and your responsibilities</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 rounded-full bg-[#FF5421] mt-2.5 shrink-0"></span>
                                <span><strong className="text-[#1A1A1A]">First Aid</strong> — Complete Emergency First Aid training</span>
                            </li>
                        </ul>

                        <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6 tracking-tight">How Long Does It Take?</h2>
                        <p className="mb-10">
                            Most door supervisor courses run for 4-6 days, with exams taken on the final day. At Get Licensed, we offer same-day results so you can start applying for your licence immediately.
                        </p>

                        <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6 tracking-tight">Expected Salaries</h2>
                        <ul className="mb-10 space-y-4 list-none pl-0">
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 rounded-full bg-[#FF5421] mt-2.5 shrink-0"></span>
                                <span><strong className="text-[#1A1A1A]">Entry level:</strong> £10-£12 per hour</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 rounded-full bg-[#FF5421] mt-2.5 shrink-0"></span>
                                <span><strong className="text-[#1A1A1A]">Experienced:</strong> £12-£16 per hour</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 rounded-full bg-[#FF5421] mt-2.5 shrink-0"></span>
                                <span><strong className="text-[#1A1A1A]">Senior/Head Door Supervisor:</strong> £16-£22 per hour</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 rounded-full bg-[#FF5421] mt-2.5 shrink-0"></span>
                                <span><strong className="text-[#1A1A1A]">Event security (festivals, concerts):</strong> £14-£20 per hour</span>
                            </li>
                        </ul>

                        <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6 tracking-tight">Career Progression</h2>
                        <p className="mb-12">
                            Starting as a door supervisor opens doors to many advanced roles including close protection, security management, and even starting your own security firm.
                        </p>
                    </div>

                    {/* Bottom Bar */}
                    <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-gray-100 gap-6">
                        <div className="flex items-center gap-3">
                            <Tag size={20} className="text-gray-300" />
                            <span className="bg-[#00A3FF] text-white text-[10px] font-extrabold uppercase tracking-widest px-4 py-2 rounded-full shadow-sm cursor-pointer hover:bg-blue-600 transition">
                                Career Guide
                            </span>
                        </div>

                        <button
                            onClick={() => navigate('/courses')}
                            className="bg-[#FF5421] text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-[#e04a1b] transition shadow-lg shadow-[#FF5421]/20 w-full sm:w-auto justify-center"
                        >
                            Find a Course Near You
                            <ArrowRight size={18} />
                        </button>
                    </div>

                </div>
            </div>

            {/* ─── RELATED ARTICLES ─── */}
            <div className="max-w-[1240px] mx-auto px-6 lg:px-8 mt-12">
                <h2 className="text-3xl font-bold text-[#1A1A1A] mb-10 tracking-tight">Related Articles</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Article 1 */}
                    <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition duration-300 group cursor-pointer flex flex-col h-full">
                        <div className="h-56 overflow-hidden relative">
                            <img src={Blog6} alt="Salaries" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                        </div>
                        <div className="p-8 flex flex-col flex-1">
                            <span className="bg-[#00A3FF] text-white text-[9px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded w-fit mb-5">
                                Career Guide
                            </span>
                            <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 leading-snug group-hover:text-[#00A3FF] transition">
                                Security Career Salaries in 2026: What to Expect
                            </h3>
                            <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-2">
                                A detailed breakdown of average pay across security roles, from door supervision to close protection.
                            </p>
                            <div className="flex items-center justify-between text-xs text-gray-400 font-semibold uppercase tracking-wider mt-auto pt-4 border-t border-gray-100">
                                <div className="flex items-center gap-1.5"><Calendar size={14} /> Feb 5, 2026</div>
                                <div className="flex items-center gap-1.5"><Clock size={14} /> 7 min read</div>
                            </div>
                        </div>
                    </div>

                    {/* Article 2 */}
                    <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition duration-300 group cursor-pointer flex flex-col h-full">
                        <div className="h-56 overflow-hidden relative">
                            <img src={Blog5} alt="Manager Guide" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                        </div>
                        <div className="p-8 flex flex-col flex-1">
                            <span className="bg-[#00A3FF] text-white text-[9px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded w-fit mb-5">
                                Career Guide
                            </span>
                            <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 leading-snug group-hover:text-[#00A3FF] transition">
                                Building an Effective Security Team: A Manager's Guide
                            </h3>
                            <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-2">
                                From recruitment to retention, learn the best practices for assembling and managing a high-performing team.
                            </p>
                            <div className="flex items-center justify-between text-xs text-gray-400 font-semibold uppercase tracking-wider mt-auto pt-4 border-t border-gray-100">
                                <div className="flex items-center gap-1.5"><Calendar size={14} /> Jan 12, 2026</div>
                                <div className="flex items-center gap-1.5"><Clock size={14} /> 5 min read</div>
                            </div>
                        </div>
                    </div>

                    {/* Article 3 */}
                    <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition duration-300 group cursor-pointer flex flex-col h-full">
                        <div className="h-56 overflow-hidden relative">
                            <img src={Blog4} alt="Event Security" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                        </div>
                        <div className="p-8 flex flex-col flex-1">
                            <span className="bg-[#00A3FF] text-white text-[9px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded w-fit mb-5">
                                Career Guide
                            </span>
                            <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 leading-snug group-hover:text-[#00A3FF] transition">
                                Event Security: From Festivals to Corporate Functions
                            </h3>
                            <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-2">
                                Discover the exciting world of event security, one of the fastest-growing and highest-paying sectors.
                            </p>
                            <div className="flex items-center justify-between text-xs text-gray-400 font-semibold uppercase tracking-wider mt-auto pt-4 border-t border-gray-100">
                                <div className="flex items-center gap-1.5"><Calendar size={14} /> Jan 5, 2026</div>
                                <div className="flex items-center gap-1.5"><Clock size={14} /> 5 min read</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BlogArticle;
