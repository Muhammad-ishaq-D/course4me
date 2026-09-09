import React, { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import CourseHero from "../../components/coursesComponents/details/CourseHero";
import CourseMainContent from "../../components/coursesComponents/details/CourseMainContent";
import RelatedCourses from "../../components/coursesComponents/details/RelatedCourses";
import courseService from "../../api/services/courseService";
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
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center">
        <Loader text="Preparing your learning experience..." />
      </div>
    );
  }

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  // Fallback metadata fields if any property is missing from the API
  const pageTitle = `${course.title || course.name || "Course Details"} | courses4me`;
  const pageDescription =
    course.description ||
    course.summary ||
    `Enroll in ${course.title || "our training course"} with courses4me and gain industry-recognized qualifications in the UK.`;
  const canonicalUrl = `https://courses4me.co.uk/course/${courseId}`;

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      {/* Dynamic SEO Tags */}
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />

        {/* Structured Data (Course Schema Markup) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: course.title || course.name,
            description: pageDescription,
            provider: {
              "@type": "Organization",
              name: "courses4me",
              sameAs: "https://courses4me.co.uk",
            },
            offers: {
              "@type": "Offer",
              price: course.price || "0",
              priceCurrency: "GBP",
              availability: "https://schema.org/InStock",
              url: canonicalUrl,
            },
          })}
        </script>
      </Helmet>

      <div id="overview">
        <CourseHero course={course} />
      </div>

      <CourseMainContent course={course} />
      <RelatedCourses />
    </div>
  );
};

export default CourseDetail;
