import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AboutUs() {
    const features = [
        {
            icon: "bi-search-heart",
            title: "Find Blood Donors",
            description: "Help patient connect with potential blood donors based on their blood group and requirements."
        },
        {
            icon: "bi-calendar2-check",
            title: "Donation Scheduling",
            description: "organize donation schedules and keep track of upcoming donation activities."
        },
        {
            icon: "bi-clipboard2-pulse",
            title: "Request Tracking",
            description: "Manage blood requests and monitor theor progress through the platform."
        }
    ];

    const stats = [
        { number: "01", lable: "One Connected Plateform" },
        { number: "02", label: "Patient & Donors" },
        { number: "03", label: "Core User Roles" }
    ];

    return (
        <>
            <Helmet>
                <title>About Us | BloodLink</title>
                <meta
                    name="description"
                    content="Learn about BloodLink, a blood donation management platform connecting patients, donors and administrators."
                />
                <meta
                    name="keywords"
                    content="About BloodLink, blood donation platform, blood donors, blood management"
                />
                <meta property="og:title" content="About Us | BloodLink" />
                <meta
                    property="og:description"
                    content="Discover the purpose, mission and features of BloodLink."
                />
            </Helmet>

            <Navbar />

            <main className="about-page">

                <section className="about-hero">
                    <div className="container">
                        <div className="row align-items-center g-5">

                            <div className="col-lg-7">
                                <span className="about-eyebrow">
                                    <i className="bi bi-heart-pulse-fill me-2"></i>
                                    ABOUT BLOODLINK
                                </span>

                                <h1>
                                    Connectiong Hearts,
                                    <span> Saving Lives.</span>
                                </h1>

                                <p className="about-hero-description">
                                    BloodLink is a blood donation management
                                    platform designed to connect patients,
                                    blood donors and administrators through
                                    one organized digital platform.
                                </p>

                                <Link
                                    to="/registration"
                                    className="about-primary-btn"
                                >
                                    Join Our Community
                                    <i className="bi bi-arrow-right ms-2"></i>
                                </Link>
                            </div>

                            <div className="col-lg-5">
                                <div className="about-hero-visual">
                                    <div className="about-heart-circle">
                                        <i className="bi bi-heart-pulse-fill"></i>
                                    </div>

                                    <div className="about-floating-icon about-float-one">
                                        <i className="bi bi-droplet-fill"></i>
                                    </div>

                                    <div className="about-floating-icon about-float-two">
                                        <i className="bi bi-people-fill"></i>
                                    </div>

                                    <div className="about-visual-text">
                                        <h3>Share Life</h3>
                                        <p>Give Blood</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about-intro section-padding">
                    <div className="container">
                        <div className="row align-items-center g-5">

                            <div className="col-lg-5">
                                <div className="about-intro-card">
                                    <i className="bi bi-heart-fill"></i>
                                    <h2>Every Drop Counts</h2>
                                    <p>
                                        A connected platform for blood
                                        donation management.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-7">
                                <span className="about-section-label">
                                    WHO WE ARE
                                </span>

                                <h2 className="about-section-title">
                                    Making Blood Donation Management
                                    <span> More Accessible</span>
                                </h2>

                                <p className="about-section-text">
                                    BloodLink: Share Life, Give Blood is
                                    designed to simplify the coordination
                                    of blood donation activities. It provieds
                                    dedicated access for patients, donors
                                    and administrators.
                                </p>

                                <p className="about-section-text">
                                    Frpm submitting blood requests to
                                    managing donor information, donation
                                    schedules and blood stock, BloodLink
                                    brings important management features
                                    together in one place.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about-mission-section section-padding">
                    <div className="container">

                        <div className="text-center mb-5">
                            <span className="about-section-label">
                                OUR PURPOSE
                            </span>

                            <h2 className="about-section-title">
                                Mission & <span>Vision</span>
                            </h2>
                        </div>

                        <div className="row g-4">

                            <div className="col-md-6">
                                <article classNam="about-purpose-card">
                                    <div className="about-purpose-icon">
                                        <i className="bi bi-bullseye"></i>
                                    </div>

                                    <h3>Our Missions</h3>

                                    <p>
                                        To provide an organized digital
                                        platform that helps patients,
                                        donors and administrators coordinate
                                        blood donation activities more
                                        efficiently.
                                    </p>
                                </article>
                            </div>

                            <div className="col-md-6">
                                <article className="about-purpose-card">
                                    <div className="about-purpose-icon">
                                        <i className="bi bi-eye"></i>
                                    </div>

                                    <h3>Our Vision</h3>

                                    <p>
                                        To encourage a connected and
                                        supportive blood donation community
                                        where information and coordination
                                        are easier to manage.
                                    </p>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about-features-section section-padding">
                    <div className="container">

                        <div className="text-center mb-5">
                            <span className="about-section-label">
                                WHAT WE OFFER
                            </span>

                            <h2 className="about-section-title">
                                Features of <span>BloodLink</span>
                            </h2>

                            <p className="about-section-text">
                                Tools designed to support blood donation
                                management in one place.
                            </p>
                        </div>

                        <div className="row g-4">
                            {features.map((feature, index) => (
                                <div className="col-lg-3 col-md-6" key={feature.title}>
                                    <article className="about-feature-card">
                                        <div className="about-feature-icon">
                                            <i className={`bi ${feature.icon}`}></i>
                                        </div>

                                        <span className="about-feature-number">
                                            0{index + 1}
                                        </span>

                                        <h3>{feature.title}</h3>

                                        <p>{feature.description}</p>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="about-roles-section section-padding">
                    <div className="container">

                        <div className="text-center mb-5">
                            <span className="about-section-label">
                                OUR COMMUNITY
                            </span>

                            <h2 className="about-section-title">
                                Built for <span>Everyone</span>
                            </h2>
                        </div>

                        <div className="row g-4">
                            <div className="col-md-4">
                                <div className="about-role-card">
                                    <i className="bi bi-person-heart"></i>
                                    <h3>Patients</h3>
                                    <p>
                                        Submit blood requests and track
                                        their request information.
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="about-role-card">
                                    <i className="bi bi-heart-pulse-fill"></i>
                                    <h3>Donors</h3>
                                    <p>
                                        Manage donor profiles and view
                                        donation schedules.
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="about-role-card">
                                    <i className="bi bi-shield-lock-fill"></i>
                                    <h3>Administrators</h3>
                                    <p>
                                        Manage users, blood requests,
                                        blood stock and reports.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about-cta-section">
                    <div className="container text-center">
                        <i className="bi bi-heart-pulse-fill"></i>

                        <h2>Be a Part of Something Meaningful</h2>

                        <p>
                            Join BloodLink and become a part of a
                            connected blood donation community.
                        </p>

                        <Link
                            to="/"
                            className="about-cta-btn"
                        >
                            Get Started
                            <i className="bi bi-arrow-right ms-2"></i>
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />

        </>
    );
}

export default AboutUs;