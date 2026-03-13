import React from "react";
import { Shield, Star, Clock, Users, MapPin, ChevronDown, Lightbulb, CreditCard, RotateCcw } from "lucide-react";

/* ICONS MAPPING */
const categoryIcons = {
  "Door Supervisor Training": { icon: Shield, color: "bg-[#2F5BE7]", iconColor: "text-white" },
  "First Aid at Work": { icon: ({ className }) => <span className={className}>❤️</span>, color: "bg-[#E02424]", iconColor: "text-white" },
  "Security Guard Training": { icon: ({ className }) => <span className={className}>🛡️</span>, color: "bg-[#059669]", iconColor: "text-white" },
  "Close Protection": { icon: ({ className }) => <span className={className}>💼</span>, color: "bg-[#D97706]", iconColor: "text-white" },
  "Conflict Management": { icon: ({ className }) => <span className={className}>💬</span>, color: "bg-[#4F46E5]", iconColor: "text-white" },
};

const coursesData = [
  {
    title: "Door Supervisor Training",
    subtitle: "Complete SIA Door Supervisor Licence Course",
    days: 4,
    booked: "3,947",
    rating: "4.9",
    locationType: "In-Person",
    price: "185.00",
    popular: true,
  },
  {
    title: "First Aid at Work",
    subtitle: "Level 3 Emergency First Aid Certification",
    days: 3,
    booked: "2,312",
    rating: "4.8",
    locationType: "In-Person",
    price: "150.00",
    popular: true,
  },
  {
    title: "Security Guard Training",
    subtitle: "SIA Security Guard Licence Course",
    days: 4,
    booked: "2,504",
    rating: "4.7",
    locationType: "In-Person",
    price: "175.00",
    popular: false,
  },
  {
    title: "Close Protection",
    subtitle: "Elite Bodyguard & Executive Protection",
    days: 5,
    booked: "804",
    rating: "5",
    locationType: "In-Person",
    price: "995.00",
    popular: false,
  },
  {
    title: "Conflict Management",
    subtitle: "De-escalation & Resolution Training",
    days: 2,
    booked: "1,072",
    rating: "4.8",
    locationType: "Hybrid",
    price: "120.00",
    popular: false,
  },
];

const SidebarTitle = ({ title, children, dark = false }) => (
  <div className="flex items-center gap-3 mb-5">
    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${dark ? "bg-[#00A3FF]" : "bg-gray-100"}`}>
      <Shield className={`w-4 h-4 ${dark ? "text-white" : "text-gray-400"}`} />
    </div>
    <h3 className={`font-extrabold text-[12px] uppercase tracking-widest ${dark ? "text-white" : "text-[#1A202C]"}`}>
      {title}
    </h3>
  </div>
);

const CoursesSection = () => {
  return (
    <section className="bg-[#F8FAFC] pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">

        {/* Left Column: Course List */}
        <div className="flex-1">
          <div className="mb-10">
            <h2 className="text-3xl font-extrabold text-[#1A202C]">All Courses</h2>
            <p className="text-sm text-gray-500 font-medium mt-1">Showing 5 additional courses available</p>
          </div>

          <div className="space-y-6">
            {coursesData.map((course, idx) => {
              const theme = categoryIcons[course.title] || { icon: Shield, color: "bg-gray-100", iconColor: "text-gray-500" };
              const Icon = theme.icon;
              return (
                <div key={idx} className="bg-white rounded-[24px] border border-gray-100 p-6 flex flex-col md:flex-row items-center gap-8 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 cursor-pointer">
                  {/* Icon */}
                  <div className={`${theme.color} w-20 h-20 rounded-[20px] flex items-center justify-center shrink-0 shadow-sm`}>
                    <Icon className={`w-10 h-10 ${theme.iconColor}`} />
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-extrabold text-[#1A202C] tracking-tight">{course.title}</h3>
                      {course.popular && (
                        <span className="bg-[#00A3FF] text-white text-[9px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                          Popular
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-400 font-medium mb-5">{course.subtitle}</p>

                    <div className="flex flex-wrap gap-6 text-[12px] text-gray-400 font-bold">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-300" />
                        {course.days} days
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-gray-300" />
                        {course.booked} booked
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        {course.rating}
                      </div>
                      <div className="flex items-center gap-2 text-[#059669]">
                        <MapPin className="w-4 h-4" />
                        {course.locationType}
                      </div>
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center gap-8 shrink-0 border-l border-gray-100 pl-8 h-16">
                    <div className="text-right">
                      <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">From:</div>
                      <div className="text-3xl font-extrabold text-[#1A202C]">£{course.price}</div>
                    </div>
                    <button className="bg-[#1A202C] text-white px-6 py-3 rounded-xl text-sm font-extrabold flex items-center gap-2 hover:bg-black transition-all shadow-sm whitespace-nowrap">
                      View Dates <ChevronDown className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Sidebar */}
        <div className="w-full lg:w-[360px] space-y-8">
          {/* Training Guarantee */}
          <div className="bg-[#1A202C] rounded-[32px] p-8 shadow-xl">
            <SidebarTitle title="Training Guarantee" dark />
            <p className="text-[12px] text-gray-400 leading-[1.6] mb-8 font-medium">
              All bookings are protected with our Training Guarantee. If you don't pass, we'll rebook your exam for free — no questions asked.
            </p>
            <ul className="space-y-5 mb-8">
              {[
                "Free exam retakes",
                "Same-day results",
                "95% average pass rate",
                "Full support throughout"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[12px] font-bold text-white/90">
                  <div className="w-5 h-5 rounded-full border border-[#00A3FF] flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[#00A3FF]" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <a href="#" className="text-[#00A3FF] text-[12px] font-extrabold hover:underline flex items-center gap-1 uppercase tracking-wider">
              Learn more <ChevronDown className="w-3.5 h-3.5 -rotate-90" />
            </a>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm">
            <SidebarTitle title="Why Choose Us" />
            <ul className="space-y-6">
              {[
                { label: "95% Average Pass Rate", icon: Lightbulb, color: "text-yellow-500" },
                { label: "85+ UK Training Centres", icon: MapPin, color: "text-[#F15A24]" },
                { label: "Same-Day Results", icon: Clock, color: "text-[#059669]" },
                { label: "Instalment Plans Available", icon: CreditCard, color: "text-[#9B51E0]" },
                { label: "Free Exam Retakes", icon: RotateCcw, color: "text-red-500" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center shrink-0`}>
                    <item.icon className={`w-4 h-4 ${item.color}`} />
                  </div>
                  <span className="text-[13px] font-extrabold text-[#1A202C]">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;