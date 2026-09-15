import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, BadgeCheck, Search, Zap } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Choose Your Career",
    description:
      "Explore high-demand security career paths including Door Supervisor, CCTV Operator, Close Protection and more.",
    icon: Search,
    color: "from-blue-500 to-blue-600",
  },
  {
    number: "02",
    title: "Get Professional Training",
    description:
      "Complete industry-recognised training courses at trusted centres to gain the skills employers are looking for.",
    icon: GraduationCap,
    color: "from-purple-500 to-purple-600",
  },
  {
    number: "03",
    title: "Gain Your Licence",
    description:
      "Apply for your SIA or professional certification with complete guidance and support throughout the process.",
    icon: BadgeCheck,
    color: "from-emerald-500 to-emerald-600",
  },
  {
    number: "04",
    title: "Start Your Career",
    description:
      "Apply for jobs, attend interviews and begin building a successful long-term career in the security industry.",
    icon: Zap,
    color: "from-[#F8510C] to-orange-500",
  },
];

const StepsSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      {/* BACKGROUND ACCENTS */}
      <div className="absolute top-[-150px] right-[-120px] w-[350px] h-[350px] bg-[#F8510C]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-150px] left-[-120px] w-[350px] h-[350px] bg-blue-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#FFF4EE] border border-[#F8510C]/15 text-[#F8510C] text-xs font-extrabold px-4 py-2 rounded-full uppercase tracking-wider">
            <Zap size={14} className="fill-[#F8510C]" />
            Quick Career Journey
          </div>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-[#111111]">
            Start Your Career <br />
            <span className="text-[#F8510C]">In 4 Simple Steps</span>
          </h2>

          <p className="mt-4 text-[#6B7280] text-base sm:text-lg leading-relaxed font-medium">
            From discovering the right career path to getting qualified and
            hired — begin your professional journey with confidence.
          </p>
        </motion.div>

        {/* STEPS GRID */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {/* DESKTOP DASHED CONNECTOR LINE */}
          <div className="hidden lg:block absolute top-[68px] left-[12%] right-[12%] h-[2px] border-t-2 border-dashed border-gray-300 pointer-events-none z-0" />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group relative z-10 h-full"
              >
                {/* CARD CONTAINER */}
                <div className="relative bg-white border border-gray-200/80 rounded-[28px] p-7 text-center shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(248,81,12,0.1)] hover:border-[#F8510C]/30 transition-all duration-300 overflow-hidden h-full flex flex-col justify-between">
                  {/* HOVER GLOW EFFECT */}
                  <div className="absolute top-0 right-0 w-28 h-28 bg-[#F8510C]/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />

                  <div>
                    {/* TOP BAR: NUMBER & ICON */}
                    <div className="relative flex items-center justify-between mb-6">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-md shrink-0`}
                      >
                        <Icon size={26} className="text-white" />
                      </div>

                      <span className="text-3xl font-black text-gray-200 group-hover:text-[#F8510C]/20 transition-colors duration-300">
                        {step.number}
                      </span>
                    </div>

                    {/* TITLE & DESCRIPTION */}
                    <div className="text-left">
                      <h3 className="text-xl font-extrabold text-[#111111] leading-snug group-hover:text-[#F8510C] transition-colors duration-300">
                        {step.title}
                      </h3>

                      <p className="mt-2.5 text-gray-500 leading-relaxed text-sm font-medium">
                        {step.description}
                      </p>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
