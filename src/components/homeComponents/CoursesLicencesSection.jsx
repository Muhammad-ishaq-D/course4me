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

// ─── Sub-components ──────────────────────────────────────────────────────────
const ItemCard = ({ icon: Icon, title, description, onClick }) => (
  <motion.div
    whileHover={{ y: -4 }}
    transition={{ duration: 0.3 }}
    onClick={onClick}
    className=" group relative overflow-hidden rounded-xl bg-white border border-gray-100 p-3  md:p-5 shadow-[0_10px_35px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(248,81,12,0.12)] transition-all duration-300 cursor-pointer
    "
  >
    {/* HOVER GLOW */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF5421]/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500" />

    <div className="relative flex items-center justify-between gap-4">
      {/* LEFT */}
      <div className="flex items-center gap-4 min-w-0">
        {/* ICON */}
        <div
          className="
          hidden 
          w-14 h-14
          rounded-2xl
          bg-linear-to-br
          from-[#00A3FF]/10
          to-[#FF5421]/10
          border border-[#00A3FF]/10
          md:flex items-center justify-center
          flex-shrink-0
        "
        >
          <Icon className="w-6 h-6 text-[#00A3FF]" />
        </div>

        {/* CONTENT */}
        <div className="min-w-0">
          <h4
            className="
            font-bold
            text-[#111111]
            text-xl
            leading-snug
            group-hover:text-[#FF5421]
            transition-colors
            line-clamp-1
          "
          >
            {title}
          </h4>

          {description && (
            <p
              className="
              text-base
              text-gray-500
              mt-1
              font-medium
              line-clamp-1
            "
            >
              {description}
            </p>
          )}
        </div>
      </div>

      {/* RIGHT ARROW */}
      <div
        className="
        w-11 h-11
        rounded-xl
        bg-[#F9FAFB]
        border border-gray-100
        flex items-center justify-center
        flex-shrink-0
        group-hover:bg-[#FF5421]
        transition-all duration-300
      "
      >
        <ArrowRight
          className="
          w-5 h-5
          text-gray-400
          group-hover:text-white
          group-hover:translate-x-0.5
          transition-all duration-300
        "
        />
      </div>
    </div>

    {/* BOTTOM LINE */}
    <div
      className="
      absolute bottom-0 left-0
      w-full h-1
      bg-gradient-to-r
      from-[#00A3FF]
      to-[#FF5421]
      scale-x-0
      group-hover:scale-x-100
      origin-left
      transition-transform duration-300
    "
    />
  </motion.div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const CoursesLicencesSection = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("Most Popular");
  const [courses, setCourses] = useState([]);
  const [licences, setLicences] = useState([]);
  const [loading, setLoading] = useState(true);

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
          <h2 className=" text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] leading-tight tracking-tight">
            Pick Your Course.
            <br />
            <span className="text-[#FF5421]">Build Your Future.</span>
          </h2>

          {/* DESC */}
          <p className=" mt-3 text-base sm:text-lg text-gray-500 leading-relaxed max-w-2xl">
            Explore industry-recognised training courses and licences designed
            to help you start and grow your career in security.
          </p>
        </div>

        {/* CATEGORY FILTER */}
        <div className="flex flex-wrap gap-3 mt-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={` px-6 py-3 rounded-2xl text-[15px] font-bold transition-all duration-300

            ${
              activeCategory === cat
                ? "bg-[#FF5421] text-white shadow-[0_10px_30px_rgba(248,81,12,0.25)]"
                : "bg-white text-gray-500 border border-gray-100 hover:border-[#FF5421]/20 hover:text-[#FF5421]"
            }
          `}
            >
              {cat}
            </button>
          ))}
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
                    />
                  ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className=" rounded-4xl bg-[#111111] p-4 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.12)] relative overflow-hidden">
            {/* GLOW */}
            <div className="absolute top-0 right-0 w-52 h-52 bg-[#FF5421]/20 blur-3xl rounded-full" />

            {/* HEADER */}
            <div className="flex items-center justify-between mb-8 relative z-10">
              <div>
                <h3 className="text-2xl font-black text-white">
                  Popular Licences
                </h3>

                <p className="text-base text-gray-400 mt-1">
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
