import React, { useState } from "react";
import TopNav from "../../components/shared/TopNav";
import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";
import OverviewTab from "./components/OverviewTab";
import SettingsTab from "./components/SettingsTab";
import { LogOut, LayoutDashboard, Settings } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate, useSearchParams } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";

const UserDashboard = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "overview";
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const setActiveTab = (tab) => {
    setSearchParams({ tab });
  };

  const handleLogout = () => {
    logout();
    navigate("/signin");
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <div className="relative overflow-hidden bg-[#111111]">
        {/* BACKGROUND GLOWS */}
        <div className="absolute top-[-120px] right-[-100px] w-[320px] h-[320px] bg-[#F15A24]/20 blur-[120px] rounded-full" />

        <div className="absolute bottom-[-120px] left-[-100px] w-[320px] h-[320px] bg-blue-500/10 blur-[120px] rounded-full" />

        {/* DARK GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E1E1E] via-[#161616] to-[#111111]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
          {/* ================= TOP SECTION ================= */}
          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-10">
            {/* ================= LEFT SIDE ================= */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 lg:gap-8">
              {/* PROFILE IMAGE */}
              <div className="relative shrink-0 mx-auto sm:mx-0">
                <div className="w-32 h-32  md:w-28 md:h-28 rounded-full overflow-hidden border-[5px] border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.45)] bg-[#F15A24]">
                  <img
                    src={user?.profileImage}
                    alt={user?.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* ONLINE STATUS */}
                <div className="absolute bottom-2 right-2 w-6 h-6 rounded-full bg-green-500 border-4 border-[#111111]" />
              </div>

              {/* ================= USER INFO ================= */}
              <div className="text-center sm:text-left flex-1">
                {/* TOP BADGE */}
                <div className="inline-flex items-center gap-2 bg-[#F15A24]/10 border border-[#F15A24]/20 text-[#F15A24] text-sm font-semibold px-4 py-2 rounded-full backdrop-blur-sm">
                  Student Dashboard
                </div>

                {/* NAME */}
                <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  Welcome back,
                  <span className="text-[#F15A24] block sm:inline sm:ml-3">
                    {user?.name || "Student"}
                  </span>
                </h1>

                {/* EMAIL */}
                <p className="text-gray-400 text-base sm:text-lg mt-4 font-medium break-all">
                  {user?.email}
                </p>

                {/* EXTRA INFO */}
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-5">
                  <div className="flex items-center gap-2 text-sm md:text-base text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    Active Account
                  </div>

                  <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-600" />

                  <div className="text-sm md:text-base text-gray-400">
                    Courses4me Member
                  </div>
                </div>
              </div>
            </div>

            {/* ================= RIGHT SIDE ================= */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              {/* STATS CARD */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl px-6 py-5 text-center min-w-[170px]">
                <p className="text-gray-400 text-base font-medium">
                  Profile Status
                </p>

                <h3 className="text-[#F15A24] text-3xl font-extrabold mt-2">
                  100%
                </h3>

                <p className="text-sm text-gray-500 mt-1">Completed</p>
              </div>

              {/* LOGOUT BUTTON
              <button
                onClick={handleLogout}
                className="group flex items-center gap-3 bg-white/5 hover:bg-red-500 text-white px-7 py-4 rounded-2xl transition-all duration-300 border border-white/10 font-bold backdrop-blur-sm"
              >
                <LogOut
                  size={20}
                  className="text-gray-400 group-hover:text-white group-hover:-translate-x-1 transition-all"
                />
                Sign Out
              </button> */}
            </div>
          </div>

          {/* ================= TABS ================= */}
          <div className="mt-12 flex flex-wrap items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 w-fit p-2 rounded-2xl">
            {/* OVERVIEW */}
            <button
              onClick={() => setActiveTab("overview")}
              className={`flex items-center gap-2.5 cursor-pointer px-6 sm:px-8 py-3 rounded-xl font-bold transition-all duration-300 ${
                activeTab === "overview"
                  ? "bg-[#F15A24] text-white  shadow-[0_10px_30px_rgba(241,90,36,0.35)]"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <LayoutDashboard size={20} />
              Overview
            </button>

            {/* SETTINGS */}
            <button
              onClick={() => setActiveTab("settings")}
              className={`flex items-center gap-2.5 px-6 cursor-pointer sm:px-8 py-3 rounded-xl font-bold transition-all duration-300 ${
                activeTab === "settings"
                  ? "bg-[#F15A24] text-white shadow-[0_10px_30px_rgba(241,90,36,0.35)]"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Settings size={20} />
              Settings
            </button>
          </div>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
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
