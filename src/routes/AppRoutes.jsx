import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProtectedRoute from "../components/ProtectedRoute";
import Loader from "../components/ui/Loader";
import Seo from "../components/shared/Seo";
import { breadcrumbSchema } from "../utils/seo";

// Every page except the home page is loaded on demand, so a visitor only
// downloads the code for the page they open.
const Courses = lazy(() => import("../pages/courses/Courses"));
const Licenses = lazy(() => import("../pages/License"));
const Locations = lazy(() => import("../pages/Locations"));
const Careers = lazy(() => import("../pages/Careers"));
const Blog = lazy(() => import("../pages/Blog"));
const CourseDetail = lazy(() => import("../pages/courses/CourseDetail"));
const CourseBooking = lazy(() => import("../pages/courses/CourseBooking"));
const CourseResults = lazy(() => import("../pages/courses/CourseResults"));
const CoursePackages = lazy(() => import("../pages/courses/CoursePackages"));
const CourseCheckout = lazy(() => import("../pages/courses/CourseCheckout"));
const BookingSuccess = lazy(() => import("../pages/courses/BookingSuccess"));
const PaymentSuccess = lazy(() => import("../pages/courses/PaymentSuccess"));
const PaymentCancelled = lazy(() => import("../pages/courses/PaymentCancelled"));
const BlogArticle = lazy(() => import("../pages/BlogArticle"));
const BlogAuthor = lazy(() => import("../pages/BlogAuthor"));
const Signin = lazy(() => import("../pages/Authentication/Signin"));
const ResetPassword = lazy(() => import("../pages/Authentication/ResetPassword"));
const UserDashboard = lazy(() => import("../pages/Authentication/UserDashboard"));
const LicenseDetails = lazy(() => import("../pages/LicenseDetails"));
const LocationDetails = lazy(() => import("../components/locationComponents/LocationDetails"));
const CareerDetails = lazy(() => import("../pages/CareerDetails"));
const ApplyJob = lazy(() => import("../components/careerDetailsComponents/ApplyJob"));
const QuickSearch = lazy(() => import("../pages/QuickSearch"));
const TrainerProfile = lazy(() => import("../components/TrainerComponents/TrainerProfile"));
const PrivacyandPolicy = lazy(() => import("../pages/PrivacyandPolicy"));
const TermsOfServices = lazy(() => import("../pages/TermsOfServices"));
const CookiePolicy = lazy(() => import("../pages/CookiePolicy"));
const NotFound = lazy(() => import("../pages/NotFound"));
const FaqPage = lazy(() => import("../pages/FaqPage"));

const PageFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <Loader />
  </div>
);

// Booking, account and one-off pages: titled, but kept out of search results.
const Private = ({ title, children }) => (
  <>
    <Seo title={title} noindex />
    {children}
  </>
);

// Legal pages open straight into numbered sections, so the page name is
// given to search engines and screen readers as a hidden main heading.
const Legal = ({ title, description, path, children }) => (
  <>
    <Seo
      title={title}
      description={description}
      path={path}
      jsonLd={breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: title, path },
      ])}
    />
    <h1 className="sr-only">{title}</h1>
    {children}
  </>
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<PageFallback />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:courseId" element={<CourseDetail />} />
        <Route path="/course/:courseId/book" element={<Private title="Book Your Course"><CourseBooking /></Private>} />
        <Route path="/course/:courseId/:slug" element={<CourseDetail />} />
        <Route path="/booking/course" element={<Private title="Book Your Course"><CourseBooking /></Private>} />
        <Route path="/booking/results" element={<Private title="Choose a Course Date"><CourseResults /></Private>} />
        <Route path="/booking/packages" element={<Private title="Choose Your Package"><CoursePackages /></Private>} />
        <Route path="/booking/checkout" element={<Private title="Checkout"><CourseCheckout /></Private>} />
        <Route path="/booking-success" element={<Private title="Booking Confirmed"><BookingSuccess /></Private>} />
        <Route path="/booking-cancelled" element={<Private title="Booking Cancelled"><PaymentCancelled /></Private>} />
        <Route path="/payment-success" element={<Private title="Payment Successful"><PaymentSuccess /></Private>} />
        <Route path="/payment-cancelled" element={<Private title="Payment Cancelled"><PaymentCancelled /></Private>} />
        <Route path="/licences" element={<Licenses />} />
        <Route path="/licences/licencesdetails" element={<LicenseDetails />} />
        <Route path="/licences/:licenceId/:slug?" element={<LicenseDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/author/:slug" element={<BlogAuthor />} />
        <Route path="/blog/:id" element={<BlogArticle />} />
        <Route path="/blog/article/:id" element={<BlogArticle />} />
        <Route path="/faqs" element={<FaqPage />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/locations/locationdetails" element={<LocationDetails />} />
        <Route
          path="/locations/locationdetails/:courseLocationId/:slug?"
          element={<LocationDetails />}
        />
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/careerdetails/:id" element={<CareerDetails />} />
        <Route path="/careers/:id/:slug?" element={<CareerDetails />} />
        <Route path="/apply-job/:id" element={<Private title="Apply for a Job"><ApplyJob /></Private>} />
        <Route path="/quicksearch" element={<QuickSearch />} />
        <Route path="/signin" element={<Private title="Sign In"><Signin /></Private>} />
        <Route path="/reset-password" element={<Private title="Reset Password"><ResetPassword /></Private>} />
        <Route path="/trainer-profile" element={<Private title="Trainer Profile"><TrainerProfile /></Private>} />
        <Route
          path="/privacy-policy"
          element={
            <Legal
              title="Privacy Policy"
              description="How courses4me collects, uses and protects your personal data when you book courses, apply for jobs or use our website."
              path="/privacy-policy"
            >
              <PrivacyandPolicy />
            </Legal>
          }
        />
        <Route
          path="/terms-of-services"
          element={
            <Legal
              title="Terms of Service"
              description="The terms that apply when you use the courses4me website and book training courses, including payments, cancellations and refunds."
              path="/terms-of-services"
            >
              <TermsOfServices />
            </Legal>
          }
        />
        <Route
          path="/cookie-policy"
          element={
            <Legal
              title="Cookie Policy"
              description="Which cookies the courses4me website uses, why we use them and how you can manage your cookie preferences."
              path="/cookie-policy"
            >
              <CookiePolicy />
            </Legal>
          }
        />
        <Route
          path="/dashboard"
          element={
            <Private title="My Dashboard">
              <ProtectedRoute>
                <UserDashboard />
              </ProtectedRoute>
            </Private>
          }
        />

        <Route path="*" element={<Private title="Page Not Found"><NotFound /></Private>} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
