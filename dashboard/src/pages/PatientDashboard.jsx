import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";

function PatientDashboard() {
    const gradient =
        "linear-gradient(115deg, #951629 0%, #b42332 55%, #a51d30 100%)";

    const savedProfile = JSON.parse(
        localStorage.getItem("patientProfile") ||
        '{"name":"Sweta Panchal"}'
    );

    const patientName = savedProfile.name || "Sweta Panchal";

    return (
        <div className="min-vh-100 d-flex flex-column bg-light">
            <Navbar
                name={patientName}
                role="Patient"
                profileImage="/profile.jpg"
            />

            <div className="d-flex flex-grow-1">
                <Sidebar role="patient" activeMenu="Dashboard" />

                <main className="container-fluid p-3 p-lg-4">
                    <div
                        className="card border-0 rounded-4 shadow-sm text-white mb-4"
                        style={{ background: gradient }}
                    >
                        <div className="card-body p-4 p-lg-5">
                            <span className="badge bg-white text-danger mb-3">
                                PATIENT DASHBOARD
                            </span>

                            <h2 className="fw-bold">
                                Welcome Back, {patientName}!
                            </h2>

                            <p className="mb-0">
                                Manage your blood requests and stay updated
                                on your blood donation needs.
                            </p>
                        </div>
                    </div>

                    <div className="mb-4">
                        <h4 className="fw-bold text-dark mb-1">
                            Dashboard Overview
                        </h4>

                        <p className="text-secondary mb-0">
                            Track your blood requests and appointments.
                        </p>
                    </div>

                    <div className="row g-4">
                        <DashboardCard
                            title="Total Blood Requests"
                            value="02"
                            icon="bi-droplet-fill"
                            color="#a51d30"
                        />

                        <DashboardCard
                            title="Pending Requests"
                            value="01"
                            icon="bi-clock-history"
                            color="#a51d30"
                        />

                        <DashboardCard
                            title="Appointments"
                            value="01"
                            icon="bi-calendar2-check"
                            color="#a51d30"
                        />

                        <DashboardCard
                            title="Request Status"
                            value="Active"
                            icon="bi-heart-pulse-fill"
                            color="#a51d30"
                        />
                    </div>
                </main>
            </div>
        </div>
    );
}

export default PatientDashboard;