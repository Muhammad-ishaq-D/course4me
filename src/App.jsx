import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/shared/Header";
import { BrowserRouter, useLocation } from "react-router-dom";
import Footer from "./components/shared/Footer";
import TopNav from "./components/shared/TopNav";
import ScrollToTop from "./components/shared/ScrollToTop";

import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
import CookieConsent from "./components/ui/CookieConsent";

const AppContent = () => {
  const location = useLocation();
  const isBookingPage =
    location.pathname.includes("/book") ||
    location.pathname.startsWith("/booking");

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Toaster position="top-center" />
      <CookieConsent />
      <ScrollToTop />
      <Header />
      <main id="main-scroll-container" className="flex-1 overflow-y-auto">
        <AppRoutes />
        <Footer />
      </main>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
