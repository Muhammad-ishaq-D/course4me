import React,{useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HeroSection from "../components/homeComponents/HeroSection";
import HiringTrainingSection from "../components/homeComponents/HiringTrainingSection";
import CoursesLicencesSection from "../components/homeComponents/CoursesLicencesSection";
import CareerEarningSection from "../components/homeComponents/CareerEarningSection";
import TestimonialsSection from "../components/homeComponents/TestimonialsSection";
import WhyChooseSection from "../components/homeComponents/WhyChooseSection";
import AppDownloadSection from "../components/homeComponents/AppDownloadSection";
import TrainersSection from "../components/homeComponents/TrainersSection";
import BlogSection from "../components/homeComponents/BlogSection";
import TrainingPreviewSection from "../components/homeComponents/TrainingPreviewSection";
import VideoTestimonials from "../components/homeComponents/VideoTestimonials";
import AppPromotionSection from "../components/homeComponents/AppPromotionSection";
import StatsBar from "../components/homeComponents/StatsBar";

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
      <HeroSection />
      <StatsBar />
      <HiringTrainingSection />
      <CoursesLicencesSection />
      <WhyChooseSection />
      {/* <TrainingPreviewSection /> */}
      {/* <CareerEarningSection /> */}
      <VideoTestimonials />
      <TestimonialsSection />
      <TrainersSection />
      {/* <BlogSection /> */}
      {/* <AppPromotionSection /> */}
      <AppDownloadSection />
    </div>
  );
}
