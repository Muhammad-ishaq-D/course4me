import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Courses from "../pages/Courses";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      {/* <Route path="/licences" element={<Licences />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/careers" element={<Careers />} /> */}
    </Routes>
  );
};

export default AppRoutes;