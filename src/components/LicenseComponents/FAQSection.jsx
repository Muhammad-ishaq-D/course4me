import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is an SIA Licence?",
    answer:
      "An SIA (Security Industry Authority) licence is a mandatory credential required by law to work in the UK private security industry. It proves you've completed approved training and background checks."
  },
  {
    question: "How long does the licence last?",
    answer:
      "All SIA licences are valid for 3 years from the date of issue. You'll need to complete a 1-day top-up training course to renew your licence before it expires."
  },
  {
    question: "How long does it take to get my licence?",
    answer:
      "After passing your training and exam, it takes 24–48 hours to receive your certificate. The SIA licence application typically takes 4–6 weeks to process by the SIA."
  },
  {
    question: "Can I work immediately after training?",
    answer:
      "You'll receive your training certificate same-day, but you must wait for your SIA licence card to arrive before you can legally work in a licensed role."
  },
  {
    question: "What happens if I fail the exam?",
    answer:
      "Don't worry! We offer free exam retakes. You can retake the exam at no additional cost until you pass."
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f3f6f9] py-24 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#2f3a47]">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 mt-4 text-lg">
            Everything you need to know about SIA licences
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="bg-white border border-[#e6eaef] rounded-3xl shadow-sm overflow-hidden transition"
              >
                {/* Question */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center px-8 py-7 text-left"
                >
                  <span className="text-lg font-semibold text-[#2f3a47]">
                    {item.question}
                  </span>

                  <ChevronDown
                    size={20}
                    className={`text-[#B9FF5A] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`px-8 overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 pb-8 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
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