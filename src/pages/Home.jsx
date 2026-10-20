import React, { lazy, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HeroSection from "../components/homeComponents/HeroSection";
import HiringTrainingSection from "../components/homeComponents/HiringTrainingSection";
import StatsBar from "../components/homeComponents/StatsBar";
import LazySection from "../components/shared/LazySection";

import Seo from "../components/shared/Seo";
import { organizationSchema, websiteSchema } from "../utils/seo";

// Sections below the first screen load as the visitor scrolls towards them.
const CoursesLicencesSection = lazy(() => import("../components/homeComponents/CoursesLicencesSection"));
const WhyChooseSection = lazy(() => import("../components/homeComponents/WhyChooseSection"));
const VideoTestimonials = lazy(() => import("../components/homeComponents/VideoTestimonials"));
const TestimonialsSection = lazy(() => import("../components/homeComponents/TestimonialsSection"));
const TrainersSection = lazy(() => import("../components/homeComponents/TrainersSection"));
const AppDownloadSection = lazy(() => import("../components/homeComponents/AppDownloadSection"));

export default function Home() {
   const location = useLocation();
   const navigate = useNavigate();
   // Coming back to a section (e.g. from a trainer profile): render everything
   // at once so the target exists, then scroll to it.
   const scrollTarget = location.state?.scrollTo;

   useEffect(() => {
     if (!scrollTarget) return undefined;

     // The target may still be loading; keep looking for up to 5 seconds.
     let tries = 0;
     const timer = setInterval(() => {
       const section = document.getElementById(scrollTarget);
       if (section || ++tries > 50) {
         clearInterval(timer);
         section?.scrollIntoView({ behavior: "smooth", block: "start" });
         // Clear the state so it doesn't scroll again on refresh
         navigate(location.pathname, { replace: true, state: {} });
       }
     }, 100);
     return () => clearInterval(timer);
   }, [scrollTarget, location.pathname, navigate]);

  const eager = Boolean(scrollTarget);

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
      <LazySection eager={eager} minHeight={900}>
        <CoursesLicencesSection />
      </LazySection>
      <LazySection eager={eager} minHeight={800}>
        <WhyChooseSection />
      </LazySection>
      <LazySection eager={eager} minHeight={700}>
        <VideoTestimonials />
      </LazySection>
      <LazySection eager={eager} minHeight={800}>
        <TestimonialsSection />
      </LazySection>
      <LazySection eager={eager} minHeight={700}>
        <TrainersSection />
      </LazySection>
      <LazySection eager={eager} minHeight={600}>
        <AppDownloadSection />
      </LazySection>
    </div>
  );
}
