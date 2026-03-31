import React from "react";
import { motion, AnimatePresence } from "framer-motion";
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
import { Link, useNavigate } from "react-router-dom";

// Standardizing images from assets
import doorImg from "../../assets/courses/door.png";
import cctvImg from "../../assets/courses/cctv.png";
import firstAidImg from "../../assets/courses/first-aid.png";

const categories = [
  {
    icon: <Shield className="w-6 h-6" />,
    name: "SIA Courses",
    count: "5 courses",
    color: "bg-[#FF3B30]",
    id: "sia-courses"
  },
  {
    icon: <Activity className="w-6 h-6" />,
    name: "First Aid",
    count: "1 course",
    color: "bg-[#34C759]",
    id: "first-aid"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    name: "SIA Courses", // Replicating the image exactly
    count: "2 courses",
    color: "bg-[#007AFF]",
    id: "sia-courses-2"
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    name: "Specialist",
    count: "2 courses",
    color: "bg-[#5856D6]",
    id: "specialist"
  }
];

const popularCourses = [
  {
    title: "Door Supervisor Training",
    rating: "4.9",
    duration: "4 days",
    price: "£185.00",
    image: doorImg,
    id: "door-supervisor"
  },
  {
    title: "CCTV Training",
    rating: "4.9",
    duration: "4 days",
    price: "£185.00",
    image: cctvImg,
    id: "cctv-training"
  },
  {
    title: "First Aid at Work",
    rating: "4.9",
    duration: "4 days",
    price: "£185.00",
    image: firstAidImg,
    id: "first-aid-at-work"
  }
];

const BrowseCoursesModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleCourseClick = (courseId) => {
    navigate(`/course/${courseId}`);
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
              {/* <Link
                to="/courses"
                onClick={onClose}
                className="flex items-center gap-1 md:gap-2 text-[#F15A24] font-semibold hover:underline"
              >
                View All Courses <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
              </Link> */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Categories Section */}
              <div>
                <h3 className="text-sm font-bold text-[#94A3B8] uppercase tracking-widest mb-4 md:mb-6">
                  Categories
                </h3>
                <div className="space-y-3 md:space-y-4">
                  {categories.map((cat, idx) => (
                    <div
                      key={idx}
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
                  {popularCourses.map((course, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleCourseClick(course.id)}
                      className="flex items-center gap-3 md:gap-4 cursor-pointer group"
                    >
                      <div className="w-16 h-14 md:w-20 md:h-16 rounded-xl overflow-hidden shrink-0 shadow-md">
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
                  ))}
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
