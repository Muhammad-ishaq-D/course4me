import React, { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import CourseHero from "../components/coursesComponents/details/CourseHero";
import CourseMainContent from "../components/coursesComponents/details/CourseMainContent";
import RelatedCourses from "../components/coursesComponents/details/RelatedCourses";
import CourseCTA from "../components/coursesComponents/details/CourseCTA";
import { courses } from "../data/courseData";

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = courses[courseId];

  // Scroll to top on mount or course change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [courseId]);

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      {/* Secondary Course Nav */}
      <div className="sticky top-[112px] z-40 bg-white border-b border-gray-100 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-12 h-16 text-sm font-bold text-[#64748B]">
            <a href="#overview" className="text-[#F15A24] border-b-2 border-[#F15A24] h-full flex items-center transition-colors">Overview</a>
            <a href="#curriculum" className="hover:text-[#F15A24] transition-colors">Curriculum</a>
            <a href="#dates" className="hover:text-[#F15A24] transition-colors">Dates & Prices</a>
            <a href="#school" className="hover:text-[#F15A24] transition-colors">Training School</a>
            <a href="#faq" className="hover:text-[#F15A24] transition-colors">FAQ</a>
          </div>
        </div>
      </div>

      <div id="overview">
        <CourseHero course={course} />
      </div>

      <CourseMainContent course={course} />

      <RelatedCourses />

      <CourseCTA course={course} />
    </div>
  );
};

export default CourseDetail;
