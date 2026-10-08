import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ role, activeMenu }) => {

    const patientMenu = [
        {
            icon: "bi-speedometer2",
            text: "Dashboard",
            path: "/patient-dashboard"
        },
        {
            icon: "bi-droplet-fill",
            text: "Blood Requests",
            path: "/blood-requests"
        },
        {
            icon: "bi-file-earmark-medical-fill",
            text: "Donation Request",
            path: "/donation-request"
        },
        {
            icon: "bi-calendar-check-fill",
            text: "Donation Scheduling",
            path: "/donation-scheduling"
        },
        {
            icon: "bi-calendar2-check",
            text: "Appointments",
            path: "/appointments"
        },
        {
            icon: "bi-person-fill",
            text: "Profile",
            path: "/profile"
        },
        {
            icon: "bi-box-arrow-right",
            text: "Logout",
            path: "/logout"
        },
    ];

    const adminMenu = [
        {
            icon: "bi-people-fill",
            text: "Manage Users",
            path: "/manage-users"
        },
        {
            icon: "bi-heart-pulse-fill",
            text: "Manage Donors",
            path: "/manage-donors"
        },
        {
            icon: "bi-hospital-fill",
            text: "Blood Requests",
            path: "/admin-blood-requests"
        },
        {
            icon: "bi-droplet-fill",
            text: "Blood Stock",
            path: "/blood-stock"
        },
    ];

    const renderPatientMenu = () => (
        <ul className="nav flex-column gap-2">

            <li className="nav-item mb-2">
                <NavLink
                    to="/patient-dashboard"
                    end
                    className={({ isActive }) =>
                        `nav-link sidebar-link ${isActive ? "active-link" : ""
                        }`
                    }
                >
                    <i className="bi bi-speedometer2 me-2"></i>
                    Dashboard
                </NavLink>
            </li>

            {patientMenu.slice(1).map((item, index) => (
                <li className="nav-item mb-2" key={index}>

                    <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                            `nav-link sidebar-link ${isActive ? "active-link" : ""
                            }`
                        }
                    >
                        <i className={`${item.icon} me-2`}></i>
                        {item.text}
                    </NavLink>

                </li>
            ))}

        </ul>
    );

    const renderAdminMenu = () => (
        <div className="accordion accordion-flush" id="adminAccordion">

            <div className="mb-2">

                <NavLink
                    to="/admin-dashboard"
                    end
                    className={({ isActive }) =>
                        `nav-link sidebar-link ${isActive ? "active-link" : ""
                        }`
                    }
                >
                    <i className="bi bi-speedometer2 me-2"></i>
                    Dashboard
                </NavLink>

            </div>

            <div className="accordion-item bg-transparent border-0 mb-2">

                <h2 className="accordion-header">

                    <button
                        className="accordion-button collapsed bg-transparent text-white shadow-none sidebar-accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#userManagement"
                        aria-expanded="false"
                        aria-controls="userManagement"
                    >
                        <i className="bi bi-people-fill me-2"></i>
                        User Management
                    </button>

                </h2>

                <div
                    id="userManagement"
                    className="accordion-collapse collapse"
                    data-bs-parent="#adminAccordion"
                >

                    <div className="accordion-body p-2">

                        <NavLink
                            to="/manage-users"
                            className={({ isActive }) =>
                                `nav-link sidebar-link ${isActive ? "active-link" : ""
                                }`
                            }
                        >
                            <i className="bi bi-person-fill me-2"></i>
                            Manage Users
                        </NavLink>

                        <NavLink
                            to="/manage-donors"
                            className={({ isActive }) =>
                                `nav-link sidebar-link ${isActive ? "active-link" : ""
                                }`
                            }
                        >
                            <i className="bi bi-heart-pulse-fill me-2"></i>
                            Manage Donors
                        </NavLink>

                    </div>

                </div>

            </div>

            <div className="accordion-item bg-transparent border-0 mb-2">

                <h2 className="accordion-header">

                    <button
                        className="accordion-button collapsed bg-transparent text-white shadow-none sidebar-accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#bloodManagement"
                        aria-expanded="false"
                        aria-controls="bloodManagement"
                    >
                        <i className="bi bi-droplet-fill me-2"></i>
                        Blood Management
                    </button>

                </h2>

                <div
                    id="bloodManagement"
                    className="accordion-collapse collapse"
                    data-bs-parent="#adminAccordion"
                >

                    <div className="accordion-body p-2">

                        <NavLink
                            to="/admin-blood-requests"
                            className={({ isActive }) =>
                                `nav-link sidebar-link ${isActive ? "active-link" : ""
                                }`
                            }
                        >
                            <i className="bi bi-hospital-fill me-2"></i>
                            Blood Requests
                        </NavLink>

                        <NavLink
                            to="/blood-stock"
                            className={({ isActive }) =>
                                `nav-link sidebar-link ${isActive ? "active-link" : ""
                                }`
                            }
                        >
                            <i className="bi bi-droplet-fill me-2"></i>
                            Blood Stock
                        </NavLink>

                    </div>

                </div>

            </div>

            <div className="mb-2">

                <NavLink
                    to="/reports"
                    className={({ isActive }) =>
                        `nav-link sidebar-link ${isActive ? "active-link" : ""
                        }`
                    }
                >
                    <i className="bi bi-bar-chart-fill me-2"></i>
                    Reports
                </NavLink>

            </div>

            <div className="mb-2">

                <NavLink
                    to="/logout"
                    className="nav-link sidebar-link"
                >
                    <i className="bi bi-box-arrow-right me-2"></i>
                    Logout
                </NavLink>

            </div>

        </div>
    );

    return (
        <div
            className="bg-danger text-white p-3"
            style={{
                width: "260px",
                minHeight: "100vh",
            }}
        >

            <h3 className="fw-bold mb-5">
                <i className="bi bi-heart-pulse-fill me-2"></i>
                BloodLink
            </h3>

            {role === "admin"
                ? renderAdminMenu()
                : renderPatientMenu()
            }

        </div>
    );
};

export default Sidebar;