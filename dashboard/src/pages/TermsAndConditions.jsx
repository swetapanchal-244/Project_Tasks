import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function TermsAndConditions() {
    return (
        <>
            <Helmet>
                <title>Terms and Conditions | BloodLink</title>
                <meta
                    name="description"
                    content="Read the Terms and Conditions for using BloodLink, including user responsibilities, donor guidelines and blood request policies."
                />
                <meta
                    name="keywords"
                    content="BloodLink, terms and conditions, blood donation rules, donor responsibilities, patient responsibilities"
                />
                <meta property="og:title" content="Terms and Conditions | BloodLink" />
                <meta
                    property="og:description"
                    content="Understand the terms and guidelines for using BloodLink."
                />
                <meta property="og:type" content="website" />
            </Helmet>

            <Navbar />

            <main className="container py-5">
                <div className="text-center mb-5">
                    <div
                        className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                        style={{
                            width: "75px",
                            height: "75px",
                            backgroundColor: "#fbe7ea",
                            color: "#951629"
                        }}
                    >
                        <i className="bi bi-file-earmark-text-fill fs-2"></i>
                    </div>

                    <h1 className="fw-bold" style={{ color: "#951629" }}>
                        Terms and Conditions
                    </h1>

                    <p className="text-muted">
                        Please read these terms carefully before using BloodLink.
                    </p>
                </div>

                <div className="card border-0 shadow-sm rounded-4">
                    <div className="card-body p-4 p-lg-5">

                        <section className="mb-4">
                            <h4 className="fw-bold">1. Introduction</h4>
                            <p className="text-secondary">
                                Welcome to BloodLink: Share Life, Give Blood.
                                By accessing or using this platform, you agree
                                to follow these Terms and Conditions.
                                BloodLink is designed to connect patients,
                                blood donors and administrators through a
                                blood donation management platform.
                            </p>
                        </section>

                        <section className="mb-4">
                            <h4 className="fw-bold">2. User Responsibilities</h4>
                            <ul className="text-secondary">
                                <li>Provide accurate and updated information.</li>
                                <li>Maintain the confidentiality of your account credentials.</li>
                                <li>Do not misuse the platform or submit false information.</li>
                                <li>Use BloodLink only for its intended purposes.</li>
                            </ul>
                        </section>

                        <section className="mb-4">
                            <h4 className="fw-bold">3. Donor Responsibilities</h4>
                            <ul className="text-secondary">
                                <li>Provide correct personal and blood group details.</li>
                                <li>Keep donation availability information updated.</li>
                                <li>Follow the instructions provided by authorized medical professionals.</li>
                                <li>Attend scheduled appointments or communicate cancellations.</li>
                            </ul>
                        </section>

                        <section className="mb-4">
                            <h4 className="fw-bold">4. Patient Responsibilities</h4>
                            <ul className="text-secondary">
                                <li>Submit genuine blood requests.</li>
                                <li>Provide accurate hospital and contact information.</li>
                                <li>Select the correct blood group and required units.</li>
                                <li>Keep track of submitted requests and their status.</li>
                            </ul>
                        </section>

                        <section className="mb-4">
                            <h4 className="fw-bold">5. Blood Requests and Donations</h4>
                            <p className="text-secondary">
                                BloodLink provides a platform to manage blood
                                requests and donation information. Submitting
                                a request does not guarantee blood availability
                                or fulfillment. All donations must follow
                                applicable medical guidelines and procedures
                                at authorized blood banks or healthcare facilities.
                            </p>
                        </section>

                        <section className="mb-4">
                            <h4 className="fw-bold">6. Account and Security</h4>
                            <p className="text-secondary">
                                Users are responsible for protecting their
                                login credentials and activities performed
                                through their accounts. Notify the platform
                                administrator if you suspect unauthorized
                                access to your account.
                            </p>
                        </section>

                        <section className="mb-4">
                            <h4 className="fw-bold">7. Limitation of Liability</h4>
                            <p className="text-secondary">
                                BloodLink is a management and information
                                platform. It does not provide medical advice
                                or guarantee the availability, compatibility
                                or delivery of blood. Medical decisions should
                                always be made by qualified healthcare professionals.
                            </p>
                        </section>

                        <section className="mb-4">
                            <h4 className="fw-bold">8. Changes to Terms</h4>
                            <p className="text-secondary">
                                BloodLink may update these Terms and Conditions
                                when necessary. Users are encouraged to review
                                this page periodically for updates.
                            </p>
                        </section>

                        <section className="mb-4">
                            <h4 className="fw-bold">9. Contact Information</h4>
                            <p className="text-secondary">
                                For questions or concerns regarding these
                                Terms and Conditions, please contact the
                                BloodLink administration team.
                            </p>
                        </section>

                        <hr />

                        <div className="text-center mt-4">
                            <Link
                                to="/"
                                className="btn text-white rounded-pill px-4 py-2"
                                style={{ backgroundColor: "#951629" }}
                            >
                                <i className="bi bi-house-door me-2"></i>
                                Back to Home
                            </Link>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}

export default TermsAndConditions;
