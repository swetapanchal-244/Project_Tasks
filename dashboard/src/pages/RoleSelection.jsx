import { Link } from "react-router-dom";

function RoleSelection() {
    return (
        <div
            className="container-fluid d-flex align-items-center justify-content-center"
            style={{
                minHeight: "100vh",
                background: "linear-gradient(135deg,#f8f9fa,#e9ecef)",
            }}
        >
            <div className="text-center">

                <i
                    className="bi bi-heart-pulse-fill text-danger"
                    style={{ fontSize: "80px" }}
                ></i>

                <h1 className="fw-bold text-danger mt-3 mb-2">BloodLink</h1>
                <h3 className="fw-bold mb-3">Blood Donation Management System</h3>

                <p className="text-muted mb-5">
                    Please select your role to continue
                </p>

                <div className="row justify-content-center g-4">

                    <div className="col-md-5">
                        <div
                            className="card border-0 shadow-lg p-5 h-100"
                            style={{
                                borderRadius: "20px",
                                transition: "0.3s",
                            }}
                        >
                            <i
                                className="bi bi-person-circle text-danger mb-3"
                                style={{ fontSize: "55px" }}
                            ></i>

                            <h2 className="fw-bold">Patient</h2>

                            <p className="text-muted mb-4">
                                Request blood, become a donor and manage your profile.
                            </p>

                            <Link
                                to="/donor-home"
                                className="btn btn-danger btn-lg rounded-pill w-100"
                            >
                                Continue
                            </Link>
                        </div>
                    </div>

                    <div className="col-md-5">
                        <div
                            className="card border-0 shadow-lg p-4 h-100"
                            style={{
                                borderRadius: "20px",
                                transition: "0.3s",
                            }}
                        >
                            <i
                                className="bi bi-shield-lock-fill text-dark mb-3"
                                style={{ fontSize: "55px" }}
                            ></i>

                            <h2 className="fw-bold">Admin</h2>

                            <p className="text-muted mb-4">
                                Manage users, donors, blood requests and reports.
                            </p>

                            <Link
                                to="/admin-dashboard"
                                className="btn btn-dark btn-lg rounded-pill w-100"
                            >
                                Continue
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default RoleSelection;