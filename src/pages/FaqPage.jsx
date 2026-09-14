import React, { useState } from "react";
import { ChevronDown, ArrowLeft } from "lucide-react";

const FaqPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "Is SIA course right for me?",
      answer: (
        <div>
          <p>
            This course is for those who wish to become a Door Supervisor or
            Security Officer and want to work as a frontline security officer on
            the following sites:
          </p>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li>Corporate Sites</li>
            <li>Retail Sites</li>
            <li>Construction Sites</li>
            <li>Reception Sites</li>
            <li>Gate houses</li>
            <li>Clubs and pubs</li>
            <li>Warehouses</li>
            <li>Events</li>
          </ul>
        </div>
      ),
    },
    {
      question: "Can I work without a licence?",
      answer:
        "No, working without a licence is a criminal offence. You can get a fine up to £5,000 and imprisonment for six months.",
    },
    {
      question: "How to get SIA licence?",
      answer:
        "Register for a course on our website, make payment, get qualified, and apply for your SIA licence.",
    },
    {
      question: "What IDs or paperwork are needed for course registration?",
      answer:
        "You need one photo ID (such as a Passport or Driving Licence) and two proofs of address (e.g., bank statement, council tax, or utility bills in your name).",
    },
    {
      question: "When will I receive my certificate?",
      answer:
        "After your examination date, it usually takes one and a half weeks to receive your certificate. In rare cases where results are delayed, you will be notified. Once your certificate is ready, we will notify you via phone call or text message.",
    },
    {
      question: "How to make payment for the course?",
      answer:
        "You can make payment directly via our website using our secure payment system.",
    },
    {
      question: "Is the Licence fee included in the course fee?",
      answer:
        "No, you have to pay the £204 licence fee separately to the SIA (at the post office).",
    },
    {
      question: "Do I need a certificate to apply for an SIA licence?",
      answer:
        "No, as soon as you pass, your details will be uploaded directly to the SIA website.",
    },
    {
      question: "What if my course is cancelled by the training provider?",
      answer:
        "If a course is cancelled by the training provider, you will have the choice to attend the next available dates or receive a full refund of your paid fee.",
    },
    {
      question:
        "Do I have to attend the course again upon SIA license renewal?",
      answer:
        "Yes, you have to take a refresher course for Door Supervision and Security Guarding.",
    },
    {
      question: "How to find a Security job?",
      answer:
        "You can find security jobs on major job platforms such as Indeed (indeed.co.uk), Totaljobs, and other online job portals.",
    },
    {
      question:
        "What is the minimum age required for the Door Supervisor Course?",
      answer: "The minimum age requirement is 18 years old.",
    },
    {
      question: "How to apply for SIA license",
      answer: (
        <div className="space-y-2 whitespace-pre-line">
          <p>A. Open link below</p>
          <p>
            <a
              href="https://services.sia.homeoffice.gov.uk/login/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F15A24] underline hover:opacity-80"
            >
              https://services.sia.homeoffice.gov.uk/login/
            </a>
          </p>
          <p>
            Click on register for personal account. Create user name and
            password by filling small form. After submitting form check your
            email inbox, junk and spam mail and click on link.
          </p>
          <p>Go back to link & login by entering your user name and password</p>
          <p>
            <a
              href="https://services.sia.homeoffice.gov.uk/login/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F15A24] underline hover:opacity-80"
            >
              https://services.sia.homeoffice.gov.uk/login/
            </a>
          </p>
          <p>
            After login to portal click on start new application and click I
            want to pay for myself (if you applying for yourself not by
            business)
          </p>
          <p>Fill full application form</p>
          <p>And in qualification choose your qualification</p>
          <p>
            After filling full application click on submit. You will receive few
            messages in SIA portal, carefully go via messages and follow
            instructions.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 lg:px-0">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-black text-[#1C1C1C]">
            Frequently Asked <span className="text-[#F15A24]">Questions</span>
          </h1>

          <p className="mt-4 text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            Everything you need to know before booking your training course.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`group cursor-pointer bg-white rounded-2xl border overflow-hidden transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-[#F15A24]/10 ${
                openFaq === idx
                  ? "border-[#F15A24] shadow-lg shadow-[#F15A24]/10"
                  : "border-gray-100 hover:border-[#F15A24]/30"
              }`}
            >
              {/* Question */}
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex cursor-pointer items-center justify-between px-4 md:px-8 py-5 text-left"
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <div
                    className={`px-3.5 py-2 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                      openFaq === idx
                        ? "bg-[#F15A24] text-white"
                        : "bg-[#FFF5F1] text-[#F15A24]"
                    }`}
                  >
                    ?
                  </div>

                  <h3
                    className={`text-base md:text-lg md:font-semibold transition-colors ${
                      openFaq === idx ? "text-[#F15A24]" : "text-[#1C1C1C]"
                    }`}
                  >
                    {faq.question}
                  </h3>
                </div>

                <ChevronDown
                  size={20}
                  className={`transition-all duration-300 ${
                    openFaq === idx
                      ? "rotate-180 text-[#F15A24]"
                      : "text-gray-400"
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openFaq === idx
                    ? "max-h-[600px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 md:px-8 pb-6">
                  <div className="pl-6 md:pl-12 border-l-2 border-[#F15A24]/20">
                    <div className="text-base text-gray-600 leading-7">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
