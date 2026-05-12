import { Phone, Mail, Sparkles } from "lucide-react";

const CareerCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#111111] py-20 px-4 sm:px-6 lg:px-8">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#161616] to-[#111111]" />

      {/* Orange Glow */}
      <div className="absolute top-[-120px] right-[-100px] w-[300px] h-[300px] bg-[#F8510C]/20 blur-[120px] rounded-full" />

      {/* Blue Glow */}
      <div className="absolute bottom-[-120px] left-[-100px] w-[300px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Top Icon */}
        <div className="w-16 h-16 mx-auto rounded-full bg-[#F8510C] flex items-center justify-center shadow-[0_10px_40px_rgba(248,81,12,0.35)]">
          <Phone size={26} className="text-white" />
        </div>

        {/* Badge */}
        <div className="mt-6 inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-xl text-white text-xs font-semibold px-5 py-2 rounded-full uppercase tracking-wide">
          <Sparkles size={13} className="text-[#F8510C]" />
          Your Career Advisor Is Ready To Help
        </div>

        {/* Heading */}
        <h2 className="mt-8 text-4xl md:text-6xl font-extrabold leading-tight text-white">
          Stop Scrolling.
          <br />
          <span className="text-[#F8510C]">
            Start Your Security Career Today.
          </span>
        </h2>

        {/* Description */}
        <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
          Talk to a real career advisor — not a chatbot. We’ll guide you toward
          the right course and help you secure your first role in the security
          industry.
        </p>

        <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-5">
          {/* Call Button */}
          <button
            onClick={() => {
              window.location.href = "tel:08006894621";
            }}
            className="group inline-flex items-center justify-center gap-3 bg-[#F8510C] hover:bg-[#e14a0a] text-white font-semibold px-8 py-4 rounded-full shadow-[0_10px_40px_rgba(248,81,12,0.35)] transition-all duration-300"
          >
            <Phone size={18} />
            Call Free — 08006894621
          </button>

          {/* Email Button */}
          <button
            onClick={() => {
              window.location.href = "mailto:info@courses4me.co.uk";
            }}
            className="inline-flex items-center justify-center gap-3 border border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-xl text-white font-semibold px-8 py-4 rounded-full transition-all duration-300"
          >
            <Mail size={18} />
            info@courses4me.co.uk
          </button>
        </div>
      </div>
    </section>
  );
};

export default CareerCTA;
