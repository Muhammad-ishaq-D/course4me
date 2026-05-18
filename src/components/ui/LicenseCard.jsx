import React from "react";
import {
  ArrowRight,
  Info,
  TrendingUp,
  DollarSign,
  ChevronDown,
  Calendar,
  Clock,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const LicenseCard = ({ item, index }) => {
  return (
    <div
      key={index}
      className="group bg-white border border-[#ECECEC] rounded-[26px] overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(241,90,36,0.10)] transition-all duration-300 hover:-translate-y-1"
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={item.thumbnail || item.image || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop"}
          alt={item.title}
          className="w-full h-[180px] object-cover group-hover:scale-105 transition duration-700"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* POPULAR */}
        {item.isPopular && (
          <div className="absolute top-3 left-3 bg-black text-white text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
            <TrendingUp size={12} />
            Popular
          </div>
        )}

        {/* SALARY */}
        <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5">
          <DollarSign size={13} />
          {item.salary}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-4">
        {/* TITLE */}
        <h3 className="text-[25px] font-bold text-[#243443] leading-snug group-hover:text-[#F15A24] transition duration-300 line-clamp-2">
          {item.title}
        </h3>

        {/* SUBTITLE */}
        <p className="text-sm text-[#F15A24] font-medium mt-1">
          {item.subtitle}
        </p>

        {/* DESCRIPTION */}
        <p className="text-gray-500 mt-2 text-[13px] leading-relaxed line-clamp-2">
          {item.shortDescription || item.description}
        </p>

        {/* INFO */}
        <div className="flex items-center gap-3 mt-4">
          {/* DURATION */}
          <div className="flex-1 bg-[#F8FAFC] rounded-xl px-3 py-2 border border-[#EDF1F5]">
            <div className="flex items-center gap-1 text-[10px] uppercase text-gray-400 font-semibold">
              <Clock size={11} />
              Duration
            </div>

            <div className="text-[#243443] font-bold text-xs mt-1">
              {item.duration}
            </div>
          </div>

          {/* VALID */}
          <div className="flex-1 bg-[#F8FAFC] rounded-xl px-3 py-2 border border-[#EDF1F5]">
            <div className="flex items-center gap-1 text-[10px] uppercase text-gray-400 font-semibold">
              <Calendar size={11} />
              Valid
            </div>

            <div className="text-[#243443] font-bold text-xs mt-1">
              {item.valid}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-4 pt-4 border-t border-[#EDF1F5] flex items-center justify-between">
          {/* PRICE */}
          <div>
            <p className="text-[10px] uppercase text-gray-400 font-semibold">
              Starting From
            </p>

            <h4 className="text-2xl font-extrabold text-[#243443]">
              {item.pricing && typeof item.pricing === 'object' ? `£${item.pricing.salePrice || item.pricing.basePrice}` : item.pricing}
            </h4>
          </div>

          {/* BUTTON */}
          {/* <button
            onClick={() =>
              navigate(
                `/booking/course?courseid=${courseTitleToId(item.title)}`,
              )
            }
            className="h-[46px] px-5 rounded-xl bg-[#F15A24] hover:bg-[#E14D17] text-white text-sm font-bold flex items-center gap-2 transition-all duration-300 shadow-lg shadow-[#F15A24]/20"
          >
            Book
            <ArrowRight size={15} />
          </button> */}

          <NavLink
            to={`/licences/licencesdetails?id=${item._id || item.title}`}
            className="h-[46px] px-5 rounded-xl bg-[#F15A24] hover:bg-[#E14D17] text-white text-sm font-bold flex items-center gap-2 transition-all duration-300 shadow-lg shadow-[#F15A24]/20"
          >
            View Details
            <ArrowRight size={15} />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LicenseCard;
