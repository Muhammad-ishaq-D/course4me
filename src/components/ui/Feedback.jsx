import React, { useEffect, useState } from "react";
import {
  CheckCircle2,
  Phone,
  Star,
  MessageSquareQuote,
  ShieldCheck,
} from "lucide-react";

const testimonials = [
  {
    name: "Henry Oparaji",
    role: "Verified Student",
    text: `Fantastic course. The instructor was very knowledgeable and made sure everyone understood the comprehensive handbook.`,
  },
  {
    name: "Sarah Mitchell",
    role: "Security Officer",
    text: `Very professional training centre. The tutors explained everything clearly and helped me pass confidently.`,
  },
  {
    name: "David Johnson",
    role: "Verified Student",
    text: `Excellent support from start to finish. The practical sessions were engaging and easy to follow.`,
  },
];

const Feedback = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1,
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <aside className="w-full lg:w-[300px] space-y-5">
      {/* 1. Guarantee Box */}
      <div className="bg-[#F15A24] rounded-[24px] p-7 text-white relative overflow-hidden group shadow-xl shadow-[#F15A24]/20 border border-white/10">
        <div className="relative z-10">
          {/* Top Label */}
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck size={16} className="text-white/90" />
            <span className="text-[11px] font-bold uppercase tracking-[1.5px] text-white/90">
              SIA Gold Standard
            </span>
          </div>

          {/* Main Heading */}
          <h3 className="text-[24px] font-black leading-tight mb-2 tracking-tight">
            Zero Risk Training
          </h3>

          {/* Supporting Text */}
          <p className="text-white/80 text-[14px] font-medium mb-6 leading-relaxed max-w-[180px]">
            Your success is guaranteed, or we'll train you for free.
          </p>

          {/* CTA Button */}
          <button className="bg-white text-[#F15A24] hover:bg-[#FFF5F2] text-[12px] font-bold px-7 py-3.5 rounded-xl active:scale-95 transition-all shadow-md flex items-center gap-2">
            VIEW GUARANTEE
          </button>
        </div>

        {/* Background Decor Icon */}
        <div className="absolute -bottom-6 -right-6 text-white/10 -rotate-12 transition-transform group-hover:rotate-0 group-hover:scale-110 duration-700">
          <ShieldCheck size={160} strokeWidth={0.5} />
        </div>
      </div>
      {/* 2. Testimonial Slider */}
      <div className="bg-white rounded-[24px] border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all duration-500">
        <div className="text-[#F15A24] mb-4">
          <MessageSquareQuote
            size={28}
            fill="currentColor"
            className="opacity-20"
          />
        </div>

        <div className="transition-all duration-500 ease-in-out">
          <p className="text-[14px] leading-relaxed text-slate-600 mb-6 italic min-h-[100px]">
            "
            <span className="text-slate-900 font-bold bg-white px-1">
              {testimonials[activeIndex].text}
            </span>
            "
          </p>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-black text-[14px] text-slate-900">
                {testimonials[activeIndex].name}
              </p>

              <p className="text-[11px] text-slate-400 font-bold uppercase tracking-tighter">
                {testimonials[activeIndex].role}
              </p>
            </div>

            <div className="flex gap-1">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    i === activeIndex
                      ? "bg-[#F15A24] w-1.5"
                      : "bg-slate-200 w-1.5 hover:bg-slate-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Social Proof Box */}
      <div className="bg-white rounded-3xl border border-gray-100 p-6">
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                Excellent
              </p>

              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-4 h-4 bg-[#00b67a] flex items-center justify-center rounded-sm"
                  >
                    <Star size={10} fill="white" className="text-white" />
                  </div>
                ))}
              </div>
            </div>

            <div className="text-right">
              <span className="text-[#00b67a] text-[12px] font-black tracking-tight">
                Trustpilot
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-3xl font-black text-slate-900">4.9</div>

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-0.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>

                <span className="text-[12px] font-black text-slate-800">
                  Google
                </span>
              </div>

              <p className="text-[11px] text-slate-400 font-bold">
                9,511 STUDENT REVIEWS
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Help Box */}
      <div className="bg-slate-900 rounded-[24px] p-6 text-white group cursor-pointer hover:bg-slate-800 transition-colors">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#F15A24] flex items-center justify-center text-white shadow-lg shadow-[#F15A24]/20 group-hover:scale-110 transition-transform">
            <Phone size={20} fill="currentColor" />
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-white text-[15px] mb-2">
              Need Help?
            </h3>

            <div className="space-y-2">
              <button
                // href="tel:08006894621"
                className="flex items-center gap-2 group"
              >
                <span className="text-[18px] font-black text-[#F15A24] group-hover:text-[#ff7241] transition-colors">
                  0800 689 4621
                </span>
              </button>

              <button
                // href="mailto:info@courses4me.co.uk"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
              >
                <span className="text-[14px] font-medium border-b border-transparent group-hover:border-white/20 pb-0.5">
                  info@courses4me.co.uk
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Feedback;
