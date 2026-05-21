import React from "react";
import { Star, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import RealStories from "../coursesComponents/RealStories";

const testimonials = [
  {
    name: "Paul Taylor",
    role: "Door Supervisor Training · January 2026",
    text: "2 months ago I was working in a warehouse. Today, I am working as a security guard in Harrow earning a lot more than I was sorting boxes! I am glad I chose Courses4Me for my SIA training.",
  },
  {
    name: "Sarah Johnson",
    role: "Door Supervisor Training · January 2026",
    text: "I had the opportunity to take the course under excellent instruction. The trainer was patient, knowledgeable, and made learning enjoyable. Passed first time!",
  },
  {
    name: "James Mitchell",
    role: "Security Guard Training · February 2026",
    text: "Great trainer, I am doing the door supervision course next month. Very professional and thorough teaching style.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="bg-white px-4 py-24">
      <div className="max-w-7xl mx-auto p-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-[44px] md:text-[56px] font-bold text-[#1A1A1A] mb-5 leading-[1.05] tracking-tight">
            People Just Like You <br className="hidden md:block" />
            <span className="text-[#FF5421]">Changed Their Lives</span>
          </h2>

          <p className="text-gray-500 text-base sm:text-lg font-medium">
            Join 400,000+ people who have started their career with us.
          </p>
        </motion.div>

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* TRUSTPILOT */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="relative h-full min-h-80 bg-white rounded-[28px] border border-[#F3E3DC] p-7 overflow-hidden transition-all duration-300 hover:shadow-[0_18px_40px_rgba(241,90,36,0.12)]"
          >
            {/* GLOW */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#F15A24]/5 rounded-full blur-3xl" />

            {/* HEADER */}
            <div className="flex items-start justify-between relative z-10">
              <div>
                <span className="inline-flex items-center gap-2 bg-[#FFF3EE] text-[#F15A24] text-[11px] px-3 py-1.5 rounded-full font-semibold uppercase tracking-[0.15em]">
                  Total Reviews
                </span>

                <h3 className="text-[44px] leading-none font-bold text-[#111111] mt-5">
                  34,032
                </h3>

                <p className="text-sm text-[#8A8A8A] mt-1">
                  Verified Student Reviews
                </p>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-[#FFF4EF] border border-[#F15A24]/10 flex items-center justify-center shadow-sm">
                <span className="text-[24px] font-bold text-[#F15A24]">★</span>
              </div>
            </div>

            {/* RATING */}
            <div className="mt-8 relative z-10">
              {/* STARS */}
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-xl bg-[#F15A24] flex items-center justify-center shadow-sm"
                  >
                    <Star
                      size={15}
                      fill="white"
                      color="white"
                      strokeWidth={2}
                    />
                  </div>
                ))}
              </div>

              {/* SCORE */}
              <div className="mt-4">
                <h4 className="text-[24px] font-bold text-[#111111] leading-none">
                  4.6/5 Rating
                </h4>

                <p className="text-xs text-[#8A8A8A] mt-1">
                  Based on verified students
                </p>
              </div>
            </div>

            {/* FOOTER */}
            <div className="mt-7 pt-5 border-t border-[#F4E7E2] flex items-center justify-between relative z-10">
              <div>
                <p className="text-sm font-semibold text-[#1A1A1A]">
                  Excellent Student Satisfaction
                </p>

                <p className="text-xs text-[#8A8A8A] mt-1">
                  Trusted by thousands of learners
                </p>
              </div>

              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold shadow-lg">
                ✓
              </div>
            </div>
          </motion.div>

          {/* GOOGLE REVIEWS */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="relative h-full min-h-80 bg-white rounded-[28px] border border-[#F3E3DC] p-7 overflow-hidden transition-all duration-300 hover:shadow-[0_18px_40px_rgba(241,90,36,0.12)]"
          >
            {/* GLOW */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#F15A24]/5 rounded-full blur-3xl" />

            {/* HEADER */}
            <div className="flex items-start justify-between relative z-10">
              <div>
                <span className="inline-flex items-center gap-2 bg-[#FFF3EE] text-[#F15A24] text-[11px] px-3 py-1.5 rounded-full font-semibold uppercase tracking-[0.15em]">
                  Google Reviews
                </span>

                <h3 className="text-[44px] leading-none font-bold text-[#111111] mt-5">
                  9,511
                </h3>

                <p className="text-sm text-[#8A8A8A] mt-1">
                  Verified Student Reviews
                </p>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-[#FFF4EF] border border-[#F15A24]/10 flex items-center justify-center shadow-sm">
                <span className="text-[24px] font-bold text-[#F15A24]">G</span>
              </div>
            </div>

            {/* RATING */}
            <div className="mt-8 relative z-10">
              {/* STARS */}
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-xl bg-[#F15A24] flex items-center justify-center shadow-sm"
                  >
                    <Star
                      size={15}
                      fill="white"
                      color="white"
                      strokeWidth={2}
                    />
                  </div>
                ))}
              </div>

              {/* SCORE */}
              <div className="mt-4">
                <h4 className="text-[24px] font-bold text-[#111111] leading-none">
                  4.9/5 Rating
                </h4>

                <p className="text-xs text-[#8A8A8A] mt-1">
                  Average Student Feedback
                </p>
              </div>
            </div>

            {/* FOOTER */}
            <div className="mt-7 pt-5 border-t border-[#F4E7E2] flex items-center justify-between relative z-10">
              <div>
                <p className="text-sm font-semibold text-[#1A1A1A]">
                  Outstanding Learning Experience
                </p>

                <p className="text-xs text-[#8A8A8A] mt-1">
                  Highly rated by our students
                </p>
              </div>

              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold shadow-lg">
                ✓
              </div>
            </div>
          </motion.div>

          {/* IMAGE 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="rounded-2xl overflow-hidden relative"
          >
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
              className="w-full h-full object-cover"
            />

            <span className="absolute bottom-3 left-3 text-white text-xs">
              Conflict & Security Guard Training – January 2026
            </span>
          </motion.div>

          {/* IMAGE 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="rounded-2xl overflow-hidden relative"
          >
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655"
              className="w-full h-full object-cover"
            />

            <span className="absolute bottom-3 left-3 text-white text-xs">
              Callie Champion
            </span>
          </motion.div>
        </div>

        {/* TESTIMONIALS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="relative bg-white rounded-[30px] p-6 pt-10 border border-[#F15A24]/10 shadow-[0_10px_30px_rgba(241,90,36,0.08)] overflow-hidden transition-all duration-300 hover:shadow-[0_16px_40px_rgba(241,90,36,0.15)]"
            >
              {/* TOP RIGHT LETTER */}
              <div className="absolute top-5 right-5">
                <div className="w-[72px] h-[72px] rounded-full border-[6px] border-[#F15A24] bg-[#FFE7DE] flex items-center justify-center shadow-md">
                  <span className="text-[28px] font-bold text-[#F15A24]">
                    {t.name.charAt(0)}
                  </span>
                </div>
              </div>

              {/* CLIENT INFO */}
              <div className="mb-5">
                <h3 className="text-[22px] font-bold text-[#F15A24] leading-none">
                  {t.name}
                </h3>

                <p className="text-[12px] text-[#8A8A8A] mt-2 font-medium">
                  {t.role}
                </p>
              </div>

              {/* TEXT */}
              <p className="text-[13px] leading-[24px] text-[#666666] pr-3 min-h-[120px]">
                {t.text}
              </p>

              {/* BOTTOM DESIGN */}
              <div className="absolute left-0 bottom-0 flex items-end justify-between w-full">
                {/* STARS */}
                <div className="bg-black px-6 py-3 rounded-tr-[42px] flex items-center gap-1 shadow-lg">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill="#FFF"
                      color="#FFF"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>

                {/* QUOTE */}
                <div className="pr-5 pb-3">
                  <span className="text-[#F15A24] text-[42px] font-black block leading-none opacity-90">
                    ❞
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* LEFT */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#F65B15] text-white flex items-center justify-center font-bold text-lg">
              95%
            </div>

            <div>
              <h4 className="font-semibold">Industry-Leading Pass Rate</h4>

              <p className="text-sm text-gray-500">
                Our students consistently achieve outstanding results
              </p>
            </div>
          </div>

          {/* BUTTON */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#FF5421] cursor-pointer text-white px-6 py-3 rounded-xl flex items-center gap-2"
          >
            View all reviews
            <ExternalLink size={16} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
