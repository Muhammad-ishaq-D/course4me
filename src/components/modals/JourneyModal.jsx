import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../ui/Loader";
import {
  Search,
  Shield,
  Heart,
  Briefcase,
  Camera,
  Star,
  X,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import courseService from "../../api/services/courseService";
import CourseModalCard from "../ui/CourseModalCard";

const TABS = [
  "All Courses",
  "Popular",
  "SIA Training",
  "First Aid",
  "Health & Safety",
  "Specialist",
];

const JourneyModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("All Courses");
  const [coursesList, setCoursesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setIsLoading(true);
        const response = await courseService.getAllCourses();
        // The API returns { success: true, count: N, data: [...] }
        setCoursesList(response.data.data || []);
      } catch (err) {
        console.error("Error fetching courses:", err);
      } finally {
        setIsLoading(false);
      }
    };
    if (isOpen) {
      fetchCourses();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Map icons to categories
  const CATEGORY_UI = {
    "SIA Training": {
      icon: Shield,
      bg: "bg-red-500",
    },
    "First Aid": {
      icon: Heart,
      bg: "bg-green-500",
    },
    "Health & Safety": {
      icon: Shield,
      bg: "bg-blue-600",
    },
    Specialist: {
      icon: Briefcase,
      bg: "bg-purple-700",
    },
  };

  const getIconForCategory = (category) => {
    return (
      CATEGORY_UI[category] || {
        icon: Shield,
        bg: "bg-gray-500",
      }
    );
  };

  const filtered = (coursesList || []).filter((c) => {
    if (!c) return false;
    const matchesTab =
      activeTab === "All Courses" ||
      (activeTab === "Popular" && c.isPopular) ||
      c.category === activeTab;
    const matchesSearch = (c.title || "")
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const handleCourseClick = (courseId) => {
    onClose();
    navigate(`/course/${courseId}/book`);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998]"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="fixed inset-x-0 top-1/2 -translate-y-1/2 mx-auto z-[9999] w-full max-w-[650px] px-4"
        style={{ maxHeight: "90vh" }}
      >
        <div
          className="bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
          style={{ maxHeight: "90vh" }}
        >
          {/* Dark Header */}
          <div className="bg-[#1C1C1C] px-7 py-5 flex items-start justify-between shrink-0">
            <div>
              <h2 className="text-xl font-extrabold text-white">
                Start Your Journey
              </h2>
              <p className="text-gray-400 text-sm mt-0.5">
                Find your perfect course in 4 easy steps
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 cursor-pointer hover:text-white transition-colors mt-0.5"
            >
              <X size={22} />
            </button>
          </div>

          {/* Body */}
          <div className="overflow-y-auto flex-1 px-6 py-5">
            {/* Search */}
            <div className="relative mb-5">
              <Search
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search courses..."
                className="w-full pl-11 cursor-text pr-4 py-3 border border-gray-200 rounded-xl text-[14px] text-[#1C1C1C] outline-none focus:ring-2 focus:ring-[#FF5421]/30 focus:border-[#FF5421] placeholder:text-gray-400 transition-all"
              />
            </div>

            {/* Category Tabs */}
            <div className="flex items-center gap-2 flex-wrap mb-6">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1.5 rounded-full cursor-pointer text-[13px] font-semibold transition-all whitespace-nowrap ${
                    activeTab === tab
                      ? "bg-[#1C1C1C] text-white"
                      : "border border-gray-200 text-gray-600 hover:border-gray-400"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Course List */}
            <div className="space-y-3">
              {isLoading ? (
                <Loader text="Loading courses..." />
              ) : filtered.length === 0 ? (
                <div className="text-center py-10 text-gray-400 text-sm">
                  No courses found matching "
                  <span className="font-bold">{search}</span>"
                </div>
              ) : (
                filtered.map((course) => {
                  const { icon: Icon, bg: iconBg } = getIconForCategory(
                    course.category,
                  );
                  return (
                    <CourseModalCard
                      key={course._id}
                      course={course}
                      Icon={Icon}
                      iconBg={iconBg}
                      handleCourseClick={handleCourseClick}
                    />
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JourneyModal;
