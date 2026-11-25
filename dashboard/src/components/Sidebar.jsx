import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = ({ role, isOpen, onClose }) => {
    const location = useLocation();

    // Agar page isOpen/onClose pass nahi karta (jaise BloodAvailability, Profile etc.)
    // to sidebar apni state aur apna mobile Menu button khud sambhalta hai.
    const [internalOpen, setInternalOpen] = useState(false);
    const isControlled = isOpen !== undefined;
    const open = isControlled ? isOpen : internalOpen;
    const handleClose = isControlled
        ? (onClose || (() => { }))
        : () => setInternalOpen(false);

    const sidebarStyle = {
        width: "260px",
        minHeight: "100vh",
        height: "auto",
        flexShrink: 0,
        alignSelf: "stretch",
        background:
            "linear-gradient(180deg, #951629 0%, #b42332 55%, #861426 100%)"
    };

    const patientMenu = [
        { icon: "bi-speedometer2", text: "Dashboard", path: "/patient-dashboard" },
        { icon: "bi-search", text: "Blood Availability", path: "/blood-availability" },
        { icon: "bi-droplet-fill", text: "Blood Requests", path: "/blood-requests" },
        { icon: "bi-clock-history", text: "Request History", path: "/patient-request-history" },
        { icon: "bi-person-fill", text: "Profile", path: "/profile" },
        { icon: "bi-box-arrow-right", text: "Logout", path: "/patient-logout" }
    ];

    const donorMenu = [
        { icon: "bi-speedometer2", text: "Dashboard", path: "/donor-dashboard" },
        { icon: "bi-calendar-check-fill", text: "Donation Scheduling", path: "/donor-donation-scheduling" },
        { icon: "bi-heart-pulse-fill", text: "Donation Request", path: "/donor-donation-request" },
        { icon: "bi-clock-history", text: "Donation History", path: "/donation-history" },
        { icon: "bi-person-fill", text: "Profile", path: "/donor-profile" },
        { icon: "bi-box-arrow-right", text: "Logout", path: "/donor-logout" }
    ];

    const renderLinks = (items, label = "Sidebar navigation") => (
        <nav
            className="nav flex-column gap-2"
            aria-label={label}
        >
            {items.map((item) => (
                <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.text === "Dashboard"}
                    onClick={handleClose}
                    className={({ isActive }) =>
                        `nav-link d-flex align-items-center rounded-3 px-3 py-3 ${isActive
                            ? "bg-white text-danger fw-bold shadow-sm"
                            : "text-white"
                        }`
                    }
                >
                    <i
                        className={`bi ${item.icon} me-3 fs-5`}
                        aria-hidden="true"
                    ></i>

                    <span>{item.text}</span>
                </NavLink>
            ))}
        </nav>
    );

    const renderAdminMenu = () => (
        <nav
            className="nav flex-column gap-2"
            aria-label="Admin navigation"
        >
            <NavLink
                to="/admin-dashboard"
                end
                onClick={handleClose}
                className={({ isActive }) =>
                    `nav-link d-flex align-items-center rounded-3 px-3 py-3 ${isActive
                        ? "bg-white text-danger fw-bold shadow-sm"
                        : "text-white"
                    }`
                }
            >
                <i
                    className="bi bi-speedometer2 me-3 fs-5"
                    aria-hidden="true"
                ></i>
                Dashboard
            </NavLink>

            <div className="accordion accordion-flush" id="adminSidebarAccordion">

                <div className="accordion-item bg-transparent border-0 mb-2">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed bg-transparent text-white shadow-none rounded-3 px-3 py-3"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#userManagement"
                            aria-expanded="false"
                            aria-controls="userManagement"
                        >
                            <i className="bi bi-people-fill me-3 fs-5"></i>
                            User Management
                        </button>
                    </h2>

                    <div
                        id="userManagement"
                        className="accordion-collapse collapse"
                        data-bs-parent="#adminSidebarAccordion"
                    >
                        <div className="accordion-body p-2">
                            {renderLinks(
                                [
                                    {
                                        icon: "bi-person-fill",
                                        text: "Manage Users",
                                        path: "/skeleton-demo"
                                    },
                                    {
                                        icon: "bi-heart-pulse-fill",
                                        text: "Manage Donors",
                                        path: "/manage-donors"
                                    }
                                ],
                                "User management"
                            )}
                        </div>
                    </div>
                </div>

                <div className="accordion-item bg-transparent border-0 mb-2">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed bg-transparent text-white shadow-none rounded-3 px-3 py-3"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#bloodManagement"
                            aria-expanded="false"
                            aria-controls="bloodManagement"
                        >
                            <i className="bi bi-droplet-fill me-3 fs-5"></i>
                            Blood Management
                        </button>
                    </h2>

                    <div
                        id="bloodManagement"
                        className="accordion-collapse collapse"
                        data-bs-parent="#adminSidebarAccordion"
                    >
                        <div className="accordion-body p-2">
                            {renderLinks(
                                [
                                    {
                                        icon: "bi-hospital-fill",
                                        text: "Blood Requests",
                                        path: "/admin-blood-requests"
                                    },
                                    {
                                        icon: "bi-droplet-fill",
                                        text: "Blood Stock",
                                        path: "/blood-stock"
                                    }
                                ],
                                "Blood management"
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {renderLinks(
                [
                    {
                        icon: "bi-bar-chart-fill",
                        text: "Reports",
                        path: "/reports"
                    },
                    {
                        icon: "bi-person-fill",
                        text: "Profile",
                        path: "/admin-profile"
                    },
                    {
                        icon: "bi-box-arrow-right",
                        text: "Logout",
                        path: "/admin-logout"
                    }
                ],
                "Admin navigation links"
            )}
        </nav>
    );

    return (
        <>
            {!isControlled && (
                <button
                    type="button"
                    className="btn btn-danger sidebar-floating-toggle"
                    onClick={() => setInternalOpen((previous) => !previous)}
                    aria-label="Toggle sidebar"
                    aria-expanded={open}
                >
                    <i className="bi bi-list me-2" aria-hidden="true"></i>
                    Menu
                </button>
            )}

            {open && (
                <div
                    className="sidebar-mobile-overlay"
                    onClick={handleClose}
                    aria-hidden="true"
                ></div>
            )}

            <aside
                className={`text-white p-3 bloodlink-sidebar ${open ? "sidebar-mobile-open" : ""
                    }`}
                aria-label={`${role || "user"} sidebar`}
            >
                {role === "admin"
                    ? renderAdminMenu()
                    : role === "donor"
                        ? renderLinks(donorMenu, "Donor navigation")
                        : renderLinks(patientMenu, "Patient navigation")}
            </aside>
        </>
    );
};

export default Sidebar;