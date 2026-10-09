
import { Link } from "react-router-dom";

function Navbar({ name, role, profileImage }) {
    return (
        <nav className="navbar navbar-expand-lg bg-white border-bottom shadow-sm sticky-top py-3">
            <div className="container-fluid px-3 px-lg-4">

                <Link
                    to="/"
                    className="navbar-brand d-flex align-items-center gap-2 me-0"
                    style={{ textDecoration: "none" }}
                >
                    <span
                        className="d-flex align-items-center justify-content-center rounded-3"
                        style={{
                            width: "54px",
                            height: "54px",
                            backgroundColor: "#e63346",
                            flexShrink: 0
                        }}
                    >
                        <i
                            className="bi bi-heart-pulse-fill text-white"
                            style={{ fontSize: "29px" }}
                        ></i>
                    </span>

                    <span
                        className="fw-bolder"
                        style={{
                            fontSize: "34px",
                            letterSpacing: "-1.2px",
                            lineHeight: 1
                        }}
                    >
                        <span className="text-dark">Blood</span>
                        <span style={{ color: "#e63346" }}>Link</span>
                    </span>
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#bloodLinkNavbar"
                    aria-controls="bloodLinkNavbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="bloodLinkNavbar">
                    <form
                        className="d-flex mx-lg-auto my-3 my-lg-0 w-100"
                        style={{ maxWidth: "400px" }}
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="input-group">
                            <span className="input-group-text bg-light border-end-0">
                                <i className="bi bi-search text-secondary"></i>
                            </span>
                            <input
                                type="search"
                                className="form-control bg-light border-start-0 shadow-none"
                                placeholder="Search..."
                                aria-label="Search"
                            />
                        </div>
                    </form>

                    <div className="d-flex align-items-center gap-3 ms-lg-3 mt-2 mt-lg-0">
                        <button
                            type="button"
                            className="btn btn-light position-relative"
                            aria-label="Notifications"
                        >
                            <i className="bi bi-bell fs-5"></i>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                3
                            </span>
                        </button>

                        <div className="vr d-none d-sm-block"></div>

                        <Link to="/profile" className="d-flex align-items-center gap-2 text-decoration-none">
                            <img
                                src={profileImage || "/profile.jpg"}
                                alt="Profile"
                                width="42"
                                height="42"
                                className="rounded-circle border border-danger-subtle"
                                style={{ objectFit: "cover" }}
                            />
                            <div>
                                <div className="fw-semibold text-dark small">
                                    {name || "User"}
                                </div>
                                <div className="text-secondary small">
                                    <i className="bi bi-circle-fill text-success me-1" style={{ fontSize: "7px" }}></i>
                                    {role || "Member"}
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
