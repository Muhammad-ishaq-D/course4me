import React, { useMemo, useRef, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import {
  Grid3X3,
  Flame,
  Shield,
  ShieldCheck,
  Activity,
  BriefcaseBusiness,
  ChevronRight,
} from "lucide-react";

import { licences } from "./licences";
import licenseService from "../../api/services/licenseService";

import ExploreSidebar from "../ui/ExploreSidebar";
import LicenseCard from "../ui/LicenseCard";
import EmptyState from "../ui/EmptyState";
import Loader from "../ui/Loader";
import { Search, X } from "lucide-react";

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

const ExploreAllLicences = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const ALL_CATEGORY = "All";
  const categoryParam = searchParams.get("category") || ALL_CATEGORY;
  // =====================================================
  // STATES
  // =====================================================
  const [activeTab, setActiveTab] = useState("all");

  const [openFilters, setOpenFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const coursesSectionRef = useRef(null);

  const [licencesList, setLicencesList] = useState([]);
  const [loading, setLoading] = useState(true);

  // =====================================================
  // FETCH LICENCES FROM DATABASE
  // =====================================================
  useEffect(() => {
    const fetchLicences = async () => {
      try {
        setLoading(true);
        const response = await licenseService.getAllLicenses({
          status: "Published",
        });
        const resData = response.data || response;
        const fetched = resData.licenses || resData.data || resData || [];
        if (fetched.length > 0) {
          setLicencesList(fetched);
        } else {
          setLicencesList(licences);
        }
      } catch (error) {
        console.error("Error fetching licenses from backend:", error);
        setLicencesList(licences);
      } finally {
        setLoading(false);
      }
    };
    fetchLicences();
  }, []);

  // =====================================================
  // CATEGORY FILTER
  // =====================================================
  const categoryLicences = useMemo(() => {
    if (categoryParam === ALL_CATEGORY) {
      return licencesList;
    }

    return licencesList.filter((item) => {
      return (
        item.category?.trim()?.toLowerCase() ===
        categoryParam?.trim()?.toLowerCase()
      );
    });
  }, [categoryParam, licencesList]);

  const filteredLicences = useMemo(() => {
    let result = categoryLicences;

    // Popular filter
    if (activeTab === "popular") {
      result = result.filter((item) => item.isPopular === true);
    }

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.trim().toLowerCase();
      result = result.filter(
        (item) =>
          item.title?.toLowerCase().includes(query) ||
          item.shortDescription?.toLowerCase().includes(query) ||
          item.category?.toLowerCase().includes(query),
      );
    }

    return result;
  }, [categoryLicences, activeTab, searchQuery]);

  // =====================================================
  // CATEGORY COUNTS
  // =====================================================
  const getCategoryCount = (categoryName) => {
    if (categoryName === ALL_CATEGORY) {
      return licencesList.length;
    }

    return licencesList.filter((item) => {
      return (
        item.category?.trim()?.toLowerCase() ===
        categoryName?.trim()?.toLowerCase()
      );
    }).length;
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

  // =====================================================
  // SMOOTH SCROLL
  // =====================================================
  const handleCategoryWithScroll = (category) => {
    handleCategoryChange(category);

    setTimeout(() => {
      coursesSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
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
            Professional Security Licences
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-[#141414] leading-tight">
            Explore all licences
          </h2>

          <p className="text-[#141414]/60 mt-4 max-w-2xl text-lg leading-relaxed">
            Browse professional SIA licences, first aid qualifications,
            workplace safety training and specialist certification courses.
          </p>

          {/* SEARCH BAR */}
          <div className="mt-6 relative max-w-xl">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#98A2B3]">
              <Search size={18} />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search licences by name, category..."
              className="w-full pl-11 pr-10 py-3.5 bg-white border border-[#E4E7EC] rounded-2xl text-base text-[#101828] placeholder-[#98A2B3] focus:outline-none focus:border-[#F15A24]/40 focus:shadow-[0_0_0_3px_rgba(241,90,36,0.08)] transition-all duration-300"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-lg bg-[#F5F5F5] hover:bg-[#ECECEC] flex items-center justify-center transition-all duration-200"
              >
                <X size={14} className="text-[#667085]" />
              </button>
            )}
          </div>
        </div>

        {/* =====================================================
            MAIN LAYOUT
        ===================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-[320px_minmax(0,1fr)] gap-6 items-start">
          {/* =====================================================
              SIDEBAR
          ===================================================== */}
          <div className="hidden lg:block sticky top-0 h-fit">
            <ExploreSidebar
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              categoryParam={categoryParam}
              handleCategoryChange={handleCategoryWithScroll}
              categories={categories}
              getCategoryCount={getCategoryCount}
              title="Licenses"
            />
          </div>

          {/* =====================================================
              LICENCES SECTION
          ===================================================== */}
          <div>
            {/* TOP BAR */}
            <div
              ref={coursesSectionRef}
              className="bg-white rounded-xl border border-[#ECECEC] shadow-[0_10px_40px_rgba(0,0,0,0.05)] px-6 py-4 lg:mb-2 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              <div>
                <h2 className="text-2xl font-bold text-[#141414]">
                  {activeTab === "popular"
                    ? `${categoryParam} Popular Licences`
                    : categoryParam}
                </h2>

                <p className="text-gray-500 mt-1 text-md">
                  {filteredLicences.length}{" "}
                  {filteredLicences.length === 1 ? "licence" : "licences"}{" "}
                  available
                </p>
              </div>

              {/* ACTIVE FILTER */}
              {activeTab === "popular" && (
                <div className="inline-flex items-center gap-2 bg-[#FFF1EB] text-[#F15A24] px-4 py-2 rounded-full text-sm font-semibold w-fit">
                  <Flame size={16} />
                  Featured Licences Only
                </div>
              )}
            </div>

            {/* MOBILE FILTER BUTTON */}
            <button
              onClick={() => setOpenFilters(true)}
              className="lg:hidden sticky top-0 z-40 mb-4 w-full bg-white border border-[#ECECEC] rounded-2xl px-5 py-4 shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex items-center justify-between transition-all duration-300 hover:border-[#F15A24]/30 active:scale-[0.99]"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#F15A24] flex items-center justify-center shadow-lg shadow-[#F15A24]/20">
                  <Grid3X3 size={18} className="text-white" />
                </div>

                <div className="text-left">
                  <h3 className="text-[#141414] text-xl font-bold leading-none">
                    Filter Licences
                  </h3>

                  <p className="text-gray-500 text-sm mt-1">
                    Categories & featured licences
                  </p>
                </div>
              </div>

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
                          handleCategoryWithScroll(category);
                          setOpenFilters(false);
                        }}
                        categories={categories}
                        getCategoryCount={getCategoryCount}
                        title="Licenses"
                      />
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>

            {/* LICENCES GRID */}
            {loading ? (
              <div className="flex justify-center items-center py-20">
                <Loader text="Loading Licences..." />
              </div>
            ) : filteredLicences.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
              >
                <AnimatePresence mode="popLayout">
                  {filteredLicences.map((item, index) => (
                    <motion.div
                      key={item._id || index}
                      layout
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
                      <LicenseCard item={item} index={index} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              <EmptyState text="Licenses" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreAllLicences;
