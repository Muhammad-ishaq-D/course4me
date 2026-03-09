import {
  GraduationCap,
  BadgeCheck,
  Search,
  Zap
} from "lucide-react";

const StepsSection = () => {
  const steps = [
    {
      number: 1,
      title: "Get Qualified",
      description:
        "Complete your SIA training course at one of our approved centres",
      icon: GraduationCap,
      color: "bg-blue-600"
    },
    {
      number: 2,
      title: "Obtain License",
      description:
        "Apply for your SIA license with our expert guidance",
      icon: BadgeCheck,
      color: "bg-purple-600"
    },
    {
      number: 3,
      title: "Find Jobs",
      description:
        "Browse hundreds of security jobs from our partner companies",
      icon: Search,
      color: "bg-green-600"
    },
    {
      number: 4,
      title: "Start Working",
      description:
        "Begin your rewarding career in the security industry",
      icon: Zap,
      color: "bg-orange-500"
    }
  ];

  return (
    <section className="bg-[#f4f7fb] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2f3a47]">
            Start Your Career in 4 Simple Steps
          </h2>
          <p className="text-gray-500 mt-4">
            From training to employment in just a few weeks
          </p>
        </div>

        {/* Step Container */}
        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Horizontal Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-[2px] bg-gray-200" />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="relative bg-white rounded-[22px] p-8 text-center shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)] transition duration-300"
              >

                {/* Step Number Circle */}
                <div
                  className={`absolute top-6 left-1/2 -translate-x-1/2 w-14 h-14  rounded-full ${step.color} flex items-center justify-center text-white text-lg font-bold shadow-md`}
                >
                  {step.number}
                </div>

                {/* Icon Container */}
                <div className="mt-16 w-14 h-14 mx-auto rounded-xl bg-[#f1f3f6] flex items-center justify-center">
                  <Icon size={24} className="text-[#2f3a47]" />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-lg font-bold text-[#2f3a47]">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;