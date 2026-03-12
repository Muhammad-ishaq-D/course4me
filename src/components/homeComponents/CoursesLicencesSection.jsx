import React from "react";
import {
  Shield,
  Camera,
  Heart,
  Users,
  Briefcase,
  CheckSquare,
  ArrowRight,
  Lock
} from "lucide-react";

const ItemCard = ({ icon: Icon, title, description }) => (
  <div className="flex items-center justify-between bg-white hover:bg-gray-50 transition-all duration-300 rounded-[20px] px-6 py-5 border border-gray-100 shadow-sm hover:shadow-md cursor-pointer group">

    <div className="flex items-center gap-5">
      <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100">
        <Icon className="w-5 h-5 text-gray-400 group-hover:text-[#00A3FF] transition-colors" />
      </div>

      <div>
        <h4 className="font-bold text-[#1A1A1A] text-base group-hover:text-[#00A3FF] transition-colors">
          {title}
        </h4>
        {description && (
          <p className="text-[13px] text-gray-500 mt-0.5 font-medium">
            {description}
          </p>
        )}
      </div>
    </div>

    <ArrowRight className="w-4 h-4 text-gray-200 group-hover:text-[#00A3FF] group-hover:translate-x-1 transition-all" />
  </div>
);

const CoursesLicencesSection = () => {
  return (
    <section className="bg-white py-24 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* CATEGORIES SECTION */}
        <div className="mb-16">
          <h2 className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase mb-6">Categories</h2>
          <div className="flex flex-wrap items-center gap-3">
            <button className="px-7 py-3 bg-[#00A3FF] text-white font-bold rounded-full shadow-lg shadow-[#00A3FF]/20 hover:opacity-90 transition-all text-sm">
              ALL Courses
            </button>
            <button className="px-7 py-3 bg-[#F8F9FA] text-gray-500 font-bold rounded-full border border-gray-100 hover:bg-gray-100 transition-all text-sm">
              Security
            </button>
            <button className="px-7 py-3 bg-[#F8F9FA] text-gray-500 font-bold rounded-full border border-gray-100 hover:bg-gray-100 transition-all text-sm">
              First Aid
            </button>
            <button className="px-7 py-3 bg-[#F8F9FA] text-gray-500 font-bold rounded-full border border-gray-100 hover:bg-gray-100 transition-all text-sm">
              Alcohol
            </button>
            <button className="px-7 py-3 bg-[#F8F9FA] text-gray-500 font-bold rounded-full border border-gray-100 hover:bg-gray-100 transition-all text-sm">
              Construction
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* LEFT COLUMN */}
          <div>
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-2xl font-bold text-[#1A1A1A] tracking-tight">
                POPULAR COURSES
              </h3>
              <a
                href="#"
                className="text-[#00A3FF] font-bold text-[16px] tracking-widest uppercase flex items-center gap-2 hover:gap-3 transition-all"
              >
                ALL COURSES <ArrowRight className="w-4.5 h-4.5" />
              </a>
            </div>

            <div className="space-y-4">
              <ItemCard
                icon={Shield}
                title="Door Supervisor Training"
              />
              <ItemCard
                icon={Camera}
                title="CCTV Training"
              />
              <ItemCard
                icon={Shield}
                title="Door Supervisor Refresher Course"
              />
              <ItemCard
                icon={Heart}
                title="First Aid at Work (FAW) - Level 3"
              />
              <ItemCard
                icon={Users}
                title="Security Guard Training"
              />
              {/* Extra empty slots as seen in img */}
              <div className="h-[74px] border border-gray-50 rounded-[20px]"></div>
              <div className="h-[74px] border border-gray-50 rounded-[20px]"></div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-2xl font-bold text-[#1A1A1A] tracking-tight">
                POPULAR LICENCES
              </h3>
              <a
                href="#"
                className="text-[#00A3FF] font-bold text-[16px] tracking-widest uppercase flex items-center gap-2 hover:gap-3 transition-all"
              >
                ALL LICENCES <ArrowRight className="w-5.5 h-4.5" />
              </a>
            </div>

            <div className="space-y-4 flex-1">
              <ItemCard
                icon={CheckSquare}
                title="SIA Top-Up Refresher Training for Door Supervisor"
              />
              <ItemCard
                icon={CheckSquare}
                title="SIA Top-Up Refresher Training for Security Guard"
              />
              <ItemCard
                icon={CheckSquare}
                title="SIA Top-Up Refresher Training for Close Protection"
              />

              <div className="pt-6 space-y-4">
                <a
                  href="#"
                  className="text-[#00A3FF] font-bold text-[13px] tracking-widest uppercase flex items-center gap-2 hover:gap-3 transition-all"
                >
                  ALL LOCATIONS <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="text-[#00A3FF] font-bold text-[13px] tracking-widest uppercase flex items-center gap-2 hover:gap-3 transition-all"
                >
                  ALL CAREERS <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* SIA Licence Required Card */}
            <div className="mb-28 mt-8 sm:mt-6 lg:mt-0 bg-[#1A1A1A] rounded-[24px] p-8 relative overflow-hidden shadow-2xl">
              <div className="flex items-start gap-6 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#00A3FF]/10 flex items-center justify-center flex-shrink-0 border border-[#00A3FF]/20">
                  <Shield className="w-6 h-6 text-[#00A3FF]" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-2 tracking-tight">SIA Licence Required</h4>
                  <p className="text-gray-400 text-sm leading-relaxed font-medium">
                    Mandatory requirement to work in security roles. An SIA licence is legally required to work in the private security industry in the UK.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CoursesLicencesSection;