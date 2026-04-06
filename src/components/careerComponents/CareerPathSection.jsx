import {
  Shield,
  Users,
  ArrowRight,
  CheckCircle,
  TrendingUp
} from "lucide-react";

const CareerPathSection = () => {
  const data = [
    {
      title: "Security Guard",
      salary: "£20,000 - £28,000",
      description:
        "Protect premises, assets, and people as a licensed security professional",
      progression:
        "Senior Security Officer → Security Supervisor → Security Manager",
      badge: "High Demand",
      badgeColor: "bg-[#F8510C]",
      icon: Shield,
      jobs: 5,
      image:
        "/src/assets/careers/Security Guard Licence.png"
    },
    {
      title: "Door Supervisor",
      salary: "£22,000 - £32,000",
      description:
        "Control entry to licensed venues, manage crowds, and ensure patron safety",
      progression:
        "Senior Door Supervisor → Head Doorman → Venue Security Manager",
      badge: "Very High Demand",
      badgeColor: "bg-red-500",
      icon: Users,
      jobs: 3,
      image:
        "/src/assets/careers/Door Supervisor Licence.png"
    }
  ];

  return (
    <section className="bg-[#f4f7fb] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Top Badge */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#F8510C1A] text-[#F8510C] text-sm font-medium px-5 py-2 rounded-full">
            <TrendingUp size={14} />
            Explore Career Paths
          </div>

          <h2 className="mt-6 text-4xl font-bold text-black">
            Choose Your Security Career Path
          </h2>

          <p className="mt-4 text-[#4A5565] max-w-2xl mx-auto">
            From entry-level positions to specialized roles, discover the
            perfect career path for your skills and ambitions
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {data.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="bg-white rounded-[28px] shadow-2xl border border-[#F8510C] overflow-hidden"
              >
                {/* Image Section */}
                <div className="relative h-[230px]">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/70" />

                  {/* Top Left Jobs Badge */}
                  <div className="absolute top-4 left-4 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {item.jobs} Jobs Available
                  </div>

                  {/* Top Right Badge */}
                  <div className={`absolute top-4 right-4 text-white text-xs font-semibold px-3 py-1 rounded-full ${item.badgeColor}`}>
                    {item.badge}
                  </div>

                  {/* Icon */}
                  <div className="absolute top-16 left-6 bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center">
                    <Icon size={20} className="text-white" />
                  </div>

                  {/* Title + Salary */}
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold">
                      {item.title}
                    </h3>
                    <div className="text-[#F8510C] font-semibold mt-1">
                      £ {item.salary}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 bg-[#F9FAFB]">

                  <p className="text-gray-600">
                    {item.description}
                  </p>

                  {/* Career Progression */}
                  <div className="mt-6 bg-[#EEF2F6] rounded-xl p-5 relative">
                    <div className="text-sm font-semibold text-gray-500 mb-2">
                      Career Progression
                    </div>
                    <div className="text-sm text-gray-700">
                      {item.progression}
                    </div>

                    <CheckCircle
                      size={18}
                      className="absolute top-5 right-5 text-[#00A63E]"
                    />
                  </div>

                  {/* View Requirements */}
                  <div className="mt-6 flex items-center justify-between text-sm font-medium text-[#2f3a47] cursor-pointer">
                    View Requirements & Responsibilities
                    <ArrowRight size={16} />
                  </div>

                  {/* CTA */}
                  <button className="mt-6 w-full bg-[#1E1E1E] text-white py-4 rounded-full font-medium flex items-center justify-center gap-2">
                    View {item.title} Jobs ({item.jobs})
                    <ArrowRight size={18} />
                  </button>

                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default CareerPathSection;