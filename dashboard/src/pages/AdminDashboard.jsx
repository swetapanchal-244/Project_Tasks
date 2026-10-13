import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";

function AdminDashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const gradient =
        "linear-gradient(115deg, #951629 0%, #b42332 55%, #a51d30 100%)";

    return (
        <div className="min-vh-100 d-flex flex-column bg-light">
            <Navbar
                name="Admin"
                role="Administrator"
                profileImage="/profile.jpg"
            />

            <div className="d-flex flex-grow-1 admin-layout">

                <button
                    className="btn btn-danger d-lg-none admin-menu-toggle"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    aria-label="Toggle sidebar"
                    aria-expanded={sidebarOpen}
                >
                    <i className="bi bi-list fs-4"></i>
                    <span className="ms-2">Menu</span>
                </button>

                <div
                    className={`admin-sidebar-wrapper ${sidebarOpen ? "sidebar-open" : ""
                        }`}
                >
                    <Sidebar role="admin" activeMenu="Dashboard" />
                </div>

                <main className="flex-grow-1 min-w-0 p-3 p-md-4 admin-main">
                    <div
                        className="card border-0 rounded-4 shadow-sm text-white mb-4"
                        style={{ background: gradient }}
                    >
                        <div className="card-body p-3 p-md-4 p-lg-5">
                            <span className="badge bg-white text-danger mb-3">
                                ADMINISTRATION
                            </span>

                            <h2 className="fw-bold">
                                Welcome Back, Admin!
                            </h2>

                            <p className="mb-0">
                                Monitor users, donors, blood requests and blood stock.
                            </p>
                        </div>
                    </div>

                    <div className="mb-4">
                        <h4 className="fw-bold text-dark mb-1">
                            System Overview
                        </h4>
                        <p className="text-secondary mb-0">
                            A quick summary of BloodLink activities.
                        </p>
                    </div>

                    <div className="row g-3 g-md-4">
                        <DashboardCard
                            title="Total Users"
                            value="125"
                            icon="bi-people-fill"
                            color="#a51d30"
                        />

                        <DashboardCard
                            title="Registered Donors"
                            value="48"
                            icon="bi-heart-pulse-fill"
                            color="#a51d30"
                        />

                        <DashboardCard
                            title="Blood Requests"
                            value="32"
                            icon="bi-droplet-fill"
                            color="#a51d30"
                        />

                        <DashboardCard
                            title="Pending Requests"
                            value="08"
                            icon="bi-clock-history"
                            color="#a51d30"
                        />

                        <DashboardCard
                            title="Blood Groups"
                            value="08"
                            icon="bi-hospital-fill"
                            color="#a51d30"
                        />

                        <DashboardCard
                            title="Reports"
                            value="12"
                            icon="bi-file-earmark-bar-graph-fill"
                            color="#a51d30"
                        />
                    </div>
                </main>
            </div>
        </div>
    );
}

export default AdminDashboard;