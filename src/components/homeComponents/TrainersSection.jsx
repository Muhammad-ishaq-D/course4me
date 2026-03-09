import {
    Star,
    MapPin,
    Award,
    Users,
    ShieldCheck
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
        <section className="bg-gradient-to-b from-[#F9FAFB] to-[#FFFFFF] text-black py-20 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Badge */}
                <div className="flex justify-center mb-4">
                    <span className="flex items-center gap-2 bg-black text-[#B9FF5A] px-4 py-1 rounded-full text-sm">
                        <Users size={16} /> OUR TEAM
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-center text-4xl font-bold mb-4">
                    Meet Our Trainers
                </h2>

                <p className="text-center text-gray-700 max-w-2xl mx-auto mb-8">
                    Industry veterans and certified professionals who are passionate
                    about launching your career in security. Every trainer is 5-star rated.
                </p>

                {/* Stats */}
                <div className="flex justify-center gap-4 flex-wrap mb-14">

                    <div className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full text-sm font-medium">
                        <Award className="text-[#B9FF5A]" size={16} />
                        80+ Years Combined Experience
                    </div>

                    <div className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full text-sm font-medium">
                        <Star className="text-[#B9FF5A]" size={16} />
                        4.9 Average Rating
                    </div>

                    <div className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full text-sm font-medium">
                        <Users className="text-[#B9FF5A]" size={16} />
                        5,000+ Reviews
                    </div>

                </div>

                {/* Trainer Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

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
        <div className="bg-white text-black rounded-2xl overflow-hidden shadow-xl">

            {/* Image */}
            <div className="relative h-64">

                <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover"
                />

                {/* Badge */}
                <span className="absolute top-4 left-4 bg-[#B9FF5A] text-black text-xs font-semibold px-3 py-1 rounded-full">
                    {trainer.badge}
                </span>

                {/* Rating */}
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1 text-sm">
                    <Star size={14} className="text-[#B9FF5A] fill-[#B9FF5A]" />
                    {trainer.rating}
                </div>

                {/* Name Overlay */}
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                    <h3 className="font-semibold text-lg">{trainer.name}</h3>
                    <p className="text-sm text-gray-200">{trainer.role}</p>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">

                <h4 className="font-semibold mb-2">{trainer.title}</h4>

                {/* Stars */}
                <div className="flex items-center gap-1 text-[#B9FF5A] mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={16} fill="#B9FF5A" />
                    ))}
                    <span className="text-gray-500 text-sm ml-2">
                        ({trainer.reviews})
                    </span>
                </div>

                {/* Experience + Locations */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">

                    <div className="flex items-center gap-1">
                        <ShieldCheck size={16} />
                        {trainer.experience}
                    </div>

                    <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        3 locations
                    </div>

                </div>

                {/* City tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                    {trainer.locations.map((city, i) => (
                        <span
                            key={i}
                            className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs"
                        >
                            {city}
                        </span>
                    ))}
                </div>

                {/* Button */}
                <button className="w-full border border-gray-300 rounded-full py-3 text-sm font-medium hover:bg-gray-50 transition">
                    View Full Profile →
                </button>
            </div>
        </div>
    );
}