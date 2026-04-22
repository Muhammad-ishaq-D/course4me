import React from "react";
import {
  Shield,
  Camera,
  Users,
  Briefcase,
  ArrowRight,
  GraduationCap,
  Clock
} from "lucide-react";

const RoleCard = ({ icon: Icon, title, description, rate, training, shift }) => (
  <div className="
    bg-white
    rounded-[32px]
    p-8
    text-[#1A1A1A]
    shadow-[0_20px_40px_rgba(0,0,0,0.03)]
    border border-gray-100
    flex flex-col
    transition-all duration-500
    hover:-translate-y-2
    hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)]
    cursor-default
    group
  ">

    {/* Header & Icon */}
    <div className="mb-8">
      <div className="w-12 h-12 bg-[#00A3FF0A] border border-[#00A3FF1A] rounded-xl flex items-center justify-center mb-6">
        <Icon className="w-6 h-6 text-[#00A3FF]" />
      </div>

      <h3 className="text-xl font-bold mb-4 tracking-tight text-[#1A1A1A]">
        {title}
      </h3>

      <p className="text-gray-500 text-sm font-medium leading-relaxed min-h-[60px]">
        {description}
      </p>
    </div>

    {/* Wage Display */}
    <div className="mb-8">
      <p className="text-gray-400 text-[11px] font-bold uppercase tracking-wider mb-2">
        Average Salary:
      </p>
      <div className="text-[#FF5421] text-4xl font-bold tracking-tight leading-none mb-1">
        {rate}
      </div>
      <p className="text-gray-400 text-[11px] font-bold">
        per month
      </p>
    </div>

    <div className="border-t border-gray-50 pt-6 mt-auto">
      <div className="space-y-3 mb-8">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-4 h-4 text-[#00A3FF]" />
          <span className="text-gray-500 text-xs font-medium leading-tight">{training}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-[#00A3FF]" />
          <span className="text-gray-500 text-xs font-medium leading-tight">{shift}</span>
        </div>
      </div>

      <a
        href="#"
        className="text-[#00A3FF] font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all"
      >
        View Role
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>

  </div>
);

const CareerEarningSection = () => {
  return (
    <section className="bg-white py-24 font-sans">
      <div className="max-w-[1240px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-[#FF5421] text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Career Paths
          </div>
          <h2 className="text-[44px] sm:text-[52px] font-bold text-[#1A1A1A] mb-6 tracking-tight leading-none">
            Choose Your Path. <span className="text-[#FF5421]">Start Earning Today.</span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            Explore the different security roles available and their earning potential.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <RoleCard
            icon={Shield}
            title="Door Supervisor"
            description="Work at pubs, clubs, events, shops, and offices. Best choice for flexible, higher-paying jobs."
            rate="£2.5k"
            training="Door Supervisor Training"
            shift="20 to 48 hours a week (usually includes weekends)"
          />

          <RoleCard
            icon={Users}
            title="Security Guard"
            description="Ideal for static guarding at offices, shops, and warehouses. No door work or nightlife covered."
            rate="£2.1k"
            training="Security Guard Training"
            shift="Flexible shifts available"
          />

          <RoleCard
            icon={Camera}
            title="CCTV Operator"
            description="Monitor shops, offices, warehouses from control rooms. Ideal for those preferring indoor desk-based roles."
            rate="£2.2k"
            training="CCTV Training"
            shift="24/7 shift patterns available"
          />

          <RoleCard
            icon={Briefcase}
            title="Close Protection"
            description="Get licensed to work as a Bodyguard for VIPs, celebrities, and high-profile clients. Exclusive, high-paying security work."
            rate="£3.5k"
            training="Close Protection Training"
            shift="Variable - project based"
          />

        </div>
      </div>
    </section>
  );
};

export default CareerEarningSection;