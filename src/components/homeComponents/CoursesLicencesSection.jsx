import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import courseService from "../../api/services/courseService";
import licenseService from "../../api/services/licenseService";
import {
  Shield,
  Camera,
  Heart,
  Users,
  Briefcase,
  CheckSquare,
  ArrowRight,
  Lock,
  BookOpen,
  ChevronDown,
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
      return Shield; // Or a specific H&S icon
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
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className={`
        group relative overflow-hidden rounded-xl border p-3 md:p-5
        cursor-pointer transition-all duration-300

        ${
          isLicense
            ? "bg-blue-100 border-[#D8ECFF] hover:bg-white hover:border-[#00A3FF]/20"
            : "bg-white border-gray-100 hover:border-[#00A3FF]/10"
        }

        hover:shadow-[0_20px_50px_rgba(0,163,255,0.10)]
      `}
    >
      {/* HOVER GLOW */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#00A3FF]/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500" />

      <div className="relative flex items-center justify-between gap-4">
        {/* LEFT */}
        <div className="flex items-center gap-4 min-w-0">
          {/* ICON */}
          <div
            className={`
              hidden md:flex items-center justify-center
              w-14 h-14 rounded-2xl flex-shrink-0
              transition-all duration-300

              ${
                isLicense
                  ? "bg-[#00A3FF]/10 border border-[#00A3FF]/10"
                  : "bg-[#F8FAFC] border border-gray-100"
              }
            `}
          >
            <Icon className="w-6 h-6 text-[#00A3FF]" />
          </div>

          {/* CONTENT */}
          <div className="min-w-0">
            <h4
              className="
                text-xl font-bold leading-snug text-[#111111]
                transition-colors duration-300
                group-hover:text-[#00A3FF]
              "
            >
              {title}
            </h4>

            {description && (
              <p
                className="
                  mt-1 text-base text-gray-500
                  font-medium line-clamp-1
                "
              >
                {description}
              </p>
            )}
          </div>
        </div>

        {/* RIGHT ARROW */}
        <div
          className={`
            w-11 h-11 rounded-xl
            flex items-center justify-center
            flex-shrink-0
            transition-all duration-300

            ${
              isLicense
                ? "bg-white border border-[#D8ECFF]"
                : "bg-[#F9FAFB] border border-gray-100"
            }

            group-hover:bg-[#00A3FF]
            group-hover:border-[#00A3FF]
          `}
        >
          <ArrowRight
            className="
              w-5 h-5 text-gray-400
              transition-all duration-300
              group-hover:text-white
              group-hover:translate-x-0.5
            "
          />
        </div>
      </div>

      {/* BOTTOM HOVER LINE */}
      <div
        className="
          absolute bottom-0 left-0
          w-full h-[3px]
          bg-[#00A3FF]
          scale-x-0
          group-hover:scale-x-100
          origin-left
          transition-transform duration-300
        "
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

        // If not 'Most Popular', filter by category
        // Note: The UI categories don't perfectly match backend categories yet
        // For now, let's just fetch all and filter in memory or adjust backend call
        const [coursesRes, licencesRes] = await Promise.all([
          courseService.getAllCourses(params),
          licenseService.getAllLicenses(params),
        ]);

        const coursesData = coursesRes.data?.data || [];
        const licencesData = licencesRes.data?.data || [];

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

  // Filter based on UI categories
  const filteredCourses =
    activeCategory === "Most Popular"
      ? courses.slice(0, 5) // Show top 5
      : courses.filter((c) => {
          if (activeCategory === "SIA Licenses")
            return c.category === "SIA Training";
          if (activeCategory === "Specialist")
            return c.category === "Specialist";
          return true; // Default or other categories
        });

  return (
    <section className="relative overflow-hidden bg-[#FAFAFA] py-16 px-4 lg:py-20">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#00A3FF]/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#FF5421]/10 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="max-w-3xl">
          {/* LABEL */}
          <div className=" inline-flex items-center bg-[#FF54210D] border border-[#FF54211A] text-[#FF5421] px-4 py-2 rounded-full text-sm font-bold mb-5">
            Courses & Licences
          </div>

          {/* TITLE */}
          <h2 className=" text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] leading-[1.05] tracking-tight">
            Pick Your Course. Build
            <br />
            <span className="text-[#FF5421]"> Your Future.</span>
          </h2>

          {/* DESC */}
          <p className=" mt-3 text-base sm:text-lg text-gray-500 leading-relaxed max-w-2xl">
            Explore industry-recognised training courses and licences designed
            to help you start and grow your career in security.
          </p>
        </div>

        {/* CATEGORY FILTER */}

        <div className="mt-10">
          {/* Mobile Dropdown */}
          <div className="relative md:hidden mt-10">
            {/* Dropdown Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full flex items-center justify-between rounded-2xl border border-orange-200 bg-white px-8 py-4 text-base font-semibold text-[#FF5421] shadow-sm transition-all hover:border-[#FF5421]"
            >
              <span>{activeCategory}</span>

              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute left-0 right-0 z-50 mt-2 overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-xl">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      setIsOpen(false);
                    }}
                    className={`block w-full px-5 py-3 text-left text-sm font-medium transition-all duration-200
            ${
              activeCategory === cat
                ? "bg-[#FF5421] text-white"
                : "text-gray-600 hover:bg-orange-50 hover:text-[#FF5421]"
            }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex flex-wrap gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-9 py-3 rounded-2xl text-[15px] cursor-pointer font-semibold transition-all duration-300
          ${
            activeCategory === cat
              ? "bg-[#FF5421] text-white shadow-[0_10px_30px_rgba(248,81,12,0.25)]"
              : "bg-white text-gray-500 border border-gray-100 hover:border-[#FF5421]/20 hover:text-[#FF5421]"
          }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-7">
          {/* LEFT */}
          <div className=" rounded-4xl bg-white/80 backdrop-blur-xl border border-white/40 p-4 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
            {/* HEADER */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-black text-[#111111]">
                  Popular Courses
                </h3>

                <p className="text-base text-gray-500 mt-1">
                  Most enrolled training programmes
                </p>
              </div>

              <button
                onClick={() => navigate("/courses")}
                className=" hidden sm:flex items-center gap-2 text-[#FF5421] font-bold hover:gap-3 transition-all duration-300"
              >
                View All
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* CARDS */}
            <div className="space-y-4">
              {loading
                ? [...Array(3)].map((_, idx) => <ItemCardSkeleton key={idx} />)
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

          {/* RIGHT */}
          <div className="rounded-4xl bg-blue-200 border border-[#D7EBFF] p-4 md:p-8">
            {/* GLOW */}
            <div className="absolute top-0 right-0 w-56 h-56 bg-[#00A3FF]/15 blur-3xl rounded-full" />

            <div className="absolute bottom-0 left-0 w-56 h-56 bg-[#FF5421]/10 blur-3xl rounded-full" />

            {/* HEADER */}
            <div className="flex items-center justify-between mb-8 relative z-10">
              <div>
                <h3 className="text-2xl font-black text-black">
                  Popular Licences
                </h3>

                <p className="text-base text-gray-700 mt-1">
                  Most requested licence training
                </p>
              </div>

              <button
                onClick={() => navigate("/licences")}
                className="
              hidden sm:flex
              items-center gap-2
              text-[#FF5421]
              font-bold
              hover:gap-3
              transition-all duration-300
            "
              >
                View All
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* CARDS */}
            <div className="space-y-4 relative z-10">
              {loading
                ? [...Array(3)].map((_, idx) => <ItemCardSkeleton key={idx} />)
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
        </div>
      </div>
    </section>
  );
};

export default CoursesLicencesSection;
