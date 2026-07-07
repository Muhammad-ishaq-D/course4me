import { Play, Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

import jamesOkonkwo from "../../assets/home/James Okonkwo.png";
import sarahMitchell from "../../assets/home/Sarah Mitchell.png";
import Emma from "../../assets/home/emma.png";
import davidOsei from "../../assets/home/David Osei.png";

function VideoTestimonials() {
  const testimonials = [
    {
      role: "Door Supervisor",
      duration: "2:34",
      name: "James Okonkwo",
      job: "Door Supervisor — London",
      quote:
        "I went from zero experience to earning £18/hour in just 3 months.",
      img: jamesOkonkwo,
    },
    {
      role: "CCTV Operator",
      duration: "3:12",
      name: "Sarah Mitchell",
      job: "CCTV Operator — Manchester",
      quote: "The CCTV course completely changed my career opportunities.",
      img: sarahMitchell,
    },
    {
      role: "Close Protection",
      duration: "1:58",
      name: "Emma",
      job: "Security Consultant — Birmingham",
      quote: "The training gave me confidence to build a successful career.",
      img: Emma,
    },
    {
      role: "Event Security",
      duration: "2:47",
      name: "David Osei",
      job: "Security Lead — Leeds",
      quote: "Now I lead security teams at major UK events nationwide.",
      img: davidOsei,
    },
  ];

  return (
    <section
      id="video-testimonials"
      className="relative overflow-hidden px-4 bg-[#111111] py-16 lg:py-20"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FF5421]/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00A3FF]/10 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 bg-[#00A3FF]/10 border border-[#00A3FF]/20 text-[#00A3FF] px-5 py-2 rounded-full text-sm font-bold mb-5">
            <Play size={14} className="fill-[#00A3FF]" />
            Success Stories
          </div>

          {/* HEADING */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.05] tracking-tight">
            Real Students.
            <br />
            <span className="text-[#FF5421]">Real Career Transformations.</span>
          </h2>

          {/* SUBTITLE */}
          <p className="mt-3 text-gray-400 text-base sm:text-lg leading-relaxed">
            Watch how our students went from beginners to working professionals
            in the UK security industry.
          </p>
        </motion.div>

        {/* TESTIMONIAL CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group h-full"
            >
              {/* CARD */}
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] h-full flex flex-col">
                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-700"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  {/* ROLE */}
                  <div className="absolute top-4 left-4 bg-[#00A3FF] text-white text-[10px]  uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
                    {t.role}
                  </div>

                  {/* DURATION */}
                  <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md text-white text-xs  px-3 py-1 rounded-full border border-white/10">
                    {t.duration}
                  </div>

                  {/* PLAY BUTTON */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#FF5421] flex items-center justify-center shadow-[0_20px_40px_rgba(248,81,12,0.35)] group-hover:scale-110 transition duration-300">
                      <Play
                        size={24}
                        fill="white"
                        className="text-white ml-1"
                      />
                    </div>
                  </div>

                  {/* BOTTOM INFO */}
                  <div className="absolute bottom-5 left-5 right-5">
                    {/* NAME */}
                    <h4 className="text-xl font-bold text-white">{t.name}</h4>

                    {/* JOB */}
                    <p className="text-base text-gray-300">{t.job}</p>
                  </div>
                </div>

                {/* QUOTE */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex justify-end mb-2 items-center">
                    <div className="flex items-center  gap-1">
                      <Star
                        size={16}
                        className="fill-[#FF5421] text-[#FF5421]"
                      />

                      <span className="text-sm font-bold text-white">4.9</span>
                    </div>
                  </div>

                  <p className="text-base text-gray-300 leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                {/* HOVER LINE */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#00A3FF] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default VideoTestimonials;
