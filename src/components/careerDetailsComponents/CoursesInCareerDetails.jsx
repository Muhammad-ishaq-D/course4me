import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import courseService from "../../api/services/courseService";
import CourseCard from "../ui/CourseCard";
import Loader from "../ui/Loader";

const CoursesInCareerDetails = ({ career }) => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const response = await courseService.getAllCourses({ status: "Published" });
        const data = response?.data?.data || [];

        // Map the backend courses
        const mappedCourses = data.map((course) => ({
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
          isPopular: course.isPopular,
          date: course.sessions?.find(
            (s) => s.availabilityStatus !== "Sold Out",
          )?.startDate
            ? new Date(
              course.sessions.find((s) => s.availabilityStatus !== "Sold Out")
                .startDate,
            ).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })
            : undefined,
        }));

        // Keep at most 3 courses generally
        setCourses(mappedCourses.slice(0, 3));
      } catch (error) {
        console.error("Error fetching courses in career details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (career) {
      fetchCourses();
    }
  }, [career]);

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-4 pb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF1EB] border border-[#FFE2D6] text-[#F8510C] text-xs font-black uppercase tracking-[0.12em]">
            Career Training
          </div>

          <h2 className="mt-4 text-[32px] md:text-[42px] leading-tight font-black text-[#111827]">
            Explore All Training Courses
          </h2>

          <p className="mt-3 text-[#667085] text-[15px] max-w-2xl leading-[1.8]">
            Complete these professional training courses to begin your journey
            as a successful {career.title}.
          </p>
        </div>

        <button
          onClick={() => navigate("/courses")}
          className="h-12 cursor-pointer px-6 rounded-2xl border border-[#F8510C]/20 text-[#F8510C] font-bold hover:bg-[#F8510C] hover:text-white transition-all duration-300 active:scale-95"
        >
          View All Courses
        </button>
      </div>

      {/* Courses Grid or Loader */}
      {loading ? (
        <Loader text="Loading recommended courses..." />
      ) : courses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      ) : (
        <div className="py-12 bg-white rounded-[28px] border border-dashed border-gray-200 text-center text-gray-500 font-bold px-6">
          No training courses currently listed for this career path.
        </div>
      )}
    </section>
  );
};

export default CoursesInCareerDetails;
