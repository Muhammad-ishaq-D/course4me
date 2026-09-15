import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Award,
  Users,
  Target,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Award,
    title: "SIA Approved",
    description:
      "Officially accredited training centres recognised across the UK security industry.",
  },
  {
    icon: Users,
    title: "Expert Trainers",
    description:
      "Learn from experienced professionals with real-world security expertise.",
  },
  {
    icon: Target,
    title: "98% Pass Rate",
    description:
      "Industry-leading student success rate with full learning support included.",
  },
  {
    icon: CheckCircle,
    title: "Modern Facilities",
    description:
      "Professional training environments equipped with the latest technology.",
  },
];

const WhyChooseTrainingCentres = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-[#F9FAFB] py-20 lg:py-24 px-4">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#00A3FF]/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#FF5421]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* SMALL LABEL */}
          <div className="inline-flex items-center gap-2 bg-[#FF5421]/10 border border-[#FF5421]/20 text-[#FF5421] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-5">
            <Sparkles size={14} className="fill-[#FF5421]" />
            Why Choose Us
          </div>

          {/* HEADING */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] leading-[1.08] tracking-tight mb-4">
            Premium Training Centres Built for <br />
            <span className="text-[#FF5421]">Your Success</span>
          </h2>

          {/* DESCRIPTION */}
          <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
            We provide industry-leading security training with modern
            facilities, expert instructors, and career-focused learning designed
            to help you succeed faster.
          </p>
        </motion.div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 sm:mt-12 items-stretch">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border border-gray-200/80
                  bg-white
                  p-7
                  shadow-[0_10px_30px_rgba(0,0,0,0.03)]
                  hover:shadow-[0_20px_40px_rgba(0,163,255,0.08)]
                  hover:border-[#00A3FF]/30
                  transition-all duration-300
                  flex flex-col justify-between h-full
                "
              >
                <div>
                  {/* ICON */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00A3FF]/10 to-[#FF5421]/10 border border-[#00A3FF]/15 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105">
                    <Icon className="w-7 h-7 text-[#00A3FF]" />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-xl font-extrabold text-[#111111] mb-2.5 tracking-tight group-hover:text-[#00A3FF] transition-colors">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>

                {/* BOTTOM ACCENT LINE */}
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#00A3FF] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            );
          })}
        </div>

        {/* CTA BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 flex justify-center"
        >
          <button
            onClick={() => navigate("/courses")}
            className="
              group
              w-full sm:w-auto
              inline-flex
              items-center
              justify-center
              gap-3
              bg-[#FF5421]
              hover:bg-[#E04416]
              active:scale-95
              text-white
              px-9 py-4
              rounded-full
              font-extrabold
              text-base
              shadow-[0_12px_28px_rgba(255,84,33,0.25)]
              hover:shadow-[0_18px_36px_rgba(255,84,33,0.35)]
              transition-all duration-300
              cursor-pointer
            "
          >
            <span>Browse All Courses</span>
            <ArrowRight className="w-5 h-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1.5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseTrainingCentres;
