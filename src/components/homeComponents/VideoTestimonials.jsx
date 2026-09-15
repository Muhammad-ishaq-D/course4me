import React, { useState, useRef } from "react";
import { Play, Pause, Star } from "lucide-react";
import { motion } from "framer-motion";

import jamesOkonkwo from "../../assets/home/SuccessStoriesVideos/Video1.mp4";
import sarahMitchell from "../../assets/home/SuccessStoriesVideos/Video2.mp4";
import Emma from "../../assets/home/emma.png";
import davidOsei from "../../assets/home/David Osei.png";

function VideoTestimonials() {
  const [playingIndex, setPlayingIndex] = useState(null);
  const videoRefs = useRef([]);

  const testimonials = [
    {
      role: "Door Supervisor",
      duration: "2:34",
      name: "Abdur Rehman",
      job: "Door Supervisor — London",
      quote:
        "I went from zero experience to earning £18/hour in just 3 months.",
      video: jamesOkonkwo,
    },
    {
      role: "CCTV Operator",
      duration: "3:12",
      name: "Musa",
      job: "CCTV Operator — Manchester",
      quote: "The CCTV course completely changed my career opportunities.",
      video: sarahMitchell,
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

  const handleTogglePlay = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (playingIndex === index) {
      video.pause();
      setPlayingIndex(null);
    } else {
      videoRefs.current.forEach((v, i) => {
        if (v && i !== index) v.pause();
      });
      video.play();
      setPlayingIndex(index);
    }
  };

  return (
    <section
      id="video-testimonials"
      className="relative overflow-hidden px-4 bg-[#0D0D0D] py-20 lg:py-24"
    >
      {/* BACKGROUND AMBIENT GLOW */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#FF5421]/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#00A3FF]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 bg-[#00A3FF]/10 border border-[#00A3FF]/20 text-[#00A3FF] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-5">
            <Play size={14} className="fill-[#00A3FF]" />
            Success Stories
          </div>

          {/* HEADING */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.08] tracking-tight">
            Real Learners. <br />
            <span className="text-[#FF5421]">Real Career Transformations.</span>
          </h2>

          {/* SUBTITLE */}
          <p className="mt-4 text-gray-400 text-base sm:text-lg leading-relaxed">
            Watch how our learners went from beginners to working professionals
            in the UK security industry.
          </p>
        </motion.div>

        {/* TESTIMONIAL CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-14 sm:mt-16 items-stretch">
          {testimonials.map((t, i) => {
            const isPlaying = playingIndex === i;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group h-full"
              >
                {/* CARD CONTAINER */}
                <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#171717] shadow-2xl h-full flex flex-col justify-between transition-all duration-300 group-hover:border-white/20">
                  {/* MEDIA & OVERLAY AREA */}
                  <div
                    className="relative overflow-hidden cursor-pointer bg-black h-[340px]"
                    onClick={() => t.video && handleTogglePlay(i)}
                  >
                    {t.video ? (
                      <video
                        ref={(el) => (videoRefs.current[i] = el)}
                        src={t.video}
                        className="w-full h-full object-cover object-top transition duration-700"
                        playsInline
                        preload="metadata"
                        onEnded={() => setPlayingIndex(null)}
                      />
                    ) : (
                      <img
                        src={t.img}
                        alt={t.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-700"
                      />
                    )}

                    {/* GRADIENT OVERLAY FOR TEXT LEGIBILITY */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20 transition-opacity duration-300 ${
                        isPlaying
                          ? "opacity-30 group-hover:opacity-75"
                          : "opacity-100"
                      }`}
                    />

                    {/* TOP BADGES */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                      <span className="bg-[#00A3FF] text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                        {t.role}
                      </span>
                      <span className="bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded-full border border-white/10">
                        {t.duration}
                      </span>
                    </div>

                    {/* PROMINENT PLAY / PAUSE BUTTON */}
                    <div
                      className={`absolute inset-0 flex items-center justify-center transition-all duration-300 z-10 ${
                        isPlaying
                          ? "opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100"
                          : "opacity-100"
                      }`}
                    >
                      <div className="relative flex items-center justify-center">
                        {/* OUTER GLOW RING */}
                        <div className="absolute -inset-2 rounded-full bg-[#FF5421]/30 blur-md group-hover:bg-[#FF5421]/60 transition-all duration-300" />

                        <div className="relative w-16 h-16 rounded-full bg-[#FF5421] text-white flex items-center justify-center shadow-[0_10px_25px_rgba(255,84,33,0.5)] group-hover:scale-110 transition duration-300">
                          {isPlaying ? (
                            <Pause size={22} fill="white" />
                          ) : (
                            <Play size={22} fill="white" className="ml-1" />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* OVERLAY LEARNER INFO */}
                    <div
                      className={`absolute bottom-4 left-4 right-4 z-10 transition-opacity duration-300 ${
                        isPlaying
                          ? "opacity-0 group-hover:opacity-100"
                          : "opacity-100"
                      }`}
                    >
                      <h4 className="text-lg font-bold text-white leading-tight">
                        {t.name}
                      </h4>
                      <p className="text-xs text-gray-300 font-medium mt-0.5">
                        {t.job}
                      </p>
                    </div>
                  </div>

                  {/* QUOTE SECTION */}
                  <div className="p-5 flex flex-col justify-between flex-1 bg-[#171717]">
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal italic">
                      "{t.quote}"
                    </p>

                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/5">
                      <span className="text-xs text-gray-500 font-medium">
                        Verified Learner
                      </span>
                      <div className="flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                        <Star
                          size={13}
                          className="fill-[#FF5421] text-[#FF5421]"
                        />
                        <span className="text-xs font-bold text-white">
                          4.9
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* HOVER ACCENT LINE */}
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#00A3FF] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default VideoTestimonials;
