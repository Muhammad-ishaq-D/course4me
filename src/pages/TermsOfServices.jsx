import React from "react";
import { Shield, Lock, CreditCard, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TermsOfServices = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <section className="bg-[#0F2B46] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F15A24]/20 blur-[120px]" />

        <div className="max-w-5xl mx-auto px-6 py-24 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-[#F15A24] text-sm font-semibold">
            <Shield size={16} />
            Terms of Service
          </div>

          <h1 className="mt-6 text-5xl md:text-6xl font-black text-white">
            Terms & Conditions
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
            Please read these Terms & Conditions carefully before using
            Courses4Me. By accessing our platform, searching courses, booking
            training, or making payments, you agree to be bound by these terms.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-sm text-gray-500 mb-12">Last Updated: June 2026</p>

        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-[#111827] mb-4">
              1. Acceptance of Terms
            </h2>

            <p className="text-gray-600 leading-8">
              By accessing, browsing, or using Courses4Me, you agree to comply
              with and be bound by these Terms & Conditions. If you do not agree
              with any part of these terms, you should discontinue use of the
              platform immediately.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#111827] mb-6">
              2. Eligibility
            </h2>

            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="font-bold text-[#F15A24]">2.1</span>
                <div>
                  <h4 className="font-semibold text-[#111827]">
                    Age Requirement
                  </h4>
                  <p className="text-gray-600 mt-1 leading-7">
                    You must be at least 18 years old or have permission from a
                    parent or guardian to use Courses4Me.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="font-bold text-[#F15A24]">2.2</span>
                <div>
                  <h4 className="font-semibold text-[#111827]">
                    Accurate Information
                  </h4>
                  <p className="text-gray-600 mt-1 leading-7">
                    You agree to provide accurate and complete information when
                    creating an account or booking courses.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#111827] mb-6">
              3. Course Bookings
            </h2>

            <p className="text-gray-600 leading-7 mb-6">
              Courses4Me acts as a marketplace connecting learners with approved
              training providers.
            </p>

            <ul className="space-y-4">
              {[
                "Course availability is subject to provider confirmation.",
                "Users are responsible for providing accurate booking information.",
                "Booking confirmations will be sent after successful registration.",
                "Training providers may contact learners regarding course details.",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F15A24] mt-2.5 shrink-0"></span>

                  <span className="text-gray-600 leading-7">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#111827] mb-6">
              4. Payments & Refunds
            </h2>

            <p className="text-gray-600 leading-7">
              Payments are processed securely through approved payment
              providers. Refund eligibility and cancellation policies may vary
              depending on the selected training provider.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#111827] mb-6">
              5. User Responsibilities
            </h2>

            <ul className="space-y-5">
              <li className="flex gap-4">
                <span className="font-bold text-[#F15A24]">5.1</span>

                <span className="text-gray-600 leading-7">
                  Maintain accurate account information.
                </span>
              </li>

              <li className="flex gap-4">
                <span className="font-bold text-[#F15A24]">5.2</span>

                <span className="text-gray-600 leading-7">
                  Use the platform lawfully and responsibly.
                </span>
              </li>

              <li className="flex gap-4">
                <span className="font-bold text-[#F15A24]">5.3</span>

                <span className="text-gray-600 leading-7">
                  Avoid submitting false or misleading information.
                </span>
              </li>

              <li className="flex gap-4">
                <span className="font-bold text-[#F15A24]">5.4</span>

                <span className="text-gray-600 leading-7">
                  Refrain from attempting unauthorized access.
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#111827] mb-6">
              6. Training Providers
            </h2>

            <p className="text-gray-600 leading-7">
              Training providers are responsible for course delivery, schedules,
              assessments, certification, and training quality. Courses4Me does
              not guarantee employment, certification success, or course
              outcomes.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#111827] mb-6">
              7. Intellectual Property
            </h2>

            <p className="text-gray-600 leading-7">
              All content, trademarks, logos, graphics, software, designs, and
              materials available on Courses4Me are owned by Courses4Me or its
              licensors and are protected by applicable intellectual property
              laws.
            </p>
          </div>

          <div className="relative overflow-hidden bg-[#0F2B46] rounded-[32px] p-8 md:p-10 text-white">
            {/* ORANGE GLOW */}
            <div className="absolute top-0 right-0 w-60 h-60 bg-[#F15A24]/10 blur-[100px]" />

            <div className="relative z-10">
              {/* BADGE */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-[#F15A24] text-sm font-semibold mb-6">
                ⚠️ Legal Notice
              </div>

              {/* HEADING */}
              <h2 className="text-3xl font-bold mb-4">
                8. Limitation of Liability
              </h2>

              {/* DESCRIPTION */}
              <p className="text-gray-300 leading-7 mb-8">
                Courses4Me provides its platform on an{" "}
                <span className="text-white font-semibold">
                  "as is" and "as available"
                </span>{" "}
                basis. While we strive to maintain accurate information,
                reliable services, and uninterrupted access, we cannot guarantee
                that the platform will always be error-free, uninterrupted, or
                suitable for every purpose.
              </p>

              {/* LIABILITY LIST */}
              <div className="space-y-5">
                {[
                  "Provider cancellations, rescheduling, or course availability changes.",
                  "Technical interruptions, downtime, or temporary service outages.",
                  "Errors, delays, or failures caused by third-party services.",
                  "Indirect, incidental, or consequential damages arising from platform use.",
                  "Losses resulting from inaccurate information provided by users.",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#F15A24]/15 border border-[#F15A24]/20 flex items-center justify-center shrink-0">
                      <span className="text-[#F15A24] text-sm font-bold">
                        {index + 1}
                      </span>
                    </div>

                    <p className="text-gray-300 leading-7">{item}</p>
                  </div>
                ))}
              </div>

              {/* FOOTER NOTE */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-sm text-gray-400 leading-6">
                  To the maximum extent permitted by applicable law, Courses4Me
                  shall not be liable for any indirect, incidental, special,
                  consequential, or punitive damages arising from the use of our
                  platform, courses, services, or third-party provider
                  activities.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#111827] mb-6">
              9. Privacy Policy
            </h2>

            <p className="text-gray-600 leading-7">
              Your use of Courses4Me is also governed by our Privacy Policy,
              which explains how we collect, use, and protect your personal
              information.
            </p>

            <button
              onClick={() => navigate("/privacy-policy")}
              className="mt-5 bg-[#F15A24] text-white px-5 py-3 rounded-xl font-semibold"
            >
              View Privacy Policy
            </button>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#111827] mb-6">
              10. Account Suspension
            </h2>

            <p className="text-gray-600 leading-7">
              Courses4Me reserves the right to suspend or terminate accounts
              that violate these Terms & Conditions or engage in fraudulent,
              abusive, or unlawful activities.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#111827] mb-6">
              11. Changes to Terms
            </h2>

            <div className="pl-5 border-l-4 border-[#F15A24]">
              <p className="text-gray-600 leading-7">
                Courses4Me may update these Terms & Conditions from time to
                time. Updated versions will be published on this page.
              </p>
            </div>

            <p className="text-gray-600 leading-7 mt-6">
              Continued use of the platform constitutes acceptance of the
              revised terms.
            </p>
          </div>
        </div>

        {/* CONTACT */}
        <div className="mt-10 rounded-[32px] border border-gray-200 bg-[#F8FAFC] p-8">
          <h3 className="text-2xl font-bold text-[#111827]">Contact Us</h3>

          <p className="mt-4 text-gray-600">
            If you have any questions regarding these Terms & Conditions, please
            contact our team.
          </p>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=info@courses4me.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-6 px-6 py-3 rounded-xl bg-[#F15A24] text-white font-semibold hover:bg-[#df4c18] transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default TermsOfServices;
