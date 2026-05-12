import {
  DollarSign,
  Clock,
  GraduationCap,
  TrendingUp,
  Heart,
  Award,
  ShieldCheck,
} from "lucide-react";

const WhyWorkSection = () => {
  const features = [
    {
      icon: DollarSign,
      title: "Salaries That Grow With You",
      description:
        "Start strong, earn more as you advance — with regular pay reviews built into every role",
      iconBg: "bg-[#00C950]",
      iconBox: "bg-[#ECFDF3]",
    },

    {
      icon: Clock,
      title: "Work Around Your Life",
      description:
        "Days, nights, weekends — you choose the shifts that suit you, not the other way around",
      iconBg: "bg-[#2563EB]",
      iconBox: "bg-[#EEF4FF]",
    },

    {
      icon: GraduationCap,
      title: "Free Career Training",
      description:
        "Upskill for free with continuous professional development — we invest in you at every stage",
      iconBg: "bg-[#A020F0]",
      iconBox: "bg-[#F6EDFF]",
    },

    {
      icon: TrendingUp,
      title: "Fast-Track Progression",
      description:
        "Officer today, supervisor tomorrow, manager next year — every rung of the ladder is reachable",
      iconBg: "bg-[#FF7A00]",
      iconBox: "bg-[#FFF4E8]",
    },

    {
      icon: Heart,
      title: "Your Wellbeing Matters",
      description:
        "Medical cover, wellness support, and mental health resources — because a great employer cares",
      iconBg: "bg-[#EC008C]",
      iconBox: "bg-[#FFEAF5]",
    },

    {
      icon: Award,
      title: "Recognised & Rewarded",
      description:
        "Monthly awards, performance bonuses, and a culture that celebrates people who go the extra mile",
      iconBg: "bg-[#4F46E5]",
      iconBox: "bg-[#EEF2FF]",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-24 px-4 sm:px-6 lg:px-8">
      {/* Background Glow */}
      <div className="absolute top-[-150px] right-[-100px] w-[320px] h-[320px] bg-[#F8510C]/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-[-150px] left-[-100px] w-[320px] h-[320px] bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto">
        {/* ===== HEADING ===== */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#FFF4EE] border border-[#F8510C]/10 text-[#F8510C] text-sm font-semibold px-5 py-2 rounded-full">
            <ShieldCheck size={15} />
            Security Career Benefits
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-[#111111]">
            More Than a Job —
            <br />
            <span className="text-[#F8510C]">A Career Worth Having</span>
          </h2>

          <p className="mt-6 text-[#6B7280] text-lg leading-relaxed max-w-2xl mx-auto">
            Security is one of the UK’s fastest-growing industries. Stability,
            great pay, and a genuine sense of purpose — every single day.
          </p>
        </div>

        {/* ===== FEATURE CARDS ===== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[30px] border border-gray-200 bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.10)] hover:-translate-y-2 transition-all duration-500"
              >
                {/* Hover Glow */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#F8510C]/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* Top Section */}
                <div className="relative flex items-start justify-between">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl ${item.iconBox} flex items-center justify-center`}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center shadow-lg`}
                    >
                      <Icon size={24} className="text-white" />
                    </div>
                  </div>

                  {/* Number */}
                  <span className="text-[42px] font-bold text-gray-200 leading-none">
                    0{index + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="relative mt-3">
                  <h3 className="text-[24px] font-bold text-[#111111] leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[#6B7280] leading-relaxed text-[15px]">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Line */}
                <div className="mt-7 h-[4px] w-16 rounded-full bg-[#F8510C] group-hover:w-28 transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkSection;
