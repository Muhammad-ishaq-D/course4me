import React, { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import Seo from "../../components/shared/Seo";
import {
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  breadcrumbSchema,
  courseUrl,
  plainText,
} from "../../utils/seo";
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
  const courseTitle = course.title || course.name || "Course Details";
  const pageDescription =
    plainText(course.subtitle || course.description || course.fullDescription || course.summary) ||
    `Enrol in ${courseTitle} with courses4me and gain an industry-recognised qualification at training centres across the UK.`;
  const canonicalPath = courseUrl(courseId, courseTitle);
  const price = course.pricing?.salePrice || course.pricing?.basePrice;
  const workload = String(course.duration || "").match(/(\d+(?:\.\d+)?)\s*(hour|hr|day|week)/i);
  const workloadIso = workload
    ? `P${/^h/i.test(workload[2]) ? "T" : ""}${workload[1]}${/^h/i.test(workload[2]) ? "H" : workload[2][0].toUpperCase()}`
    : undefined;

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: courseTitle,
    description: pageDescription,
    url: absoluteUrl(canonicalPath),
    image: course.thumbnail ? [course.thumbnail] : undefined,
    inLanguage: "en-GB",
    provider: { "@type": "Organization", name: SITE_NAME, sameAs: SITE_URL },
    offers: price
      ? {
          "@type": "Offer",
          category: "Paid",
          price: String(price),
          priceCurrency: "GBP",
          availability: "https://schema.org/InStock",
          url: absoluteUrl(canonicalPath),
        }
      : undefined,
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: course.isOnline ? "Online" : "Onsite",
      courseWorkload: workloadIso,
      location: course.isOnline ? undefined : { "@type": "Country", name: "United Kingdom" },
    },
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <Seo
        title={/course|training|award/i.test(courseTitle) ? courseTitle : `${courseTitle} Course`}
        description={pageDescription}
        path={canonicalPath}
        image={course.thumbnail}
        jsonLd={[
          courseSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Courses", path: "/courses" },
            { name: courseTitle, path: canonicalPath },
          ]),
        ]}
      />

      <div id="overview">
        <CourseHero course={course} />
      </div>

      <CourseMainContent course={course} />
      <RelatedCourses />
    </div>
  );
};

export default CourseDetail;
