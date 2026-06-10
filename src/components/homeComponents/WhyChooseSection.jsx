import React from "react";
import { useNavigate } from "react-router-dom";
import { Award, Users, Target, CheckCircle, ArrowRight } from "lucide-react";
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
    title: "95% Pass Rate",
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
    <section className="relative overflow-hidden bg-[#F9FAFB] px-4 py-16 lg:py-20">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#00A3FF]/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#FF5421]/10 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* SMALL LABEL */}
          <div className="inline-flex items-center gap-2 bg-[#FF54210D] border border-[#FF54211A] text-[#FF5421] px-4 py-2 rounded-full text-sm font-bold tracking-wide mb-5">
            Why Choose Us
          </div>

          {/* HEADING */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] leading-tight tracking-tight">
            Premium Training Centres
            <br />
            Built for Your Success
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-5 text-base sm:text-lg text-gray-500 leading-relaxed">
            We provide industry-leading security training with modern
            facilities, expert instructors, and career-focused learning designed
            to help you succeed faster.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-14">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border border-white/30
                  bg-white/80
                  backdrop-blur-xl
                  p-7
                  shadow-[0_15px_50px_rgba(0,0,0,0.06)]
                  transition-all duration-300
                "
              >
                {/* CARD GLOW */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00A3FF]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500" />

                {/* ICON */}
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00A3FF]/10 to-[#FF5421]/10 border border-[#00A3FF1A] flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-[#00A3FF]" />
                </div>

                {/* TITLE */}
                <h3 className="text-2xl font-bold text-[#111111] mb-4 tracking-tight">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-500 text-base leading-relaxed font-medium">
                  {item.description}
                </p>

                {/* HOVER LINE */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#00A3FF] to-[#FF5421] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <button
            onClick={() => navigate("/courses")}
            className="
              group
              inline-flex
              items-center
              gap-3
              bg-[#FF5421]
              hover:bg-[#ee4613]
              text-white
              px-8
              py-4
              rounded-full
              font-bold
              shadow-[0_20px_40px_rgba(248,81,12,0.25)]
              transition-all duration-300
            "
          >
            Browse All Courses
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseTrainingCentres;
