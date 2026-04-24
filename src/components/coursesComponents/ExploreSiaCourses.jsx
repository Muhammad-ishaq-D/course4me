import React from 'react';
import { useSearchParams } from 'react-router-dom';
import CourseCard from './CourseCard';

const ExploreSiaCourses = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');

  const allCourses = [
    {
      id: 1,
      title: "SIA Top-Up Door Supervisor Training",
      category: "SIA Training",
      description:
        "Become a certified door supervisor with comprehensive training in conflict management, physical intervention, and legal responsibilities.",
      image:
        "https://media.istockphoto.com/id/2166573804/photo/on-the-job-portrait-of-security-staff-at-media-event.jpg?s=1024x1024&w=is&k=20&c=m27UTDaDCsk1sGV9BJgKORqNamF0B4v-de4pKR6YsGM=",
      badge: "Popular",
      price: "165.00",
      date: "16th Mar 2026",
    },
    {
      id: 2,
      title: "CCTV Training",
      category: "SIA Training",
      description:
        "Attend two days of classes online and one day for the exam. Get licensed to operate CCTV systems.",
      image:
        "https://plus.unsplash.com/premium_photo-1748853983673-6e48199324fe?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      badge: "Popular",
      tag: "Online",
      price: "299.99",
      date: "23rd Mar 2026",
    },
    {
      id: 3,
      title: "Security Guard Refresher Course",
      category: "SIA Training",
      description:
        "Foundation course for aspiring security guards. Learn patrol procedures, access control, and emergency response protocols.",
      image:
        "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=800",
      price: "175.00",
      date: "16th Mar 2026",
    },
    {
      id: 4,
      title: "First Aid at Work",
      category: "First Aid",
      description: "Comprehensive first aid training for the workplace, covering emergency response and life-saving techniques.",
      image: "https://images.unsplash.com/photo-1542884748-2b87b36c6b90?auto=format&fit=crop&q=80&w=800",
      badge: "Certification",
      price: "145.00",
      date: "20th Mar 2026",
    },
    {
      id: 5,
      title: "Emergency First Aid at Work",
      category: "First Aid",
      description: "A one-day course covering the essentials of first aid in the workplace.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
      price: "95.00",
      date: "21st Mar 2026",
    },
    {
      id: 6,
      title: "Fire Safety Level 2",
      category: "Health & Safety",
      description: "Learn essential fire safety protocols, evacuation procedures, and fire extinguisher use.",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=800",
      price: "85.00",
      date: "25th Mar 2026",
    },
    {
      id: 7,
      title: "Health and Safety in the Workplace",
      category: "Health & Safety",
      description: "Foundational training for maintaining a safe and healthy work environment.",
      image: "https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&q=80&w=800",
      price: "110.00",
      date: "26th Mar 2026",
    },
    {
      id: 8,
      title: "Close Protection Course",
      category: "Specialist",
      description: "Elite training for bodyguards and private security detail for high-profile clients.",
      image: "https://images.unsplash.com/photo-1557597774-9d2739f05a76?auto=format&fit=crop&q=80&w=800",
      badge: "Elite",
      price: "1,500.00",
      date: "1st Apr 2026",
    }
  ];

  const filteredCourses = categoryParam
    ? allCourses.filter(course => course.category === categoryParam)
    : allCourses.filter(course => course.category === "SIA Training"); // Default to SIA Training

  const displayCategory = categoryParam || "SIA Training";

  const categoryCounts = {
    "SIA Training": "5 courses",
    "First Aid": "1 course",
    "Health & Safety": "2 courses",
    "Specialist": "2 courses"
  };

  const currentCount = categoryCounts[displayCategory] || "";

  return (
    <section className="py-20 px-6 lg:px-16 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[28px] md:text-[32px] font-bold text-[#141414] mb-10 flex items-center gap-3">
          Explore {displayCategory} courses
          {currentCount && (
            <span className="text-sm font-medium text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
              {currentCount}
            </span>
          )}
        </h2>

        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
            <p className="text-gray-500 font-medium">No courses found in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExploreSiaCourses;