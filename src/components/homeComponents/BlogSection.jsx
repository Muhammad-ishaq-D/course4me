import { useNavigate } from "react-router-dom";
import {
    ArrowRight,
    Calendar,
    Clock,
    TrendingUp,
    Tag,
} from "lucide-react";
import Blog1 from "../../assets/home/blog1.png";
import Blog2 from "../../assets/home/blog2.png";
import Blog3 from "../../assets/home/blog3.png";
import Blog4 from "../../assets/home/blog4.png";
import Blog5 from "../../assets/home/blog5.png";
import Blog6 from "../../assets/home/blog6.png";

export default function BlogSection() {
    const navigate = useNavigate();
    return (
        <section className="bg-white py-24 px-6 relative overflow-hidden">
            {/* Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF5421] opacity-5 blur-[100px] -mr-48 -mt-48"></div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header */}
                <div className="flex justify-between items-end mb-16 flex-wrap gap-10">

                    <div className="max-w-2xl">
                        <p className="flex items-center gap-2 text-[#00A3FF] text-sm font-bold tracking-widest uppercase mb-4">
                            <TrendingUp size={16} />
                            BLOG & NEWS
                        </p>

                        <h2 className="text-[44px] md:text-[52px] font-bold text-[#1A1A1A] mb-6 leading-tight tracking-tight">
                            Stay Sharp, Stay Ahead <br />
                            of the Game
                        </h2>

                        <p className="text-gray-600 text-lg font-medium">
                            Expert tips, industry news, and career advice for <br />
                            security professionals.
                        </p>
                    </div>

                    <button
                        onClick={() => navigate("/blog")}
                        className="flex items-center gap-3 bg-[#1A1A1A] text-white px-8 py-4 rounded-full font-bold shadow-xl hover:opacity-90 transition-all transform hover:scale-105"
                    >
                        View All Stories
                        <ArrowRight size={18} />
                    </button>

                </div>

                {/* Grid */}
                <div className="grid lg:grid-cols-3 gap-10">

                    {/* Large Featured Card */}
                    <div onClick={() => navigate("/blog")} className="lg:col-span-2 relative rounded-[32px] overflow-hidden shadow-2xl group cursor-pointer">

                        <img
                            src={Blog1}
                            className="w-full h-[520px] object-cover group-hover:scale-105 transition duration-700"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/40 to-transparent"></div>

                        <div className="absolute bottom-10 left-10 right-10 text-white">

                            <span className="bg-[#00A3FF] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-lg shadow-lg">
                                Career Guide
                            </span>

                            <h3 className="text-3xl md:text-4xl font-bold mt-6 mb-4 leading-tight">
                                Why Now is the Best Time to Start a Security Career
                            </h3>

                            <p className="text-gray-300 text-lg mb-8 max-w-2xl font-medium">
                                The security industry is growing faster than ever. Discover why 2026 is the perfect year to get licensed and start earning.
                            </p>

                            <div className="flex items-center gap-8 text-sm text-gray-300 font-bold uppercase tracking-widest">
                                <div className="flex items-center gap-2">
                                    <Calendar size={18} className="text-gray-400" />
                                    Feb 28, 2026
                                </div>

                                <div className="flex items-center gap-2">
                                    <Clock size={18} className="text-gray-400" />
                                    8 min read
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right side cards */}
                    <div className="flex flex-col gap-8">

                        <SmallArticle
                            image={Blog2}
                            tag="Expert Tips"
                            title="Top 5 Conflict Management Tips for 2026"
                            desc="Stay safe and professional on the job with these essential techniques from our lead instructors."
                            date="Feb 22, 2026"
                            read="5 min read"
                            onClick={() => navigate("/blog")}
                        />

                        <SmallArticle
                            image={Blog3}
                            tag="Exam Prep"
                            title="How to Pass Your SIA Exam First Time"
                            desc="Proven strategies and study tips to help you ace your certification on your first attempt."
                            date="Feb 15, 2026"
                            read="4 min read"
                            onClick={() => navigate("/blog")}
                        />

                    </div>

                </div>

                {/* Bottom Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">

                    <BottomCard
                        image={Blog4}
                        tag="Technology"
                        color="bg-purple-100 text-purple-600 border-purple-200"
                        title="The Future of AI in Modern CCTV Surveillance"
                        desc="How artificial intelligence is changing the way we monitor and protect public spaces."
                        date="Feb 10, 2026"
                        read="6 min read"
                        onClick={() => navigate("/blog")}
                    />

                    <BottomCard
                        image={Blog5}
                        tag="Business"
                        color="bg-[#00A3FF0A] text-[#00A3FF] border-[#00A3FF33]"
                        title="Starting Your Own Security Firm: A Step-by-Step Guide"
                        desc="Ready to be your own boss? Learn the essentials of launching a security company."
                        date="Feb 3, 2026"
                        read="7 min read"
                        onClick={() => navigate("/blog")}
                    />

                    <BottomCard
                        image={Blog6}
                        tag="Trends"
                        color="bg-[#00A3FF0A] text-[#00A3FF] border-[#00A3FF33]"
                        title="5 Key Security Trends to Watch Out for This Year"
                        desc="Stay ahead of the curve with our analysis of the biggest trends in 2026."
                        date="Jan 26, 2026"
                        read="3 min read"
                        onClick={() => navigate("/blog")}
                    />

                </div>

            </div>
        </section>
    );
}


/* Small Article */
function SmallArticle({ image, tag, title, desc, date, read, onClick }) {
    return (
        <div onClick={onClick} className="bg-white rounded-[24px] overflow-hidden flex shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group cursor-pointer">

            <div className="w-40 h-full flex-shrink-0 overflow-hidden">
                <img
                    src={image}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
            </div>

            <div className="p-6">

                <span className="text-[10px] font-bold uppercase tracking-widest bg-[#00A3FF0A] text-[#00A3FF] px-2.5 py-1 rounded-md border border-[#00A3FF1A]">
                    {tag}
                </span>

                <h4 className="font-bold text-[#1A1A1A] mt-3 mb-2 leading-tight group-hover:text-[#FF5421] transition">
                    {title}
                </h4>

                <p className="text-xs text-gray-500 mb-4 line-clamp-2 font-medium">
                    {desc}
                </p>

                <div className="flex items-center gap-4 text-[10px] text-gray-400 font-bold uppercase tracking-widest">

                    <span className="flex items-center gap-1.5">
                        <Calendar size={12} className="text-gray-400" />
                        {date}
                    </span>

                    <span className="flex items-center gap-1.5">
                        <Clock size={12} className="text-gray-400" />
                        {read}
                    </span>

                </div>

            </div>
        </div>
    );
}


/* Bottom Card */
function BottomCard({ image, tag, color, title, desc, date, read, onClick }) {
    return (
        <div onClick={onClick} className="bg-white rounded-[28px] shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300 group cursor-pointer flex flex-col">

            <div className="h-56 overflow-hidden">
                <img
                    src={image}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
            </div>

            <div className="p-8 flex-1 flex flex-col">

                <span className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-md border w-fit ${color}`}>
                    <Tag size={12} />
                    {tag}
                </span>

                <h4 className="font-bold text-xl mt-5 mb-3 leading-tight text-[#1A1A1A] group-hover:text-[#FF5421] transition">
                    {title}
                </h4>

                <p className="text-gray-500 text-sm mb-6 flex-1 font-medium">
                    {desc}
                </p>

                <div className="flex justify-between items-center text-[10px] text-gray-400 font-bold uppercase tracking-widest pt-6 border-t border-gray-50">

                    <span className="flex items-center gap-2">
                        <Calendar size={14} className="text-gray-400" />
                        {date}
                    </span>

                    <span className="flex items-center gap-2">
                        <Clock size={14} className="text-gray-400" />
                        {read}
                    </span>

                </div>

            </div>
        </div>
    );
}
