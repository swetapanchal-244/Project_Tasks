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
          path="/donor-home"
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
          path="/donation-request"
          element={<DonationRequest />}
        />
        <Route
          path="/blood-requests"
          element={<BloodRequest />}
        />
        <Route
          path="/donation-scheduling"
          element={<DonorScheduling />}
        />
      </Routes>

    </BrowserRouter>
  );
}

export default App;