import {
  GraduationCap,
  BadgeCheck,
  Search,
  Zap,
  ArrowRight,
} from "lucide-react";

const StepsSection = () => {
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
      color: "from-green-500 to-green-600",
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

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-24 px-4 sm:px-6 lg:px-8">
      {/* Background Glow */}
      <div className="absolute top-[-150px] right-[-120px] w-[300px] h-[300px] bg-[#F8510C]/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-[-150px] left-[-120px] w-[300px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto">
        {/* ===== HEADING ===== */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#FFF4EE] border border-[#F8510C]/10 text-[#F8510C] text-sm font-semibold px-5 py-2 rounded-full">
            <Zap size={15} />
            Quick Career Journey
          </div>
          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight text-[#111111]">
            Start Your Career
            <br />
            <span className="text-[#F8510C]">In 4 Simple Steps</span>
          </h2>

          <p className="mt-6 text-[#6B7280] text-base md:text-lg leading-relaxed">
            From discovering the right career path to getting qualified and
            hired — begin your professional journey with confidence.
          </p>
        </div>

        {/* ===== STEPS ===== */}
        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-[70px] left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-gray-300 z-0" />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={index} className="group relative z-10">
                {/* Card */}
                <div className="relative bg-white border border-gray-200 rounded-[28px] p-6 text-center shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 overflow-hidden h-full">
                  {/* Hover Glow */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#F8510C]/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500" />

                  {/* Step Number */}
                  <div className="absolute top-5 right-5 text-[30px] font-black text-gray-100 leading-none">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div
                    className={`relative w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-[0_12px_28px_rgba(0,0,0,0.12)]`}
                  >
                    <Icon size={28} className="text-white" />
                  </div>

                  {/* Content */}
                  <div className="relative mt-5">
                    <h3 className="text-2xl font-bold text-[#111111] leading-tight">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-[#6B7280] leading-relaxed text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
