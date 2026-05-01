import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import CourseCard from './CourseCard';
import courseService from '../../api/services/courseService';

const categories = [
  "All Courses",
  "SIA Training",
  "First Aid",
  "Health & Safety",
  "Specialist",
  "Hospitality"
];

const ExploreAllCourses = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [activeCategory, setActiveCategory] = useState("All Courses");
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const params = {};
        if (activeCategory !== "All Courses") {
          params.category = activeCategory;
        }
        // params.status = 'Published'; // Temporarily disabled for debugging

        const response = await courseService.getAllCourses(params);

        const data = response.data?.data || [];


        // Map backend data to frontend requirements
        const mappedCourses = data.map(course => ({
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
          // Find first available session for date
          date: course.sessions?.find(s => s.availabilityStatus !== 'Sold Out')?.startDate
            ? new Date(course.sessions.find(s => s.availabilityStatus !== 'Sold Out').startDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
            : undefined
        }));

        setCourses(mappedCourses);
      } catch (error) {
        console.error('Error fetching courses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [activeCategory]);

  useEffect(() => {
    if (categoryParam && categories.includes(categoryParam)) {
      setActiveCategory(categoryParam);
    } else if (!categoryParam) {
      setActiveCategory("All Courses");
    }
  }, [categoryParam]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (category === "All Courses") {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  const filteredCourses = courses;

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto text-left">
        <h2 className="text-3xl font-bold text-[#141414] mb-4">Explore all courses</h2>
        <p className="text-[#141414]/60 mb-10 max-w-2xl">
          Browse our wide range of training courses across various industries to master professional skills.
        </p>

        {/* Categories */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all ${activeCategory === category
                ? "bg-[#141414] text-white shadow-lg"
                : "bg-white text-[#141414] border border-[#EEEEEE] hover:bg-[#F8FAFC]"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Filtered Grid */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-12 h-12 border-4 border-[#141414]/20 border-t-[#141414] rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-500 font-medium">Loading courses...</p>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {courses.length > 0 ? (
                courses.map((course) => (
                  <motion.div
                    layout
                    key={course.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CourseCard {...course} />
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full py-20 text-center"
                >
                  <p className="text-gray-400">No courses available for this category.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ExploreAllCourses;
