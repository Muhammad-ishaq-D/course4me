import React from "react";
import { Star, ExternalLink } from "lucide-react";

/* IMPORT IMAGES - Reusing existing or standard paths */
import sarahImg from "../../assets/courses/Sarah Johnson.png";
import jamesImg from "../../assets/courses/James Mitchell.png";
import emmaImg from "../../assets/courses/Emma Wilson.png";
// Using standard ones if missing, or placeholders if needed, but I'll try to match the names from the previous file
import review1 from "../../assets/courses/Sarah Johnson.png";
import review2 from "../../assets/courses/James Mitchell.png";
import review3 from "../../assets/courses/Emma Wilson.png";

const stats = [
  {
    label: "Trustpilot",
    value: "33,359",
    subValue: "Total Reviews",
    rating: "4.8",
    color: "bg-[#00B67A]",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 9.125l-9.143-.013L12 0 9.143 9.112 0 9.125l7.408 5.378L4.625 24 12 18.675 19.375 24l-2.783-9.497L24 9.125z" />
      </svg>
    ),
  },
  {
    label: "Google Reviews",
    value: "9,517",
    subValue: "Total Reviews",
    rating: "4.9",
    color: "bg-[#4285F4]",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      </svg>
    ),
  },
  {
    label: "Pass Rate",
    value: "95%",
    subValue: "Average Success",
    rating: "First Time Pass",
    color: "bg-[#F15A24]",
    icon: <Star className="w-5 h-5" />,
  },
];

const testimonials = [
  {
    stars: 5,
    text: "I had the opportunity to take the course under excellent instruction. The trainer was patient, knowledgeable, and made learning enjoyable. Passed first time!",
    name: "Sarah Johnson",
    course: "Door Supervisor Training",
    location: "Manchester",
    image: review1,
  },
  {
    stars: 5,
    text: "Great trainer, I am doing the door supervision course next month. Very professional and thorough teaching style.",
    name: "James Mitchell",
    course: "Security Guard Training",
    location: "London",
    image: review2,
  },
  {
    stars: 5,
    text: "Completed the CCTV course with very professional trainers. Learnt so much about surveillance law and practical techniques. Highly recommended!",
    name: "Marcus Thompson",
    course: "CCTV Operator Training",
    location: "Leeds",
    dark: true,
  },
  {
    stars: 5,
    text: "Brilliant course! The hands-on practice and realistic scenarios really prepared me for real emergencies. Instructor was amazing.",
    name: "Emma Wilson",
    course: "First Aid at Work",
    location: "Bristol",
    image: review3,
  },
  {
    stars: 5,
    text: "Intensive and worth every penny. The defensive driving and threat assessment modules were exceptional. Now working with high-profile clients.",
    name: "David Chen",
    course: "Close Protection",
    location: "London",
    dark: true,
  },
  {
    stars: 5,
    text: "The conflict de-escalation training has been invaluable in my daily work. I feel much more confident handling difficult situations professionally.",
    name: "Lisa Patel",
    course: "Conflict Management",
    location: "Birmingham",
    dark: true,
  },
];

const ReviewsSection = () => {
  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A202C]">Real stories from real people</h2>
          <p className="text-gray-500 mt-4 text-lg">Trusted by thousands of security professionals across the UK</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, i) => (
            <div key={i} className={`${stat.color} rounded-3xl p-8 text-white shadow-lg`}>
              <div className="flex items-center gap-2 mb-6 opacity-90">
                {stat.icon}
                <span className="font-bold text-sm uppercase tracking-wider">{stat.label}</span>
              </div>
              <div className="text-5xl font-extrabold mb-1">{stat.value}</div>
              <div className="text-sm opacity-80 mb-8 font-medium">{stat.subValue}</div>
              <div className="flex items-center gap-2">
                {stat.label !== "Pass Rate" ? (
                  <>
                    <div className="flex gap-1 text-white">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="font-bold">{stat.rating}</span>
                  </>
                ) : (
                  <span className="font-extrabold flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full border border-white flex items-center justify-center text-[10px]">👍</span>
                    {stat.rating}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((test, i) => (
            <div
              key={i}
              className={`${
                test.dark ? "bg-[#1A202C] text-white" : "bg-white border border-gray-100"
              } rounded-3xl p-8 shadow-sm flex flex-col`}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(test.stars)].map((_, i) => (
                  <Star key={i} className={`w-3.5 h-3.5 fill-current ${test.dark ? "text-yellow-400" : "text-yellow-400"}`} />
                ))}
              </div>
              <p className={`text-[13px] leading-relaxed mb-8 flex-1 ${test.dark ? "text-gray-300" : "text-gray-600"}`}>
                "{test.text}"
              </p>
              <div className="flex items-center gap-4 border-t pt-6 border-gray-100 dark:border-white/10">
                {test.image ? (
                  <img src={test.image} alt={test.name} className="w-10 h-10 rounded-full object-cover" />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gray-200" />
                )}
                <div>
                  <div className={`text-sm font-bold ${test.dark ? "text-[#F15A24]" : "text-[#1A202C]"}`}>
                    {test.name}
                  </div>
                  <div className={`text-[10px] ${test.dark ? "text-gray-400" : "text-gray-500"}`}>
                    {test.course} · {test.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-[#1A202C] text-white px-8 py-3.5 rounded-full font-bold flex items-center gap-2 mx-auto hover:bg-black transition">
            View All Reviews <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;