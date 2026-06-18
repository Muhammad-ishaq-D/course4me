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
        {/* MAIN CARD */}
        <div className="relative overflow-hidden rounded-[28px] sm:rounded-[34px] bg-[#0B2340] px-5 sm:px-8 lg:px-12 py-12 lg:py-14 text-center shadow-[0_20px_70px_rgba(0,0,0,0.15)]">
          {/* BACKGROUND */}
          <div className="absolute inset-0 bg-linear-to-br from-[#0B2340] via-[#102B4C] to-[#183B63]" />

          {/* GLOWS */}
          <div className="absolute -top-30 -right-20 w-65 h-65 bg-[#F15A24]/10 blur-[100px] rounded-full" />

          <div className="absolute -bottom-30 -left-20 w-65 h-65 bg-[#00A3FF]/10 blur-[100px] rounded-full" />

          {/* CONTENT */}
          <div className="relative z-10 max-w-3xl mx-auto">
            {/* BADGE */}
            <div className="inline-flex items-center gap-2 bg-white/5 border border-[#F15A24]/20 backdrop-blur-xl text-[#F15A24] text-[11px] font-bold uppercase tracking-[0.18em] px-4 py-2 rounded-full">
              <Mail size={13} />
              Free Weekly Insights
            </div>

            {/* HEADING */}
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight text-white">
              Stay Ahead in
              <span className="text-[#F15A24] block mt-1">
                Security Industry
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-5 text-sm sm:text-base lg:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Get weekly career updates, licence changes, industry news,
              training tips, and exclusive opportunities directly in your inbox.
            </p>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="mt-8 max-w-xl mx-auto">
              <div className="w-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[26px] p-2.5 shadow-[0_15px_50px_rgba(0,0,0,0.25)] overflow-hidden">
                <div className="flex flex-col sm:flex-row gap-2.5 w-full">
                  {/* INPUT */}
                  <div
                    className={`flex items-center w-full min-w-0 h-12 rounded-xl px-4 border overflow-hidden transition-all duration-300 ${
                      error
                        ? "bg-red-500/10 border-red-400/30"
                        : "bg-[#17304D]/70 border-white/5"
                    }`}
                  >
                    <Mail
                      size={18}
                      className={`shrink-0 ${
                        error ? "text-red-400" : "text-[#F15A24]"
                      }`}
                    />

                    <input
                      type="email"
                      placeholder="Your email address..."
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);

                        if (error) setError("");

                        if (success) setSuccess(false);
                      }}
                      className="ml-3 py-1 w-full min-w-0 bg-transparent outline-none text-white placeholder:text-gray-500 text-md"
                    />
                  </div>

                  {/* BUTTON */}
                  <button
                    type="submit"
                    className="w-full sm:w-auto cursor-pointer sm:min-w-[190px] py-3 px-6 rounded-xl bg-[#F15A24] hover:bg-[#df4c18] transition-all duration-300 text-white text-md font-bold shadow-[0_10px_30px_rgba(241,90,36,0.30)] whitespace-nowrap"
                  >
                    Get Free Updates
                  </button>
                </div>
              </div>
              {/* STATUS */}
              <div className="mt-3 min-h-5">
                {error && (
                  <p className="text-red-400 text-xs font-semibold">{error}</p>
                )}

                {success && (
                  <p className="text-orange-400 text-md font-semibold">
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
