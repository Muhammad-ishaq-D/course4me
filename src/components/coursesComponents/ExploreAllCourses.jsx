import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CourseCard from './CourseCard';

const categories = [
  "All Courses", 
  "SIA Training", 
  "First Aid", 
  "Health & Safety", 
  "Hospitality"
];

const allCourseData = [
  {
    id: 1,
    title: "SIA Top Up Door Supervisor Training",
    category: "SIA Training",
    description: "Mandatory top-up training for existing Door Supervisors.",
    image: "https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&q=80&w=800",
    badge: "15 Oct",
    price: "119.99"
  },
  {
    id: 2,
    title: "First Aid at Work",
    category: "First Aid",
    description: "HSE approved first aid training for workplace safety.",
    image: "https://images.unsplash.com/photo-1542884748-2b87b36c6b90?auto=format&fit=crop&q=80&w=800",
    badge: "Online",
    price: "89.99"
  },
  {
    id: 3,
    title: "Fire Safety Training",
    category: "Health & Safety",
    description: "Learn essential fire prevention and evacuation procedures.",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=800",
    badge: "Popular",
    price: "75.00"
  },
  {
    id: 4,
    title: "Security Guard Refresher Course",
    category: "SIA Training",
    description: "Essential refresher for SIA security guard license holders.",
    image: "https://images.unsplash.com/photo-1557597774-9d2739f05a76?auto=format&fit=crop&q=80&w=800",
    price: "149.99"
  },
  {
    id: 5,
    title: "Door Supervisor Training",
    category: "SIA Training",
    description: "The standard course for working in high-risk venues.",
    image: "https://images.unsplash.com/photo-1590402485284-a1419d4212d2?auto=format&fit=crop&q=80&w=800",
    badge: "Limited",
    price: "189.99"
  }
];

const ExploreAllCourses = () => {
  const [activeCategory, setActiveCategory] = useState("All Courses");

  const filteredCourses = activeCategory === "All Courses" 
    ? allCourseData 
    : allCourseData.filter(course => course.category === activeCategory);

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
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeCategory === category 
                  ? "bg-[#141414] text-white" 
                  : "bg-white text-[#141414] border border-[#EEEEEE] hover:bg-[#F8FAFC]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Filtered Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course) => (
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
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ExploreAllCourses;
