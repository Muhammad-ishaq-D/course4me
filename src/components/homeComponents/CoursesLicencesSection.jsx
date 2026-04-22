import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Shield,
  Camera,
  Heart,
  Users,
  Briefcase,
  CheckSquare,
  ArrowRight,
  Lock
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const POPULAR_COURSES = [
  {
    id: "door-supervisor",
    icon: Shield,
    title: "Door Supervisor Training",
    description: "SIA Licence · 6 Days",
    category: "Security",
  },
  {
    id: "cctv-training",
    icon: Camera,
    title: "CCTV Training",
    description: "SIA Licence · 3 Days",
    category: "Security",
  },
  {
    id: "door-supervisor",
    icon: Shield,
    title: "Door Supervisor Refresher Course",
    description: "SIA Refresher · 1 Day",
    category: "Security",
  },
  {
    id: "first-aid-at-work",
    icon: Heart,
    title: "First Aid at Work (FAW) — Level 3",
    description: "HSE Certified · 3 Days",
    category: "First Aid",
  },
  {
    id: "security-guard",
    icon: Users,
    title: "Security Guard Training",
    description: "SIA Licence · 4 Days",
    category: "Security",
  },
];

const POPULAR_LICENCES = [
  {
    id: "sia-door-supervisor-topup",
    icon: CheckSquare,
    title: "SIA Top-Up Refresher Training for Door Supervisor",
  },
  {
    id: "sia-security-guard-topup",
    icon: CheckSquare,
    title: "SIA Top-Up Refresher Training for Security Guard",
  },
  {
    id: "sia-close-protection-topup",
    icon: CheckSquare,
    title: "SIA Top-Up Refresher Training for Close Protection",
  },
];

const CATEGORIES = ["Most Popular", "SIA Licenses", "Top-Up Courses", "Specialist"];

// ─── Sub-components ───────────────────────────────────────────────────────────

const ItemCard = ({ icon: Icon, title, description, onClick }) => (
  <div
    onClick={onClick}
    className="flex items-center justify-between bg-white hover:bg-gray-50 transition-all duration-300 rounded-[20px] px-6 py-5 border border-gray-100 shadow-sm hover:shadow-md cursor-pointer group"
  >
    <div className="flex items-center gap-5">
      <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100">
        <Icon className="w-5 h-5 text-gray-400 group-hover:text-[#00A3FF] transition-colors" />
      </div>

      <div>
        <h4 className="font-bold text-[#1A1A1A] text-base group-hover:text-[#00A3FF] transition-colors">
          {title}
        </h4>
        {description && (
          <p className="text-[13px] text-gray-500 mt-0.5 font-medium">
            {description}
          </p>
        )}
      </div>
    </div>

    <ArrowRight className="w-4 h-4 text-gray-200 group-hover:text-[#00A3FF] group-hover:translate-x-1 transition-all" />
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const CoursesLicencesSection = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("Most Popular");

  const filteredCourses =
    activeCategory === "Most Popular"
      ? POPULAR_COURSES
      : POPULAR_COURSES.filter((c) => c.category === activeCategory);

  return (
    <section className="bg-white py-24 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* CATEGORIES FILTER */}
        <div className="mb-16">
          <h2 className="text-[#FF5421] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
            Our Courses
          </h2>
          <h2 className="text-[44px] md:text-[52px] font-bold text-[#1A1A1A] mb-6 tracking-tight leading-none">
            Pick Your Course. <span className="text-[#FF5421]">Change Your Life.</span>
          </h2>
          <div className="flex flex-wrap items-center gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-7 py-3 font-bold rounded-full transition-all text-sm ${activeCategory === cat
                  ? "bg-[#00A3FF] text-white shadow-lg shadow-[#00A3FF]/20 hover:opacity-90"
                  : "bg-[#F8F9FA] text-gray-500 border border-gray-100 hover:bg-gray-100"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* LEFT COLUMN — Popular Courses */}
          <div>
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-2xl font-bold text-[#1A1A1A] tracking-tight">
                POPULAR COURSES
              </h3>
              <button
                onClick={() => navigate("/courses")}
                className="text-[#00A3FF] font-bold text-[16px] tracking-widest uppercase flex items-center gap-2 hover:gap-3 transition-all"
              >
                ALL COURSES <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4">
              {filteredCourses.length > 0 ? (
                filteredCourses.map((course, idx) => (
                  <ItemCard
                    key={`${course.id}-${idx}`}
                    icon={course.icon}
                    title={course.title}
                    description={course.description}
                    onClick={() => navigate(`/course/${course.id}`)}
                  />
                ))
              ) : (
                <div className="h-[74px] border border-dashed border-gray-200 rounded-[20px] flex items-center justify-center text-gray-400 text-sm font-medium">
                  No courses in this category yet
                </div>
              )}

              {/* Filler slots to maintain consistent height when full list */}
              {filteredCourses.length > 0 &&
                Array.from({
                  length: Math.max(0, 2 - (filteredCourses.length - POPULAR_COURSES.length + 2)),
                }).map((_, i) => (
                  <div
                    key={`filler-${i}`}
                    className="h-[74px] border border-gray-50 rounded-[20px]"
                  />
                ))}
            </div>
          </div>

          {/* RIGHT COLUMN — Popular Licences */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-2xl font-bold text-[#1A1A1A] tracking-tight">
                POPULAR LICENCES
              </h3>
              <button
                onClick={() => navigate("/licences")}
                className="text-[#00A3FF] font-bold text-[16px] tracking-widest uppercase flex items-center gap-2 hover:gap-3 transition-all"
              >
                ALL LICENCES <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4 flex-1">
              {POPULAR_LICENCES.map((licence) => (
                <ItemCard
                  key={licence.id}
                  icon={licence.icon}
                  title={licence.title}
                  onClick={() => navigate("/licences")}
                />
              ))}

              <div className="pt-6 space-y-4">
                <button
                  onClick={() => navigate("/locations")}
                  className="text-[#00A3FF] font-bold text-[13px] tracking-widest uppercase flex items-center gap-2 hover:gap-3 transition-all"
                >
                  ALL LOCATIONS <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => navigate("/careers")}
                  className="text-[#00A3FF] font-bold text-[13px] tracking-widest uppercase flex items-center gap-2 hover:gap-3 transition-all"
                >
                  ALL CAREERS <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* SIA Licence Required Card */}
            <div className="mb-28 mt-8 sm:mt-6 lg:mt-0 bg-[#1A1A1A] rounded-[24px] p-8 relative overflow-hidden shadow-2xl">
              <div className="flex items-start gap-6 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#00A3FF]/10 flex items-center justify-center flex-shrink-0 border border-[#00A3FF]/20">
                  <Shield className="w-6 h-6 text-[#00A3FF]" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-2 tracking-tight">
                    SIA Licence Required
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed font-medium">
                    Mandatory requirement to work in security roles. An SIA licence is legally
                    required to work in the private security industry in the UK.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CoursesLicencesSection;