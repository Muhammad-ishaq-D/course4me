import React from "react";
import { ChevronRight } from "lucide-react";

const CourseCTA = ({ course }) => {
  if (!course) return null;

  return (
    <section className="py-24 bg-[#1C1C1C] relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-[#F15A24]/10 to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
          Ready to start your <span className="text-[#F15A24]">security career?</span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto">
          Book your {course.title} today and take the first step towards a rewarding career in security.
        </p>
        
        <button className="bg-[#F15A24] text-white px-10 py-5 rounded-full font-black text-xl hover:brightness-110 transition-all shadow-2xl shadow-[#F15A24]/40 flex items-center gap-3 mx-auto group">
          Book {course.title} — {course.price}
          <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default CourseCTA;
