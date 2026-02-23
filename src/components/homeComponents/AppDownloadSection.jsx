import React from "react";

const AppDownloadSection = () => {
  return (
    <section className="bg-blue-950 font-sans py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Available on iOS & Android - top badge */}
        <div className="text-center mb-8">
          <span className="bg-blue-900 text-white text-sm font-semibold px-5 py-2 rounded-full tracking-wider">
            Available on iOS & Android
          </span>
        </div>

        {/* Main heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
          Your Career in Your Pocket
        </h2>

        {/* Description text */}
        <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto mb-8">
          Find work, try mock tests, and book courses from the UK's #1 security training app. Everything you need to launch and manage your security career.
        </p>

        {/* App store buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {/* App Store button */}
          <button className="bg-black hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg flex items-center gap-2 transition-colors">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Download on App Store
          </button>

          {/* Google Play button */}
          <button className="bg-black hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg flex items-center gap-2 transition-colors">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.84.27 1.19 0 .34-.27.84-.27 1.19 0 .34.27.84.27 1.19 0 .34-.27.84-.27 1.19 0 .34.27.84.27 1.19 0 .34-.27.84-.27 1.19 0 .34.27.84.27 1.19 0 .34-.27.84-.27 1.19 0 .34.27.84.27 1.19 0l-1.19-1.19zM6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z"/>
            </svg>
            Get it on Google Play
          </button>
        </div>

        {/* PDF download form */}
        <div className="max-w-2xl mx-auto ">
          <p className="text-gray-700 text-lg mb-4">
            Enter your details to instantly download the career guide PDF →
          </p>
          
        
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;