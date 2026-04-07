import {
  DollarSign,
  Clock,
  GraduationCap,
  TrendingUp,
  Heart,
  Award
} from "lucide-react";

const WhyWorkSection = () => {
  const features = [
    {
      icon: DollarSign,
      title: "Competitive Pay",
      description:
        "Above industry average salaries with regular pay reviews",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description:
        "Choose shifts that fit your lifestyle and commitments",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: GraduationCap,
      title: "Free Training",
      description:
        "Access to continuous professional development courses",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description:
        "Clear progression paths to senior and management roles",
      gradient: "from-orange-400 to-orange-600"
    },
    {
      icon: Heart,
      title: "Health Benefits",
      description:
        "Medical insurance and wellness programs available",
      gradient: "from-pink-500 to-pink-600"
    },
    {
      icon: Award,
      title: "Recognition",
      description:
        "Employee of the month awards and performance bonuses",
      gradient: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section className="bg-[#f4f7fb] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E]">
            Why Work in Security?
          </h2>
          <p className="text-[#4A5565] mt-4 max-w-2xl mx-auto">
            The security industry offers excellent benefits and opportunities
            for career advancement
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-[24px] p-8 shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition duration-300"
              >

                {/* Icon Box */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-md`}
                >
                  <Icon size={28} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-bold text-[#1E1E1E]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-[#4A5565] leading-relaxed">
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default WhyWorkSection;