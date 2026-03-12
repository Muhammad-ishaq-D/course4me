import { Play, Star } from "lucide-react";
import jamesOkonkwo from "../../assets/home/James Okonkwo.png";
import sarahMitchell from "../../assets/home/Sarah Mitchell.png";
import emilyChen from "../../assets/home/Emily Chen.png";
import davidOsei from "../../assets/home/David Osei.png";

export default function VideoTestimonials() {

    const testimonials = [
        {
            role: "Door Supervisor",
            duration: "2:34",
            name: "James Okonkwo",
            job: "Door Supervisor — London",
            quote:
                "I went from zero experience to earning £18/hour as a door supervisor in just 3 months.",
            img: jamesOkonkwo
        },
        {
            role: "CCTV Operator",
            duration: "3:12",
            name: "Sarah Mitchell",
            job: "CCTV Operator — Manchester",
            quote:
                "The CCTV course opened doors I never expected. Now I work in corporate security.",
            img: sarahMitchell
        },
        {
            role: "Close Protection",
            duration: "1:58",
            name: "Emily Chen",
            job: "Security Consultant — Birmingham",
            quote:
                "From student to consultant in under a year. The comprehensive training gave me confidence.",
            img: emilyChen
        },
        {
            role: "Door Supervisor",
            duration: "2:47",
            name: "David Osei",
            job: "Event Security Lead — Leeds",
            quote:
                "I now lead a team of 20 at major UK events. It all started with a single certification.",
            img: davidOsei
        }
    ];

    const stats = [
        { number: "400,000+", label: "Professionals Trained" },
        { number: "95%", label: "First-Time Pass Rate" },
        { number: "4.9★", label: "Average Rating" },
        { number: "85+", label: "UK Locations" }
    ];

    return (
        <section className="bg-[#1A1A1A] text-white py-24 relative overflow-hidden">
            {/* Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF5421] opacity-5 blur-[150px] -mr-64 -mt-64"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00A3FF] opacity-5 blur-[150px] -ml-64 -mb-64"></div>

            <div className="max-w-[1300px] mx-auto px-6 relative z-10">

                {/* Top Badge */}
                <div className="flex justify-center mb-6">
                    <div className="flex items-center gap-2 border border-[#00A3FF33] bg-[#00A3FF0A] text-[#00A3FF] px-5 py-2 rounded-full text-sm font-bold shadow-sm">
                        <Play size={14} className="fill-[#00A3FF]" />
                        Video Testimonials
                    </div>
                </div>

                {/* Heading */}
                <h2 className="text-center text-[48px] font-bold mb-5 leading-tight">
                    Hear From Our{" "}
                    <span className="text-[#FF5421]">Success Stories</span>
                </h2>

                {/* Subtitle */}
                <p className="text-center text-gray-400 max-w-[650px] mx-auto mb-16 text-lg">
                    Real students, real results. Watch how our graduates transformed their
                    careers in the security industry.
                </p>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">

                    {testimonials.map((t, i) => (
                        <div key={i} className="group cursor-pointer">

                            <div className="relative rounded-[24px] overflow-hidden shadow-2xl">

                                <img
                                    src={t.img}
                                    className="w-full h-[360px] object-cover group-hover:scale-105 transition duration-700"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                                {/* Role Badge */}
                                <div className="absolute top-4 left-4 bg-[#00A3FF] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-lg">
                                    {t.role}
                                </div>

                                {/* Duration */}
                                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1.5 rounded-lg border border-white/10">
                                    {t.duration}
                                </div>

                                {/* Play Button */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-[#FF5421] w-14 h-14 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition duration-300">
                                        <Play size={22} fill="white" className="text-white" />
                                    </div>
                                </div>

                                {/* Bottom Info */}
                                <div className="absolute bottom-5 left-5 right-5">

                                    <div className="flex text-[#FF5421] mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={14} fill="currentColor" stroke="none" />
                                        ))}
                                    </div>

                                    <h4 className="font-bold text-white text-lg">{t.name}</h4>
                                    <p className="text-sm text-gray-300 font-medium">{t.job}</p>

                                </div>
                            </div>

                            {/* Quote */}
                            <p className="text-gray-400 text-sm mt-5 leading-relaxed">
                                "{t.quote}"
                            </p>

                        </div>
                    ))}

                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                    {stats.map((s, i) => (
                        <div
                            key={i}
                            className="border border-white/5 rounded-2xl py-8 text-center bg-white/5 backdrop-blur-sm shadow-inner"
                        >
                            <h3 className="text-[#FF5421] text-3xl font-bold mb-2">
                                {s.number}
                            </h3>
                            <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">{s.label}</p>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}