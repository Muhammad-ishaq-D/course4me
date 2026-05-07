import React, { useState } from "react";
import TopNav from "../../components/shared/TopNav";
import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";
import OverviewTab from "./components/OverviewTab";
import SettingsTab from "./components/SettingsTab";
import { LogOut, LayoutDashboard, Settings } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/signin");
  };

  // Extract initials for avatar
  const getInitials = (name) => {
    if (!name) return "U";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">


      {/* User Banner */}
      <div className="bg-[#1E1E1E] text-white pt-16 pb-8 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
            <div className="flex items-center gap-8">
              <div className="relative">
                <div className="w-24 h-24 bg-[#F15A24] rounded-full flex items-center justify-center text-3xl font-bold text-white shadow-2xl border-[6px] border-[#2D2D2D]">
                  {getInitials(user?.name)}
                </div>
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 border-4 border-[#1E1E1E] rounded-full"></div>
              </div>
              <div>
                <h1 className="text-4xl font-extrabold tracking-tight">
                  Welcome back, <span className="text-[#F15A24]">{user?.name || "Student"}</span>
                </h1>
                <p className="text-gray-400 text-lg mt-1 font-medium">{user?.email}</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 bg-white/5 hover:bg-white/10 text-white px-8 py-3 rounded-xl transition-all border border-white/10 font-bold group backdrop-blur-sm self-start md:self-center"
            >
              <LogOut size={20} className="text-gray-400 group-hover:text-white group-hover:-translate-x-1 transition-all" />
              Sign Out
            </button>
          </div>

          {/* Tabs Navigation */}
          <div className="flex items-center gap-2 bg-[#2D2D2D] w-fit p-1.5 rounded-2xl border border-gray-800/50 shadow-inner">
            <button
              onClick={() => setActiveTab("overview")}
              className={`flex items-center gap-2.5 px-8 py-3 rounded-xl font-bold transition-all duration-300 ${activeTab === "overview"
                ? "bg-[#F15A24] text-white shadow-[0_8px_20px_-6px_rgba(241,90,36,0.5)]"
                : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
            >
              <LayoutDashboard size={20} />
              Overview
            </button>
            <button
              onClick={() => setActiveTab("settings")}
              className={`flex items-center gap-2.5 px-8 py-3 rounded-xl font-bold transition-all duration-300 ${activeTab === "settings"
                ? "bg-[#F15A24] text-white shadow-[0_8px_20px_-6px_rgba(241,90,36,0.5)]"
                : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
            >
              <Settings size={20} />
              Settings
            </button>
          </div>
        </div>
      </div>

      {/* Tab Content with Animation */}
      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {activeTab === "overview" ? <OverviewTab /> : <SettingsTab />}
          </motion.div>
        </AnimatePresence>
      </main>


    </div>
  );
};

export default UserDashboard;
