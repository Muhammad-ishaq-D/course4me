import React from "react";
import { Cookie, Shield, BarChart3, Settings, Mail } from "lucide-react";

const CookiePolicy = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-14">
        <p className="text-sm text-gray-500 mb-6">Last Updated: June 2026</p>

        <div className="space-y-14">
          {/* SECTION 1 */}
          <div>
            <h2 className="text-3xl font-bold text-[#111827] mb-6">
              1. What Are Cookies?
            </h2>

            <p className="text-gray-600 leading-8">
              Cookies are small text files that are stored on your device when
              you visit a website. They help websites remember your preferences,
              improve functionality, enhance security, and provide a better user
              experience.
            </p>
          </div>

          {/* SECTION 2 */}
          <div>
            <h2 className="text-3xl font-bold text-[#111827] mb-6">
              2. Why We Use Cookies
            </h2>

            <ul className="space-y-6">
              {[
                {
                  no: "2.1",
                  title: "Website Functionality",
                  desc: "Cookies help essential website features work correctly, including course searches, bookings, account access, and navigation.",
                },
                {
                  no: "2.2",
                  title: "Remember Preferences",
                  desc: "Cookies allow us to remember your settings and preferences for a more personalized experience.",
                },
                {
                  no: "2.3",
                  title: "Website Performance",
                  desc: "We use cookies to understand how visitors use our website and identify opportunities for improvement.",
                },
                {
                  no: "2.4",
                  title: "Security & Protection",
                  desc: "Certain cookies help protect user accounts and detect suspicious activity.",
                },
              ].map((item) => (
                <li key={item.no} className="flex gap-4">
                  <span className="font-bold text-[#F15A24] shrink-0">
                    {item.no}
                  </span>

                  <div>
                    <h4 className="font-semibold text-[#111827]">
                      {item.title}
                    </h4>

                    <p className="text-gray-600 mt-1 leading-7">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* COOKIE TYPES */}
          <div>
            <h2 className="text-3xl font-bold text-[#111827] mb-8">
              3. Types of Cookies We Use
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="border border-gray-200 rounded-3xl p-6">
                <Shield className="text-[#F15A24]" size={28} />

                <h3 className="mt-4 text-xl font-bold">Essential Cookies</h3>

                <p className="mt-2 text-gray-600 leading-7">
                  Required for website functionality, security, account access,
                  and course booking features.
                </p>
              </div>

              <div className="border border-gray-200 rounded-3xl p-6">
                <BarChart3 className="text-[#F15A24]" size={28} />

                <h3 className="mt-4 text-xl font-bold">Analytics Cookies</h3>

                <p className="mt-2 text-gray-600 leading-7">
                  Help us understand visitor behaviour and improve platform
                  performance.
                </p>
              </div>

              <div className="border border-gray-200 rounded-3xl p-6">
                <Settings className="text-[#F15A24]" size={28} />

                <h3 className="mt-4 text-xl font-bold">Functional Cookies</h3>

                <p className="mt-2 text-gray-600 leading-7">
                  Remember your preferences and settings to provide a smoother
                  browsing experience.
                </p>
              </div>

              <div className="border border-gray-200 rounded-3xl p-6">
                <Shield className="text-[#F15A24]" size={28} />

                <h3 className="mt-4 text-xl font-bold">Security Cookies</h3>

                <p className="mt-2 text-gray-600 leading-7">
                  Help prevent fraud, protect user accounts, and maintain
                  platform security.
                </p>
              </div>
            </div>
          </div>

          {/* HIGHLIGHT BOX */}
          <div>
            <h2 className="text-3xl font-bold mb-6">4. Third-Party Cookies</h2>

            <p className="text-gray-600 leading-7 mb-5">
              courses4me may use trusted third-party services that place cookies
              on your device to support analytics, mapping, payment processing,
              and website functionality.
            </p>

            <div className="space-y-4">
              {[
                "Google Analytics",
                "Google Maps",
                "Payment Providers",
                "Customer Support Tools",
                "Website Performance Services",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F15A24] mt-2.5 shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 5 */}
          <div>
            <h2 className="text-3xl font-bold text-[#111827] mb-6">
              5. Managing Cookies
            </h2>

            <p className="text-gray-600 leading-8">
              Most web browsers allow you to control, disable, or delete cookies
              through browser settings. Please note that disabling certain
              cookies may affect website functionality and your overall user
              experience.
            </p>
          </div>

          {/* SECTION 6 */}
          <div>
            <h2 className="text-3xl font-bold text-[#111827] mb-6">
              6. Changes To This Cookie Policy
            </h2>

            <div className="pl-5 border-l-4 border-[#F15A24]">
              <p className="text-gray-600 leading-7">
                We may update this Cookie Policy from time to time to reflect
                changes in technology, legislation, or our services.
              </p>
            </div>

            <p className="text-gray-600 leading-7 mt-6">
              Any updates will be published on this page together with a revised
              "Last Updated" date.
            </p>
          </div>
        </div>

        {/* CONTACT */}
        <div className="mt-10 rounded-[32px] border border-gray-200 bg-[#F8FAFC] p-8">
          <div className="flex items-center gap-3">
            <Mail className="text-[#F15A24]" />

            <h3 className="text-2xl font-bold text-[#111827]">
              Questions About Cookies?
            </h3>
          </div>

          <p className="mt-4 text-gray-600">
            If you have any questions regarding this Cookie Policy, please
            contact our support team.
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

export default CookiePolicy;
