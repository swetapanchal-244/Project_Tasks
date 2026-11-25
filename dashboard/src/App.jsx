import { lazy, Suspense } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import Notification from "./components/Notification";
import ScrollToTop from "./components/ScrollToTop";
import ThemeToggle from "./components/ThemeToggle";
import WhatsAppButton from "./components/WhatsAppButton";
import PageLoader from "./components/PageLoader";

const RoleSelection = lazy(() => import("./pages/RoleSelection"));
const DonorHome = lazy(() => import("./pages/DonorHome"));
const PatientDashboard = lazy(() => import("./pages/PatientDashboard"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const Profile = lazy(() => import("./pages/Profile"));
const BloodStock = lazy(() => import("./pages/BloodStock"));
const DonationRequest = lazy(() => import("./pages/DonationRequest"));
const BloodRequest = lazy(() => import("./pages/BloodRequest"));
const DonorScheduling = lazy(() => import("./pages/DonorScheduling"));
const Registration = lazy(() => import("./pages/Registration"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const DonorProfile = lazy(() => import("./pages/DonorProfile"));
const BloodAvailability = lazy(() => import("./pages/BloodAvailability"));
const SkeletonDemo = lazy(() => import("./pages/SkeletonDemo"));
const DonationHistory = lazy(() => import("./pages/DonationHistory"));
const BloodBankMap = lazy(() => import("./pages/BloodBankMap"));
const AlertDemo = lazy(() => import("./pages/ALertDemo"));
const PatientRequestHistory = lazy(() => import("./pages/PatientRequestHistory"));
const NotFound = lazy(() => import("./pages/NotFound"));
const MaintainancePage = lazy(() => import("./pages/MaintenancePage"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const DonorDirectory = lazy(() => import("./pages/DonorDirectory"));

function StandaloneThemeToggle() {
  const { pathname } = useLocation();

  const standalonePages = [
    "/",
    "/registration",
    "/forgot-password"
  ];

  return standalonePages.includes(pathname)
    ? <ThemeToggle />
    : null;
}

function App() {
  return (
    <BrowserRouter>

      <Notification />

      <ScrollToTop />

      <StandaloneThemeToggle />

      <Suspense fallback={<PageLoader />}>

        <Routes>

          <Route
            path="/"
            element={<RoleSelection />}
          />

          <Route
            path="/donor-dashboard"
            element={<DonorHome />}
          />

          <Route
            path="/patient-dashboard"
            element={<PatientDashboard />}
          />

          <Route
            path="/patient-request-history"
            element={<PatientRequestHistory />}
          />

          <Route
            path="/admin-dashboard"
            element={<AdminDashboard />}
          />

          <Route
            path="/profile"
            element={<Profile />}
          />

          <Route
            path="/blood-stock"
            element={<BloodStock />}
          />

          <Route
            path="/donor-donation-request"
            element={<DonationRequest />}
          />

          <Route
            path="/blood-requests"
            element={<BloodRequest />}
          />

          <Route
            path="/donor-donation-scheduling"
            element={<DonorScheduling />}
          />

          <Route
            path="/registration"
            element={<Registration />}
          />

          <Route
            path="/forgot-password"
            element={<ForgotPassword />}
          />

          <Route
            path="/donor-profile"
            element={<DonorProfile />}
          />

          <Route
            path="/blood-availability"
            element={<BloodAvailability />}
          />

          <Route
            path="/skeleton-demo"
            element={<SkeletonDemo />}
          />

          <Route
            path="/donation-history"
            element={<DonationHistory />}
          />

          <Route
            path="/blood-bank-map"
            element={<BloodBankMap />}
          />

          <Route
            path="/alert-demo"
            element={<AlertDemo />}
          />

          <Route
            path="/maintenance"
            element={<MaintainancePage />}
          />

          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />

          <Route
            path="/privacy-policy"
            element={<PrivacyPolicy />}
          />

          <Route
            path="/about-us"
            element={<AboutUs />}
          />

          <Route
            path="/contact-us"
            element={<ContactUs />}
          />

          <Route
            path="/donor-directory"
            element={<DonorDirectory />}
          />

          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>

      </Suspense>

      <WhatsAppButton />

    </BrowserRouter>
  );
}

export default App;
