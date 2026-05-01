import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import courseService from "../../api/services/courseService";
import {
  Shield,
  Activity,
  Briefcase,
  Wrench,
  Star,
  Clock,
  ArrowUpRight,
  X
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Standardizing images from assets (Still used for fallback or icons if needed)
import doorImg from "../../assets/courses/door.png";

const categoryTemplates = [
  {
    icon: <Shield className="w-6 h-6" />,
    name: "SIA Training",
    color: "bg-[#FF3B30]",
    id: "SIA Training"
  },
  {
    icon: <Activity className="w-6 h-6" />,
    name: "First Aid",
    color: "bg-[#34C759]",
    id: "First Aid"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    name: "Health & Safety",
    color: "bg-[#007AFF]",
    id: "Health & Safety"
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    name: "Specialist",
    color: "bg-[#5856D6]",
    id: "Specialist"
  }
];

const BrowseCoursesModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dynamicCategories, setDynamicCategories] = useState(categoryTemplates.map(cat => ({ ...cat, count: "0 courses" })));

  useEffect(() => {
    const fetchData = async () => {
      if (!isOpen) return;
      
      try {
        setLoading(true);
        
        // Fetch Courses for "Popular" section (Limited to 4 for modal)
        const courseRes = await courseService.getAllCourses({ limit: 4 });
        const courseData = courseRes.data?.data || [];
        
        setCourses(courseData.map(course => ({
          id: course._id,
          title: course.title,
          rating: course.rating || "4.9", 
          duration: course.duration || "4 days",
          price: `£${course.pricing?.basePrice}`,
          image: course.thumbnail || doorImg,
          reviews: course.reviewsCount,
          booked: course.bookedCount,
        })));

        // Fetch Category Statistics
        const statsRes = await courseService.getCategoryStats();
        const statsData = statsRes.data?.data || [];
        
        const updatedCategories = categoryTemplates.map(cat => {
          const stat = statsData.find(s => s._id === cat.id);
          const count = stat ? stat.count : 0;
          return {
            ...cat,
            count: `${count} course${count !== 1 ? 's' : ''}`
          };
        });

        setDynamicCategories(updatedCategories);

      } catch (error) {
        console.error('Error fetching modal data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCourseClick = (courseId) => {
    navigate(`/course/${courseId}`);
    onClose();
  };

  const handleCategoryClick = (categoryId) => {
    navigate(`/courses?category=${encodeURIComponent(categoryId)}`);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl overflow-hidden"
        >
          <div className="max-h-[90vh] md:max-h-[95vh] overflow-y-auto p-5 md:p-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-8">
              <h2 className="text-lg md:text-2xl font-bold text-[#1E293B] uppercase tracking-wide">
                Browse Courses
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Categories Section */}
              <div>
                <h3 className="text-sm font-bold text-[#94A3B8] uppercase tracking-widest mb-4 md:mb-6">
                  Categories
                </h3>
                <div className="space-y-3 md:space-y-4">
                  {dynamicCategories.map((cat, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleCategoryClick(cat.id)}
                      className="flex items-center gap-3 md:gap-4 p-2 md:p-3 rounded-2xl cursor-pointer hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 group"
                    >
                      <div className={`${cat.color} p-2.5 md:p-3 rounded-xl text-white shadow-sm`}>
                        {cat.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1E293B] group-hover:text-[#F15A24] transition-colors">
                          {cat.name}
                        </h4>
                        <p className="text-sm text-[#64748B]">
                          {cat.count}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular Courses Section */}
              <div>
                <h3 className="text-sm font-bold text-[#94A3B8] uppercase tracking-widest mb-4 md:mb-6">
                  Popular Courses
                </h3>
                <div className="space-y-4 md:space-y-6">
                  {loading ? (
                    <div className="flex flex-col items-center justify-center py-10">
                      <div className="w-8 h-8 border-3 border-[#F15A24]/20 border-t-[#F15A24] rounded-full animate-spin"></div>
                    </div>
                  ) : courses.length > 0 ? (
                    courses.map((course, idx) => (
                      <div
                        key={idx}
                        onClick={() => handleCourseClick(course.id)}
                        className="flex items-center gap-3 md:gap-4 cursor-pointer group"
                      >
                        <div className="w-16 h-14 md:w-20 md:h-16 rounded-xl overflow-hidden shrink-0 shadow-md bg-gray-100">
                          <img
                            src={course.image}
                            alt={course.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="grow">
                          <h4 className="font-bold text-[#1E293B] group-hover:text-[#F15A24] transition-colors leading-tight mb-1">
                            {course.title}
                          </h4>
                          <div className="flex items-center gap-4 text-xs text-[#64748B]">
                            <span className="flex items-center gap-1 text-[#F59E0B] font-bold">
                              <Star className="w-3 h-3 fill-current" /> {course.rating}
                            </span>
                            <span className="flex items-center gap-1 font-medium">
                              <Clock className="w-3 h-3" /> {course.duration}
                            </span>
                            <span className="text-[#F15A24] font-bold text-sm">
                              {course.price}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-center text-gray-400 py-10">No courses found</p>
                  )}
                </div>

                {/* Explore Button */}
                <button
                  onClick={() => { navigate('/courses'); onClose(); }}
                  className="w-full mt-6 md:mt-8 bg-[#F15A24] text-white font-bold py-3 md:py-4 rounded-full shadow-lg hover:shadow-[#F15A24]/30 hover:brightness-110 transition-all active:scale-95"
                >
                  Explore All Courses
                </button>
              </div>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-8 right-6 md:right-4 p-2 rounded-full hover:bg-gray-100 text-[#94A3B8] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BrowseCoursesModal;
