import { BrowserRouter, Routes, Route } from "react-router-dom";

import RoleSelection from "./pages/RoleSelection";
import DonorHome from "./pages/DonorHome";
import PatientDashboard from "./pages/PatientDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Profile from "./pages/Profile";
import BloodStock from "./pages/BloodStock";
import DonationRequest from "./pages/DonationRequest";

function App() {
  return (
    <BrowserRouter>
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
      </Routes>

    </BrowserRouter>
  );
}

export default App;