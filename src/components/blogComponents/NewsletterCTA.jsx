import React, { useState } from "react";
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
    <section className="px-6 mb-24">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#102238] rounded-[40px] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
          {/* Decorative backdrop elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00A3FF] opacity-5 blur-[100px] -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF5421] opacity-5 blur-[100px] -ml-48 -mb-48"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Never Miss an Update
            </h2>
            
            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto font-medium">
              Subscribe to our newsletter for the latest security industry 
              insights, career tips, and exclusive offers delivered straight to your inbox.
            </p>

            <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto" onSubmit={handleSubmit}>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); if (error) setError(""); if (success) setSuccess(false); }}
                  className={`w-full border-none text-white rounded-2xl px-8 py-5 transition shadow-inner placeholder-gray-500 font-medium ${
                    error
                      ? "bg-red-900/40 ring-2 ring-red-400/60"
                      : "bg-[#1A2E47] focus:ring-2 focus:ring-[#00A3FF]"
                  }`}
                />
                {error && <p className="text-red-400 text-[12px] font-semibold mt-2 text-left ml-2">{error}</p>}
                {success && <p className="text-green-400 text-[12px] font-semibold mt-2 text-left ml-2">You're subscribed! 🎉</p>}
              </div>
              <button
                type="submit"
                className="bg-[#FF5421] hover:bg-[#E64A1A] text-white font-extrabold uppercase tracking-widest px-10 py-5 rounded-2xl shadow-xl transition-all transform hover:scale-105 active:scale-95 whitespace-nowrap h-fit"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterCTA;
