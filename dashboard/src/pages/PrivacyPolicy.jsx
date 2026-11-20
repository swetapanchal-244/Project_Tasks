import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function PrivacyPolicy() {
    return (
        <>
            <Helmet>
                <title>Privacy Policy | BloodLink</title>
                <meta
                    name="description"
                    content="Read the BloodLink Privacy Policy to understand how user information is collected, used and handled."
                />
                <meta
                    name="robots"
                    content="index, follow"
                />
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
                        <i className="bi bi-shield-lock-fill fs-2" aria-hidden="true"></i>
                    </div>

                    <h1 className="fw-bold" style={{ color: "#951629" }}>
                        Privacy Policy
                    </h1>

                    <p className="text-muted">
                        Your privacy matters to us. Learn how BloodLink handles information.
                    </p>
                </div>

                <div className="card border-0 shadow-sm rounded-4">
                    <div className="card-body p-4 p-lg-5">

                        <section className="mb-4">
                            <h4 className="fw-bold">1. Introduction</h4>
                            <p className="text-secondary">
                                Welcome to BloodLink: Share Life, Give Blood.
                                This Privacy Policy explains how information
                                may be collected, used and handled when you
                                use the BloodLink platform.
                            </p>
                        </section>

                        <section className="mb-4">
                            <h4 className="fw-bold">2. Information We Collect</h4>
                            <p className="text-secondary">
                                Depending on the features you use, BloodLink
                                may collect information such as:
                            </p>
                            <ul className="text-secondary">
                                <li>Name and contact details.</li>
                                <li>Email address and phone number.</li>
                                <li>Blood group and donor information.</li>
                                <li>Blood request and donation-related details.</li>
                                <li>Information submitted through forms on the platform.</li>
                            </ul>
                        </section>

                        <section className="mb-4">
                            <h4 className="fw-bold">3. How We Use Information</h4>
                            <p className="text-secondary">
                                Information submitted to BloodLink may be
                                used to manage user accounts, organize blood
                                requests, support donor and patient communication,
                                maintain donation records and improve platform functionality.
                            </p>
                        </section>

                        <section className="mb-4">
                            <h4 className="fw-bold">4. Information Sharing</h4>
                            <p className="text-secondary">
                                BloodLink is designed to support coordination
                                between patients, donors and administrators.
                                Information should only be shared when needed
                                for platform operations or when required by
                                applicable law. Users should avoid submitting
                                unnecessary personal information.
                            </p>
                        </section>

                        <section className="mb-4">
                            <h4 className="fw-bold">5. Data Storage and Security</h4>
                            <p className="text-secondary">
                                Information may be stored using the storage
                                systems configured for the application.
                                Reasonable precautions should be taken to
                                protect information from unauthorized access,
                                alteration or disclosure. No online system
                                can guarantee absolute security.
                            </p>
                        </section>

                        <section className="mb-4">
                            <h4 className="fw-bold">6. Cookies and Local Storage</h4>
                            <p className="text-secondary">
                                BloodLink may use browser storage, such as
                                local storage, to retain certain application
                                information and improve the user experience.
                                Users can manage or clear browser storage
                                through their browser settings, although
                                doing so may affect application functionality.
                            </p>
                        </section>

                        <section className="mb-4">
                            <h4 className="fw-bold">7. User Responsibilities</h4>
                            <ul className="text-secondary">
                                <li>Provide accurate information.</li>
                                <li>Keep account credentials confidential.</li>
                                <li>Avoid sharing another person's private information without permission.</li>
                                <li>Contact the administration team if information needs correction.</li>
                            </ul>
                        </section>

                        <section className="mb-4">
                            <h4 className="fw-bold">8. Data Retention</h4>
                            <p className="text-secondary">
                                Information should be retained only for as
                                long as necessary for the purposes of the
                                platform or as required by applicable law.
                                Actual retention and deletion practices
                                depend on the application's configured storage.
                            </p>
                        </section>

                        <section className="mb-4">
                            <h4 className="fw-bold">9. Changes to This Policy</h4>
                            <p className="text-secondary">
                                This Privacy Policy may be updated when
                                platform features or data-handling practices
                                change. Users are encouraged to review this
                                page periodically.
                            </p>
                        </section>

                        <section className="mb-4">
                            <h4 className="fw-bold">10. Contact Information</h4>
                            <p className="text-secondary">
                                If you have questions about this Privacy
                                Policy or the handling of your information,
                                please contact the BloodLink administration team.
                            </p>
                        </section>

                        <hr />

                        <div className="text-center mt-4">
                            <Link
                                to="/"
                                className="btn text-white rounded-pill px-4 py-2"
                                style={{ backgroundColor: "#951629" }}
                            >
                                <i className="bi bi-house-door me-2" aria-hidden="true"></i>
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

export default PrivacyPolicy;
