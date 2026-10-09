import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function RoleSelection() {
    const roles = [
        {
            title: "Patient",
            description:
                "Request blood, track your blood requests and manage your profile.",
            icon: "bi-person-heart",
            path: "/patient-dashboard",
            buttonText: "Continue as Patient",
            type: "patient",
        },
        {
            title: "Donor",
            description:
                "Donate blood, manage your donor profile and view your donation schedule.",
            icon: "bi-heart-pulse-fill",
            path: "/donor-dashboard",
            buttonText: "Continue as Donor",
            type: "donor",
        },
        {
            title: "Admin",
            description:
                "Manage users, donors, blood requests, blood stock and reports.",
            icon: "bi-shield-lock-fill",
            path: "/admin-dashboard",
            buttonText: "Continue as Admin",
            type: "admin",
        },
    ];

    return (
        <main className="role-selection-page">
            <div className="role-selection-glow role-glow-one"></div>
            <div className="role-selection-glow role-glow-two"></div>

            <div className="container role-selection-container">

                <header className="role-selection-header text-center">
                    <div className="role-brand-icon">
                        <i className="bi bi-heart-pulse-fill"></i>
                    </div>

                    <p className="role-eyebrow">
                        BLOODLINK COMMUNITY
                    </p>

                    <h1>
                        Every Life <span>Matters.</span>
                    </h1>

                    <p className="role-subtitle">
                        Blood Donation Management System
                    </p>

                    <div className="role-heading-divider"></div>

                    <p className="role-instruction">
                        Select your role to get started
                    </p>
                </header>

                <div className="row justify-content-center g-4 role-cards-row">

                    {roles.map((role, index) => (
                        <div
                            className="col-lg-4 col-md-6"
                            key={role.type}
                            style={{
                                "--card-index": index,
                            }}
                        >
                            <article
                                className={`role-card role-card-${role.type}`}
                            >
                                <div className="role-card-top">
                                    <span className="role-number">
                                        0{index + 1}
                                    </span>

                                    <span className="role-card-badge">
                                        {role.type === "patient"
                                            ? "GET SUPPORT"
                                            : role.type === "donor"
                                                ? "SAVE LIVES"
                                                : "MANAGEMENT"}
                                    </span>
                                </div>

                                <div className="role-icon-wrapper">
                                    <i
                                        className={`bi ${role.icon}`}
                                    ></i>
                                </div>

                                <h2>{role.title}</h2>

                                <p className="role-card-description">
                                    {role.description}
                                </p>

                                <div className="role-card-divider"></div>

                                <Link
                                    to={role.path}
                                    className="role-continue-btn"
                                >
                                    <span>{role.buttonText}</span>
                                    <i className="bi bi-arrow-right"></i>
                                </Link>
                            </article>
                        </div>
                    ))}

                </div>

            </div>


            <Footer />
        </main>
    );
}

export default RoleSelection;