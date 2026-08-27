import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ role, activeMenu }) => {

    const patientMenu = [
        { icon: "bi-speedometer2", text: "Dashboard", path: "/patient-dashboard" },
        { icon: "bi-droplet-fill", text: "Blood Requests", path: "/blood-requests" },
        { icon: "bi-calendar2-check", text: "Appointments", path: "/appointments" },
        { icon: "bi-person-fill", text: "Profile", path: "/profile" },
        { icon: "bi-box-arrow-right", text: "Logout", path: "/logout" },
    ];

    const adminMenu = [
        { icon: "bi-speedometer2", text: "Dashboard", path: "/admin-dashboard" },
        { icon: "bi-people-fill", text: "Manage Users", path: "/manage-users" },
        { icon: "bi-heart-pulse-fill", text: "Manage Donors", path: "/manage-donors" },
        { icon: "bi-hospital-fill", text: "Blood Requests", path: "/blood-requests" },
        { icon: "bi-bar-chart-fill", text: "Reports", path: "/reports" },
        { icon: "bi-box-arrow-right", text: "Logout", path: "/logout" },
    ];

    const menu = role === "admin" ? adminMenu : patientMenu;

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

            <ul className="nav flex-column gap-2">

                {menu.map((item, index) => (

                    <li className="nav-item mb-2" key={index}>

                        <NavLink
                            to={item.path}
                            end={item.path === "/admin-dashboard" || item.path === "/patient-dashboard"}
                            className={({ isActive }) =>
                                `nav-link sidebar-link ${isActive ? "active-link" : ""}`
                            }
                        >
                            <i className={`${item.icon} me-2`}></i>
                            {item.text}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;