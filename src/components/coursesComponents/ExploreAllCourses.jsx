import React, { useState, useEffect, useMemo, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Grid3X3,
  Flame,
  Shield,
  ChevronRight,
  Activity,
  ShieldCheck,
  BriefcaseBusiness,
} from "lucide-react";

import CourseCard from "../ui/CourseCard";
import courseService from "../../api/services/courseService";
import Loader from "../ui/Loader";
import Searchbar from "../ui/Searchbar";
import EmptyState from "../ui/EmptyState";
import ExploreSidebar from "../ui/ExploreSidebar";

const categories = [
  {
    name: "SIA Training",
    icon: <Shield size={22} className="text-white" />,
    bgColor: "bg-red-500",
  },

  {
    name: "First Aid",
    icon: <Activity size={22} className="text-white" />,
    bgColor: "bg-[#34C759]",
  },

  {
    name: "Health & Safety",
    icon: <ShieldCheck size={22} className="text-white" />,
    bgColor: "bg-[#007AFF]",
  },

  {
    name: "Specialist",
    icon: <BriefcaseBusiness size={22} className="text-white" />,
    bgColor: "bg-[#5856D6]",
  },
];

const ExploreAllCourses = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const ALL_CATEGORY = "All";
  const categoryParam = searchParams.get("category") || ALL_CATEGORY;

  // =====================================================
  // STATES
  // =====================================================
  const [allCourses, setAllCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // all | popular
  const [activeTab, setActiveTab] = useState("all");

  //for filters model in sm and md screen
  const [openFilters, setOpenFilters] = useState(false);

  //courses section refrence
  const coursesSectionRef = useRef(null);

  // =====================================================
  // FETCH COURSES
  // =====================================================
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);

        const response = await courseService.getAllCourses({
          status: "Published",
        });

        const data = response?.data?.data || [];

        console.log("popular", data);

        const mappedCourses = data.map((course) => ({
          id: course._id,
          title: course.title,
          category: course.category,
          description: course.shortDescription,
          image: course.thumbnail,
          price: course.pricing?.basePrice,
          badge: course.level,
          duration: course.duration,
          reviews: course.reviewsCount,
          booked: course.bookedCount,
          passRate: course.passRate,
          isPopular: course.isPopular,

          date: course.sessions?.find(
            (s) => s.availabilityStatus !== "Sold Out",
          )?.startDate
            ? new Date(
                course.sessions.find((s) => s.availabilityStatus !== "Sold Out")
                  .startDate,
              ).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })
            : undefined,
        }));

        setAllCourses(mappedCourses);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  // =====================================================
  // CATEGORY FILTER
  // =====================================================
  const categoryCourses = useMemo(() => {
    if (categoryParam === ALL_CATEGORY) {
      return allCourses;
    }

    return allCourses.filter((course) => {
      const courseCategory = course.category?.trim()?.toLowerCase();

      const selectedCategory = categoryParam?.trim()?.toLowerCase();

      return courseCategory === selectedCategory;
    });
  }, [allCourses, categoryParam]);

  // =====================================================
  // POPULAR FILTER
  // =====================================================
  const filteredCourses = useMemo(() => {
    if (activeTab === "popular") {
      return categoryCourses.filter((course) => course.isPopular === true);
    }

    return categoryCourses;
  }, [categoryCourses, activeTab]);

  // =====================================================
  // CATEGORY COUNTS
  // =====================================================
  const getCategoryCount = (categoryName) => {
    if (categoryName === ALL_CATEGORY) {
      return allCourses.length;
    }

    return allCourses.filter((course) => {
      return (
        course.category?.trim()?.toLowerCase() ===
        categoryName?.trim()?.toLowerCase()
      );
    }).length;
  };

  // smooth scroll in catagry changes time
  const handleCategoryWithScroll = (category) => {
    handleCategoryChange(category);

    setTimeout(() => {
      coursesSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };
  // =====================================================
  // HANDLE CATEGORY CHANGE
  // =====================================================
  const handleCategoryChange = (category) => {
    if (category === ALL_CATEGORY) {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  return (
    <section className="py-10 md:py-14 px-4 md:px-8 lg:px-16 min-h-screen bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto">
        {/* =====================================================
            HEADER
        ===================================================== */}
        <div className="mb-12">
          <span className="inline-flex items-center gap-2 bg-[#F15A24]/10 text-[#F15A24] px-4 py-2 rounded-full text-sm font-semibold mb-5">
            <Flame size={16} />
            Professional Training Courses
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-[#141414] leading-tight">
            Explore all courses
          </h2>

          <p className="text-[#141414]/60 mt-2 max-w-2xl text-lg leading-relaxed">
            Browse our wide range of professional training courses and
            certifications designed to help you build your career and gain
            industry-recognized qualifications.
          </p>
          {/* <Searchbar /> */}
        </div>

        {/* =====================================================
            MAIN LAYOUT
        ===================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-[320px_minmax(0,1fr)] gap-6 items-start">
          {/* =====================================================
              SIDEBAR
          ===================================================== */}
          {/* DESKTOP SIDEBAR */}
          <div className="hidden lg:block sticky top-0 h-fit">
            <ExploreSidebar
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              categoryParam={categoryParam}
              handleCategoryChange={handleCategoryWithScroll}
              categories={categories}
              getCategoryCount={getCategoryCount}
              title="Courses"
            />
          </div>
          {/* =====================================================
              COURSES SECTION
          ===================================================== */}
          <div>
            {/* TOP BAR */}
            <div
              ref={coursesSectionRef}
              className="bg-white rounded-xl border border-[#ECECEC] shadow-[0_10px_40px_rgba(0,0,0,0.05)] px-6 py-4 lg:mb-2 flex flex-col  md:flex-row md:items-center md:justify-between gap-4"
            >
              <div>
                <h2 className="text-2xl font-bold text-[#141414]">
                  {activeTab === "popular"
                    ? `${categoryParam} Popular Courses`
                    : categoryParam}
                </h2>

                <p className="text-gray-500  text-md">
                  {filteredCourses.length}{" "}
                  {filteredCourses.length === 1 ? "course" : "courses"}{" "}
                  available
                </p>
              </div>

              {/* ACTIVE FILTER */}
              {activeTab === "popular" && (
                <div className="inline-flex items-center gap-2 bg-[#FFF1EB] text-[#F15A24] px-4 py-2 rounded-full text-sm font-semibold w-fit">
                  <Flame size={16} />
                  Featured Courses Only
                </div>
              )}
            </div>

            <button
              onClick={() => setOpenFilters(true)}
              className="lg:hidden sticky top-0 z-40 mb-4 w-full bg-white border border-[#ECECEC] rounded-2xl px-5 py-4 shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex items-center justify-between transition-all duration-300 hover:border-[#F15A24]/30 active:scale-[0.99]"
            >
              {/* LEFT CONTENT */}
              <div className="flex items-center gap-3">
                {/* ICON */}
                <div className="w-11 h-11 rounded-xl bg-[#F15A24] flex items-center justify-center shadow-lg shadow-[#F15A24]/20">
                  <Grid3X3 size={18} className="text-white" />
                </div>

                {/* TEXT */}
                <div className="text-left">
                  <h3 className="text-[#141414] text-xl font-bold leading-none">
                    Filter Courses
                  </h3>

                  <p className="text-gray-500 text-sm mt-1">
                    Categories & featured courses
                  </p>
                </div>
              </div>

              {/* RIGHT ICON */}
              <div className="w-9 h-9 rounded-xl bg-[#FFF4EF] flex items-center justify-center">
                <ChevronRight size={18} className="text-[#F15A24]" />
              </div>
            </button>

            {/* MOBILE FILTER MODAL */}
            <AnimatePresence>
              {openFilters && (
                <div className="fixed inset-0 z-50 lg:hidden">
                  {/* BACKDROP */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                    onClick={() => setOpenFilters(false)}
                  />

                  {/* SIDEBAR */}
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "-100%" }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 28,
                    }}
                    className="absolute left-0 top-0 h-full w-[88%] max-w-[360px] bg-white shadow-2xl overflow-y-auto"
                  >
                    {/* HEADER */}
                    <div className="sticky top-0 bg-white border-b border-gray-100 px-5 py-4 flex items-center justify-between z-10">
                      <h2 className="text-lg font-bold text-[#141414]">
                        Filters
                      </h2>

                      <button
                        onClick={() => setOpenFilters(false)}
                        className="w-10 h-10 rounded-xl bg-[#F5F5F5] hover:bg-[#ECECEC] flex items-center justify-center text-xl transition-all duration-300"
                      >
                        ×
                      </button>
                    </div>

                    {/* SIDEBAR CONTENT */}
                    <div className="p-4">
                      <ExploreSidebar
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        categoryParam={categoryParam}
                        handleCategoryChange={(category) => {
                          handleCategoryChange(category);
                          setOpenFilters(false);
                        }}
                        categories={categories}
                        getCategoryCount={getCategoryCount}
                        title="Courses"
                      />
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>

            {/* LOADER */}
            {loading ? (
              <Loader text="Loading Courses..." />
            ) : filteredCourses.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
              >
                <AnimatePresence mode="popLayout">
                  {filteredCourses.map((course) => (
                    <motion.div
                      layout
                      key={course.id}
                      initial={{
                        opacity: 0,
                        scale: 0.95,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.95,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      <CourseCard {...course} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              <EmptyState text="Courses" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreAllCourses;
