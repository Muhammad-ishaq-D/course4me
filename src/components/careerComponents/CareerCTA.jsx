import { Phone, Mail } from "lucide-react";

const CareerCTA = () => {
  return (
    <section className="relative overflow-hidden">

      <div className="absolute inset-0 bg-[#292929]" />

      <div className="relative max-w-4xl mx-auto px-6 py-28 text-center">

        {/* Icon Circle */}
        <div className="w-20 h-20 mx-auto rounded-full bg-[#F15A24]  flex items-center justify-center shadow-[0_10px_40px_rgba(185,255,90,0.4)]">
          <Phone size={28} className="text-[#0f2234]" />
        </div>

        {/* Heading */}
        <h2 className="mt-10 text-4xl md:text-5xl font-bold text-white leading-tight">
          Ready to Start Your Career?
        </h2>

        {/* Subtext */}
        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Speak to our career advisors today and discover how we can help you
          launch a successful security career.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">

          {/* Primary Button */}
          <button className="bg-[#F15A24] text-white font-semibold px-8 py-4 rounded-full transition flex items-center gap-3">            <Phone color="white" size={18} />
            Call 0800 XXX XXXX
          </button>

          {/* Secondary Button */}
          <button className="border border-white/30 text-white px-8 py-4 rounded-full backdrop-blur-md bg-white/5 hover:bg-white/10 transition flex items-center gap-3">
            <Mail size={18} />
            Get Career Advice
          </button>

        </div>
      </div>
    </section>
  );
};

export default CareerCTA;