import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen, Clock, BookOpenCheck, Users, Play, ArrowRight, Shield } from "lucide-react";
import underlineStroke from "../../assets/home/underline-stroke.svg";
import doorSupervisorImg from "../../assets/home/James Okonkwo.png";

// ─── Data ────────────────────────────────────────────────────────────────────

const PREVIEW_COURSES = [
    {
        id: "cctv-training",
        title: "CCTV Operator Course",
        img: "https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg",
        badge: "High Demand",
        days: "3 Days",
        modules: "8 Modules",
        users: "95K+",
        desc: "Learn public space surveillance, data protection laws, and modern CCTV systems operation.",
        isPopular: true,
        isNew: false,
    },
    {
        id: "security-guard",
        title: "Close Protection Officer",
        img: "https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg",
        badge: "Premium",
        days: "14 Days",
        modules: "18 Modules",
        users: "42K+",
        desc: "Elite bodyguard training including threat assessment, route planning, and VIP protection.",
        isPopular: false,
        isNew: true,
    },
    {
        id: "first-aid-at-work",
        title: "First Aid at Work",
        img: "https://images.pexels.com/photos/7551662/pexels-photo-7551662.jpeg",
        badge: "Essential",
        days: "3 Days",
        modules: "10 Modules",
        users: "120K+",
        desc: "Nationally recognised first aid qualification covering CPR, emergency response, and more.",
        isPopular: true,
        isNew: false,
    },
];

const FILTERS = ["All Courses", "Popular", "New"];

// ─── Component ────────────────────────────────────────────────────────────────

const TrainingPreviewSection = () => {
    const navigate = useNavigate();
    const [activeFilter, setActiveFilter] = useState("All Courses");

    const filteredCourses = PREVIEW_COURSES.filter((c) => {
        if (activeFilter === "Popular") return c.isPopular;
        if (activeFilter === "New") return c.isNew;
        return true;
    });

    return (
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-16 sm:py-20 font-sans">

            {/* Header Area */}
            <div className="mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#E6F4FF] rounded-full border border-[#00A3FF33] mb-6">
                    <BookOpen className="w-3.5 h-3.5 text-[#00A3FF]" />
                    <span className="text-[#00A3FF] text-[11px] font-bold uppercase tracking-wider">
                        Course Previews
                    </span>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
                    {/* Title & Desc */}
                    <div className="max-w-2xl">
                        <h1 className="text-[44px] sm:text-[52px] md:text-[60px] font-bold text-[#1A1A1A] mb-5 leading-[1.05] tracking-tight">
                            Watch Before You{" "}
                            <span className="relative inline-block whitespace-nowrap">
                                Enrol
                                <img
                                    src={underlineStroke}
                                    className="absolute -bottom-0 left-6 sm:left-10 md:left-2 w-[70%] md:w-[90%]"
                                />
                            </span>
                        </h1>

                        <p className="text-gray-500 text-base sm:text-lg font-medium leading-relaxed">
                            Get an inside look at our training sessions. See the quality, <br className="hidden md:block" />
                            meet the instructors, and understand what to expect.
                        </p>
                    </div>

                    {/* Category Filter Pills */}
                    <div className="bg-[#F8F9FA] p-1.5 rounded-full border border-gray-100 flex items-center gap-1 w-fit shadow-sm">
                        {FILTERS.map((f) => (
                            <button
                                key={f}
                                onClick={() => setActiveFilter(f)}
                                className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all ${
                                    activeFilter === f
                                        ? "bg-[#1A1A1A] text-white shadow-md"
                                        : "text-gray-400 hover:text-gray-600"
                                }`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

                {/* LEFT: Featured Main Card */}
                <div
                    onClick={() => navigate("/course/door-supervisor")}
                    className="relative rounded-[32px] overflow-hidden group cursor-pointer shadow-xl flex flex-col justify-end min-h-[500px]"
                >
                    {/* Background Image */}
                    <img
                        src={doorSupervisorImg}
                        alt="Security Training"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                    {/* Top Badge */}
                    <div className="absolute top-6 left-6 z-20">
                        <span className="px-4 py-1.5 bg-[#FF5421] text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                            Most Popular
                        </span>
                    </div>

                    {/* Centered Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center z-10 mb-6">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#FF5421] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                            <Play className="w-9 h-9 sm:w-9 sm:h-9 text-white fill-white ml-1" />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="relative z-20 p-8 sm:p-10">
                        <h3 className="text-3xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
                            Door Supervisor Training
                        </h3>

                        <p className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed max-w-md opacity-90">
                            Comprehensive SIA Door Supervisor training covering conflict
                            management, physical intervention, and venue security.
                        </p>

                        <div className="flex flex-wrap items-center gap-5 mb-6 text-white/90 text-[13px] font-bold">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-[#00A3FF]" />
                                <span>6 Days</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <BookOpenCheck className="w-4 h-4 text-[#00A3FF]" />
                                <span>12 Modules</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="w-4 h-4 text-[#00A3FF]" />
                                <span>180K+ Enrolled</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2.5">
                            {["SIA Licence Ready", "Conflict Management", "Physical Skills"].map(tag => (
                                <span key={tag} className="px-4 py-1.5 bg-white/10 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest rounded-lg border border-white/10">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT: List of Course Cards */}
                <div className="flex flex-col gap-6">
                    {filteredCourses.length > 0 ? (
                        filteredCourses.map((course) => (
                            <div
                                key={course.id}
                                onClick={() => navigate(`/course/${course.id}`)}
                                className="bg-white border border-gray-100 rounded-[28px] p-4 flex flex-col sm:flex-row gap-6 hover:shadow-xl hover:border-gray-200 transition-all duration-300 cursor-pointer group relative items-center"
                            >
                                <div className="relative w-full sm:w-44 h-36 sm:h-32 flex-shrink-0 overflow-hidden rounded-[20px]">
                                    <span className="absolute top-2.5 left-2.5 px-2 py-1 bg-[#00A3FF] text-white text-[9px] font-bold uppercase tracking-wider rounded z-20 shadow-lg">
                                        {course.badge}
                                    </span>

                                    <img
                                        src={course.img}
                                        className="w-full h-full object-cover group-hover:scale-110 transition duration-700 opacity-90"
                                    />

                                    <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/20 group-hover:bg-black/10 transition-colors">
                                        <div className="w-11 h-11 bg-[#FF5421] rounded-full flex items-center justify-center group-hover:scale-110 transition shadow-xl">
                                            <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-1 flex flex-col py-1">
                                    <h4 className="text-lg font-bold text-[#1A1A1A] mb-1.5 tracking-tight group-hover:text-[#FF5421] transition-colors">
                                        {course.title}
                                    </h4>

                                    <p className="text-gray-500 text-sm mb-4 leading-relaxed font-medium line-clamp-2">
                                        {course.desc}
                                    </p>

                                    <div className="flex flex-wrap gap-4 text-gray-400 text-xs font-bold">
                                        <div className="flex items-center gap-1.5">
                                            <Clock className="w-3.5 h-3.5 text-[#00A3FF]" />
                                            <span>{course.days}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <BookOpenCheck className="w-3.5 h-3.5 text-[#00A3FF]" />
                                            <span>{course.modules}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Users className="w-3.5 h-3.5 text-[#00A3FF]" />
                                            <span>{course.users}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="hidden sm:flex pr-4">
                                    <ArrowRight className="w-5 h-5 text-gray-200 group-hover:text-[#FF5421] group-hover:translate-x-1 transition-all" />
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="flex items-center justify-center h-full min-h-[200px] border border-dashed border-gray-200 rounded-[28px] text-gray-400 text-sm font-medium">
                            No courses in this filter
                        </div>
                    )}
                </div>
            </div>

            {/* Bottom CTA Block */}
            <div className="mt-16 bg-[#1A1A1A] rounded-[40px] p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden text-center lg:text-left">
                {/* Visual Flair */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-[#FF5421] opacity-5 blur-[120px] -ml-44 -mt-44 pointer-events-none"></div>

                <div className="relative z-10 max-w-xl">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight leading-tight">
                        Ready to start your security career?
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg font-medium opacity-80">
                        Join 400,000+ professionals. Book your course today and get same-day exam results.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-5 relative z-10">
                    <button
                        onClick={() => navigate("/courses")}
                        className="px-10 py-5 bg-[#FF5421] text-white rounded-full text-base font-bold hover:bg-[#e04a1b] transition-all shadow-xl shadow-[#FF5421]/20 flex items-center gap-3 active:scale-95"
                    >
                        <Shield className="w-5 h-5 fill-white/20" />
                        Book a Course
                    </button>

                    <button
                        onClick={() => navigate("/courses")}
                        className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white rounded-full text-base font-bold transition-all border border-white/10 flex items-center gap-3 backdrop-blur-sm active:scale-95"
                    >
                        <Play className="w-5 h-5 fill-white" />
                        Watch More
                    </button>
                </div>
            </div>

        </div>
    );
};

export default TrainingPreviewSection;