import {
    Star,
    MapPin,
    Award,
    Users,
    ShieldCheck,
    ChevronRight,
} from "lucide-react";
import John from "../../assets/home/john.png";
import Sarah from "../../assets/home/sarah.png";
import David from "../../assets/home/david.png";
import Richard from "../../assets/home/richard.png";
import Emma from "../../assets/home/emma.png";
import Marcus from "../../assets/home/marcus.png";



const trainers = [
    {
        name: "Mr. John Redfern",
        role: "Lead Security Instructor",
        title: "Door Supervisor & Close Protection",
        experience: "20+ years",
        locations: ["London", "Manchester", "Birmingham"],
        rating: "5",
        reviews: "1,247",
        badge: "Army Veteran",
        image: John,
    },
    {
        name: "Sarah Mitchell",
        role: "Senior Training Manager",
        title: "CCTV Operations & Security Guarding",
        experience: "15+ years",
        locations: ["Leeds", "Sheffield", "Nottingham"],
        rating: "4.9",
        reviews: "983",
        badge: "Ex-Police",
        image: Sarah,
    },
    {
        name: "David Okonkwo",
        role: "Security Training Specialist",
        title: "Door Supervisor & Conflict Management",
        experience: "12+ years",
        locations: ["Glasgow", "Edinburgh", "Newcastle"],
        rating: "4.9",
        reviews: "756",
        badge: "Top Rated",
        image: David,
    },
    {
        name: "Richard Clarke",
        role: "Close Protection Instructor",
        title: "Close Protection & First Aid",
        experience: "18+ years",
        locations: ["London", "Bristol", "Cardiff"],
        rating: "4.8",
        reviews: "612",
        badge: "Royal Marines",
        image: Richard,
    },
    {
        name: "Emma Whitfield",
        role: "Training & Compliance Lead",
        title: "Security Guarding & Compliance",
        experience: "14+ years",
        locations: ["Manchester", "Liverpool", "Birmingham"],
        rating: "4.9",
        reviews: "891",
        badge: "SIA Expert",
        image: Emma,
    },
    {
        name: "Marcus Thompson",
        role: "Instructor & Career Coach",
        title: "Door Supervisor & Career Development",
        experience: "10+ years",
        locations: ["London", "Southampton", "Brighton"],
        rating: "4.8",
        reviews: "534",
        badge: "Career Coach",
        image: Marcus,
    },
];

export default function TrainersSection() {
    return (
        <section className="bg-white text-[#1A1A1A] py-24 px-6">
            <div className="max-w-7xl mx-auto">

                <div className="flex justify-center mb-6">
                    <span className="flex items-center gap-2 bg-[#1A1A1A] text-white px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase shadow-md">
                        <Users size={16} className="text-[#00A3FF]" /> OUR TEAM
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-center text-[44px] md:text-[52px] font-bold mb-6 tracking-tight">
                    Meet Our Trainers
                </h2>

                <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg font-medium">
                    Industry veterans and certified professionals who are passionate
                    about launching your career in security. Every trainer is 5-star rated.
                </p>

                {/* Stats */}
                <div className="flex justify-center gap-4 flex-wrap mb-20">

                    <div className="flex items-center gap-2 bg-white text-[#1A1A1A] border border-gray-100 px-6 py-2.5 rounded-full text-sm font-bold shadow-sm">
                        <Award className="text-[#00A3FF] " size={18} />
                        80+ Years Combined Experience
                    </div>

                    <div className="flex items-center gap-2 bg-white text-[#1A1A1A] border border-gray-100 px-6 py-2.5 rounded-full text-sm font-bold shadow-sm">
                        <Star className="text-[#FF5421] " size={18} fill="#FF5421" />
                        4.9 Average Rating
                    </div>

                    <div className="flex items-center gap-2 bg-white text-[#1A1A1A] border border-gray-100 px-6 py-2.5 rounded-full text-sm font-bold shadow-sm">
                        <Users className="text-[#00A3FF] " size={18} />
                        5,000+ Reviews
                    </div>

                </div>

                {/* Trainer Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {trainers.map((trainer, i) => (
                        <TrainerCard key={i} trainer={trainer} />
                    ))}

                </div>
            </div>
        </section>
    );
}

function TrainerCard({ trainer }) {
    return (
        <div className="bg-white text-[#1A1A1A] rounded-[32px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] transition-all duration-300">

            {/* Image */}
            <div className="relative h-72">

                <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover"
                />

                {/* Badge */}
                <span className="absolute top-5 left-5 bg-[#00A3FF] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-1.5">
                    <ShieldCheck size={12} />
                    {trainer.badge}
                </span>

                {/* Rating */}
                <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-xs font-bold shadow-md">
                    <Star size={14} className="text-[#FF5421] fill-[#FF5421] " />
                    {trainer.rating}
                </div>

                {/* Name Overlay */}
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                    <h3 className="font-bold text-xl mb-0.5">{trainer.name}</h3>
                    <p className="text-sm text-gray-300 font-medium">{trainer.role}</p>
                </div>
            </div>

            {/* Content */}
            <div className="p-8">

                <h4 className="font-bold text-lg mb-3 tracking-tight">{trainer.title}</h4>

                {/* Stars */}
                <div className="flex items-center gap-1.5 text-[#FF5421]  mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={16} fill="#FF5421" stroke="none" />
                    ))}
                    <span className="text-gray-500 text-xs font-bold ml-2">
                        ({trainer.reviews} reviews)
                    </span>
                </div>

                {/* Experience + Locations */}
                <div className="flex items-center gap-6 text-sm text-gray-500 font-bold mb-6">

                    <div className="flex items-center gap-2">
                        <Award size={18} className="text-[#00A3FF]" />
                        {trainer.experience}
                    </div>

                    <div className="flex items-center gap-2">
                        <MapPin size={18} className="text-[#00A3FF]" />
                        3 locations
                    </div>

                </div>

                {/* City tags */}
                <div className="flex flex-wrap gap-2.5 mb-8">
                    {trainer.locations.map((city, i) => (
                        <span
                            key={i}
                            className="bg-[#F3F4F6] text-gray-600 px-4 py-1.5 rounded-full text-[11px] font-bold border border-gray-100"
                        >
                            {city}
                        </span>
                    ))}
                </div>

                {/* Button */}
                <button className="group w-full border-2 border-gray-100 rounded-full py-3.5 text-sm font-bold text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A] transition-all duration-300 flex items-center justify-center gap-2">
                    View Full Profile
                    <ChevronRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
            </div>
        </div>
    );
}