import React,{useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HeroSection from "../components/homeComponents/HeroSection";
import HiringTrainingSection from "../components/homeComponents/HiringTrainingSection";
import CoursesLicencesSection from "../components/homeComponents/CoursesLicencesSection";
import TestimonialsSection from "../components/homeComponents/TestimonialsSection";
import WhyChooseSection from "../components/homeComponents/WhyChooseSection";
import AppDownloadSection from "../components/homeComponents/AppDownloadSection";
import TrainersSection from "../components/homeComponents/TrainersSection";
import VideoTestimonials from "../components/homeComponents/VideoTestimonials";
import StatsBar from "../components/homeComponents/StatsBar";

import { Helmet } from "react-helmet-async";

export default function Home() {
   const location = useLocation();
   const navigate = useNavigate();

   useEffect(() => {
     if (location.state?.scrollTo) {
       const section = document.getElementById(location.state.scrollTo);

       if (section) {
         section.scrollIntoView({
           behavior: "smooth",
           block: "start",
         });
       }

       // Clear the state so it doesn't scroll again on refresh
       navigate(location.pathname, {
         replace: true,
         state: {},
       });
     }
   }, [location, navigate]);
   
  return (
    <div className="">
      <Helmet>
        
        <title>courses4me | Professional Training Courses</title>
        <meta
          name="description"
          content="Explore accredited courses and training certifications across the UK with Courses4me."
        />
        {/* Fixes Missing Canonical URL Tag */}
        <link rel="canonical" href="https://courses4me.co.uk/" />
      </Helmet>
      
      <HeroSection />
      <StatsBar />
      <HiringTrainingSection />
      <CoursesLicencesSection />
      <WhyChooseSection />
      <VideoTestimonials />
      <TestimonialsSection />
      <TrainersSection />
      <AppDownloadSection />
    </div>
  );
}
