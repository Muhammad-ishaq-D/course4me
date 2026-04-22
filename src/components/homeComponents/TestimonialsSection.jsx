import React from "react";
import { Quote, Star } from "lucide-react";

const Stars = ({ color = "#FF5421" }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={16} fill={color} stroke={color} />
    ))}
  </div>
);

const TestimonialsSection = () => {
  return (
    <section className="bg-white py-24 font-sans">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-[44px] md:text-[56px] font-bold text-[#1A1A1A] mb-5 leading-[1.05] tracking-tight">
            People Just Like You <br className="hidden md:block" />
            <span className="text-[#FF5421]">Changed Their Lives</span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg font-medium">
            Join 400,000+ people who have started their career with us.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT - Main Student Testimonial (Ben) */}
          <div className="bg-white rounded-[32px] p-10 border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.03)] flex flex-col items-start h-full">
            <div className="mb-6">
              <Stars />
            </div>

            <div className="mb-8 p-3 bg-[#E6F4FF] rounded-2xl w-fit">
              <Quote size={28} className="text-[#00A3FF] fill-[#00A3FF] opacity-30" />
            </div>

            <p className="text-[#1A1A1A] text-xl font-medium leading-relaxed mb-12 flex-1">
              "I was looking for a fresh start. Within 3 weeks of starting my Door Supervisor course, I had my license and my first job at a top venue. The support was incredible!"
            </p>

            <div className="border-t border-gray-50 pt-8 w-full">
              <p className="font-bold text-[#1A1A1A] text-lg leading-tight mb-1">
                Ben
              </p>
              <p className="text-gray-400 text-sm font-bold">
                Door Supervisor Course Graduate
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-6">

            {/* Instructor Card */}
            <div className="bg-[#F8F9FA] rounded-[32px] p-10 border border-gray-100 flex flex-col gap-8">
              <div className="flex items-center gap-6">
                {/* Avatar */}
                <div className="w-20 h-20 rounded-[20px] bg-[#1A1A1A] flex items-center justify-center text-white font-bold text-2xl shadow-xl flex-shrink-0">
                  JR
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-[#1A1A1A] tracking-tight mb-2">
                    Mr. John Redfern
                  </h4>
                  <div className="inline-flex items-center bg-[#00A3FF] text-white px-3 py-1 rounded-lg text-[9px] font-bold uppercase tracking-widest">
                    US Army Veteran
                  </div>
                  <p className="text-gray-400 text-xs font-bold mt-2">
                    Lead Security Instructor
                  </p>
                </div>
              </div>

              <p className="text-gray-500 leading-relaxed font-medium text-base">
                20+ years of real-world security experience across military and
                civilian roles. Passionate about preparing the next generation of
                security professionals with practical, hands-on training.
              </p>
            </div>

            {/* Marcus Thompson Testimonial Card */}
            <div className="bg-white border border-gray-100 rounded-[32px] p-10 shadow-[0_10px_30px_rgba(0,0,0,0.02)]">
              <div className="flex items-center gap-3 mb-8">
                <Stars />
                <span className="text-[#1A1A1A] text-xs font-bold ml-1">Excellent</span>
              </div>

              <p className="text-gray-500 text-base font-medium leading-relaxed mb-10 italic">
                "The instructors were professional and knowledgeable. They shared
                real stories from their careers which really helped put everything into
                context. The training quality is second to none. Highly recommend!"
              </p>

              <div>
                <p className="font-bold text-[#1A1A1A] text-lg mb-1">
                  Marcus Thompson
                </p>
                <p className="text-xs text-gray-400 font-bold">
                  CCTV Operator Course, Manchester
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;