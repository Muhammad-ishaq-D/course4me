import { licences } from "./licences";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Briefcase, Calendar, Camera, Clock, DollarSign, Info, RefreshCcw, Shield, Star, TrendingUp, UserCheck } from "lucide-react";

const courseTitleToId = (title) => {
  const t = title.toLowerCase();
  if (t.includes("door supervisor")) return "door-supervisor";
  if (t.includes("security guard")) return "security-guard";
  if (t.includes("cctv")) return "cctv-training";
  if (t.includes("first aid")) return "first-aid-at-work";
  return "door-supervisor";
};

const iconMap = {
  shield: Shield,
  camera: Camera,
  user: UserCheck,
  briefcase: Briefcase,
  refresh: RefreshCcw
};

const LicencesSection = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-[#f3f6f9] py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#2f3a47]">
            Available SIA Licences
          </h2>
          <p className="text-gray-500 mt-3">
            Choose the licence that's right for your career path
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {licences.map((item, index) => {
            const IconComponent = iconMap[item.icon];

            return (
              <div
                key={index}
                className="bg-white rounded-[28px] shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition duration-300 flex flex-col overflow-hidden"
              >
                {/* IMAGE */}
                <div className="relative">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[210px] object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {item.popular && (
                    <div className="absolute top-4 left-4 bg-[#F15A24]  text-[#1f2f3f] text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1">
                      <TrendingUp size={14} />
                      Most Popular
                    </div>
                  )}

                  {/* ✅ Correct Placement */}
                  {IconComponent && (
                    <div
                      className={`absolute top-4 right-4 w-11 h-11 rounded-2xl shadow-md flex items-center justify-center ${item.iconColor}`}
                    >
                      <IconComponent size={18} className="text-white" />
                    </div>
                  )}

                  <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1">
                    <DollarSign size={14} />
                    {item.salary}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6 flex flex-col flex-1">

                  <h3 className="text-[20px] font-bold text-[#2f3a47] leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    {item.subtitle}
                  </p>

                  <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex gap-4 mt-6">
                    <div className="flex-1 bg-[#f3f6f9] rounded-xl px-4 py-3">
                      <div className="text-[11px] text-gray-400 mb-1 flex items-center gap-1">
                        <Clock size={12} />
                        Duration
                      </div>
                      <div className="text-sm font-semibold text-[#2f3a47]">
                        {item.duration}
                      </div>
                    </div>

                    <div className="flex-1 bg-[#f3f6f9] rounded-xl px-4 py-3">
                      <div className="text-[11px] text-gray-400 mb-1 flex items-center gap-1">
                        <Calendar size={12} />
                        Valid For
                      </div>
                      <div className="text-sm font-semibold text-[#2f3a47]">
                        {item.valid}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mt-5 cursor-pointer hover:text-black transition">
                    <Info size={16} />
                    Show More Details
                  </div>

                  <div className="border-t mt-5 pt-5 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gray-400">From</div>
                      <div className="text-3xl font-bold text-[#2f3a47]">
                        {item.price}
                      </div>
                    </div>

                    <button
                      onClick={() => navigate(`/booking/course?courseid=${courseTitleToId(item.title)}`)}
                      className="bg-[#2f3a47] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-black transition flex items-center gap-2"
                    >
                      Book Now
                      <ArrowRight size={16} />
                    </button>
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

export default LicencesSection;