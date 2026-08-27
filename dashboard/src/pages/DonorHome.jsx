import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function DonorHome() {
    return (
        <>
            <Navbar
                name="Donor"
                role="Blood Donor"
                profileImage="/profile.jpg"
            />

            <section
                className="bg-danger text-white d-flex align-items-center"
                style={{
                    minHeight: "450px",

                }}
            >
                <div className="container">

                    <div
                        className="row align-items-center"
                        style={{ minHeight: "300px" }}

                    >

                        <div className="col-lg-6">

                            <h1 className="display-4 fw-bold">
                                Donate Blood, Save Lives
                            </h1>

                            <p className="lead mt-3">
                                Your single blood donation can save up to three lives.
                                Join BloodLink today and become a hero.
                            </p>

                            <div className="mt-4">

                                <Link
                                    to="/patient-dashboard"
                                    className="btn btn-light btn-lg rounded-pill px-4 me-3"
                                >
                                    Become Donor
                                </Link>

                                <a
                                    href="#why-donate"
                                    className="btn btn-outline-light btn-lg rounded-pill px-4"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-6 text-center">

                            <img
                                src="./blood.jpg"
                                alt="Blood Donation"
                                className="img-fluid rounded-4"
                                style={{
                                    maxWidth: "420px",
                                    width: "100%"
                                }}

                            />

                        </div>
                    </div>
                </div>
            </section>

            <section id="why-donate" className="py-5">
                <div className="container">

                    <h2 className="text-center fw-bold mb-5">
                        Why Donate Blood?
                    </h2>

                    <div className="row">

                        <div className="col-md-4 mb-4">

                            <div className="card border-0 shadow-sm rounded-4 h-100">

                                <div className="card-body text-center">

                                    <i className="bi bi-heart-pulse-fill text-danger fs-1"></i>

                                    <h4 className="mt-3">
                                        Save Lives
                                    </h4>

                                    <p className="text-muted">
                                        One donation can save multiple lives.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4">

                            <div className="card border-0 shadow-sm rounded-4 h-100">

                                <div className="card-body text-center">

                                    <i className="bi bi-shield-check text-success fs-1"></i>

                                    <h4 className="mt-3">
                                        Safe Process
                                    </h4>

                                    <p className="text-muted">
                                        Donation is completely safe and supervised.
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-4 mb-4">

                            <div className="card border-0 shadow-sm rounded-4 h-100">

                                <div className="card-body text-center">

                                    <i className="bi bi-hospital-fill text-primary fs-1"></i>

                                    <h4 className="mt-3">
                                        Trusted Hospitals
                                    </h4>

                                    <p className="text-muted">
                                        Connected with verified hospitals and blood banks.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 bg-light">
                <div className="container">

                    <h2 className="text-center fw-bold mb-5">
                        Benefits of Blood Donation
                    </h2>

                    <div className="row">

                        <div className="col-md-3 mb-4">
                            <div className="card h-100 border-0 shadow-sm rounded-4 text-center p-4">
                                <i className="bi bi-heart-pulse-fill text-danger fs-1"></i>
                                <h5 className="mt-3">Save Lives</h5>
                                <p className="text-muted">
                                    One blood donation can help save up to three lives.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-3 mb-4">
                            <div className="card h-100 border-0 shadow-sm rounded-4 text-center p-4">
                                <i className="bi bi-shield-check text-success fs-1"></i>
                                <h5 className="mt-3">Health Check</h5>
                                <p className="text muted">
                                    Every donor receives a basic health screening before donating.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-3 mb-4">
                            <div className="card h-100 border-0 shadow-sm rounded-4 text-center p-4">
                                <i className="bi bi-droplet-fill text-primary fs-1"></i>
                                <h5 className="mt-3">Supports Patients</h5>
                                <p className="text-muted">
                                    Blood is needed for surgeries, accidents and medical treatments.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-3 mb-4">
                            <div className="card h-100 border-0 shadow-sm rounded-4 text-center p-4">
                                <i className="bi bi-globe text-warning fs-1"></i>
                                <h4 className="mt-3">Community Impact</h4>
                                <p className="text-muted">
                                    Regular donations help maintain a stable blood supply.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-dark text-white text-center py-4">

                <p className="mb-0">
                    © 2026 BloodLink | Donate Blood, Save Lives
                </p>
            </footer>


        </>
    );

}

export default DonorHome;