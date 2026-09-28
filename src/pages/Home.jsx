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

import Seo from "../components/shared/Seo";
import { organizationSchema, websiteSchema } from "../utils/seo";

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
      <Seo
        title="courses4me - SIA Security Courses, Licences & Jobs in the UK"
        description="Book accredited SIA security courses, first aid and professional training at centres across the UK. Get your SIA licence, find security jobs and start your career with courses4me."
        path="/"
        jsonLd={[organizationSchema, websiteSchema]}
      />
      
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
