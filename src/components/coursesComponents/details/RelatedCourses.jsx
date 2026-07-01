import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import courseService from "../../../api/services/courseService";
import CourseCard from "../../ui/CourseCard";

const RelatedCourses = () => {
  const { courseId } = useParams();

  const [otherCourses, setOtherCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRelated = async () => {
      try {
        setLoading(true);

        const response = await courseService.getAllCourses({
          status: "Published",
          limit: 4,
        });

        const data = response.data?.data || [];

        // REMOVE CURRENT COURSE
        const filteredCourses = data
          .filter((course) => course._id !== courseId)
          .slice(0, 3);

        setOtherCourses(filteredCourses);
      } catch (error) {
        console.error("Error fetching related courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRelated();
  }, [courseId]);

  if (loading || otherCourses.length === 0) return null;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADING */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-[#F15A24] font-bold uppercase tracking-[2px] text-sm mb-2">
              Recommended Courses
            </p>

            <h2 className="text-3xl md:text-4xl font-black text-[#141414]">
              You May Also Like
            </h2>
          </div>
        </div>

        {/* COURSES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherCourses.map((course) => (
            <CourseCard
              key={course._id}
              id={course._id}
              image={course.thumbnail || "/assets/courses/door.png"}
              title={course.title}
              description={course.subtitle}
              price={course.pricing?.basePrice}
              duration={course.duration}
              category={course.category}
              isPopular={course.isPopular}
              isOnline={course.isOnline}
              date={course.nextBatch}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedCourses;
