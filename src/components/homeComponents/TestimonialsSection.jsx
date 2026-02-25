import React from "react";
import { Star } from "lucide-react";

const Stars = ({ color = "#B9FF5A" }) => (
  <div className="flex gap-1 mb-6">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={18} fill={color} stroke={color} />
    ))}
  </div>
);

const TestimonialsSection = () => {
  return (
    <section className="bg-[#f6f7f9] py-24 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2f3a47] mb-4">
            Trained by Experts Who&apos;ve Done the Job
          </h2>
          <p className="text-lg text-gray-600">
            Real stories from real students
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT - Large Dark Testimonial */}
          <div className="bg-gradient-to-br from-[#243447] to-[#1c2a38] rounded-[28px] p-10 text-white shadow-[0_25px_60px_rgba(0,0,0,0.25)]">

            <Stars />

            <div className="text-[#B9FF5A] text-5xl leading-none mb-6">“</div>

            <p className="text-lg leading-relaxed text-gray-200 mb-10">
              Ben was genuinely brilliant. He made the course fun and engaging,
              and I felt completely prepared for the exam. The same-day results
              were amazing – I started applying for jobs that evening!
            </p>

            <div className="border-t border-white/10 pt-6">
              <p className="font-semibold text-white">
                Sarah Mitchell
              </p>
              <p className="text-gray-400 text-sm">
                Door Supervisor Course, London
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-8">

            {/* Instructor Card */}
            <div className="bg-white rounded-[28px] p-8 border border-gray-200 shadow-sm">
              <div className="flex items-start gap-6">

                {/* Avatar */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#243447] to-[#1c2a38] flex items-center justify-center text-white font-bold text-xl">
                  JR
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-[#2f3a47]">
                    Mr. John Redfern
                  </h4>
                  <p className="text-[#B9FF5A] font-semibold text-sm mt-1">
                    US Army Veteran
                  </p>
                  <p className="text-gray-500 text-sm mb-4">
                    Lead Security Instructor
                  </p>

                  <p className="text-gray-600 leading-relaxed">
                    20+ years of real-world security experience across military
                    and civilian roles. Passionate about preparing the next
                    generation of security professionals.
                  </p>
                </div>

              </div>
            </div>

            {/* Light Green Testimonial */}
            <div className="bg-[#eef5e8] border border-[#B9FF5A]/40 rounded-[28px] p-8">

              <Stars color="#2f3a47" />

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                The instructors were professional and knowledgeable.
                They shared real stories from their careers which really
                helped put everything into context. Highly recommend!
              </p>

              <p className="font-semibold text-[#2f3a47]">
                Marcus Thompson
              </p>
              <p className="text-sm text-gray-500">
                CCTV Operator Course, Manchester
              </p>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;