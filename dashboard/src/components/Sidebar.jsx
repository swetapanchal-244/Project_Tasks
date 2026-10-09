
import { NavLink } from "react-router-dom";

const Sidebar = ({ role }) => {
    const sidebarStyle = {
        width: "260px",
        minHeight: "100vh",
        flexShrink: 0,
        background: "linear-gradient(180deg, #951629 0%, #b42332 55%, #861426 100%)"
    };

    const patientMenu = [
        { icon: "bi-speedometer2", text: "Dashboard", path: "/patient-dashboard" },
        { icon: "bi-droplet-fill", text: "Blood Requests", path: "/blood-requests" },
        { icon: "bi-person-fill", text: "Profile", path: "/profile" }
    ];

    const donorMenu = [
        { icon: "bi-speedometer2", text: "Dashboard", path: "/donor-dashboard" },
        { icon: "bi-calendar-check-fill", text: "Donation Scheduling", path: "/donor-donation-scheduling" },
        { icon: "bi-heart-pulse-fill", text: "Donation Request", path: "/donor-donation-request" },
        { icon: "bi-person-fill", text: "Profile", path: "/donor-profile" }
    ];

    const renderLinks = (items) => (
        <nav className="nav flex-column gap-2">
            {items.map((item) => (
                <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.text === "Dashboard"}
                    className={({ isActive }) =>
                        `nav-link d-flex align-items-center rounded-3 px-3 py-3 ${isActive
                            ? "bg-white text-danger fw-bold shadow-sm"
                            : "text-white"
                        }`
                    }
                >
                    <i className={`bi ${item.icon} me-3 fs-5`}></i>
                    <span>{item.text}</span>
                </NavLink>
            ))}
        </nav>
    );

    const renderAdminMenu = () => (
        <nav className="nav flex-column gap-2">
            <NavLink
                to="/admin-dashboard"
                end
                className={({ isActive }) =>
                    `nav-link d-flex align-items-center rounded-3 px-3 py-3 ${isActive ? "bg-white text-danger fw-bold shadow-sm" : "text-white"
                    }`
                }
            >
                <i className="bi bi-speedometer2 me-3 fs-5"></i>
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
                            {renderLinks([
                                { icon: "bi-person-fill", text: "Manage Users", path: "/manage-users" },
                                { icon: "bi-heart-pulse-fill", text: "Manage Donors", path: "/manage-donors" }
                            ])}
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
                            {renderLinks([
                                { icon: "bi-hospital-fill", text: "Blood Requests", path: "/admin-blood-requests" },
                                { icon: "bi-droplet-fill", text: "Blood Stock", path: "/blood-stock" }
                            ])}
                        </div>
                    </div>
                </div>
            </div>

            {renderLinks([
                { icon: "bi-bar-chart-fill", text: "Reports", path: "/reports" },
                { icon: "bi-person-fill", text: "Profile", path: "/admin-profile" },
                { icon: "bi-box-arrow-right", text: "Logout", path: "/logout" }
            ])}
        </nav>
    );

    return (
        <aside className="text-white p-3" style={sidebarStyle}>
            {role === "admin"
                ? renderAdminMenu()
                : role === "donor"
                    ? renderLinks(donorMenu)
                    : renderLinks(patientMenu)}
        </aside>
    );
};

export default Sidebar;
