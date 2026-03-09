import {
    ArrowRight,
    Calendar,
    Clock,
    TrendingUp
} from "lucide-react";
import Blog1 from "../../assets/home/blog1.png";
import Blog2 from "../../assets/home/blog2.png";
import Blog3 from "../../assets/home/blog3.png";
import Blog4 from "../../assets/home/blog4.png";
import Blog5 from "../../assets/home/blog5.png";
import Blog6 from "../../assets/home/blog6.png";

export default function BlogSection() {
    return (
        <section className=" py-20 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex justify-between items-start mb-14 flex-wrap gap-6">

                    <div className="max-w-xl">
                        <p className="flex items-center gap-2 text-[#B9FF5A] text-sm font-semibold mb-2">
                            <TrendingUp size={16} />
                            BLOG & NEWS
                        </p>

                        <h2 className="text-4xl font-bold text-slate-800 mb-4">
                            Latest Insights & Updates
                        </h2>

                        <p className="text-gray-500">
                            Stay informed with the latest security industry news,
                            career tips, and updates from Get Licensed.
                        </p>
                    </div>

                    <button className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full shadow-md hover:bg-slate-800 transition">
                        View All Articles
                        <ArrowRight size={16} />
                    </button>

                </div>

                {/* Grid */}
                <div className="grid lg:grid-cols-3 gap-8">

                    {/* Large Featured Card */}
                    <div className="lg:col-span-2 relative rounded-2xl overflow-hidden">

                        <img
                            src={Blog1}
                            className="w-full h-[420px] object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                        <div className="absolute bottom-6 left-6 right-6 text-white">

                            <span className="bg-[#B9FF5A] text-black text-xs px-3 py-1 rounded-full font-semibold">
                                Career Guide
                            </span>

                            <h3 className="text-2xl font-bold mt-3 mb-3">
                                How to Become a Door Supervisor in 2026: The Complete Guide
                            </h3>

                            <p className="text-gray-200 text-sm mb-4">
                                Everything you need to know about getting your SIA Door Supervisor
                                licence, from training requirements to career opportunities.
                            </p>

                            <div className="flex items-center gap-6 text-sm text-gray-200">
                                <div className="flex items-center gap-1">
                                    <Calendar size={16} />
                                    Feb 28, 2026
                                </div>

                                <div className="flex items-center gap-1">
                                    <Clock size={16} />
                                    8 min read
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right side cards */}
                    <div className="flex flex-col gap-6">

                        <SmallArticle
                            image={Blog2}
                            tag="Industry News"
                            title="SIA Licence Changes 2026: What You Need to Know"
                            desc="The Security Industry Authority has announced important updates to licensing requirements."
                            date="Feb 22, 2026"
                            read="5 min read"
                        />

                        <SmallArticle
                            image={Blog3}
                            tag="Industry News"
                            title="CCTV Operator Demand Surges Across Major UK Cities"
                            desc="New data reveals a 35% increase in demand for qualified CCTV Operators."
                            date="Feb 15, 2026"
                            read="4 min read"
                        />

                    </div>

                </div>

                {/* Bottom Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">

                    <BottomCard
                        image={Blog4}
                        tag="Study Tips"
                        color="bg-purple-100 text-purple-600"
                        title="5 Tips to Pass Your SIA Exam on the First Attempt"
                        desc="Our top instructors share proven study techniques and insider tips."
                        date="Feb 10, 2026"
                        read="6 min read"
                    />

                    <BottomCard
                        image={Blog5}
                        tag="Career Guide"
                        color="bg-[#B9FF5A] text-black"
                        title="Security Career Salaries in 2026: What to Expect"
                        desc="A detailed breakdown of average pay across security roles."
                        date="Feb 3, 2026"
                        read="7 min read"
                    />

                    <BottomCard
                        image={Blog6}
                        tag="Company News"
                        color="bg-orange-100 text-orange-600"
                        title="Get Licensed Opens 10 New Training Centres Across the UK"
                        desc="Expanding our reach to serve more aspiring security professionals."
                        date="Jan 26, 2026"
                        read="3 min read"
                    />

                </div>

            </div>
        </section>
    );
}


/* Small Article */
function SmallArticle({ image, tag, title, desc, date, read }) {
    return (
        <div className="bg-white rounded-xl overflow-hidden flex shadow-sm">

            <img
                src={image}
                className="w-40 h-47 object-cover"
            />

            <div className="p-4">

                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                    {tag}
                </span>

                <h4 className="font-semibold text-sm mt-2 mb-1">
                    {title}
                </h4>

                <p className="text-xs text-gray-500 mb-3">
                    {desc}
                </p>

                <div className="flex items-center gap-4 text-xs text-gray-400">

                    <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {date}
                    </span>

                    <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {read}
                    </span>

                </div>

            </div>
        </div>
    );
}


/* Bottom Card */
function BottomCard({ image, tag, color, title, desc, date, read }) {
    return (
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

            <img
                src={image}
                className="w-full h-48 object-cover"
            />

            <div className="p-6">

                <span className={`text-xs px-3 py-1 rounded-full ${color}`}>
                    {tag}
                </span>

                <h4 className="font-semibold mt-3 mb-2">
                    {title}
                </h4>

                <p className="text-gray-500 text-sm mb-4">
                    {desc}
                </p>

                <div className="flex justify-between text-xs text-gray-400">

                    <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {date}
                    </span>

                    <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {read}
                    </span>

                </div>

            </div>
        </div>
    );
}