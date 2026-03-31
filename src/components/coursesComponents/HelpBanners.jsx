import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const HelpBanners = () => {
  return (
    <div className="w-full">
      {/* Orange Help Banner */}
      <section className="bg-[#F65B15] py-8 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">Do you need help?</h3>
            <p className="text-white/80 text-sm italic">Feel free to contact our support team anytime.</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a 
              href="tel:+44000000000" 
              className="flex items-center gap-2 bg-white text-[#F65B15] px-6 py-3 rounded-full font-bold text-sm hover:bg-[#F8FAFC] transition-colors"
            >
              <Phone size={18} />
              0123 456 7890
            </a>
            <a 
              href="https://wa.me/44000000000" 
              className="flex items-center gap-2 bg-white text-[#F65B15] px-6 py-3 rounded-full font-bold text-sm hover:bg-[#F8FAFC] transition-colors"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
            <a 
              href="mailto:support@course4me.com" 
              className="flex items-center gap-2 bg-white text-[#F65B15] px-6 py-3 rounded-full font-bold text-sm hover:bg-[#F8FAFC] transition-colors"
            >
              <Mail size={18} />
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Dark CTA Banner */}
      <section className="bg-[#141414] py-20 px-4 md:px-8 lg:px-16 text-center border-b border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Not sure which course is right for you?
          </h2>
          <p className="text-white/40 text-lg mb-10 leading-relaxed">
            Our expert advisors are here to guide you to the perfect training path for your career goals.
          </p>
          <button className="bg-[#F65B15] hover:bg-[#D44A0D] text-white px-10 py-4 rounded-full font-bold text-sm transition-all transform hover:scale-105">
            Find Your Course
          </button>
        </div>
      </section>
    </div>
  );
};

export default HelpBanners;
