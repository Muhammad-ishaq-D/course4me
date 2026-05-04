import React, { useEffect } from "react";
import { Star, Clock } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import courseService from "../../../api/services/courseService";

const RelatedCourses = () => {
  const navigate = useNavigate();
  const { courseId } = useParams();
  const [otherCourses, setOtherCourses] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const fetchRelated = async () => {
      try {
        setLoading(true);
        // Fetch a few courses, excluding current one
        const response = await courseService.getAllCourses({ limit: 4 });
        const data = response.data?.data || [];
        setOtherCourses(data.filter(c => c._id !== courseId).slice(0, 3));
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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-black text-[#1E293B] mb-12">You may also like</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherCourses.map((course) => (
            <div
              key={course._id}
              onClick={() => navigate(`/course/${course._id}`)}
              className="group cursor-pointer bg-white rounded-4xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image Section */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={course.thumbnail || "/assets/courses/door.png"}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {course.isPopular && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#F15A24] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
                      Popular
                    </span>
                  </div>
                )}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#00A3F4] flex items-center justify-center text-white shadow-lg">
                  <Star className="w-4 h-4 fill-current" />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <h3 className="text-xl font-black text-[#1E293B] mb-2 group-hover:text-[#F15A24] transition-colors">
                  {course.title}
                </h3>
                <p className="text-[#64748B] text-sm font-medium mb-8 line-clamp-1">
                  {course.subtitle}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                  <div className="flex items-center gap-4 text-xs font-bold text-[#94A3B8]">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" /> {course.duration}
                    </span>
                    <span className="flex items-center gap-1 text-[#F59E0B]">
                      <Star className="w-4 h-4 fill-current" /> 4.9
                    </span>
                  </div>
                  <span className="text-lg font-black text-[#1E293B]">
                    £{course.pricing?.basePrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedCourses;
