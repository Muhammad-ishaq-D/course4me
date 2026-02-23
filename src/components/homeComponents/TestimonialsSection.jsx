import React from "react";

// Star rating component
const StarRating = () => (
  <div className="flex text-yellow-400 text-xl">
    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
  </div>
);

const TestimonialsSection = () => {
  return (
    <section className="bg-white font-sans py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Trained by Experts Who've Done the Job
          </h2>
          <p className="text-gray-600 text-lg">
            Real stories from real students
          </p>
        </div>

        {/* Main grid - 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* LEFT COLUMN - Sarah's testimonial and Instructor */}
          <div className="space-y-8">
            {/* Sarah's testimonial card */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <StarRating />
              <p className="text-gray-700 text-lg mt-4 mb-6">
                "Ben was genuinely brilliant. He made the course fun and engaging, and I felt completely prepared for the exam. The same-day results were amazing - I started applying for jobs that evening!"
              </p>
              <div className="font-semibold text-gray-900">Sarah Mitchell</div>
              <div className="text-sm text-gray-500">Door Supervisor Course, London</div>
            </div>

   
          </div>

          {/* RIGHT COLUMN - Marcus testimonial and 99 rating */}
          <div className="space-y-8">
        
         {/* John Redfern - Instructor Profile */}
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
              <div className="flex items-start gap-4">
                {/* Instructor initial circle */}
              
                <div>
                  <div className="text-xl font-bold text-gray-900">Mr. John Redfern</div>
                  <div className="text-blue-600 font-semibold mb-3">US Army Veteran · Lead Security Instructor</div>
                  <p className="text-gray-700">
                    20+ years of real-world security experience across military and civilian roles. Passionate about preparing the next generation of security professionals.
                  </p>
                </div>
              </div>
            </div>
            {/* Marcus testimonial card */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <StarRating />
              <p className="text-gray-700 text-lg mt-4 mb-6">
                "The instructors were professional and knowledgeable. They shared real stories from their careers which really helped put everything into context. Highly recommend!"
              </p>
              <div className="font-semibold text-gray-900">Marcus Thompson</div>
              <div className="text-sm text-gray-500">CCTV Operator Course, Manchester</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;