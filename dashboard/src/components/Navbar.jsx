import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ name, role, profileImage }) => {
    return (
        <nav className="navbar navbar-expand-lg bg-white shadow-sm px-4 py-3">

            <div className="container-fluid">

                <Link className="navbar-brand fw-bold text-danger fs-2" to="/">
                    <i className="bi bi-heart-pulse-fill me-2"></i>
                    BloodLink
                </Link>


                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarContent">

                    <form className="mx-auto my-3 my-lg-0 w-100" style={{ maxWidth: "500px" }}>
                        <input
                            className="form-control"
                            type="search"
                            placeholder="Search..."
                        />
                    </form>

                    <div className="d-flex align-items-center gap-3 ms-lg-3">

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
                                alt="Profile"
                                className="profile-img rounded-circle me-2"
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

            </div>

        </nav>
    );
};

export default Navbar;