import React, { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import CourseHero from "../../components/coursesComponents/details/CourseHero";
import CourseMainContent from "../../components/coursesComponents/details/CourseMainContent";
import RelatedCourses from "../../components/coursesComponents/details/RelatedCourses";
import CourseCTA from "../../components/coursesComponents/details/CourseCTA";
import courseService from "../../api/services/courseService";
import { BookOpen, Calendar, FileText, HelpCircle, Star } from "lucide-react";
import Loader from "../../components/ui/Loader";

const CourseDetail = () => {
  const { courseId } = useParams();
  const [course, setCourse] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  // Scroll to top on mount or course change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [courseId]);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true);
        const response = await courseService.getCourseById(courseId);
        setCourse(response.data?.data || response.data);
      } catch (error) {
        console.error("Error fetching course details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();
  }, [courseId]);

  if (loading) {
    return (
      <div className=" min-h-screen bg-[#F8FAFC] flex items-center justify-center">
        <Loader text="Preparing your learning experience..." />
      </div>
    );
  }

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <div id="overview">
        <CourseHero course={course} />
      </div>

      <CourseMainContent course={course} />

      <RelatedCourses />

      {/* <CourseCTA course={course} /> */}
    </div>
  );
};

export default CourseDetail;
