import React from "react";
import {
  Shield,
  Camera,
  Users,
  Briefcase,
  ArrowRight
} from "lucide-react";

const RoleCard = ({ icon: Icon, title, rate, training }) => (
  <div className="
    bg-gradient-to-br 
    from-[#2b3e52] 
    via-[#243447] 
    to-[#1c2a38]
    rounded-[32px]
    p-10
    text-white
    shadow-[0_30px_60px_rgba(0,0,0,0.25)]
    min-h-[420px]
    flex flex-col justify-between
    transition-all duration-300
    hover:-translate-y-2
    hover:shadow-[0_40px_80px_rgba(0,0,0,0.35)]
  ">

    {/* Top */}
    <div>
      <div className="w-16 h-16 bg-[#B9FF5A] rounded-2xl flex items-center justify-center mb-8">
        <Icon className="w-8 h-8 text-[#1c2a38]" />
      </div>

      <h3 className="text-[22px] font-semibold mb-8 tracking-tight">
        {title}
      </h3>

      <p className="text-gray-400 text-sm mb-2">
        Earn up to:
      </p>

      <div className="text-[#B9FF5A] text-5xl font-bold tracking-tight leading-none">
        {rate}
      </div>

      <p className="text-gray-400 text-sm mt-2 mb-8">
        per hour
      </p>

      <div className="border-t border-white/10 pt-6">
        <p className="text-gray-400 text-sm">
          Training required:
        </p>
        <p className="text-white font-medium mt-2">
          {training}
        </p>
      </div>
    </div>

    {/* Bottom */}
    <a
      href="#"
      className="mt-10 text-[#B9FF5A] font-semibold flex items-center gap-2 group"
    >
      View Role
      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
    </a>

  </div>
);

const CareerEarningSection = () => {
  return (
    <section className="bg-[#f3f4f6] py-28 font-sans">
      <div className="max-w-[1400px] mx-auto px-8">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-[44px] md:text-[52px] font-bold text-[#2f3a47] mb-6 tracking-tight">
            Your Security Career & Earning Potential
          </h2>
          <p className="text-lg text-gray-600">
            Explore the different security roles and see how much you can earn
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          <RoleCard
            icon={Shield}
            title="Door Supervisor"
            rate="£13–£25"
            training="Door Supervisor Training"
          />

          <RoleCard
            icon={Camera}
            title="CCTV Operator"
            rate="£12–£18"
            training="CCTV Operator Training"
          />

          <RoleCard
            icon={Users}
            title="Security Guard"
            rate="£11–£16"
            training="Security Guard Training"
          />

          <RoleCard
            icon={Briefcase}
            title="Close Protection"
            rate="£20–£50"
            training="Close Protection Course"
          />

        </div>
      </div>
    </section>
  );
};

export default CareerEarningSection;