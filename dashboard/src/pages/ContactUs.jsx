
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));

        setSubmitted(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setSubmitted(true);

        setFormData({
            name: "",
            email: "",
            subject: "",
            message: ""
        });
    };

    const contactDetails = [
        {
            icon: "bi-envelope-fill",
            title: "Email Us",
            detail: "support@bloodlink.com"
        },
        {
            icon: "bi-telephone-fill",
            title: "Call Us",
            detail: "+91 98765 43210"
        },
        {
            icon: "bi-geo-alt-fill",
            title: "Our Location",
            detail: "Ahmedabad, Gujarat, India"
        }
    ];

    return (
        <>
            <Helmet>
                <title>Contact Us | BloodLink</title>
                <meta
                    name="description"
                    content="Contact BloodLink for questions, feedback and support regarding blood donation management."
                />
                <meta
                    name="keywords"
                    content="Contact BloodLink, BloodLink support, contact blood donation platform"
                />
                <meta property="og:title" content="Contact Us | BloodLink" />
                <meta
                    property="og:description"
                    content="Get in touch with the BloodLink team."
                />
            </Helmet>

            <Navbar />

            <main className="contact-page">

                <section className="contact-hero">
                    <div className="container text-center">
                        <span className="contact-eyebrow">
                            GET IN TOUCH
                        </span>

                        <h1>
                            Contact <span>Us</span>
                        </h1>

                        <p>
                            Have a question or need assistance?
                            We would love to hear from you.
                        </p>
                    </div>
                </section>

                <section className="contact-content-section">
                    <div className="container">
                        <div className="row g-4">

                            <div className="col-lg-5">
                                <div className="contact-info-card">

                                    <span className="contact-info-label">
                                        CONTACT INFORMATION
                                    </span>

                                    <h2>
                                        Let's Start a Conversation
                                    </h2>

                                    <p className="contact-info-description">
                                        Reach out to us for support,
                                        suggestions or any questions
                                        related to BloodLink.
                                    </p>

                                    <div className="contact-details-list">
                                        {contactDetails.map((item) => (
                                            <div
                                                className="contact-detail-item"
                                                key={item.title}
                                            >
                                                <div className="contact-detail-icon">
                                                    <i
                                                        className={`bi ${item.icon}`}
                                                        aria-hidden="true"
                                                    ></i>
                                                </div>

                                                <div>
                                                    <h3>{item.title}</h3>
                                                    <p>{item.detail}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="contact-info-bottom">
                                        <i
                                            className="bi bi-heart-pulse-fill"
                                            aria-hidden="true"
                                        ></i>
                                        <span>BloodLink: Share Life, Give Blood</span>
                                    </div>

                                </div>
                            </div>

                            <div className="col-lg-7">
                                <div className="contact-form-card">

                                    <div className="contact-form-heading">
                                        <span className="contact-section-label">
                                            SEND US A MESSAGE
                                        </span>

                                        <h2>We'd Love to Hear From You</h2>

                                        <p>
                                            Fill out the form below and
                                            share your message with us.
                                        </p>
                                    </div>

                                    {submitted && (
                                        <div
                                            className="alert alert-success"
                                            role="status"
                                            aria-live="polite"
                                        >
                                            <i className="bi bi-check-circle-fill me-2"></i>
                                            Your message has been submitted successfully!
                                        </div>
                                    )}

                                    <form onSubmit={handleSubmit}>

                                        <div className="row g-3">

                                            <div className="col-md-6">
                                                <label
                                                    htmlFor="contactName"
                                                    className="form-label"
                                                >
                                                    Full Name <span>*</span>
                                                </label>

                                                <input
                                                    type="text"
                                                    id="contactName"
                                                    name="name"
                                                    className="form-control contact-input"
                                                    placeholder="Enter your name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    autoComplete="name"
                                                    required
                                                />
                                            </div>

                                            <div className="col-md-6">
                                                <label
                                                    htmlFor="contactEmail"
                                                    className="form-label"
                                                >
                                                    Email Address <span>*</span>
                                                </label>

                                                <input
                                                    type="email"
                                                    id="contactEmail"
                                                    name="email"
                                                    className="form-control contact-input"
                                                    placeholder="Enter your email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    autoComplete="email"
                                                    required
                                                />
                                            </div>

                                            <div className="col-12">
                                                <label
                                                    htmlFor="contactSubject"
                                                    className="form-label"
                                                >
                                                    Subject <span>*</span>
                                                </label>

                                                <input
                                                    type="text"
                                                    id="contactSubject"
                                                    name="subject"
                                                    className="form-control contact-input"
                                                    placeholder="Enter message subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>

                                            <div className="col-12">
                                                <label
                                                    htmlFor="contactMessage"
                                                    className="form-label"
                                                >
                                                    Your Message <span>*</span>
                                                </label>

                                                <textarea
                                                    id="contactMessage"
                                                    name="message"
                                                    className="form-control contact-input"
                                                    rows="5"
                                                    placeholder="Write your message here..."
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required
                                                ></textarea>
                                            </div>

                                            <div className="col-12">
                                                <button
                                                    type="submit"
                                                    className="contact-submit-btn"
                                                >
                                                    Send Message
                                                    <i className="bi bi-send-fill ms-2"></i>
                                                </button>
                                            </div>

                                        </div>
                                    </form>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </>
    );
}

export default ContactUs;
