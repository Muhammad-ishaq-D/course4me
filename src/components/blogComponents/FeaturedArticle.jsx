import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import Blog1 from "../../assets/home/blog1.png";

const FeaturedArticle = () => {
  const navigate = useNavigate();

  return (
    <section className="px-6 -mt-10 mb-16 relative z-20">
      <div className="max-w-[1185px] mx-auto">
        <div
          onClick={() => navigate('/blog/article')}
          className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row group cursor-pointer transition-transform hover:translate-y-[-4px]"
        >
          {/* Image Section */}
          <div className="lg:w-1/2 h-[400px] lg:h-auto overflow-hidden">
            <img
              src={Blog1}
              alt="Featured Article"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
            />
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
            <div className="flex gap-4 mb-8 flex-wrap">
              <span className="bg-[#00A3FF] text-white text-[10px] font-extrabold uppercase tracking-widest px-5 py-2.5 rounded-lg shadow-lg">
                Career Guide
              </span>
              <span className="bg-[#1A1A1A] text-white text-[10px] font-extrabold uppercase tracking-widest px-5 py-2.5 rounded-lg shadow-lg">
                Featured
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6 leading-tight group-hover:text-[#00A3FF] transition">
              How to Become a Door Supervisor in 2026: The Complete Guide
            </h2>

            <p className="text-gray-500 text-lg mb-10 leading-relaxed font-medium">
              Everything you need to know about getting your SIA Door Supervisor
              licence, from training requirements to career opportunities and
              expected salaries across the UK.
            </p>

            <div className="flex flex-wrap items-center gap- mb-10">
              <div className="flex items-center gap-2 text-sm text-gray-500 font-bold uppercase tracking-widest">
                <User size={18} className="text-[#00A3FF]" />
                Sarah Mitchell
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 font-bold uppercase tracking-widest border-l border-gray-200 pl-6">
                <Calendar size={18} className="text-[#00A3FF]" />
                Feb 28, 2026
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 font-bold uppercase tracking-widest border-l border-gray-200 pl-6">
                <Clock size={18} className="text-[#00A3FF]" />
                8 min read
              </div>
            </div>

            <div className="flex items-center gap-3 text-[#1A1A1A] font-extrabold uppercase tracking-widest text-sm border-t border-gray-50 pt-10 group/link">
              Read Full Article
              <ArrowRight size={20} className="group-hover/link:translate-x-2 transition" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticle;
