import React from "react";
import {
  Shield,
  Camera,
  Heart,
  Users,
  Briefcase,
  CheckSquare,
  ArrowRight
} from "lucide-react";

const ItemCard = ({ icon: Icon, title, description }) => (
  <div className="flex items-center justify-between bg-[#f1f2f4] hover:bg-[#e9eaec] transition rounded-2xl px-6 py-6 border border-[#e4e6ea]">
    
    <div className="flex items-center gap-5">
      <div className="w-12 h-12 rounded-full bg-[#e6e8ec] flex items-center justify-center">
        <Icon className="w-6 h-6 text-[#2f3a47]" />
      </div>

      <div>
        <h4 className="font-semibold text-[#2f3a47] text-lg">
          {title}
        </h4>
        {description && (
          <p className="text-sm text-[#6b7280] mt-1">
            {description}
          </p>
        )}
      </div>
    </div>

    <ArrowRight className="w-5 h-5 text-[#9ca3af]" />
  </div>
);

const CoursesLicencesSection = () => {
  return (
    <section className="bg-[#f6f7f9] py-24 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT COLUMN */}
          <div>
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-2xl font-bold text-[#2f3a47]">
                POPULAR COURSES
              </h3>
              <a
                href="#"
                className="text-[#8BE34A] font-semibold flex items-center gap-2"
              >
                ALL COURSES <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="space-y-6">
              <ItemCard
                icon={Shield}
                title="Door Supervisor Training"
                description="Essential training for nightclub and venue security"
              />
              <ItemCard
                icon={Camera}
                title="CCTV Operator Training"
                description="Learn professional surveillance techniques"
              />
              <ItemCard
                icon={Heart}
                title="First Aid at Work"
                description="Comprehensive emergency response training"
              />
              <ItemCard
                icon={Users}
                title="Security Guard Training"
                description="Foundation course for security professionals"
              />
              <ItemCard
                icon={Briefcase}
                title="Close Protection"
                description="Elite bodyguard and protection training"
              />
              <ItemCard
                icon={CheckSquare}
                title="Conflict Management"
                description="De-escalation and conflict resolution"
              />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div>
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-2xl font-bold text-[#2f3a47]">
                POPULAR LICENCES
              </h3>
              <a
                href="#"
                className="text-[#8BE34A] font-semibold flex items-center gap-2"
              >
                ALL LICENCES <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="space-y-6">
              <ItemCard
                icon={CheckSquare}
                title="SIA Top-Up Training"
                description="Renew your existing SIA licence"
              />
              <ItemCard
                icon={Shield}
                title="Door Supervisor Licence"
                description="Full SIA Door Supervisor certification"
              />
              <ItemCard
                icon={Camera}
                title="CCTV Licence"
                description="Public space surveillance licence"
              />
              <ItemCard
                icon={Users}
                title="Security Guard Licence"
                description="Standard security guard certification"
              />
              <ItemCard
                icon={Briefcase}
                title="Close Protection Licence"
                description="Professional bodyguard licence"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CoursesLicencesSection;