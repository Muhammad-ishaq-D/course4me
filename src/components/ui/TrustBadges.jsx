import React from "react";
import { GraduationCap, Zap, Users, CreditCard } from "lucide-react";

const TrustBadges = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 py-2 border-t border-gray-100">
      <div className="bg-white py-2 px-3 rounded-2xl border border-gray-50 shadow-sm text-center">
        <GraduationCap className="mx-auto text-[#F15A24] mb-3" size={24} />
        <p className="text-[13px] md:text-[15px] font-bold text-[#1a1a1a]">
          95% pass rate
        </p>
        <p className=" text-[11px] md:text-[13px] text-gray-400 font-medium">
          Industry leading
        </p>
      </div>
      <div className="bg-white py-2 px-3 rounded-2xl border border-gray-50 shadow-sm text-center">
        <Zap className="mx-auto text-[#F15A24] mb-3" size={24} />
        <p className="text-[13px] md:text-[15px] font-bold text-[#1a1a1a]">
          Same-day results
        </p>
        <p className=" text-[11px] md:text-[13px] text-gray-400 font-medium">
          No waiting around
        </p>
      </div>
      <div className="bg-white py-2 px-3 rounded-2xl border border-gray-50 shadow-sm text-center">
        <Users className="mx-auto text-[#F15A24] mb-3" size={24} />
        <p className="text-[13px] md:text-[15px] font-bold text-[#1a1a1a]">
          3,847+ trained
        </p>
        <p className=" text-[11px] md:text-[13px] text-gray-400 font-medium">
          Trust in us
        </p>
      </div>
      <div className="bg-white py-2 px-3 rounded-2xl border border-gray-50 shadow-sm text-center">
        <CreditCard className="mx-auto text-[#F15A24] mb-3" size={24} />
        <p className="text-[13px] md:text-[15px] font-bold text-[#1a1a1a]">
          Instalments
        </p>
        <p className=" text-[11px] md:text-[13px] text-gray-400 font-medium">
          Flexible payments
        </p>
      </div>
    </div>
  );
};

export default TrustBadges;
