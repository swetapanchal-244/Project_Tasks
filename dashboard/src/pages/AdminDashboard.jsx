import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";
import { Helmet } from "react-helmet-async";

function AdminDashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const gradient =
        "linear-gradient(115deg, #951629 0%, #b42332 55%, #a51d30 100%)";

    return (
        <div className="min-vh-100 d-flex flex-column bg-light">

            <Helmet>
                <title>Admin Dashboard | BloodLink</title>

                <meta
                    name="description"
                    content="Manage BloodLink users, registered donors, blood requests, blood stock and system activities through the Admin Dashboard."
                />

                <meta
                    name="keywords"
                    content="BloodLink, admin dashboard, blood donation management, donor management, blood requests, blood stock"
                />

                <meta
                    property="og:title"
                    content="Admin Dashboard | BloodLink"
                />

                <meta
                    property="og:description"
                    content="Monitor and manage BloodLink users, donors and blood donation activities."
                />

                <meta property="og:type" content="website" />
            </Helmet>

            <Navbar
                name="Admin"
                role="Administrator"
                profileImage="/profile.webp"
            />

            <div className="d-flex flex-grow-1 admin-layout">


                <button
                    type="button"
                    className="btn btn-danger dashboard-menu-button"
                    onClick={() => setSidebarOpen((previous) => !previous)}
                    aria-label="Toggle dashboard sidebar"
                >
                    <i className="bi bi-list me-2"></i>
                    Menu
                </button>


                <div
                    className={`admin-sidebar-wrapper ${sidebarOpen ? "sidebar-open" : ""
                        }`}
                >
                    <Sidebar
                        role="admin"
                        isOpen={sidebarOpen}
                        onClose={() => setSidebarOpen(false)}
                    />
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