import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Award,
  Briefcase,
  Building2,
  Check,
  Users,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Counter = ({ end, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const HiringTrainingSection = () => {
  const navigate = useNavigate();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const features = [
    "Direct referrals to 850+ hiring partners",
    "CV building & interview coaching",
    "95% of graduates hired within 2 weeks",
  ];

  const stats = [
    {
      icon: <Users className="w-6 h-6 text-[#00A3FF]" />,
      number: 850,
      suffix: "+",
      label: "Hiring Partners",
      numberColor: "text-[#00A3FF]",
      bg: "bg-[#00A3FF0D]",
    },
    {
      icon: <Award className="w-6 h-6 text-[#00A3FF]" />,
      number: 100,
      suffix: "%",
      label: "SIA Approved",
      numberColor: "text-[#00A3FF]",
      bg: "bg-[#00A3FF0D]",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-[#FF5421]" />,
      number: 95,
      suffix: "%",
      label: "Placement Rate",
      numberColor: "text-[#FF5421]",
      bg: "bg-[#FF54210D]",
    },
  ];

  return (
    <section ref={ref} className="relative py-14 overflow-hidden px-4 bg-white">
      {/* BACKGROUND BLUR */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#00A3FF]/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#FF5421]/10 blur-3xl rounded-full" />

      <div
        id="hiringTraining"
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 items-center">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* LABEL */}
            <div className="inline-flex items-center gap-2 bg-[#FF54210D] border border-[#FF54211A] text-[#FF5421] px-4 py-1.5 rounded-full text-xs font-bold tracking-wide mb-5">
              Career Support
            </div>

            {/* HEADING */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.05] tracking-tight text-[#111111]">
              We Don't Just
              <br />
              Train You.
              <br />
              <span className="text-[#00A3F4]">We Get You Hired.</span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-5 text-base text-gray-500 leading-relaxed max-w-xl">
              We help learners move directly from training into real security
              careers with hiring support, interview preparation, and job
              opportunities across the UK.
            </p>

            {/* FEATURES */}
            <div className="mt-7 space-y-4">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#00A3FF0D] flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-[#00A3FF]" strokeWidth={3} />
                  </div>

                  <p className="text-gray-700 text-base font-medium">{item}</p>
                </motion.div>
              ))}
            </div>

            {/* BUTTON */}
            <button
              onClick={() => navigate("/careers")}
              className="group mt-7 bg-[#FF5421] hover:bg-[#ca5633] transition-all duration-300 text-white px-7 py-3 rounded-full font-bold flex items-center gap-3 shadow-[0_15px_30px_rgba(248,81,12,0.2)]"
            >
              View Career Support
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* MAIN CARD */}
            <div className="relative overflow-hidden rounded-[30px] border border-white/30 bg-white/80 backdrop-blur-xl p-4 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
              {/* GLOW */}
              <div className="absolute top-0 right-0 w-52 h-52 bg-[#00A3FF]/10 blur-3xl rounded-full" />

              {/* ICON */}
              <div className="w-16 h-16 rounded-2xl bg-[#00A3FF0D] border border-[#00A3FF1A] flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-[#00A3FF]" />
              </div>

              {/* TITLE */}
              <h3 className="text-2xl font-black text-[#111111] leading-tight">
                Trusted by the UK's
                <br />
                Leading Security Companies
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-3 text-gray-500 text-base leading-relaxed">
                Our graduates work with top security firms, events, retail, and
                corporate organisations nationwide.
              </p>

              {/* BENEFITS */}
              <div className="mt-7 space-y-3">
                {[
                  "Lifetime Career Support",
                  "Interview Preparation",
                  "Exclusive Job Board Access",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-[#F9FAFB] border border-gray-100 rounded-xl px-4 py-3"
                  >
                    <div className="w-7 h-7 rounded-full bg-[#00A3FF0D] flex items-center justify-center">
                      <Check className="w-4 h-4 text-[#00A3FF]" />
                    </div>

                    <span className="font-semibold text-gray-700 text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* STATS CARDS */}
            <div className="lg:grid grid-cols-3 hidden gap-2 md:gap-4 mt-2">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden bg-white rounded-[22px] border border-gray-100 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)] text-center"
                >
                  {/* ICON */}
                  <div
                    className={`w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-4 ${stat.bg}`}
                  >
                    {stat.icon}
                  </div>

                  {/* COUNTER */}
                  <div
                    className={`text-3xl font-black tracking-tight mb-2 ${stat.numberColor}`}
                  >
                    {inView ? (
                      <Counter end={stat.number} suffix={stat.suffix} />
                    ) : (
                      "0"
                    )}
                  </div>

                  {/* LABEL */}
                  <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">
                    {stat.label}
                  </div>

                  {/* HOVER LINE */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#00A3FF] to-[#FF5421] scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-center rounded-full" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HiringTrainingSection;
