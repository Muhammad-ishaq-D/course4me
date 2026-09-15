import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import courseService from "../../api/services/courseService";
import licenseService from "../../api/services/licenseService";
import {
  Shield,
  Heart,
  ArrowRight,
  Lock,
  BookOpen,
  ChevronDown,
  CheckSquare,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import ItemCardSkeleton from "../ui/ItemCardSkeleton";

// ─── Helpers ──────────────────────────────────────────────────────────────────

const getCategoryIcon = (category) => {
  switch (category) {
    case "SIA Training":
      return Shield;
    case "First Aid":
      return Heart;
    case "Health & Safety":
      return Shield;
    case "Specialist":
      return Lock;
    default:
      return BookOpen;
  }
};

const CATEGORIES = [
  "Most Popular",
  "SIA Licenses",
  "Top-Up Courses",
  "Specialist",
];

const ItemCard = ({
  icon: Icon,
  title,
  description,
  onClick,
  variant = "course", // course | license
}) => {
  const isLicense = variant === "license";

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className={`
        group relative overflow-hidden rounded-2xl border p-4 sm:p-5
        cursor-pointer transition-all duration-300 flex flex-col justify-between gap-4

        ${
          isLicense
            ? "bg-white border-blue-100 hover:border-[#00A3FF]/40 hover:shadow-[0_12px_30px_rgba(0,163,255,0.12)]"
            : "bg-white border-gray-100 hover:border-[#FF5421]/30 hover:shadow-[0_12px_30px_rgba(255,84,33,0.1)]"
        }
      `}
    >
      {/* HOVER ACCENT GLOW */}
      <div
        className={`absolute top-0 right-0 w-36 h-36 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none ${
          isLicense ? "bg-[#00A3FF]/10" : "bg-[#FF5421]/10"
        }`}
      />

      <div className="relative flex items-center justify-between gap-4">
        {/* LEFT ICON & CONTENT */}
        <div className="flex items-center gap-4 min-w-0">
          {/* ICON CONTAINER */}
          <div
            className={`
              hidden sm:flex items-center justify-center
              w-12 h-12 rounded-xl flex-shrink-0
              transition-all duration-300 group-hover:scale-105

              ${
                isLicense
                  ? "bg-[#00A3FF]/10 text-[#00A3FF]"
                  : "bg-[#FF5421]/10 text-[#FF5421]"
              }
            `}
          >
            <Icon className="w-6 h-6" />
          </div>

          {/* TEXT CONTENT */}
          <div className="min-w-0 space-y-1">
            <h4 className="text-lg sm:text-xl font-extrabold text-[#111111] leading-snug truncate group-hover:text-[#00A3FF] transition-colors">
              {title}
            </h4>

            {description && (
              <p className="text-xs sm:text-sm text-gray-500 font-medium line-clamp-1">
                {description}
              </p>
            )}
          </div>
        </div>

        {/* RIGHT CTA LINK */}
        <div className="flex items-center gap-1.5 shrink-0 pl-2">
          <span className="hidden md:inline-block text-xs font-bold text-gray-400 group-hover:text-[#00A3FF] transition-colors">
            {isLicense ? "View Licence" : "View Course"}
          </span>

          <div
            className={`
              w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300
              ${
                isLicense
                  ? "bg-blue-50 text-[#00A3FF] group-hover:bg-[#00A3FF] group-hover:text-white"
                  : "bg-orange-50 text-[#FF5421] group-hover:bg-[#FF5421] group-hover:text-white"
              }
            `}
          >
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </div>
        </div>
      </div>

      {/* BOTTOM ACCENT BAR */}
      <div
        className={`
          absolute bottom-0 left-0 w-full h-[3px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300
          ${isLicense ? "bg-[#00A3FF]" : "bg-[#FF5421]"}
        `}
      />
    </motion.div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────

const CoursesLicencesSection = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("Most Popular");
  const [courses, setCourses] = useState([]);
  const [licences, setLicences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const params = { status: "Published" };

        const [coursesRes, licencesRes] = await Promise.all([
          courseService.getAllCourses(params),
          licenseService.getAllLicenses(params),
        ]);

        const coursesData = (coursesRes.data?.data || []).filter(
          (course) => course.isPopular === true,
        );

        const licencesData = (licencesRes.data?.data || []).filter(
          (licence) => licence.isPopular === true,
        );

        const mappedCourses = coursesData.map((course) => ({
          id: course._id,
          icon: getCategoryIcon(course.category),
          title: course.title,
          description: `${course.subtitle || course.category} · ${course.duration || "N/A"}`,
          category: course.category,
        }));

        const mappedLicences = licencesData.map((licence) => ({
          id: licence._id,
          icon: CheckSquare,
          title: licence.title,
          description: licence.description || "Licence",
        }));

        setCourses(mappedCourses);
        setLicences(mappedLicences);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredCourses =
    activeCategory === "Most Popular"
      ? courses.slice(0, 5)
      : courses.filter((c) => {
          if (activeCategory === "SIA Licenses")
            return c.category === "SIA Training";
          if (activeCategory === "Specialist")
            return c.category === "Specialist";
          return true;
        });

  return (
    <section className="relative overflow-hidden bg-[#FAFAFA] py-16 px-4 lg:py-24">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#00A3FF]/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#FF5421]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#FF5421]/10 border border-[#FF5421]/20 text-[#FF5421] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-5">
            <Sparkles size={14} className="fill-[#FF5421]" />
            Courses & Licences
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] leading-[1.08] tracking-tight">
            Pick Your Course. <br />
            <span className="text-[#FF5421]">Build Your Future.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
            Explore industry-recognised training courses and licences designed
            to help you start and grow your career in security.
          </p>
        </div>

        {/* CATEGORY FILTER TABS */}
        <div className="mt-8 sm:mt-10">
          {/* Mobile Dropdown Filter */}
          <div className="relative md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full flex items-center justify-between rounded-2xl border border-gray-200 bg-white px-6 py-3.5 text-base font-bold text-[#111111] shadow-sm transition-all hover:border-[#FF5421]"
            >
              <span className="flex items-center gap-2">
                <span className="text-xs text-gray-400 font-semibold uppercase">
                  Filter:
                </span>
                {activeCategory}
              </span>

              <ChevronDown
                size={18}
                className={`text-gray-500 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="absolute left-0 right-0 z-50 mt-2 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl py-1">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      setIsOpen(false);
                    }}
                    className={`block w-full px-5 py-3 text-left text-sm font-bold transition-all duration-200 ${
                      activeCategory === cat
                        ? "bg-[#FF5421] text-white"
                        : "text-gray-700 hover:bg-orange-50 hover:text-[#FF5421]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Filter Pills */}
          <div className="hidden md:flex flex-wrap gap-3 p-1.5 bg-gray-200/60 rounded-2xl max-w-max border border-gray-200/50">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-7 py-2.5 rounded-xl text-sm font-extrabold cursor-pointer transition-all duration-300 ${
                    isActive
                      ? "bg-[#FF5421] text-white shadow-md shadow-[#FF5421]/20"
                      : "text-gray-600 hover:text-[#111111] hover:bg-white/50"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-8">
          {/* LEFT: POPULAR COURSES (7 Cols) */}
          <div className="lg:col-span-7 rounded-[32px] bg-white border border-gray-200/80 p-6 sm:p-8 shadow-[0_15px_45px_rgba(0,0,0,0.03)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                <div>
                  <h3 className="text-2xl font-black text-[#111111]">
                    Popular Courses
                  </h3>
                  <p className="text-sm text-gray-500 font-medium mt-0.5">
                    Most enrolled training programmes
                  </p>
                </div>

                <button
                  onClick={() => navigate("/courses")}
                  className="hidden sm:flex items-center gap-2 text-[#FF5421] font-bold text-sm hover:gap-3 transition-all duration-300 cursor-pointer"
                >
                  <span>View All Courses</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* COURSES LIST */}
              <div className="space-y-3.5">
                {loading
                  ? [...Array(4)].map((_, idx) => (
                      <ItemCardSkeleton key={idx} />
                    ))
                  : filteredCourses.map((course, idx) => (
                      <ItemCard
                        key={`${course.id}-${idx}`}
                        icon={course.icon}
                        title={course.title}
                        description={course.description}
                        onClick={() => navigate(`/course/${course.id}`)}
                        variant="course"
                      />
                    ))}
              </div>
            </div>

            {/* Mobile View All */}
            <button
              onClick={() => navigate("/courses")}
              className="mt-6 sm:hidden w-full py-3 rounded-xl bg-orange-50 text-[#FF5421] font-bold text-sm flex items-center justify-center gap-2"
            >
              <span>View All Courses</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* RIGHT: POPULAR LICENCES (5 Cols) */}
          <div className="lg:col-span-5 rounded-[32px] bg-gradient-to-b from-blue-50/70 to-white border border-blue-100/80 p-6 sm:p-8 shadow-[0_15px_45px_rgba(0,163,255,0.04)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-blue-100/60">
                <div>
                  <h3 className="text-2xl font-black text-[#111111]">
                    Popular Licences
                  </h3>
                  <p className="text-sm text-gray-500 font-medium mt-0.5">
                    Most requested licence training
                  </p>
                </div>

                <button
                  onClick={() => navigate("/licences")}
                  className="hidden sm:flex items-center gap-2 text-[#00A3FF] font-bold text-sm hover:gap-3 transition-all duration-300 cursor-pointer"
                >
                  <span>View All</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* LICENCES LIST */}
              <div className="space-y-3.5">
                {loading
                  ? [...Array(3)].map((_, idx) => (
                      <ItemCardSkeleton key={idx} />
                    ))
                  : licences
                      .slice(0, 3)
                      .map((licence) => (
                        <ItemCard
                          key={licence.id}
                          icon={licence.icon}
                          title={licence.title}
                          description={
                            licence.shortDescription || licence.description
                          }
                          onClick={() =>
                            navigate(
                              `/licences/licencesdetails?id=${licence.id || licence.title}`,
                            )
                          }
                          variant="license"
                        />
                      ))}
              </div>
            </div>

            {/* Mobile View All */}
            <button
              onClick={() => navigate("/licences")}
              className="mt-6 sm:hidden w-full py-3 rounded-xl bg-blue-50 text-[#00A3FF] font-bold text-sm flex items-center justify-center gap-2"
            >
              <span>View All Licences</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesLicencesSection;
