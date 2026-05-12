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
      title: "Get Qualified Fast",
      description:
        "Complete your SIA-approved training course at one of our 85+ centres — finish in days, not months",
      icon: GraduationCap,
      color: "from-blue-500 to-blue-600",
    },

    {
      number: "02",
      title: "Secure Your Licence",
      description:
        "We guide you through the SIA application step by step — no guesswork, no stress, just results",
      icon: BadgeCheck,
      color: "from-purple-500 to-purple-600",
    },

    {
      number: "03",
      title: "Browse Live Jobs",
      description:
        "Access hundreds of exclusive roles from our 500+ hiring partners — jobs you won't find anywhere else",
      icon: Search,
      color: "from-green-500 to-green-600",
    },

    {
      number: "04",
      title: "Start Earning",
      description:
        "Accept your offer, walk into your first shift, and begin building the career you deserve",
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
            Start Your Security Career
            <br />
            <span className="text-[#F8510C]">In 4 Simple Steps</span>
          </h2>

          <p className="mt-6 text-[#6B7280] text-lg leading-relaxed">
            From professional training to landing your first role — begin your
            career journey within weeks.
          </p>
        </div>

        {/* ===== STEPS ===== */}
        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-[70px] left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-gray-300 z-0" />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={index} className="group relative z-10">
                {/* Card */}
                <div className="relative bg-white border border-gray-200 rounded-[32px] p-8 text-center shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.10)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                  {/* Hover Glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#F8510C]/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500" />

                  {/* Step Number */}
                  <div className="absolute top-6 right-6 text-[42px] font-bold text-gray-200 leading-none">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div
                    className={`relative w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-[0_15px_35px_rgba(0,0,0,0.15)]`}
                  >
                    <Icon size={34} className="text-white" />
                  </div>

                  {/* Content */}
                  <div className="relative mt-8">
                    <h3 className="text-[24px] font-bold text-[#111111]">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-[#6B7280] leading-relaxed text-[15px]">
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
