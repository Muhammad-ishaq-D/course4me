import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import NotFound from "../NotFound";
import Seo from "../../components/shared/Seo";
import {
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  breadcrumbSchema,
  courseUrl,
  describe,
  isoDuration,
} from "../../utils/seo";
import CourseHero from "../../components/coursesComponents/details/CourseHero";
import CourseMainContent from "../../components/coursesComponents/details/CourseMainContent";
import RelatedCourses from "../../components/coursesComponents/details/RelatedCourses";
import CourseLocations from "../../components/coursesComponents/details/CourseLocations";
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
    // A removed or mistyped course is a missing page, not a redirect to the list.
    return (
      <>
        <Seo title="Course Not Found" noindex />
        <NotFound />
      </>
    );
  }

  // Fallback metadata fields if any property is missing from the API
  const courseTitle = course.title || course.name || "Course Details";
  const pageDescription = describe(
    [course.subtitle, course.description, course.fullDescription, course.summary],
    `Book ${courseTitle} with courses4me at accredited training centres across the UK. Compare course dates and prices and book online.`,
  );
  const canonicalPath = courseUrl(courseId, courseTitle);
  const price = course.pricing?.salePrice || course.pricing?.basePrice;
  const workloadIso = isoDuration(course.duration);

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: courseTitle,
    description: pageDescription,
    url: absoluteUrl(canonicalPath),
    // Only a real URL is usable here; the API may hold the image as base64 data.
    image: /^https?:\/\//.test(course.thumbnail || "") ? [course.thumbnail] : undefined,
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
        redirectToCanonical
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
      <CourseLocations course={course} courseId={courseId} />
      <RelatedCourses />
    </div>
  );
};

export default CourseDetail;
