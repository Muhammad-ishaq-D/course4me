import { Calendar, GraduationCap, FileDown, Bell } from "lucide-react";

const LoginInfo = () => {
  const cards = [
    {
      id: 1,
      text: "Manage Bookings",
      icon: <Calendar className="text-orange-500 w-5 h-5" />,
    },
    {
      id: 2,
      text: "View Results",
      icon: <GraduationCap className="text-orange-500 w-5 h-5" />,
    },
    {
      id: 3,
      text: "Download Certificates",
      icon: <FileDown className="text-orange-500 w-5 h-5" />,
    },
    {
      id: 4,
      text: "Course Reminders",
      icon: <Bell className="text-orange-500 w-5 h-5" />,
    },
  ];
  return (
    <>
      {/* LEFT SECTION: Portal Text + Cards */}
      <div className=" hidden md:block text-left space-y-10">
        <div>
          <span className="inline-block bg-orange-950/50 text-orange-500 text-xs font-bold px-4 py-1.5 rounded-full border border-orange-500/30 mb-6">
            🎓 Student Access
          </span>
          <h1 className="text-white text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
            Student <span className="text-orange-500">Portal</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-md leading-relaxed opacity-80">
            Access your courses, results, certificates, and manage your bookings
            all in one place.
          </p>
        </div>

        {/* Cards Grid inside Left Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex items-center gap-4 p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl shadow-sm hover:bg-white/10 transition-all group"
            >
              <div className="bg-orange-500/10 p-2.5 rounded-xl group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <span className="text-sm font-semibold text-gray-200">
                {card.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LoginInfo;
