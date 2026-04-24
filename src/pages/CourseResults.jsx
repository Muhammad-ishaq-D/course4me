import React, { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import {
  Search,
  MessageCircle,
  MapPin,
  Clock,
  Calendar,
  CheckCircle2,
  Phone,
  ChevronDown,
  ChevronUp,
  Star,
  Users,
  Zap,
  CreditCard,
  GraduationCap,
  Info,
  Car,
  Wind,
  Navigation
} from "lucide-react";
import { courses } from "../data/courseData";
import SearchModal from "../components/shared/SearchModal";

const CourseResults = () => {
  const [searchParams] = useSearchParams();
  const postcode = searchParams.get("postcode") || "Andover";
  const courseId = searchParams.get("courseid") || "door-supervisor";
  const [expandedCard, setExpandedCard] = useState("");
  const [filter, setFilter] = useState("Closest");
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const course = courses[courseId] || courses["door-supervisor"];
  const basePrice = course.price.replace('£', '');

  const locations = [
    {
      id: "London-Central",
      name: "London-Central",
      recommended: true,
      address: "City Business Centre, 15 Farringdon Rd - EC1M 3HA",
      distance: "Near you",
      parking: "Street parking available (charges apply)",
      walk: "3 mins walk from Farringdon",
      duration: course.duration,
      booked: "3,847 times",
      price: basePrice,
      nextDate: course.nextDate,
      dates: [
        { range: "Mon 16th Mar 2026 - Thu 19th Mar 2026", price: basePrice, bookingFee: true },
        { range: "Mon 23rd Mar 2026 - Thu 26th Mar 2026", price: basePrice },
        { range: "Mon 30th Mar 2026 - Thu 2nd Apr 2026", price: (parseFloat(basePrice) + 14).toFixed(2) }
      ]
    },
    {
      id: "London-Ilford-CP",
      name: "London Ilford-CP",
      address: "Glyncor Community Centre, 75 - SE18 7LB",
      distance: "12 miles from you",
      parking: "Parking available (charges apply)",
      walk: "11 mins walk from Plumstead (National Rail)",
      drive: "45 mins drive from your location",
      duration: course.duration,
      booked: "3,847 times",
      price: basePrice,
      nextDate: "23rd Mar 2026"
    },
    {
      id: "Bristol",
      name: "Bristol",
      address: "Future Inn Bristol - BS2 9SY",
      distance: "120 miles from you",
      parking: "Free on-site parking",
      walk: "12 mins walk from Bristol Temple Meads",
      drive: "2 hrs drive from your location",
      duration: course.duration,
      booked: "3,847 times",
      price: basePrice,
      nextDate: "23rd Mar 2026"
    },
    {
      id: "Birmingham",
      name: "Birmingham",
      address: "Holiday Inn Birmingham City Centre - B1 1BT",
      distance: "120 miles from you",
      parking: "NCP car park adjacent (charges apply)",
      walk: "8 mins walk from Birmingham New Street",
      drive: "2 hrs drive from your location",
      duration: course.duration,
      booked: "3,847 times",
      price: (parseFloat(basePrice) + 4).toFixed(2),
      nextDate: "23rd Mar 2026"
    },
    {
      id: "Leeds",
      name: "Leeds",
      address: "Novotel Leeds Centre - LS1 4BR",
      distance: "195 miles from you",
      parking: "On-site parking available (£2.50/day)",
      walk: "10 mins walk from Leeds",
      drive: "3.5 hrs drive from your location",
      duration: course.duration,
      booked: "3,847 times",
      price: basePrice,
      nextDate: "30th Mar 2026"
    }
  ];

  return (
    <div className="bg-[#F8FAFC] min-h-screen mt-28 font-sans">
      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        initialCourse={course.title}
        initialLocation={postcode}
      />
      {/* Search Header */}
      <header className="fixed bg-white border-b border-gray-100 py-3 top-28 w-full shadow-xs z-50">
        <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between">
          <div className="flex-1 max-w-[600px] relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              readOnly
              value={`${course.title} - ${postcode}`}
              onClick={() => setIsSearchModalOpen(true)}
              className="w-full pl-9 pr-4 py-2 bg-[#F8FAFC] border border-gray-100 rounded-md text-sm outline-none cursor-pointer hover:bg-gray-50 focus:ring-1 focus:ring-[#F15A24] transition-colors font-medium text-[#1C1C1C]"
            />
          </div>
          <div className="flex items-center gap-2 text-sm">
            <MessageCircle className="text-[#F15A24]" size={16} />
            <span className="text-gray-500">Not sure?</span>
            <span className="text-[#F15A24] font-bold cursor-pointer hover:underline">Chat with us</span>
          </div>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-4 py-6 md:py-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* 4. Left Sidebar (Filters) */}
          <aside className="w-full lg:w-[240px] shrink-0">
            <h2 className="text-[17px] font-bold text-[#1C1C1C] mb-6">Filters</h2>
            <div className="space-y-1">
              {[
                { id: 'Closest', label: 'Closest', price: '£185.00' },
                { id: 'Cheapest', label: 'Cheapest', price: '£185.00' },
                { id: 'Earliest', label: 'Earliest', price: '£185.00' },
              ].map((option) => (
                <div
                  key={option.id}
                  onClick={() => setFilter(option.id)}
                  className={`flex items-center justify-between px-4 py-3.5 cursor-pointer transition-all duration-200 rounded-xl group ${filter === option.id ? 'bg-[#FFF5F1]' : 'hover:bg-gray-50'
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${filter === option.id ? 'border-[#F15A24]' : 'border-gray-300'
                      }`}>
                      {filter === option.id && <div className="w-2.5 h-2.5 rounded-full bg-[#F15A24]" />}
                    </div>
                    <span className={`text-[15px] font-bold transition-colors ${filter === option.id ? 'text-[#1C1C1C]' : 'text-gray-400 group-hover:text-gray-600'
                      }`}>
                      {option.label}
                    </span>
                  </div>
                  <span className={`text-[15px] font-bold transition-colors ${filter === option.id ? 'text-[#1C1C1C]' : 'text-gray-200'
                    }`}>
                    {option.price}
                  </span>
                </div>
              ))}
            </div>

            {/* Postcode Info Box */}
            <div className="mt-8 bg-[#FFF5F1] border border-[#F15A24]/10 rounded-2xl p-5">
              <p className="text-[13px] text-[#F15A24] font-medium leading-relaxed">
                Enter your postcode above to sort by distance
              </p>
            </div>
          </aside>
          <div className="flex-1 space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-[#1C1C1C] mb-1">
                Door Supervisor Training
              </h1>
              <p className="text-gray-500 font-medium">
                We've found <span className="text-[#1C1C1C] font-bold">12 course dates</span> across <span className="text-[#1C1C1C] font-bold">5 locations</span>
              </p>
            </div>

            {/* Weekend Alert */}
            <div className="bg-white rounded-xl border border-gray-100 p-4 flex items-start gap-4">
              <div className="bg-[#FFF5F1] p-2 rounded-lg">
                <Calendar className="text-[#F15A24]" size={20} />
              </div>
              <div className="text-sm">
                <p className="font-bold text-[#1C1C1C] mb-0.5">Weekend Training Now Available!</p>
                <p className="text-gray-500">
                  Complete your training on Saturdays and Sundays across three weekends. <span className="text-[#F15A24] cursor-pointer hover:underline">Learn more</span>
                </p>
              </div>
            </div>

            {/* Location Cards */}
            {locations.map((loc) => (
              <div key={loc.id} className="relative">
                {loc.recommended && (
                  <div className="bg-[#F15A24] text-white text-[11px] font-bold py-1.5 px-4 rounded-t-xl inline-flex items-center gap-1.5 uppercase tracking-wider">
                    <Zap size={12} fill="currentColor" />
                    We recommend
                  </div>
                )}
                <div className={`bg-white rounded-xl border ${loc.recommended ? 'border-[#F15A24] rounded-tl-none' : 'border-gray-100'} p-6 md:p-8 shadow-sm transition-all`}>
                  <div className="flex flex-col md:row md:flex-row justify-between gap-6 mb-6">
                    <div className="space-y-4 flex-1">
                      <div>
                        <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest mb-1">Door Supervisor Training</p>
                        <h2 className="text-2xl font-extrabold text-[#1C1C1C]">{loc.name}</h2>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                        <div className="flex items-start gap-3">
                          <MapPin className="text-[#F15A24] shrink-0 mt-0.5" size={16} />
                          <div className="text-[13px] leading-snug">
                            <span className="text-[#F15A24] font-bold cursor-pointer hover:underline">{loc.address.split(' - ')[0]}</span>
                            <span className="text-gray-500"> - {loc.address.split(' - ')[1]}</span>
                            <span className="text-gray-400 block mt-0.5 font-medium">{loc.distance}</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Car className="text-[#64748B] shrink-0 mt-0.5" size={16} />
                          <span className="text-[13px] text-gray-600">{loc.parking}</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <Navigation className="text-[#EA4335] shrink-0 mt-0.5" size={16} />
                          <span className="text-[13px] text-gray-600">{loc.walk}</span>
                        </div>
                        {loc.drive && (
                          <div className="flex items-start gap-3">
                            <Clock className="text-[#64748B] shrink-0 mt-0.5" size={16} />
                            <span className="text-[13px] text-gray-600">{loc.drive}</span>
                          </div>
                        )}
                        <div className="flex items-start gap-3">
                          <Clock className="text-[#64748B] shrink-0 mt-0.5" size={16} />
                          <span className="text-[13px] text-gray-600">{loc.duration}</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="text-[#10B981] shrink-0 mt-0.5" size={16} />
                          <span className="text-[13px] text-gray-600 font-medium">Booked <span className="font-bold">{loc.booked}</span> times</span>
                        </div>
                      </div>
                    </div>

                    <div className="md:text-right flex flex-col justify-start md:items-end gap-2 md:w-48">
                      <p className="text-[13px] font-bold text-[#F15A24] leading-tight">
                        Next course on {loc.nextDate}
                        <span className="block text-gray-400 font-medium text-[11px] mt-0.5">Instalment plans available</span>
                      </p>
                      <div className="mt-4">
                        <p className="text-xs text-gray-400 font-bold mb-1 uppercase tracking-wider">From <span className="text-2xl text-[#1a1a1a] font-black">£{loc.price.split('.')[0]}</span>.00</p>
                        <button
                          onClick={() => setExpandedCard(expandedCard === loc.id ? null : loc.id)}
                          className={`w-full md:w-auto px-4 py-3 rounded-lg font-black text-sm flex items-center justify-center gap-2 transition-all ${expandedCard === loc.id ? 'bg-[#f67243] text-white' : 'bg-[#eb4408] text-white hover:brightness-110 shadow-lg shadow-[#F15A24]/20'}`}
                        >
                          View course dates
                          {expandedCard === loc.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Dates Section */}
                  {expandedCard === loc.id && (
                    <div className="mt-8 pt-8 border-t border-gray-100 space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
                      <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest mb-4">Available dates at {loc.name} (3)</p>
                      {(loc.dates || [
                        { range: "Mon 23rd Mar 2026 - Thu 26th Mar 2026", price: loc.price },
                        { range: "Mon 30th Mar 2026 - Thu 2nd Apr 2026", price: loc.price },
                        { range: "Mon 6th Apr 2026 - Thu 9th Apr 2026", price: (parseFloat(loc.price) + 10).toFixed(2) }
                      ]).map((date, idx) => (
                        <div key={idx} className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 md:p-5 bg-[#F8FAFC] rounded-xl border border-gray-100 hover:border-[#F15A24]/30 transition-all">
                          <div className="flex items-center gap-4">
                            <Calendar className="text-gray-400" size={18} />
                            <p className="text-sm font-bold text-[#1C1C1C]">
                              {date.range}
                              {date.bookingFee && <span className="ml-3 bg-[#F15A24] text-white text-[9px] px-2 py-0.5 rounded uppercase tracking-tighter">Saving fee</span>}
                            </p>
                          </div>
                          <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
                            <p className="font-bold text-[#1C1C1C]">£{date.price}</p>
                            <Link
                              to={`/booking/packages?course_name=${courseId}&postcode=${encodeURIComponent(loc.name)}`}
                              className="bg-[#F15A24] text-white px-6 py-2 rounded-lg text-xs font-black hover:brightness-110 shadow-md shadow-[#F15A24]/10 transition-all"
                            >
                              Book Now
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 py-8 border-t border-gray-100">
              <div className="bg-white p-6 rounded-2xl border border-gray-50 shadow-sm text-center">
                <GraduationCap className="mx-auto text-[#F15A24] mb-3" size={24} />
                <p className="text-[14px] font-bold text-[#1a1a1a]">95% pass rate</p>
                <p className="text-[11px] text-gray-400 font-medium">Industry leading</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-50 shadow-sm text-center">
                <Zap className="mx-auto text-[#F15A24] mb-3" size={24} />
                <p className="text-[14px] font-bold text-[#1a1a1a]">Same-day results</p>
                <p className="text-[11px] text-gray-400 font-medium">No waiting around</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-50 shadow-sm text-center">
                <Users className="mx-auto text-[#F15A24] mb-3" size={24} />
                <p className="text-[14px] font-bold text-[#1a1a1a]">3,847+ trained</p>
                <p className="text-[11px] text-gray-400 font-medium">Trust in us</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-50 shadow-sm text-center">
                <CreditCard className="mx-auto text-[#F15A24] mb-3" size={24} />
                <p className="text-[14px] font-bold text-[#1a1a1a]">Instalments</p>
                <p className="text-[11px] text-gray-400 font-medium">Flexible payments</p>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <aside className="w-full lg:w-[320px] space-y-6">
            <div className="bg-[#F15A24] rounded-2xl p-6 text-white relative overflow-hidden group shadow-lg shadow-[#F15A24]/20">
              <div className="relative z-10">
                <h3 className="text-xl font-bold leading-tight mb-4">
                  Zero Risk With<br />Training Guarantee
                </h3>
                <button className="bg-white text-[#1C1C1C] text-[13px] font-black px-6 py-3 rounded-xl hover:bg-gray-50 active:scale-95 transition-all">
                  More details
                </button>
              </div>
              <div className="absolute top-4 right-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <CheckCircle2 className="text-white" size={28} strokeWidth={3} />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
              <p className="text-sm font-medium leading-relaxed text-gray-700 mb-8 italic">
                Fantastic course. <span className="text-[#F15A24] font-bold">The instructor was very knowledgeable</span> and he spoke in a way that everyone could understand. If you didn't understand what he meant, he would find a way to explain it. It was quite an intensive course but very comprehensive.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-100" />
                <span className="font-bold text-sm">- Henry Oparaji</span>
              </div>
              <div className="flex gap-1.5 mt-8">
                <div className="w-2 h-2 rounded-full bg-[#1C1C1C]" />
                <div className="w-2 h-2 rounded-full bg-gray-200" />
                <div className="w-2 h-2 rounded-full bg-gray-200" />
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm space-y-8">
              <div className="text-center">
                <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest mb-4">Consistently rated 5-stars</p>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="text-sm font-black text-[#1C1C1C]">Excellent</span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-5 h-5 bg-[#00b67a] flex items-center justify-center">
                        <span className="text-white text-[12px]">★</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-center gap-1.5">
                  <div className="w-6 h-6 bg-[#00b67a] rounded-full flex items-center justify-center">
                    <Star size={14} className="text-white fill-white" />
                  </div>
                  <span className="text-[#1a1a1a] text-xs font-black uppercase tracking-tighter">Trustpilot</span>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-50">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <svg viewBox="0 0 24 24" className="w-5 h-5">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  <span className="font-black text-sm text-[#1C1C1C]">Google Reviews</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-4xl font-black text-[#1C1C1C]">4.9</span>
                    <div className="flex text-[#ffb800]">
                      {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                    </div>
                  </div>
                  <span className="text-[11px] text-gray-400 font-bold uppercase tracking-widest">9,511 reviews</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#FFF5F1] flex items-center justify-center shadow-inner">
                  <Phone size={24} className="text-[#F15A24] fill-current" />
                </div>
                <div>
                  <h3 className="font-black text-[#1C1C1C] text-sm uppercase tracking-wider">Need Help?</h3>
                  <p className="text-[12px] text-gray-400 font-medium">Available 24/7</p>
                </div>
              </div>
              <p className="text-xl font-black text-[#F15A24] cursor-pointer hover:underline">
                Call 0204 572 5828
              </p>
            </div>

            <div className="flex justify-center pt-4">
              <Link to="/courses" className="flex items-center gap-2 group text-gray-400 hover:text-[#F15A24] transition-colors">
                <Navigation size={14} className="rotate-270" />
                <span className="text-xs font-bold uppercase tracking-widest">Back to course search</span>
              </Link>
            </div>
          </aside>
        </div>
      </main>

      {/* Mobile Footer Spawner for Search/Filter could go here */}
    </div>
  );
};

export default CourseResults;
