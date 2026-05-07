import React, { useState, useEffect } from "react";
import {
  Bell,
  Award,
  CheckCircle,
  Calendar,
  MapPin,
  Clock,
  ChevronRight,
  BookOpen,
  HelpCircle,
  MessageSquare,
  Phone,
  Download,
  Loader2
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import courseService from "../../../api/services/courseService";

const OverviewTab = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    upcoming: [],
    completed: [],
    stats: [
      { label: "Upcoming", value: "0", color: "text-orange-500" },
      { label: "Completed", value: "0", color: "text-green-500" },
      { label: "Certificates", value: "0", color: "text-blue-500" },
      { label: "Avg Score", value: "0%", color: "text-purple-500" },
    ]
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await courseService.getUserCourses();
        if (result) {
          setData({
            upcoming: result.upcoming || [],
            completed: result.completed || [],
            stats: [
              { label: "Upcoming", value: result.stats?.upcomingCount || "0", color: "text-orange-500" },
              { label: "Completed", value: result.stats?.completedCount || "0", color: "text-green-500" },
              { label: "Certificates", value: result.stats?.certificateCount || "0", color: "text-blue-500" },
              { label: "Avg Score", value: `${result.stats?.avgScore || 0}%`, color: "text-purple-500" },
            ]
          });
        }
      } catch (error) {
        console.error("Failed to fetch dashboard data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="animate-spin text-orange-600 w-10 h-10" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-8 space-y-6">
        {/* Alerts */}
        <div className="space-y-3">
          {data.upcoming.length > 0 && (
            <div className="flex items-center justify-between p-4 bg-blue-50 border border-blue-100 rounded-xl text-blue-800 shadow-sm transition-all hover:shadow-md group">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg group-hover:scale-110 transition-transform">
                  <Bell size={18} className="text-blue-600" />
                </div>
                <p className="font-medium">Your {data.upcoming[0].title} course starts soon</p>
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              </div>
              <button className="text-blue-400 hover:text-blue-600">×</button>
            </div>
          )}

          {data.completed.length > 0 && (
            <div className="flex items-center justify-between p-4 bg-green-50 border border-green-100 rounded-xl text-green-800 shadow-sm transition-all hover:shadow-md group">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg group-hover:scale-110 transition-transform">
                  <Award size={18} className="text-green-600" />
                </div>
                <p className="font-medium">New certificate is ready to download</p>
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              </div>
              <button className="text-green-400 hover:text-green-600">×</button>
            </div>
          )}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {data.stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all text-center">
              <h3 className={`text-3xl font-extrabold ${stat.color} mb-1`}>{stat.value}</h3>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Upcoming Courses */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="text-[#F15A24]" size={20} />
            <h2 className="text-xl font-bold text-gray-800">Upcoming Courses</h2>
          </div>
          <div className="space-y-4">
            {data.upcoming.length > 0 ? (
              data.upcoming.map((course) => (
                <div key={course.id} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg text-gray-900">{course.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1.5"><Calendar size={14} /> {course.date}</span>
                      <span className="flex items-center gap-1.5"><Clock size={14} /> {course.time}</span>
                      <span className="flex items-center gap-1.5"><MapPin size={14} /> {course.location}</span>
                    </div>
                  </div>
                  <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide ${course.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                    {course.status}
                  </span>
                </div>
              ))
            ) : (
              <div className="bg-white p-10 rounded-2xl border border-dashed border-gray-200 text-center text-gray-500">
                <BookOpen className="mx-auto mb-4 text-gray-300" size={40} />
                No upcoming courses. <button onClick={() => navigate('/courses')} className="text-orange-600 font-bold hover:underline">Book a course</button>
              </div>
            )}
          </div>
        </section>

        {/* Completed Courses */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle className="text-[#F15A24]" size={20} />
            <h2 className="text-xl font-bold text-gray-800">Completed Courses</h2>
          </div>
          <div className="space-y-4">
            {data.completed.length > 0 ? (
              data.completed.map((course) => (
                <div key={course.id} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-lg text-gray-900">{course.title}</h3>
                      <span className="text-[#F15A24] font-bold text-lg">{course.score}%</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1.5"><Calendar size={14} /> {course.date}</span>
                      <span className="flex items-center gap-1.5"><MapPin size={14} /> {course.location}</span>
                    </div>
                    <button className="mt-3 flex items-center gap-2 text-[#F15A24] font-semibold text-sm hover:underline">
                      <Download size={14} /> Download Certificate
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white p-10 rounded-2xl border border-dashed border-gray-200 text-center text-gray-500">
                <Award className="mx-auto mb-4 text-gray-300" size={40} />
                No completed courses yet.
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Sidebar */}
      <div className="lg:col-span-4 space-y-6">
        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="text-[#F15A24]" size={20} />
            <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide">Quick Actions</h2>
          </div>
          <div className="space-y-2">
            {[
              { label: "Book New Course", icon: <Calendar size={18} />, action: () => navigate('/courses') },
              { label: "Check Results", icon: <Award size={18} /> },
              { label: "FAQs", icon: <HelpCircle size={18} /> },
              { label: "Contact Support", icon: <MessageSquare size={18} /> },
            ].map((action, idx) => (
              <button
                key={idx}
                onClick={action.action}
                className="w-full flex items-center justify-between p-3.5 rounded-xl hover:bg-gray-50 transition-colors group"
              >
                <div className="flex items-center gap-3 text-gray-700 font-medium group-hover:text-[#F15A24] transition-colors">
                  <span className="text-gray-400 group-hover:text-[#F15A24]">{action.icon}</span>
                  {action.label}
                </div>
                <ChevronRight size={16} className="text-gray-300 group-hover:translate-x-1 transition-transform" />
              </button>
            ))}
          </div>
        </div>

        {/* Need Help Card */}
        <div className="bg-[#2D2D2D] p-8 rounded-3xl text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#F15A24]/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
          <h2 className="text-2xl font-bold mb-2">Need Help?</h2>
          <p className="text-gray-400 text-sm mb-6 leading-relaxed">
            Our support team is available Mon-Fri 8am-6pm to assist you with any questions.
          </p>
          <button className="w-full bg-[#F15A24] hover:bg-[#D94E1F] text-white font-bold py-4 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-3">
            <Phone size={20} />
            Call 08006894621
          </button>
        </div>
      </div>
    </div>
  );
};

export default OverviewTab;
