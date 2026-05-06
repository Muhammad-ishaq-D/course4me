import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import AppRoutes from './routes/AppRoutes'
import Header from './components/shared/Header'
import { BrowserRouter, useLocation } from 'react-router-dom'
import Footer from './components/shared/Footer'
import TopNav from './components/shared/TopNav'
import ScrollToTop from './components/shared/ScrollToTop'

const AppContent = () => {
  const location = useLocation();
  const isBookingPage = location.pathname.includes('/book') ||
    location.pathname.startsWith('/booking');

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <ScrollToTop />
      <Header />
      <main id="main-scroll-container" className="flex-1 overflow-y-auto">
        <AppRoutes />
        <Footer />
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
