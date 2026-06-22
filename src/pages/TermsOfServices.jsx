import React from "react";
import { Shield, Lock, CreditCard, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TermsOfServices = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen">
      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-14">
        <p className="text-sm text-gray-500 mb-6">Last Updated: June 2026</p>

        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-[#111827] mb-4">
              1. Acceptance of Terms
            </h2>

            <p className="text-gray-600 leading-8">
              By accessing, browsing, or using course4me, you agree to comply
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
                    parent or guardian to use course4me.
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
              courses4me acts as a marketplace connecting learners with approved
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
              assessments, certification, and training quality. course4me does
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
              materials available on course4me are owned by course4me or its
              licensors and are protected by applicable intellectual property
              laws.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#111827] mb-6">
              8. Limitation of Liability
            </h2>

            <p className="text-gray-600 leading-8 mb-8">
              course4me provides its platform on an "as is" and "as available"
              basis. While we strive to maintain accurate information and
              reliable services, we cannot guarantee uninterrupted access,
              error-free operation, or suitability for every purpose.
            </p>

            <ul className="space-y-5">
              <li className="flex gap-4">
                <span className="font-bold text-[#F15A24]">8.1</span>

                <span className="text-gray-600 leading-7">
                  course4me is not responsible for provider cancellations,
                  rescheduling, venue changes, or course availability updates.
                </span>
              </li>

              <li className="flex gap-4">
                <span className="font-bold text-[#F15A24]">8.2</span>

                <span className="text-gray-600 leading-7">
                  We are not liable for temporary technical interruptions,
                  website downtime, maintenance periods, or service disruptions.
                </span>
              </li>

              <li className="flex gap-4">
                <span className="font-bold text-[#F15A24]">8.3</span>

                <span className="text-gray-600 leading-7">
                  course4me shall not be responsible for errors, delays, or
                  failures caused by third-party systems, payment providers, or
                  external services.
                </span>
              </li>

              <li className="flex gap-4">
                <span className="font-bold text-[#F15A24]">8.4</span>

                <span className="text-gray-600 leading-7">
                  We shall not be liable for indirect, incidental,
                  consequential, or special damages arising from the use of the
                  platform.
                </span>
              </li>

              <li className="flex gap-4">
                <span className="font-bold text-[#F15A24]">8.5</span>

                <span className="text-gray-600 leading-7">
                  Users are responsible for ensuring the accuracy of information
                  submitted through the platform. course4me accepts no liability
                  for losses resulting from inaccurate user-provided
                  information.
                </span>
              </li>
            </ul>

            <p className="mt-8 text-gray-600 leading-8">
              To the maximum extent permitted by applicable law, course4me's
              total liability arising from the use of the platform, courses,
              bookings, or related services shall be limited as required under
              applicable UK law.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#111827] mb-6">
              9. Privacy Policy
            </h2>

            <p className="text-gray-600 leading-7">
              Your use of course4me is also governed by our Privacy Policy,
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
              course4me reserves the right to suspend or terminate accounts that
              violate these Terms & Conditions or engage in fraudulent, abusive,
              or unlawful activities.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#111827] mb-6">
              11. Changes to Terms
            </h2>

            <div className="pl-5 border-l-4 border-[#F15A24]">
              <p className="text-gray-600 leading-7">
                course4me may update these Terms & Conditions from time to time.
                Updated versions will be published on this page.
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
