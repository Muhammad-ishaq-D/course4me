import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Users, ShieldCheck, MapPin, Clock3 } from "lucide-react";

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

const StatsBar = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    {
      icon: <Users className="w-7 h-7 text-[#00A3FF]" />,
      number: 450,
      suffix: "K+",
      label: "Professionals Trained",
      numberColor: "text-[#00A3FF]",
      bg: "bg-[#00A3FF0D]",
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-[#FF5421]" />,
      number: 95,
      suffix: "%",
      label: "First-Time Pass Rate",
      numberColor: "text-[#FF5421]",
      bg: "bg-[#FF54210D]",
    },
    {
      icon: <MapPin className="w-7 h-7 text-[#00A3FF]" />,
      number: 85,
      suffix: "+",
      label: "Training Locations",
      numberColor: "text-[#00A3FF]",
      bg: "bg-[#00A3FF0D]",
    },
    {
      icon: <Clock3 className="w-7 h-7 text-[#FF5421]" />,
      number: 3,
      suffix: " Weeks",
      label: "To Get Certified",
      numberColor: "text-[#FF5421]",
      bg: "bg-[#FF54210D]",
    },
  ];

  return (
    <section ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <div className="h-[2px] w-full bg-[#00A3FF]/15 mb-6" />
      <div className="relative overflow-hidden rounded-4xl bg-white border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
        {/* BACKGROUND BLUR */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-[#00A3FF]/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#FF5421]/10 blur-3xl rounded-full" />

        <div className="relative grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className={` relative flex flex-col items-center justify-center text-center px-6 py-10 sm:py-12 transition-all duration-300 hover:scale-[1.02]
              ${index !== stats.length - 1 ? "lg:border-r border-gray-100" : ""}
              ${index < 2 ? "border-b lg:border-b-0 border-gray-100" : ""}
              ${
                index === 0
                  ? "bg-[#00A3FF]/[0.03]"
                  : index === 1
                    ? "bg-[#FF5421]/[0.03]"
                    : index === 2
                      ? "bg-[#00A3FF]/[0.02]"
                      : "bg-[#FF5421]/[0.02]"
              }`}
            >
              {/* ICON */}
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-5 ${stat.bg}`}
              >
                {stat.icon}
              </div>

              {/* COUNTER */}
              <div
                className={`text-4xl sm:text-5xl font-extrabold tracking-tight mb-3 ${stat.numberColor}`}
              >
                {inView ? (
                  <Counter end={stat.number} suffix={stat.suffix} />
                ) : (
                  "0"
                )}
              </div>

              {/* LABEL */}
              <p className="text-gray-500 text-sm sm:text-base font-medium leading-relaxed max-w-[180px]">
                {stat.label}
              </p>

              {/* HOVER LINE */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#00A3FF] to-[#FF5421] scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-center rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
