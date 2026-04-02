import React, { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import CourseHero from "../components/coursesComponents/details/CourseHero";
import CourseMainContent from "../components/coursesComponents/details/CourseMainContent";
import RelatedCourses from "../components/coursesComponents/details/RelatedCourses";
import CourseCTA from "../components/coursesComponents/details/CourseCTA";
import { courses } from "../data/courseData";
import { BookOpen, Calendar, FileText, HelpCircle, Star } from "lucide-react";

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
      <div className="sticky top-[104px]  z-40 bg-white border-b border-gray-200 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 ">
          <div className="flex items-center gap-8 h-[56px] text-[14px] font-medium text-[#64748B]">

            {/* ACTIVE */}
            <a
              href="#overview"
              className="flex items-center gap-2 text-[#F15A24] relative h-full"
            >
              <BookOpen size={16} />
              Overview
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#F15A24]" />
            </a>

            <a
              href="#curriculum"
              className="flex items-center gap-2 hover:text-[#F15A24] transition"
            >
              <FileText size={16} />
              Curriculum
            </a>

            <a
              href="#dates"
              className="flex items-center gap-2 hover:text-[#F15A24] transition"
            >
              <Calendar size={16} />
              Dates & Prices
            </a>

            <a
              href="#reviews"
              className="flex items-center gap-2 hover:text-[#F15A24] transition"
            >
              <Star size={16} />
              Reviews (2100)
            </a>

            <a
              href="#faq"
              className="flex items-center gap-2 hover:text-[#F15A24] transition"
            >
              <HelpCircle size={16} />
              FAQ
            </a>

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
