import React from "react";
import {
  ArrowRight,
  TrendingUp,
  Calendar,
  Clock,
  Briefcase,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const LicenseCard = ({ item, index }) => {
  return (
    <div
      key={index}
      className="group bg-white border border-[#ECECEC] rounded-[26px] overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(241,90,36,0.10)] transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={
            item.thumbnail ||
            item.image ||
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop"
          }
          alt={item.title}
          className="w-full h-[180px] object-cover group-hover:scale-105 transition duration-700"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* POPULAR */}
        {item.isPopular && (
          <div className="absolute top-3 left-3 bg-black text-white text-[12px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
            <TrendingUp size={12} />
            Popular
          </div>
        )}

        {/* SALARY */}
        {item.salary && (
          <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5">
            <Briefcase size={13} />
            {item.salary}
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-4 flex flex-col flex-1">
        {/* TITLE */}
        <h3 className="min-h-[72px] text-2xl font-bold text-[#243443] leading-[1.05] group-hover:text-[#F15A24] transition duration-300 line-clamp-2">
          {item.title}
        </h3>

        {/* SUBTITLE
        <p className="text-base text-[#F15A24] font-medium mt-1 min-h-[24px]">
          {item.subtitle || "\u00A0"}
        </p> */}

        {/* DESCRIPTION */}
        <p className="text-gray-500 mt-2 text-md leading-relaxed line-clamp-2 min-h-[52px]">
          {item.shortDescription ||
            item.description ||
            "No description available"}
        </p>

        {/* INFO */}
        <div className="flex items-center gap-3 mt-4">
          {/* DURATION */}
          <div className="flex-1 bg-[#F8FAFC]  text-center rounded-xl px-3 py-3 border border-[#EDF1F5]">
            <div className="flex items-center justify-center gap-1 text-[12px] uppercase text-gray-400 font-semibold">
              <Clock size={13} />
              Duration
            </div>

            <div className="text-[#243443] font-bold text-base mt-1 min-h-[24px]">
              {item.duration || "-"}
            </div>
          </div>

          {/* VALID */}
          <div className="flex-1 bg-[#F8FAFC]  text-center rounded-xl px-3 py-3 border border-[#EDF1F5]">
            <div className="flex items-center justify-center gap-1 text-[12px] uppercase text-gray-400 font-semibold">
              <Calendar size={13} />
              Valid
            </div>

            <div className="text-[#243443] font-bold text-base mt-1 min-h-[24px]">
              {item.valid || "-"}
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-auto pt-5 border-t border-[#EDF1F5] flex items-center justify-between">
          <div>
            <p className="text-[12px] uppercase text-gray-400 font-semibold">
              Training From
            </p>

            <h4 className="text-2xl font-extrabold text-[#243443]">
              {item.pricing && typeof item.pricing === "object"
                ? `£${item.pricing.salePrice || item.pricing.basePrice}`
                : item.pricing || "£0"}
            </h4>
          </div>

          <NavLink
            to={`/licences/licencesdetails?id=${item._id || item.title}`}
            className="py-3 px-5 rounded-xl bg-[#F15A24] hover:bg-[#E14D17] text-white text-sm font-bold flex items-center gap-2 transition-all duration-300 shadow-lg shadow-[#F15A24]/20"
          >
            View Licence
            <ArrowRight size={16} />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LicenseCard;
