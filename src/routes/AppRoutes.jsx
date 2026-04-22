import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Courses from "../pages/Courses";
import Licenses from "../pages/License";
import Locations from "../pages/Locations";
import Careers from "../pages/Careers";
import Blog from "../pages/Blog";
import CourseDetail from "../pages/CourseDetail";
import CourseBooking from "../pages/CourseBooking";
import CourseResults from "../pages/CourseResults";
import CoursePackages from "../pages/CoursePackages";
import CourseCheckout from "../pages/CourseCheckout";
import BlogArticle from "../pages/BlogArticle";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/course/:courseId" element={<CourseDetail />} />
      <Route path="/course/:courseId/book" element={<CourseBooking />} />
      <Route path="/booking/course" element={<CourseBooking />} />
      <Route path="/booking/results" element={<CourseResults />} />
      <Route path="/booking/packages" element={<CoursePackages />} />
      <Route path="/booking/checkout" element={<CourseCheckout />} />
      <Route path="/licences" element={<Licenses />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/article" element={<BlogArticle />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/careers" element={<Careers />} />
    </Routes>
  );
};

export default AppRoutes;