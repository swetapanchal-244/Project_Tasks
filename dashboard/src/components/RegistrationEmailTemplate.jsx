function RegistrationEmailTemplate({ user, onClose }) {
    return (
        <div className="email-preview-overlay">
            <div
                className="email-preview-modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="email-preview-title"
            >
                <div className="email-preview-header">
                    <div>
                        <h5 id="email-preview-title">
                            <i className="bi bi-envelope-paper-heart me-2"></i>
                            Welcome Email Preview
                        </h5>
                        <p>Registration confirmation template</p>
                    </div>

                    <button
                        type="button"
                        className="email-preview-close"
                        onClick={onClose}
                        aria-label="Close email preview"
                    >
                        <i className="bi bi-x-lg"></i>
                    </button>
                </div>

                <div className="email-preview-body">
                    <div className="email-template">

                        <div className="email-template-header">
                            <div className="email-brand-icon">
                                <i className="bi bi-heart-pulse-fill"></i>
                            </div>

                            <h2>Blood<span>Link</span></h2>
                            <p>SHARE LIFE, GIVE BLOOD</p>
                        </div>

                        <div className="email-template-content">
                            <div className="email-success-icon">
                                <i className="bi bi-check-lg"></i>
                            </div>

                            <h2>Welcome to BloodLink!</h2>

                            <p className="email-greeting">
                                Hello <strong>{user.fullName || "User"}</strong>,
                            </p>

                            <p>
                                Thank you for joining the BloodLink community.
                                Your registration details have been received
                                successfully.
                            </p>

                            <div className="email-details">
                                <h4>
                                    <i className="bi bi-person-vcard me-2"></i>
                                    Your Registration Details
                                </h4>

                                <div>
                                    <span>Name</span>
                                    <strong>{user.fullName || "Not Provided"}</strong>
                                </div>

                                <div>
                                    <span>Email Address</span>
                                    <strong>{user.email || "Not Provided"}</strong>
                                </div>

                                <div>
                                    <span>Mobile Number</span>
                                    <strong>{user.phone || "Not Provided"}</strong>
                                </div>

                                <div>
                                    <span>Blood Group</span>
                                    <strong className="email-blood-group">
                                        {user.bloodGroup || "Not Provided"}
                                    </strong>
                                </div>
                            </div>

                            <p>
                                We are happy to have you as a part of our
                                community. Together, we can support blood
                                donation awareness and help save lives.
                            </p>

                            <div className="email-thankyou">
                                Thank you for being a part of BloodLink ❤️
                            </div>
                        </div>

                        <div className="email-template-footer">
                            <h5>BloodLink</h5>
                            <p>Share Life, Give Blood</p>
                            <small>
                                This is a frontend email template preview.
                                No email has been sent.
                            </small>
                        </div>
                    </div>
                </div>

                <div className="email-preview-footer">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={onClose}
                    >
                        <i className="bi bi-x-circle me-2"></i>
                        Close Preview
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RegistrationEmailTemplate;
