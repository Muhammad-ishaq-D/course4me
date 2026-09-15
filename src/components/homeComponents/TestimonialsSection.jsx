import React from "react";
import { Star, Check, Sparkles, Award } from "lucide-react";
import { motion } from "framer-motion";

const statsData = [
  {
    provider: "Trustpilot",
    tag: "Total Reviews",
    count: "34,032",
    subtext: "Verified Student Reviews",
    rating: "4.6/5 Rating",
    ratingSubtext: "Based on verified students",
    satisfactionText: "Excellent Student Satisfaction",
    satisfactionSubtext: "Trusted by thousands of learners",
    icon: "★",
  },
  {
    provider: "Google Reviews",
    tag: "Google Reviews",
    count: "9,511",
    subtext: "Verified Student Reviews",
    rating: "4.9/5 Rating",
    ratingSubtext: "Average Student Feedback",
    satisfactionText: "Outstanding Learning Experience",
    satisfactionSubtext: "Highly rated by our students",
    icon: "G",
  },
];

const testimonials = [
  {
    name: "Paul Taylor",
    role: "Door Supervisor Training",
    date: "January 2026",
    text: "2 months ago I was working in a warehouse. Today, I am working as a security guard in Harrow earning a lot more.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Door Supervisor Training",
    date: "January 2026",
    text: "I had the opportunity to take the course under excellent instruction. The trainer was patient, knowledgeable, and extremely supportive throughout.",
    rating: 5,
  },
  {
    name: "James Mitchell",
    role: "Security Guard Training",
    date: "February 2026",
    text: "Great trainer, I am doing the door supervision course next month. Very professional and thorough teaching style.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="bg-[#FAFAFA] px-4 py-20 lg:py-24 relative overflow-hidden"
    >
      {/* AMBIENT BACKGROUND GLOWS */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF5421]/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00A3FF]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-[#FF5421]/10 border border-[#FF5421]/20 text-[#FF5421] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-5">
            <Sparkles size={14} className="fill-[#FF5421]" />
            Student Reviews
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] leading-[1.08] tracking-tight">
            People Just Like You Changed <br />
            <span className="text-[#FF5421]">Their Lives</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-500 font-medium leading-relaxed">
            Join 400,000+ people who have launched their security careers with
            us.
          </p>
        </motion.div>

        {/* 1. VERIFIED METRICS & HIGHLIGHTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 items-stretch">
          {/* STAT CARDS */}
          {statsData.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="relative bg-white rounded-[28px] border border-gray-200/80 p-6 sm:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(255,84,33,0.1)] hover:border-[#FF5421]/30 transition-all duration-300 flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-start justify-between">
                  <span className="inline-flex items-center gap-2 bg-orange-50 text-[#FF5421] text-[11px] px-3 py-1.5 rounded-full font-extrabold uppercase tracking-wider">
                    {stat.tag}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-orange-50/80 border border-orange-100 flex items-center justify-center shrink-0">
                    <span className="text-xl font-black text-[#FF5421]">
                      {stat.icon}
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-4xl font-black text-[#111111] tracking-tight">
                    {stat.count}
                  </h3>
                  <p className="text-xs text-gray-400 font-semibold mt-1">
                    {stat.subtext}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-gray-100">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 rounded-lg bg-[#FF5421] flex items-center justify-center shadow-xs"
                      >
                        <Star
                          size={12}
                          fill="white"
                          color="white"
                          strokeWidth={2}
                        />
                      </div>
                    ))}
                  </div>
                  <h4 className="text-lg font-bold text-[#111111]">
                    {stat.rating}
                  </h4>
                  <p className="text-xs text-gray-400 font-medium">
                    {stat.ratingSubtext}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-[#111111]">
                    {stat.satisfactionText}
                  </p>
                  <p className="text-[11px] text-gray-400 font-medium">
                    {stat.satisfactionSubtext}
                  </p>
                </div>
                <div className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold shrink-0">
                  <Check size={14} strokeWidth={3} />
                </div>
              </div>
            </motion.div>
          ))}

          {/* GALLERY / SESSION IMAGES */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="group relative rounded-[28px] overflow-hidden min-h-[300px] lg:min-h-full shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-200/80"
          >
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
              alt="Practical Training Session"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 z-10">
              <span className="bg-[#00A3FF] text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full mb-2 inline-block">
                In-Class Training
              </span>
              <p className="text-sm font-bold text-white leading-snug">
                Security & Conflict Management Course
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="group relative rounded-[28px] overflow-hidden min-h-[300px] lg:min-h-full shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-200/80"
          >
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655"
              alt="Graduation Day"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 z-10">
              <span className="bg-[#FF5421] text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full mb-2 inline-block">
                Qualified Graduate
              </span>
              <p className="text-sm font-bold text-white leading-snug">
                Callie Champion — Licensed Professional
              </p>
            </div>
          </motion.div>
        </div>

        {/* 2. STUDENT TESTIMONIAL CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 items-stretch">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="relative bg-white rounded-[28px] border border-gray-200/80 p-7 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(255,84,33,0.08)] hover:border-[#FF5421]/30 transition-all duration-300 flex flex-col justify-between h-full group"
            >
              <div>
                {/* CARD HEADER: AVATAR & STAR RATING */}
                <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center font-black text-[#FF5421] text-lg shrink-0">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-lg font-extrabold text-[#111111] leading-tight">
                        {t.name}
                      </h3>
                      <p className="text-xs text-gray-400 font-medium mt-0.5">
                        {t.date}
                      </p>
                    </div>
                  </div>

                  {/* STARS */}
                  <div className="flex items-center gap-1 bg-orange-50 px-2.5 py-1.5 rounded-xl border border-orange-100/60">
                    <Star size={13} className="fill-[#FF5421] text-[#FF5421]" />
                    <span className="text-xs font-black text-[#FF5421]">
                      5.0
                    </span>
                  </div>
                </div>

                {/* ROLE BADGE */}
                <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-[11px] font-bold uppercase tracking-wider mb-4">
                  {t.role}
                </span>

                {/* REVIEW TEXT */}
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal italic">
                  "{t.text}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3. BOTTOM STATS BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-[28px] bg-white border border-gray-200/80 p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-5 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-[#FF5421] text-white flex items-center justify-center font-black text-xl shadow-lg shadow-[#FF5421]/20 shrink-0">
              95%
            </div>

            <div>
              <h4 className="text-lg sm:text-xl font-extrabold text-[#111111]">
                Industry-Leading First Time Pass Rate
              </h4>
              <p className="text-sm text-gray-500 font-medium mt-0.5">
                Our learners consistently achieve outstanding career results
                with our exam prep.
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 text-[#FF5421] bg-orange-50 border border-orange-100 px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider shrink-0">
            <Award size={16} />
            SIA Accredited Provider
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
