import React from "react";

const NewsletterCTA = () => {
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

            <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-[#1A2E47] border-none text-white rounded-2xl px-8 py-5 focus:ring-2 focus:ring-[#00A3FF] transition shadow-inner placeholder-gray-500 font-medium"
                required
              />
              <button
                type="submit"
                className="bg-[#FF5421] hover:bg-[#E64A1A] text-white font-extrabold uppercase tracking-widest px-10 py-5 rounded-2xl shadow-xl transition-all transform hover:scale-105 active:scale-95 whitespace-nowrap"
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
