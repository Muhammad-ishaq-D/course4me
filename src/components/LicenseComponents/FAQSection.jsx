import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is an SIA Licence?",
    answer:
      "An SIA (Security Industry Authority) licence is a mandatory credential required by law to work in the UK private security industry. It proves you've completed approved training and background checks.",
  },
  {
    question: "How long does the licence last?",
    answer:
      "All SIA licences are valid for 3 years from the date of issue. You'll need to complete a 1-day top-up training course to renew your licence before it expires.",
  },
  {
    question: "How long does it take to get my licence?",
    answer:
      "After passing your training and exam, it takes 24–48 hours to receive your certificate. The SIA licence application typically takes 4–6 weeks to process by the SIA.",
  },
  {
    question: "Can I work immediately after training?",
    answer:
      "You'll receive your training certificate same-day, but you must wait for your SIA licence card to arrive before you can legally work in a licensed role.",
  },
  {
    question: "What happens if I fail the exam?",
    answer:
      "Don't worry! We offer free exam retakes. You can retake the exam at no additional cost until you pass.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f4f7fb] to-[#eef3f8] py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-10">
      {/* Background Glow */}
      <div className="absolute top-[-100px] left-[-120px] w-[320px] h-[320px] bg-[#F15A24] opacity-10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        {/* ================= HEADER ================= */}
        <div className="text-center mb-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F15A2410] border border-[#F15A24]/20 text-[#F15A24] text-sm font-semibold mb-5">
            <span className="w-2 h-2 rounded-full bg-[#F15A24]" />
            Common Questions
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#243443] leading-tight tracking-tight">
            Frequently Asked Questions
          </h2>

          {/* Description */}
          <p className="text-gray-500 mt-5 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about SIA licences, training courses,
            certification, and starting your security career in the UK.
          </p>
        </div>

        {/* ================= FAQ LIST ================= */}
        <div className="space-y-5">
          {faqs.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-[30px] border transition-all duration-500 bg-white/80 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.04)]
              
              ${
                isOpen
                  ? "border-[#F15A24]/20 shadow-[0_20px_60px_rgba(241,90,36,0.10)]"
                  : "border-white hover:border-[#F15A24]/10"
              }
            `}
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F15A24]/0 via-transparent to-[#F15A24]/5 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />

                {/* ================= QUESTION ================= */}
                <button
                  onClick={() => toggle(index)}
                  className="relative z-10 w-full flex items-center justify-between gap-5 px-6 sm:px-8 py-6 sm:py-7 text-left"
                >
                  {/* Left Content */}
                  <div className="flex items-start gap-4">
                    {/* Number */}
                    <div
                      className={`min-w-[42px] h-[42px] rounded-2xl flex items-center justify-center text-sm font-bold transition-all duration-300
                  
                  ${
                    isOpen
                      ? "bg-[#F15A24] text-white shadow-[0_10px_25px_rgba(241,90,36,0.30)]"
                      : "bg-[#f7f9fc] text-[#243443]"
                  }
                `}
                    >
                      0{index + 1}
                    </div>

                    {/* Question */}
                    <div>
                      <h3
                        className={`text-lg sm:text-xl font-bold leading-snug transition duration-300
                      
                      ${isOpen ? "text-[#F15A24]" : "text-[#243443]"}
                    `}
                      >
                        {item.question}
                      </h3>

                      {!isOpen && (
                        <p className="text-sm text-gray-400 mt-2 hidden sm:block">
                          Click to view answer
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div
                    className={`min-w-[46px] h-[46px] rounded-2xl flex items-center justify-center transition-all duration-300
                  
                  ${
                    isOpen
                      ? "bg-[#F15A24] text-white rotate-180 shadow-[0_10px_25px_rgba(241,90,36,0.30)]"
                      : "bg-[#f7f9fc] text-[#243443]"
                  }
                `}
                  >
                    <ChevronDown size={20} />
                  </div>
                </button>

                {/* ================= ANSWER ================= */}
                <div
                  className={`grid transition-all duration-500 ease-in-out
              
              ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }
            `}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 sm:px-8 pb-7 sm:pb-8">
                      {/* Divider */}
                      <div className="h-[1px] bg-gradient-to-r from-[#F15A24]/20 via-[#F15A24]/5 to-transparent mb-6" />

                      {/* Answer Text */}
                      <p className="text-gray-600 leading-relaxed text-[15px] sm:text-base">
                        {item.answer}
                      </p>
                    </div>
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

export default FAQSection;
