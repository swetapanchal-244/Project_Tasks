import { BrowserRouter, Routes, Route } from "react-router-dom";

import RoleSelection from "./pages/RoleSelection";
import DonorHome from "./pages/DonorHome";
import PatientDashboard from "./pages/PatientDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Profile from "./pages/Profile";
import BloodStock from "./pages/BloodStock";
import DonationRequest from "./pages/DonationRequest";
import BloodRequest from "./pages/BloodRequest";
import DonorScheduling from "./pages/DonorScheduling";
import Notification from "./components/Notification";
import Registration from "./pages/Registration";
import ForgotPassword from "./pages/ForgotPassword";
import DonorProfile from "./pages/DonorProfile";
import BloodAvailability from "./pages/BloodAvailability";
import SkeletonDemo from "./pages/SkeletonDemo";
import DonationHistory from "./pages/DonationHistory";
import BloodBankMap from "./pages/BloodBankMap";
import AlertDemo from "./pages/ALertDemo";

function App() {
  return (
    <BrowserRouter>

      <Notification />

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
      </Routes>

    </BrowserRouter>
  );
}

export default App;