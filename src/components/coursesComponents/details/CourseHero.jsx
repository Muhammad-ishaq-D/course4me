import React from "react";
import { 
  Star, 
  Clock, 
  Users, 
  CheckCircle2, 
  ChevronRight,
  ShieldCheck,
  Calendar,
  Heart
} from "lucide-react";

const CourseHero = ({ course }) => {
  if (!course) return null;

  return (
    <section className="bg-[#1C1C1C] text-white pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto no-scrollbar whitespace-nowrap">
          <span className="text-xs bg-white/5 px-3 py-1.5 rounded-full text-gray-400 hover:text-white cursor-pointer transition-colors">Home</span>
          <ChevronRight className="w-3 h-3 text-gray-600" />
          <span className="text-xs bg-white/5 px-3 py-1.5 rounded-full text-gray-400 hover:text-white cursor-pointer transition-colors">All Courses</span>
          <ChevronRight className="w-3 h-3 text-gray-600" />
          <span className="text-xs bg-white/10 px-3 py-1.5 rounded-full text-white font-medium">{course.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-[#059669]/20 text-[#059669] border border-[#059669]/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> In-Person
              </span>
              <span className="bg-[#F59E0B]/20 text-[#F59E0B] border border-[#F59E0B]/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Popular
              </span>
              <span className="bg-[#3B82F6]/20 text-[#3B82F6] border border-[#3B82F6]/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" /> SIA Approved
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold mb-4 leading-tight">
              {course.title}
            </h1>
            <p className="text-lg text-gray-400 mb-8 font-medium">
              {course.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-10 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex text-[#F59E0B]">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <span className="font-bold text-white">{course.rating}</span>
                <span className="text-gray-500">({course.reviews} Reviews)</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Clock className="w-4 h-4 text-[#00A3F4]" />
                <span className="font-medium">{course.duration} course from 9am to 6pm</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Users className="w-4 h-4 text-[#F15A24]" />
                <span className="font-medium">{course.booked} booked</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-12">
              {course.highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#00A3F4]" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button className="bg-[#F15A24] text-white px-8 py-4 rounded-full font-bold text-lg hover:brightness-110 transition-all shadow-lg shadow-[#F15A24]/20 flex items-center gap-2 text-center">
                Book This Course <ChevronRight className="w-5 h-5" />
              </button>
              <button className="bg-white/5 border border-white/10 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center gap-2 text-gray-300">
                <Calendar className="w-5 h-5" /> View Dates
              </button>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative group lg:ml-auto">
            <div className="absolute -inset-4 bg-[#F15A24]/10 rounded-4xl blur-2xl group-hover:bg-[#F15A24]/20 transition-all" />
            <div className="relative rounded-4xl overflow-hidden border border-white/5 shadow-2xl">
              <img src={course.heroImage} alt={course.title} className="w-full aspect-4/3 object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
              <div className="absolute top-4 left-4">
                <button className="bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-white/20 transition-colors">
                  <Heart className="w-6 h-6 text-white" />
                </button>
              </div>
              <div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#34C759] animate-pulse" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">98% pass rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-[#F15A24]/5 to-transparent pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#00A3F4]/10 blur-[100px] rounded-full pointer-events-none" />
    </section>
  );
};

export default CourseHero;
