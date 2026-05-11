import React from "react";
import {
  Shield,
  Camera,
  Users,
  Briefcase,
  RefreshCcw,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const courseTitleToId = (title) => {
  const t = title.toLowerCase();
  if (t.includes("door supervisor")) return "door-supervisor";
  if (t.includes("security guard")) return "security-guard";
  if (t.includes("cctv")) return "cctv-training";
  if (t.includes("first aid")) return "first-aid-at-work";
  return "door-supervisor";
};

const licences = [
  {
    icon: Shield,
    iconBg: "bg-gradient-to-br from-blue-500 to-blue-700",
    title: "Door Supervisor Licence",
    subtitle: "Front Line Licensed",
    duration: "4 Days Training",
    price: "£185",
    earnings: "£10–15/hr",
    validity: "3 Years",
  },
  {
    icon: Camera,
    iconBg: "bg-gradient-to-br from-purple-500 to-purple-700",
    title: "CCTV Surveillance Licence",
    subtitle: "Public Space Surveillance",
    duration: "3 Days Training",
    price: "£165",
    earnings: "£11–16/hr",
    validity: "3 Years",
  },
  {
    icon: Users,
    iconBg: "bg-gradient-to-br from-green-500 to-green-700",
    title: "Security Guard Licence",
    subtitle: "Manned Guarding",
    duration: "4 Days Training",
    price: "£175",
    earnings: "£9–13/hr",
    validity: "3 Years",
  },
  {
    icon: Briefcase,
    iconBg: "bg-gradient-to-br from-orange-500 to-orange-700",
    title: "Close Protection Licence",
    subtitle: "VIP & Executive Protection",
    duration: "5 Days Training",
    price: "£995",
    earnings: "£200–500/day",
    validity: "3 Years",
  },
  {
    icon: RefreshCcw,
    iconBg: "bg-gradient-to-br from-indigo-500 to-indigo-700",
    title: "SIA Top-Up Training",
    subtitle: "Licence Renewal",
    duration: "1 Day Training",
    price: "£95",
    earnings: "Maintain Existing",
    validity: "3 Years",
  },
];

const CompareLicences = () => {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#f4f7fb] to-[#eef3f8] py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-10">
      {/* Background Glow */}
      <div className="absolute -top-30 -right-30 w-85 h-85 bg-[#F15A24] opacity-10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F15A2410] border border-[#F15A24]/20 text-[#F15A24] text-sm font-semibold mb-5">
            <span className="w-2 h-2 rounded-full bg-[#F15A24]" />
            Compare Training Courses
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#243443] leading-tight tracking-tight">
            Compare SIA Licences
          </h2>

          {/* Description */}
          <p className="text-gray-500 mt-5 text-base sm:text-lg leading-relaxed">
            Compare pricing, duration, earnings, and select the best security
            licence for your career goals.
          </p>
        </div>

        {/* ================= TABLE WRAPPER ================= */}
        <div className="relative overflow-hidden rounded-[36px] border border-white/50 bg-white/80 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
          {/* Table Glow */}
          <div className="absolute inset-0 bg-linear-to-br from-[#F15A24]/0 via-transparent to-[#F15A24]/5 pointer-events-none" />

          {/* ================= DESKTOP TABLE HEADER ================= */}
          <div className="hidden lg:grid grid-cols-14 items-center bg-gradient-to-r from-[#243443] via-[#1e2d3a] to-[#16212b] px-8 py-6 text-white text-[13px] uppercase tracking-[1px] font-semibold">
            <div className="col-span-4">Licence Type</div>

            <div className="col-span-2 text-center">Duration</div>

            <div className="col-span-2 text-center">Price</div>

            <div className="col-span-2 text-center">Earnings</div>

            <div className="col-span-2 text-center">Validity</div>

            <div className="col-span-2 text-right">Action</div>
          </div>

          {/* ================= TABLE BODY ================= */}
          <div className="divide-y divide-[#edf1f5]">
            {licences.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group relative bg-white hover:bg-[#fcfcfd] transition-all duration-500 overflow-hidden"
                >
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F15A24]/0 via-transparent to-[#F15A24]/5 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />

                  {/* ================= DESKTOP TABLE ROW ================= */}
                  <div className="hidden lg:grid lg:grid-cols-14 items-center px-8 py-6">
                    {/* COURSE INFO */}
                    <div className="col-span-4 flex items-center gap-4 min-w-0">
                      <div
                        className={`w-14 h-14 min-w-[56px] min-h-[56px] rounded-2xl ${item.iconBg} flex items-center justify-center shadow-lg`}
                      >
                        <Icon
                          size={24}
                          strokeWidth={2.3}
                          className="text-white shrink-0"
                        />
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-[18px] font-bold text-[#243443] truncate group-hover:text-[#F15A24] transition">
                          {item.title}
                        </h3>

                        <p className="text-sm text-gray-500 mt-1 truncate">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* DURATION */}
                    <div className="col-span-2 flex justify-center">
                      <div className="bg-[#f8fafc] border border-[#edf1f5] px-4 py-2 rounded-xl text-[#243443] text-sm font-semibold">
                        {item.duration}
                      </div>
                    </div>

                    {/* PRICE */}
                    <div className="col-span-2 flex justify-center">
                      <div className="text-3xl font-extrabold text-[#243443]">
                        {item.price}
                      </div>
                    </div>

                    {/* EARNINGS */}
                    <div className="col-span-2 flex justify-center">
                      <div className="bg-green-50 text-green-600 px-4 py-2 rounded-xl font-bold text-sm border border-green-100">
                        {item.earnings}
                      </div>
                    </div>

                    {/* VALIDITY */}
                    <div className="col-span-2 flex justify-center">
                      <div className="bg-[#fff7f3] text-[#F15A24] px-4 py-2 rounded-xl font-bold text-sm border border-[#F15A24]/10">
                        {item.validity}
                      </div>
                    </div>

                    {/* BUTTON */}
                    <div className="col-span-2 flex justify-end">
                      <button
                        onClick={() =>
                          navigate(
                            `/booking/course?courseid=${courseTitleToId(item.title)}`,
                          )
                        }
                        className="group/button bg-[#F15A24] hover:bg-[#df4f19] text-white px-6 py-3.5 rounded-2xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_10px_30px_rgba(241,90,36,0.25)] hover:shadow-[0_18px_45px_rgba(241,90,36,0.45)] hover:-translate-y-1"
                      >
                        Book Now
                        <ChevronRight
                          size={18}
                          className="group-hover/button:translate-x-1 transition"
                        />
                      </button>
                    </div>
                  </div>

                  {/* ================= MOBILE/TABLET CARD ================= */}
                  <div className="lg:hidden p-5 sm:p-6">
                    {/* Top Section */}
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div
                        className={`w-16 h-16 min-w-[64px] rounded-2xl ${item.iconBg} flex items-center justify-center shadow-lg`}
                      >
                        <Icon
                          size={28}
                          strokeWidth={2.3}
                          className="text-white"
                        />
                      </div>

                      {/* Title */}
                      <div className="min-w-0 flex-1">
                        <h3 className="text-[21px] font-bold text-[#243443] leading-snug">
                          {item.title}
                        </h3>

                        <p className="text-sm text-gray-500 mt-1">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* ================= INFO GRID ================= */}
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      {/* Duration */}
                      <div className="bg-[#f8fafc] border border-[#edf1f5] rounded-2xl p-4 text-center">
                        <div className="text-[11px] uppercase tracking-wide text-gray-400 font-semibold">
                          Duration
                        </div>

                        <div className="text-[#243443] font-bold text-sm mt-2">
                          {item.duration}
                        </div>
                      </div>

                      {/* Price */}
                      <div className="bg-[#f8fafc] border border-[#edf1f5] rounded-2xl p-4 text-center">
                        <div className="text-[11px] uppercase tracking-wide text-gray-400 font-semibold">
                          Price
                        </div>

                        <div className="text-3xl font-extrabold text-[#243443] mt-2">
                          {item.price}
                        </div>
                      </div>

                      {/* Earnings */}
                      <div className="bg-green-50 border border-green-100 rounded-2xl p-4 text-center">
                        <div className="text-[11px] uppercase tracking-wide text-green-500 font-semibold">
                          Earnings
                        </div>

                        <div className="text-green-600 font-bold text-sm mt-2">
                          {item.earnings}
                        </div>
                      </div>

                      {/* Validity */}
                      <div className="bg-[#fff7f3] border border-[#F15A24]/10 rounded-2xl p-4 text-center">
                        <div className="text-[11px] uppercase tracking-wide text-[#F15A24] font-semibold">
                          Validity
                        </div>

                        <div className="text-[#F15A24] font-bold text-sm mt-2">
                          {item.validity}
                        </div>
                      </div>
                    </div>

                    {/* ================= BUTTON ================= */}
                    <button
                      onClick={() =>
                        navigate(
                          `/booking/course?courseid=${courseTitleToId(item.title)}`,
                        )
                      }
                      className="group/button w-full mt-6 bg-[#F15A24] hover:bg-[#df4f19] text-white py-4 rounded-[20px] font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_10px_30px_rgba(241,90,36,0.25)] hover:shadow-[0_18px_45px_rgba(241,90,36,0.45)]"
                    >
                      Book Now
                      <ChevronRight
                        size={18}
                        className="group-hover/button:translate-x-1 transition"
                      />
                    </button>
                  </div>

                  {/* INFO GRID */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompareLicences;
