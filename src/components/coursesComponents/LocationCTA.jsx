import React from 'react';
import { Phone, Mail } from 'lucide-react';

export default function LocationCTA() {
  return (
    <section className="py-20 px-4 md:px-6 w-full font-sans bg-[#18181B]">
      <div className="max-w-[1240px] mx-auto flex flex-col items-center">

        {/* Icon Badge */}
        <div className="w-16 h-16 rounded-full bg-[#F15A24] flex items-center justify-center mb-10 shadow-lg shadow-orange-950/20">
          <Phone size={30} className="text-white fill-white/10" />
        </div>

        {/* Text Content */}
        <div className="text-center mb-10 max-w-3xl">
          <h2 className="text-white text-[32px] md:text-[48px] font-black tracking-tight mb-6">
            Can't Find Your Location?
          </h2>
          <p className="text-[#A1A1AA] text-[18px] md:text-[20px] font-medium leading-[1.6]">
            We're constantly expanding. Contact us to find out about upcoming<br className="hidden md:block" /> locations or discuss options near you.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="w-full sm:w-auto bg-[#F15A24] hover:bg-[#E55A0A] text-white px-8 py-4 rounded-[20px] font-bold flex items-center justify-center gap-3 transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-orange-950/10">
            <Phone size={20} className="text-white" />
            <span className="text-[16px]">Call 0800 XXX XXXX</span>
          </button>

          <button className="w-full sm:w-auto border border-[#3F3F46] hover:bg-white/5 text-white px-8 py-4 rounded-[20px] font-bold flex items-center justify-center gap-3 transition-all transform hover:-translate-y-0.5 active:translate-y-0">
            <Mail size={20} className="text-gray-400" />
            <span className="text-[16px]">Request Info</span>
          </button>
        </div>

      </div>
    </section>
  );
}
