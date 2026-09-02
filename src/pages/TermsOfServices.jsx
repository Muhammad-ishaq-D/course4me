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
                "Bookings are strictly prohibited once a course has commenced. No enrollments will be accepted after the scheduled start date and time."
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
              4. Cancellation & Refund Policy
            </h2>

            <div className="space-y-6 text-gray-600 leading-7">
              <p>
                Courses4Me aims to provide a clear and transparent service to all customers. This policy sets out the terms and conditions that apply to the cancellation, amendment, rescheduling, and refund of course bookings.
              </p>
              
              <h3 className="text-xl font-bold text-[#111827] mt-4">4.1 Cancellation or Amendment of a Booking</h3>
              <p>
                Once a course booking has been confirmed, any request to cancel or amend the booking may be subject to cancellation or administration charges. Customers should contact Courses4Me as soon as possible if they need to make any changes to their booking.
              </p>

              <h3 className="text-xl font-bold text-[#111827] mt-4">4.2 Rescheduling a Course</h3>
              <p>
                If you are unable to attend the course on the date originally booked, you must notify Courses4Me before the scheduled course start date. Subject to availability, we may agree to transfer your booking to an alternative course date within <strong>six months</strong> of the original course date.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>A <strong>£70 rescheduling fee</strong> will apply to each approved rescheduling request.</li>
                <li>Requests to reschedule must be made at least <strong>48 hours</strong> before the scheduled course start time.</li>
                <li>A maximum of <strong>two rescheduling requests</strong> will be permitted per booking.</li>
              </ul>

              <h3 className="text-xl font-bold text-[#111827] mt-4">4.3 Identification Requirements & Late Arrivals</h3>
              <p>
                Customers are responsible for ensuring that they bring the required and valid identification documents to the course (e.g., Current Passport or Driving License and two proof of addresses). Customers are also expected to arrive promptly. If you are unable to attend or complete the course due to insufficient ID, or if you arrive substantially late, you may be required to reschedule. A <strong>£70 rescheduling fee</strong> will apply in both cases.
              </p>

              <h3 className="text-xl font-bold text-[#111827] mt-4">4.4 Cancellation by the Customer</h3>
              <p>
                If you decide to cancel your course booking, <strong>you will not normally be entitled to a refund</strong>. Where a customer has paid a deposit and subsequently fails to provide notice of their non-attendance, the deposit is non-refundable and any outstanding balance remains payable.
              </p>

              <h3 className="text-xl font-bold text-[#111827] mt-4">4.5 Cancellation for Medical Reasons</h3>
              <p>
                Where a customer is unable to attend a course due to a medical condition, Courses4Me may consider a request for cancellation and/or refund on a case-by-case basis. Appropriate supporting evidence (e.g., a doctor's letter) is required. Where a refund is approved on medical grounds, a <strong>£70 handling and administration charge</strong> will be deducted.
              </p>

              <h3 className="text-xl font-bold text-[#111827] mt-4">4.6 Cancellation by the Training Provider</h3>
              <p>
                In the event that a Training Provider cancels a course, the customer will be entitled to a full refund of the amount paid, or an alternative course date will be offered.
              </p>

              <h3 className="text-xl font-bold text-[#111827] mt-4">4.7 Discounted, Promotional & Corporate Courses</h3>
              <p>
                Courses offered at a discounted, promotional or special rate are subject to a strict <strong>no-cancellation and no-refund policy</strong>. Corporate and in-house bookings are also non-refundable where the customer cancels or fails to pay the full amount due.
              </p>
            </div>
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
