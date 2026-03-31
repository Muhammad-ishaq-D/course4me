import React from 'react';
import CourseCard from './CourseCard';

const ExploreSiaCourses = () => {
  const siaCourses = [
    {
      id: 1,
      title: "SIA Top-Up Door Supervisor Training",
      description:
        "Become a certified door supervisor with comprehensive training in conflict management, physical intervention, and legal responsibilities.",
      image:
        "https://images.unsplash.com/photo-1590402485284-a1419d4212d2?auto=format&fit=crop&q=80&w=800",
      badge: "Popular",
      price: "165.00",
      date: "16th Mar 2026",
    },
    {
      id: 2,
      title: "CCTV Training",
      description:
        "Attend two days of classes online and one day for the exam. Get licensed to operate CCTV systems.",
      image:
        "https://images.unsplash.com/photo-1557597774-9d2739f05a76?auto=format&fit=crop&q=80&w=800",
      badge: "Popular",
      tag: "Online",
      price: "299.99",
      date: "23rd Mar 2026",
    },
    {
      id: 3,
      title: "Security Guard Refresher Course",
      description:
        "Foundation course for aspiring security guards. Learn patrol procedures, access control, and emergency response protocols.",
      image:
        "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=800",
      price: "175.00",
      date: "16th Mar 2026",
    },
  ];

  return (
    <section className="py-20 px-6 lg:px-16 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[28px] md:text-[32px] font-bold text-[#141414] mb-10">
          Explore SIA training courses
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {siaCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreSiaCourses;