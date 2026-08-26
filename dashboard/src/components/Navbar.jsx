import React from "react";

const Navbar = ({ name, role, profileImage }) => {
    return (
        <nav className="navbar navbar-expand-lg bg-white shadow-sm px-4 py-3">

            <div className="container-fluid">

                <a className="navbar-brand fw-bold text-danger fs-3" href="#">
                    <i className="bi bi-heart-pulse-fill me-2"></i>
                    BloodLink
                </a>

                <form className="d-none d-md-flex mx-auto" style={{ width: "40%" }}>
                    <input
                        className="form-control"
                        type="search"
                        placeholder="Search..."
                    />
                </form>

                <div className="d-flex align-items-center ms-auto gap-4">

                    <button className="btn position-relative">

                        <i className="bi bi-bell fs-5"></i>

                        <span
                            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">

                            3

                        </span>

                    </button>

                    <div className="d-flex align-items-center">

                        <img
                            src={profileImage}
                            alt="profile"
                            className="rounded-circle me-2 profile-img"
                            width="45"
                            height="45"
                        />

                        <div>

                            <h6 className="mb-0">{name}</h6>

                            <small className="text-muted">
                                {role}
                            </small>

                        </div>

                    </div>

                </div>

            </div>

        </nav>
    );
};

export default Navbar;