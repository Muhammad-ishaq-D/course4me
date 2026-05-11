import { licences } from "./licences";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Briefcase,
  Calendar,
  Camera,
  Clock,
  DollarSign,
  Info,
  RefreshCcw,
  Shield,
  Star,
  TrendingUp,
  UserCheck,
  ChevronDown,
} from "lucide-react";

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
  refresh: RefreshCcw,
};

const LicencesSection = () => {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f4f7fb] to-[#eef3f8] py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-10">
      {/* Background Glow */}
      <div className="absolute top-[-120px] right-[-100px] w-[350px] h-[350px] bg-[#F15A24] opacity-10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F15A2410] border border-[#F15A24]/20 text-[#F15A24] text-sm font-semibold mb-5">
            <span className="w-2 h-2 rounded-full bg-[#F15A24]" />
            Security Training Courses
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#243443] leading-tight tracking-tight">
            Available SIA Licences
          </h2>

          {/* Description */}
          <p className="text-gray-500 mt-6 text-base sm:text-lg leading-relaxed">
            Choose the perfect SIA licence to start or advance your professional
            security career across the UK.
          </p>
        </div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {licences.map((item, index) => {
            const IconComponent = iconMap[item.icon];

            return (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-xl border border-white rounded-[34px] overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_80px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2"
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F15A24]/0 via-transparent to-[#F15A24]/5 opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* ================= IMAGE ================= */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[240px] object-cover group-hover:scale-110 transition duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101820]/90 via-[#101820]/20 to-transparent" />

                  {/* Popular Badge */}
                  {item.popular && (
                    <div className="absolute top-5 left-5 bg-[#F15A24] text-white text-xs font-bold px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                      <TrendingUp size={14} />
                      Most Popular
                    </div>
                  )}

                  {/* Icon */}
                  {IconComponent && (
                    <div
                      className={`absolute top-5 right-5 w-14 h-14 rounded-2xl shadow-xl flex items-center justify-center backdrop-blur-md border border-white/20 ${item.iconColor}`}
                    >
                      <IconComponent size={24} className="text-white" />
                    </div>
                  )}

                  {/* Salary */}
                  <div className="absolute bottom-5 left-5 bg-black/60 backdrop-blur-md border border-white/10 text-white text-sm px-4 py-2 rounded-full flex items-center gap-2">
                    <DollarSign size={15} />
                    {item.salary}
                  </div>
                </div>

                {/* ================= CONTENT ================= */}
                <div className="relative p-6 flex flex-col flex-1">
                  {/* Title */}
                  <div>
                    <h3 className="text-[23px] font-bold text-[#243443] leading-snug group-hover:text-[#F15A24] transition duration-300">
                      {item.title}
                    </h3>

                    <p className="text-sm text-[#F15A24] font-medium mt-1">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-500 mt-2 leading-relaxed text-[14px]">
                    {item.description}
                  </p>

                  {/* Info Cards */}
                  <div className="grid grid-cols-2 gap-3 mt-2">
                    {/* Duration */}
                    <div className="bg-[#f7f9fc] border border-[#edf1f5] rounded-2xl p-4 hover:border-[#F15A24]/20 transition">
                      <div className="flex items-center gap-2 text-[11px] uppercase tracking-wide text-gray-400 font-semibold">
                        <Clock size={13} />
                        Duration
                      </div>

                      <div className="text-[#243443] font-bold mt-2 text-sm">
                        {item.duration}
                      </div>
                    </div>

                    {/* Valid */}
                    <div className="bg-[#f7f9fc] border border-[#edf1f5] rounded-2xl p-4 hover:border-[#F15A24]/20 transition">
                      <div className="flex items-center gap-2 text-[11px] uppercase tracking-wide text-gray-400 font-semibold">
                        <Calendar size={13} />
                        Validity
                      </div>

                      <div className="text-[#243443] font-bold mt-2 text-sm">
                        {item.valid}
                      </div>
                    </div>
                  </div>

                  {/* Details Link */}
                  <div className="flex items-center gap-2 text-sm text-gray-500 mt-4 cursor-pointer hover:text-[#F15A24] transition font-medium group">
                    <Info size={15} />

                    <span>Show More Details</span>

                    <ChevronDown
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-y-1"
                    />
                  </div>

                  {/* Bottom Section */}
                  <div className="mt-5 pt-5 border-t border-[#edf1f5] flex items-center justify-between">
                    {/* Price */}
                    <div>
                      <div className="text-[11px] uppercase tracking-wide text-gray-400 font-semibold">
                        Starting From
                      </div>

                      <div className="text-3xl font-extrabold text-[#243443] mt-1">
                        {item.price}
                      </div>
                    </div>

                    {/* Button */}
                    <button
                      onClick={() =>
                        navigate(
                          `/booking/course?courseid=${courseTitleToId(item.title)}`,
                        )
                      }
                      className="group/button bg-[#F15A24] hover:bg-[#e14d17] text-white px-6 py-3.5 rounded-2xl font-semibold flex items-center gap-2 transition-all duration-300 shadow-[0_10px_25px_rgba(241,90,36,0.25)] hover:shadow-[0_18px_40px_rgba(241,90,36,0.45)] hover:-translate-y-1"
                    >
                      Book Now
                      <ArrowRight
                        size={17}
                        className="group-hover/button:translate-x-1 transition"
                      />
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
