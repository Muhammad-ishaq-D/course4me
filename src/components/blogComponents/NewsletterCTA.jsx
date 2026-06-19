import React, { useState } from "react";
import { Mail } from "lucide-react";
import { newsletterSchema, validateAll } from "../../utils/validationSchemas";

const NewsletterCTA = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    const errs = await validateAll(newsletterSchema, { email });
    if (errs.email) {
      setError(errs.email);
      return;
    }
    setError("");
    setSuccess(true);
    setEmail("");
  };

  return (
    <section className="px-4 sm:px-6 mb-20">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[32px] bg-white border border-gray-200 px-5 sm:px-8 lg:px-12 py-12 lg:py-14 text-center shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          {/* Background Glow */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#00A3F4]/5 blur-[120px] rounded-full" />

          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[#FF5421]/5 blur-[120px] rounded-full" />

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#FFF4EE] border border-[#F15A24]/10 text-[#F15A24] text-[11px] font-bold uppercase tracking-[0.18em] px-4 py-2 rounded-full">
              <Mail size={13} />
              Free Weekly Insights
            </div>

            {/* Heading */}
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.05] tracking-tight text-[#0F172A]">
              Stay Ahead In
              <span className="block mt-1 text-[#00A3F4]">
                Your Career Journey
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 text-base sm:text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
              Get course updates, industry news, career advice, licence changes,
              and exclusive training opportunities delivered directly to your
              inbox.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-8 max-w-xl mx-auto">
              <div className="w-full bg-[#F8FAFC] border border-gray-200 p-2.5 rounded-[24px] overflow-hidden">
                <div className="flex flex-col sm:flex-row gap-2.5">
                  {/* Input */}
                  <div
                    className={`flex items-center w-full h-12 rounded-xl px-4 border transition-all duration-300 ${
                      error
                        ? "bg-red-50 border-red-200"
                        : "bg-white border-gray-200"
                    }`}
                  >
                    <Mail
                      size={18}
                      className={error ? "text-red-500" : "text-[#00A3F4]"}
                    />

                    <input
                      type="email"
                      placeholder="Enter your email address..."
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);

                        if (error) setError("");

                        if (success) setSuccess(false);
                      }}
                      className="ml-3 w-full bg-transparent outline-none text-[#0F172A] placeholder:text-gray-400 text-md"
                    />
                  </div>

                  {/* Button */}
                  <button
                    type="submit"
                    className="
                  w-full sm:w-auto
                  ]
                  py-3 px-9
                  rounded-xl
                  bg-[#F15A24]
                  hover:bg-[#df4c18]
                  text-white
                  font-bold
                  transition-all duration-300
                  shadow-[0_10px_25px_rgba(241,90,36,0.20)]
                  whitespace-nowrap
                  cursor-pointer
                "
                  >
                    Get Free Updates
                  </button>
                </div>
              </div>

              {/* Status Messages */}
              <div className="mt-4 min-h-5">
                {error && (
                  <p className="text-red-500 text-sm font-semibold">{error}</p>
                )}

                {success && (
                  <p className="text-orange-600 text-sm font-semibold">
                    You're subscribed successfully 🎉
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterCTA;
