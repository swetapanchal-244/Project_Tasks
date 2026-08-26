import React from "react";

const Sidebar = ({ role, activeMenu }) => {

    const patientMenu = [
        { icon: "bi-speedometer2", text: "Dashboard" },
        { icon: "bi-droplet-fill", text: "Blood Requests" },
        { icon: "bi-calendar2-check", text: "Appoitments" },
        { icon: "bi-person-fill", text: "Profile" },
        { icon: "bi-box-arrow-right", text: "Logout" },
    ];

    const adminMenu = [
        { icon: "bi-speedometer2", text: "Dashboard" },
        { icon: "bi-people-fill", text: "Manage Users" },
        { icon: "bi-heart-pulse-fill", text: "Manage Donors" },
        { icon: "bi-hospital-fill", text: "Blood Requests" },
        { icon: "bi-bar-chart-fill", text: "Reports" },
        { icon: "bi-box-arrow-right", text: "Logout" },
    ];

    const menu = role === "admin" ? adminMenu : patientMenu;

    return(
        <div
            className="bg-danger text-white p-3"
            style={{
                width: "250px",
                minHeight: "100vh",
            }}
        >
            <h4 className="mb-4 fw-bold">
                <i className="bi bi-heart-pulse-fill me-2"></i>
                BloodLink
            </h4>

            <ul className="nav flex-column">

                {menu.map((item, index) => (

                    <li className="nav-item mb-2" key={index}>

                        <a
                            herf="#"
                            className={`nav-link sidebar-link rounded px-3 py-2 ${
                                activeMenu === item.text ? "bg-white text-danger fw-bold" : "text-white"
                            }`}
                        >
                            <i className={`${item.icon} me-2`}></i>
                            {item.text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;