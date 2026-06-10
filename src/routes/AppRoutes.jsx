import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Courses from "../pages/courses/Courses";
import Licenses from "../pages/License";
import Locations from "../pages/Locations";
import Careers from "../pages/Careers";
import Blog from "../pages/Blog";
import CourseDetail from "../pages/courses/CourseDetail";
import CourseBooking from "../pages/courses/CourseBooking";
import CourseResults from "../pages/courses/CourseResults";
import CoursePackages from "../pages/courses/CoursePackages";
import CourseCheckout from "../pages/courses/CourseCheckout";
import BookingSuccess from "../pages/courses/BookingSuccess";
import BlogArticle from "../pages/BlogArticle";
import Signin from "../pages/Authentication/Signin";
import ResetPassword from "../pages/Authentication/ResetPassword";
import UserDashboard from "../pages/Authentication/UserDashboard";
import ProtectedRoute from "../components/ProtectedRoute";
import LicenseDetails from "../pages/LicenseDetails";
import LocationDetails from "../components/locationComponents/LocationDetails";
import CareerDetails from "../pages/CareerDetails";
import ApplyJob from "../components/careerDetailsComponents/ApplyJob";
import QuickSearch from "../pages/QuickSearch";
import TrainerProfile from "../components/TrainerComponents/TrainerProfile";

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
      <Route path="/booking-success" element={<BookingSuccess />} />
      <Route path="/licences" element={<Licenses />} />
      <Route path="/licences/licencesdetails" element={<LicenseDetails />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/article" element={<BlogArticle />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/locations/locationdetails" element={<LocationDetails />} />
      <Route path="/locations/locationdetails/:courseLocationId" element={<LocationDetails />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/careers/careerdetails/:id" element={<CareerDetails />} />
      <Route path="/apply-job/:id" element={<ApplyJob />} />
      <Route path="/quicksearch" element={<QuickSearch />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/trainer-profile" element={<TrainerProfile />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <UserDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
