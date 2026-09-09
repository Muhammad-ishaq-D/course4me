import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/shared/Header";
import { BrowserRouter, useLocation } from "react-router-dom";
import Footer from "./components/shared/Footer";
import ScrollToTop from "./components/shared/ScrollToTop";

import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
import CookieConsent from "./components/ui/CookieConsent";
import { HelmetProvider } from "react-helmet-async";

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
    <HelmetProvider>
      <BrowserRouter>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
