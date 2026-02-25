import React from "react";
import starIcon from "../../assets/icons/courses/star.svg";
import checkIcon from "../../assets/icons/home/check-icon.png";

import doorImg from "../../assets/icons/courses/door.png";
import cctvImg from "../../assets/icons/courses/cctv.png";
import firstAidImg from "../../assets/icons/courses/first-aid.png";
import guardImg from "../../assets/icons/courses/security-guard.png";
import closeImg from "../../assets/icons/courses/close-protection.png";
import conflictImg from "../../assets/icons/courses/conflict.png";

const courses = [
  {
    title: "Door Supervisor Training",
    subtitle: "Complete SIA Door Supervisor Licence Course",
    image: doorImg,
    rating: "4.9 (1240)",
    passRate: "96% Pass Rate",
    duration: "4 days",
    price: "£185",
    badgeColor: "bg-blue-600",
    popular: true,
    features: [
      "Physical Intervention Skills",
      "Conflict Management",
      "Legal & Licensing",
      "Venue Security Operations"
    ]
  },
  {
    title: "CCTV Operator Training",
    subtitle: "Public Space Surveillance (CCTV) Licence",
    image: cctvImg,
    rating: "4.8 (890)",
    passRate: "94% Pass Rate",
    duration: "3 days",
    price: "£165",
    badgeColor: "bg-purple-600",
    popular: true,
    features: [
      "Surveillance Techniques",
      "System Operations",
      "Legal Framework",
      "Incident Recording"
    ]
  },
  {
    title: "First Aid at Work",
    subtitle: "Level 3 Emergency First Aid Certification",
    image: firstAidImg,
    rating: "4.9 (2100)",
    passRate: "98% Pass Rate",
    duration: "3 days",
    price: "£150",
    badgeColor: "bg-red-600",
    popular: true,
    features: [
      "CPR & AED Training",
      "Wound Management",
      "Emergency Scenarios",
      "HSE Certified"
    ]
  },
  {
    title: "Security Guard Training",
    subtitle: "SIA Security Guard Licence Course",
    image: guardImg,
    rating: "4.7 (1560)",
    passRate: "95% Pass Rate",
    duration: "4 days",
    price: "£175",
    badgeColor: "bg-green-600",
    popular: false,
    features: [
      "Patrol Procedures",
      "Access Control",
      "Emergency Response",
      "Report Writing"
    ]
  },
  {
    title: "Close Protection",
    subtitle: "Elite Bodyguard & Executive Protection",
    image: closeImg,
    rating: "5 (340)",
    passRate: "92% Pass Rate",
    duration: "5 days",
    price: "£995",
    badgeColor: "bg-orange-500",
    popular: false,
    features: [
      "Threat Assessment",
      "Defensive Driving",
      "Route Planning",
      "VIP Protection"
    ]
  },
  {
    title: "Conflict Management",
    subtitle: "De-escalation & Resolution Training",
    image: conflictImg,
    rating: "4.8 (980)",
    passRate: "97% Pass Rate",
    duration: "2 days",
    price: "£120",
    badgeColor: "bg-indigo-600",
    popular: false,
    features: [
      "De-escalation Tactics",
      "Communication Skills",
      "Body Language",
      "Scenario Training"
    ]
  }
];

const CoursesSection = () => {
  return (
    <section className="bg-[#f3f6f9] py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-bold text-[#1f2f3f]">
              All Courses
            </h2>
            <p className="text-gray-500 mt-2">
              Showing 6 courses available
            </p>
          </div>

          <div className="flex gap-3">
            <button className="bg-[#1f2f3f] text-white px-5 py-2 rounded-full text-sm">
              All Courses
            </button>
            <button className="bg-white text-gray-600 px-5 py-2 rounded-full text-sm border">
              Popular
            </button>
            <button className="bg-white text-gray-600 px-5 py-2 rounded-full text-sm border">
              SIA Courses
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition overflow-hidden border border-gray-100"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-[230px] object-cover"
                />

                {course.popular && (
                  <div className="absolute top-4 left-4 bg-[#B9FF5A] text-black text-xs font-semibold px-3 py-1 rounded-full">
                    Popular
                  </div>
                )}

                <div className={`absolute top-4 right-4 ${course.badgeColor} text-white p-2 rounded-xl`}>
                  ★
                </div>

                <div className="absolute bottom-4 left-4 flex gap-3">
                  <div className="flex items-center bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                    <img src={starIcon} className="w-3 h-3 mr-1" />
                    {course.rating}
                  </div>

                  <div className="bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                    {course.passRate}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1f2f3f]">
                  {course.title}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {course.subtitle}
                </p>

                <ul className="mt-5 space-y-2">
                  {course.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <img src={checkIcon} className="w-4 h-4" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex justify-between items-center mt-6 pt-5 border-t">
                  <div>
                    <div className="text-sm text-gray-500">
                      {course.duration}
                    </div>
                    <div className="text-xl font-bold text-[#1f2f3f]">
                      {course.price}
                    </div>
                  </div>

                  <button className="bg-[#2f3a47] text-white px-6 py-2 rounded-full text-sm hover:bg-black transition">
                    Enroll Now →
                  </button>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default CoursesSection;