import React from "react";
import {
  ArrowLeft,
  Star,
  Award,
  MapPin,
  Users,
  ShieldCheck,
  GraduationCap,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const TrainerProfile = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const trainer = location.state?.trainer;

  if (!trainer) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 text-xl font-bold">
        Trainer not found
      </div>
    );
  }

  return (
    <section className="bg-[#F8F8F8] min-h-screen">
      {/* HERO SECTION */}
      <div className="relative overflow-hidden bg-[#0B0B0B]">
        {/* BACKGROUND EFFECTS */}
        <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-[#F15A24]/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#F15A24]/5 blur-3xl rounded-full" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-14">
          {/* BACK BUTTON */}
          <button
            onClick={() => navigate(-1)}
            className=" group inline-flex items-center gap-2  text-white cursor-pointer transition-all duration-300 mb-8"
          >
            <div className="w-9 h-9 rounded-full border border-white/10 bg-[#F15A24]  flex items-center justify-center">
              <ArrowLeft size={16} />
            </div>

            <span className="font-medium hover:text-[#F15A24] text-sm">
              Back to Trainers
            </span>
          </button>

          {/* HERO CONTENT */}
          <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-10 items-center">
            {/* LEFT IMAGE */}
            <div className="relative">
              {/* IMAGE */}
              <div className="relative overflow-hidden rounded-[30px] h-[480px] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              </div>

              {/* BADGE */}
              <div className="absolute top-5 left-5">
                <div className="flex items-center gap-2 bg-[#F15A24] text-white px-4 py-2 rounded-full text-xs font-bold shadow-xl">
                  <ShieldCheck size={14} />
                  {trainer.badge}
                </div>
              </div>

              {/* FLOATING CARD */}
              <div className="absolute -bottom-5 left-6 right-6 bg-white/10 backdrop-blur-xl border border-white/10 rounded-[24px] p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-[10px] uppercase tracking-[2px] font-bold">
                      Experience
                    </p>

                    <h3 className="text-white text-2xl font-black mt-1">
                      {trainer.experience}
                    </h3>
                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-[#F15A24] flex items-center justify-center">
                    <Award className="text-white" size={24} />
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="text-white pt-8 lg:pt-0">
              {/* LABEL */}
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-[#F15A24] font-bold text-xs mb-5">
                <div className="w-2 h-2 rounded-full bg-[#F15A24]" />
                Elite Security Trainer
              </div>
              {/* NAME */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1] tracking-tight">
                {trainer.name}
              </h1>
              {/* TITLE */}
              <h2 className="text-[#F15A24] text-xl sm:text-2xl font-bold mt-4">
                {trainer.title}
              </h2>
              {/* DESCRIPTION */}
              <p className="text-gray-400 text-base leading-[1.8] mt-6 max-w-2xl">
                Certified trainer focused on practical learning experiences,
                real-world skills, and helping professionals build successful
                careers in the security industry.
              </p>
              {/* STATS */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  {
                    icon: <Star size={20} />,
                    value: `${trainer.rating}/5`,
                    label: `${trainer.reviews} Reviews`,
                  },
                  {
                    icon: <Users size={20} />,
                    value: "4500+",
                    label: "Professionals Trained",
                  },
                  {
                    icon: <MapPin size={20} />,
                    value: trainer.locations.length,
                    label: "Locations",
                  },
                  {
                    icon: <Award size={20} />,
                    value: "95%",
                    label: "Success Rate",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className=" rounded-[24px] border  border-white/10  bg-white/5 backdrop-blur-md p-5  hover:border-[#F15A24]/30 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#F15A24]/15 text-[#F15A24] flex items-center justify-center">
                        {item.icon}
                      </div>

                      <div>
                        <h3 className="text-2xl font-black text-white">
                          {item.value}
                        </h3>

                        <p className="text-gray-400 text-xs mt-1">
                          {item.label}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* FEATURE BAR */}
              <div className="relative hidden md:block mt-6">
                {/* GLOW */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#F15A24]/10 via-transparent to-[#F15A24]/10 blur-3xl rounded-[40px]" />

                <div className=" relative overflow-hidden rounded-2xl border border-gray-100  bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                  {/* GRID */}
                  <div className="grid grid-cols-2 md:grid-cols-3">
                    {[
                      {
                        icon: (
                          <BadgeCheck className="text-[#F15A24]" size={24} />
                        ),
                        title: "SIA Certified",
                        desc: "Fully Accredited",
                      },
                      {
                        icon: (
                          <GraduationCap className="text-[#F15A24]" size={24} />
                        ),
                        title: "Expert Trainer",
                        desc: "Industry Professional",
                      },
                      {
                        icon: <Users className="text-[#F15A24]" size={24} />,
                        title: "Practical Training",
                        desc: "Real World Scenarios",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className={` relative flex items-center gap-4 px-4 py-4 transition-all duration-300 hover:bg-[#FFF8F5] ${index !== 3 ? "lg:border-r border-gray-100" : ""} ${index < 2 ? "border-b lg:border-b-0 border-gray-100" : ""}`}
                      >
                        {/* ICON */}
                        <div
                          className=" w-14 h-14 rounded-2xl bg-[#FFF4EF] flex items-center justify-center flex-shrink-0
            "
                        >
                          {item.icon}
                        </div>

                        {/* CONTENT */}
                        <div>
                          <h4 className="text-[#111111] font-black text-[17px] leading-tight">
                            {item.title}
                          </h4>

                          <p className="text-gray-500 text-sm mt-1 font-medium">
                            {item.desc}
                          </p>
                        </div>

                        {/* HOVER LINE */}
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#F15A24] to-[#ff7a4d] scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-center" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainerProfile;
