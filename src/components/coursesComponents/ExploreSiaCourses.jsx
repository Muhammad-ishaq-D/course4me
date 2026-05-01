import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import CourseCard from './CourseCard';
import courseService from '../../api/services/courseService';

const ExploreSiaCourses = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [counts, setCounts] = useState({});

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const displayCategory = categoryParam || "SIA Training";
        
        const response = await courseService.getAllCourses({ 
          category: displayCategory,
          status: 'Published'
        });
        
        const data = response.data?.data || [];
        
        const mappedCourses = data.map(course => ({
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
          date: course.sessions?.find(s => s.availabilityStatus !== 'Sold Out')?.startDate 
            ? new Date(course.sessions.find(s => s.availabilityStatus !== 'Sold Out').startDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
            : undefined
        }));

        setCourses(mappedCourses);
        
        // Update count for display
        setCounts(prev => ({
          ...prev,
          [displayCategory]: `${data.length} ${data.length === 1 ? 'course' : 'courses'}`
        }));
      } catch (error) {
        console.error('Error fetching SIA courses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [categoryParam]);

  const displayCategory = categoryParam || "SIA Training";
  const currentCount = counts[displayCategory] || "";

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

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-12 h-12 border-4 border-[#141414]/20 border-t-[#F65B15] rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-500 font-medium">Loading {displayCategory} courses...</p>
          </div>
        ) : courses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {courses.map((course) => (
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