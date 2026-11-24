import RegistrationEmailTemplate from "../components/RegistrationEmailTemplate";
import { useState } from "react";
import BloodGroupDropdown from "../components/BloodGroupDropdown";
import Footer from "../components/Footer";
import useForm from "../hooks/useForm";
import { Helmet } from "react-helmet-async";

function Registration() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [stepErrors, setStepErrors] = useState({});
    const [showEmailPreview, setShowEmailPreview] = useState(false);

    const initialValues = {
        fullName: "",
        email: "",
        phone: "",
        bloodGroup: "",
        password: "",
        confirmPassword: "",
    };

    const validateForm = (values) => {
        const errors = {};

        if (values.fullName.trim() === "") {
            errors.fullName = "Please enter your full name.";
        } else if (values.fullName.trim().split(/\s+/).length < 2) {
            errors.fullName = "Please enter your first and last name.";
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (values.email.trim() === "") {
            errors.email = "Please enter your email.";
        } else if (!emailPattern.test(values.email)) {
            errors.email = "Please enter a valid email address.";
        }

        const phonePattern = /^[6-9]\d{9}$/;

        if (values.phone.trim() === "") {
            errors.phone = "Please enter your mobile number.";
        } else if (!phonePattern.test(values.phone)) {
            errors.phone = "Please enter a valid 10-digit mobile number.";
        }

        if (values.bloodGroup === "") {
            errors.bloodGroup = "Please select your blood group.";
        }

        if (values.password.trim() === "") {
            errors.password = "Please create a password.";
        } else if (values.password.length < 8) {
            errors.password = "Password must be at least 8 characters.";
        }

        if (values.confirmPassword.trim() === "") {
            errors.confirmPassword = "Please confirm your password.";
        } else if (values.password !== values.confirmPassword) {
            errors.confirmPassword = "Passwords do not match.";
        }

        return errors;
    };

    const {
        values: formData,
        errors,
        handleChange,
        handleSubmit,
        resetForm,
    } = useForm(initialValues, validateForm, () => {
        alert("Registration Successful! ❤️");
        resetForm();
        setCurrentStep(1);
        setStepErrors({});
        setShowPassword(false);
        setShowConfirmPassword(false);
    });

    const steps = [
        "Personal Details",
        "Blood Details",
        "Account Details"
    ];

    const stepFields = {
        1: ["fullName", "email", "phone"],
        2: ["bloodGroup"],
        3: ["password", "confirmPassword"]
    };

    const handleNext = () => {
        const allErrors = validateForm(formData);
        const currentErrors = {};

        stepFields[currentStep].forEach((field) => {
            if (allErrors[field]) {
                currentErrors[field] = allErrors[field];
            }
        });

        setStepErrors(currentErrors);

        if (Object.keys(currentErrors).length > 0) {
            return;
        }

        setCurrentStep((prev) => prev + 1);
    };

    const handlePrevious = () => {
        setStepErrors({});
        setCurrentStep((prev) => prev - 1);
    };

    const handleFieldChange = (e) => {
        handleChange(e);

        const { name } = e.target;

        setStepErrors((prev) => ({
            ...prev,
            [name]: ""
        }));
    };

    const getError = (field) => stepErrors[field] || errors[field];

    return (
        <>
            <Helmet>
                <title>Register | BloodLink - Become a Blood Donor</title>
                <meta
                    name="description"
                    content="Join the BloodLink community. Register as a blood donor and help save lives through blood donation."
                />
                <meta
                    name="keywords"
                    content="BloodLink, blood donor registration, register as donor, blood donation, save lives"
                />
                <meta property="og:title" content="Register | BloodLink" />
                <meta
                    property="og:description"
                    content="Become a blood donor and help save lives with BloodLink."
                />
                <meta property="og:type" content="website" />
            </Helmet>

            <section className="registration-section">
                <div className="container">
                    <div className="row align-items-center justify-content-center">

                        <div className="col-lg-6 d-flex">
                            <div className="left-panel">
                                <div className="brand-box">
                                    <div className="brand-icon">
                                        <i className="bi bi-heart-pulse-fill" aria-hidden="true"></i>
                                    </div>

                                    <h1>BloodLink</h1>
                                    <h5>Become a Blood Donor</h5>

                                    <p>
                                        Register today and become someone's hero.
                                        A single blood donation can save up to three lives.
                                    </p>

                                    <div className="info-card">
                                        <i className="bi bi-droplet-half" aria-hidden="true"></i>
                                        <span>Donate Blood, Save Lives ❤️</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-8 registration-form-wrapper">
                            <div className="login-card">

                                <div className="text-center mb-4">
                                    <div className="logo-circle">
                                        <i className="bi bi-person-plus-fill" aria-hidden="true"></i>
                                    </div>

                                    <h2>Create Account</h2>
                                    <p className="subtitle">
                                        Join the BloodLink Community
                                    </p>
                                </div>

                                <div className="registration-progress mb-4">
                                    <div className="d-flex justify-content-between mb-2">
                                        {steps.map((step, index) => (
                                            <div
                                                key={step}
                                                className={`registration-step-label ${currentStep >= index + 1 ? "active" : ""
                                                    }`}
                                            >
                                                <span className="step-number">
                                                    {index + 1}
                                                </span>
                                                <small>{step}</small>
                                            </div>
                                        ))}
                                    </div>

                                    <div
                                        className="progress"
                                        style={{ height: "7px" }}
                                        role="progressbar"
                                        aria-label="Registration progress"
                                        aria-valuenow={currentStep}
                                        aria-valuemin="1"
                                        aria-valuemax="3"
                                    >
                                        <div
                                            className="progress-bar"
                                            style={{
                                                width: `${(currentStep / 3) * 100}%`,
                                                backgroundColor: "#951629",
                                                transition: "width 0.3s ease"
                                            }}
                                        ></div>
                                    </div>

                                    <p className="text-center text-muted small mt-2 mb-0">
                                        Step {currentStep} of 3
                                    </p>
                                </div>

                                <form
                                    onSubmit={handleSubmit}
                                    noValidate
                                >

                                    {currentStep === 1 && (
                                        <div className="registration-step-content">
                                            <h5 className="fw-bold mb-3">
                                                Personal Details
                                            </h5>

                                            <div className="mb-3">
                                                <label htmlFor="fullName" className="form-label">
                                                    Full Name
                                                </label>

                                                <div className="input-group custom-input">
                                                    <span className="input-group-text">
                                                        <i className="bi bi-person-fill" aria-hidden="true"></i>
                                                    </span>

                                                    <input
                                                        id="fullName"
                                                        type="text"
                                                        name="fullName"
                                                        value={formData.fullName}
                                                        onChange={handleFieldChange}
                                                        className="form-control"
                                                        placeholder="Enter your full name"
                                                        autoComplete="name"
                                                        required
                                                        aria-invalid={!!getError("fullName")}
                                                        aria-describedby={getError("fullName") ? "fullName-error" : undefined}
                                                    />
                                                </div>

                                                {getError("fullName") && (
                                                    <small id="fullName-error" className="text-danger" role="alert">
                                                        {getError("fullName")}
                                                    </small>
                                                )}
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="email" className="form-label">
                                                    Email Address
                                                </label>

                                                <div className="input-group custom-input">
                                                    <span className="input-group-text">
                                                        <i className="bi bi-envelope-fill" aria-hidden="true"></i>
                                                    </span>

                                                    <input
                                                        id="email"
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleFieldChange}
                                                        className="form-control"
                                                        placeholder="Enter your email"
                                                        autoComplete="email"
                                                        required
                                                        aria-invalid={!!getError("email")}
                                                        aria-describedby={getError("email") ? "email-error" : undefined}
                                                    />
                                                </div>

                                                {getError("email") && (
                                                    <small id="email-error" className="text-danger" role="alert">
                                                        {getError("email")}
                                                    </small>
                                                )}
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="phone" className="form-label">
                                                    Mobile Number
                                                </label>

                                                <div className="input-group custom-input">
                                                    <span className="input-group-text">
                                                        <i className="bi bi-telephone-fill" aria-hidden="true"></i>
                                                    </span>

                                                    <input
                                                        id="phone"
                                                        type="tel"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleFieldChange}
                                                        className="form-control"
                                                        placeholder="Enter your mobile number"
                                                        autoComplete="tel"
                                                        required
                                                        aria-invalid={!!getError("phone")}
                                                        aria-describedby={getError("phone") ? "phone-error" : undefined}
                                                    />
                                                </div>

                                                {getError("phone") && (
                                                    <small id="phone-error" className="text-danger" role="alert">
                                                        {getError("phone")}
                                                    </small>
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    {currentStep === 2 && (
                                        <div className="registration-step-content">
                                            <h5 className="fw-bold mb-3">
                                                Blood Details
                                            </h5>

                                            <p className="text-muted small">
                                                Select your blood group to complete your donor profile.
                                            </p>

                                            <div className="mb-3">
                                                <BloodGroupDropdown
                                                    value={formData.bloodGroup}
                                                    onChange={handleFieldChange}
                                                    name="bloodGroup"
                                                    label="Blood Group"
                                                    required
                                                />

                                                {getError("bloodGroup") && (
                                                    <small className="text-danger" role="alert">
                                                        {getError("bloodGroup")}
                                                    </small>
                                                )}
                                            </div>

                                            <div className="alert alert-light border">
                                                <i className="bi bi-info-circle me-2 text-danger"></i>
                                                Please select your correct blood group.
                                            </div>
                                        </div>
                                    )}

                                    {currentStep === 3 && (
                                        <div className="registration-step-content">
                                            <h5 className="fw-bold mb-3">
                                                Account Details
                                            </h5>

                                            <div className="mb-3">
                                                <label htmlFor="password" className="form-label">
                                                    Password
                                                </label>

                                                <div className="input-group custom-input">
                                                    <span className="input-group-text">
                                                        <i className="bi bi-lock-fill" aria-hidden="true"></i>
                                                    </span>

                                                    <input
                                                        id="password"
                                                        type={showPassword ? "text" : "password"}
                                                        name="password"
                                                        value={formData.password}
                                                        onChange={handleFieldChange}
                                                        className="form-control"
                                                        placeholder="Create password"
                                                        autoComplete="new-password"
                                                        required
                                                        aria-invalid={!!getError("password")}
                                                        aria-describedby={getError("password") ? "password-error" : undefined}
                                                    />

                                                    <button
                                                        type="button"
                                                        className="btn bg-white"
                                                        onClick={() => setShowPassword(!showPassword)}
                                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                                        aria-pressed={showPassword}
                                                        aria-controls="password"
                                                    >
                                                        <i
                                                            className={showPassword ? "bi bi-eye-slash-fill" : "bi bi-eye-fill"}
                                                            aria-hidden="true"
                                                        ></i>
                                                    </button>
                                                </div>

                                                {getError("password") && (
                                                    <small id="password-error" className="text-danger" role="alert">
                                                        {getError("password")}
                                                    </small>
                                                )}
                                            </div>

                                            <div className="mb-4">
                                                <label htmlFor="confirmPassword" className="form-label">
                                                    Confirm Password
                                                </label>

                                                <div className="input-group custom-input">
                                                    <span className="input-group-text">
                                                        <i className="bi bi-shield-lock-fill" aria-hidden="true"></i>
                                                    </span>

                                                    <input
                                                        id="confirmPassword"
                                                        type={showConfirmPassword ? "text" : "password"}
                                                        name="confirmPassword"
                                                        value={formData.confirmPassword}
                                                        onChange={handleFieldChange}
                                                        className="form-control"
                                                        placeholder="Confirm password"
                                                        autoComplete="new-password"
                                                        required
                                                        aria-invalid={!!getError("confirmPassword")}
                                                        aria-describedby={getError("confirmPassword") ? "confirmPassword-error" : undefined}
                                                    />

                                                    <button
                                                        type="button"
                                                        className="btn bg-white"
                                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                        aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                                                        aria-pressed={showConfirmPassword}
                                                        aria-controls="confirmPassword"
                                                    >
                                                        <i
                                                            className={showConfirmPassword ? "bi bi-eye-slash-fill" : "bi bi-eye-fill"}
                                                            aria-hidden="true"
                                                        ></i>
                                                    </button>
                                                </div>

                                                {getError("confirmPassword") && (
                                                    <small id="confirmPassword-error" className="text-danger" role="alert">
                                                        {getError("confirmPassword")}
                                                    </small>
                                                )}
                                            </div>

                                            <button
                                                type="button"
                                                className="btn btn-outline-danger w-100 mt-2"
                                                onClick={() => setShowEmailPreview(true)}
                                            >
                                                <i className="bi bi-envelope-paper-heart me-2"></i>
                                                Preview Welcome Email
                                            </button>

                                        </div>
                                    )}

                                    <div className="d-flex gap-2 mt-4">

                                        {currentStep > 1 && (
                                            <button
                                                type="button"
                                                className="btn btn-outline-secondary flex-fill py-2 rounded-3"
                                                onClick={handlePrevious}
                                            >
                                                <i className="bi bi-arrow-left me-2"></i>
                                                Previous
                                            </button>
                                        )}

                                        {currentStep < 3 ? (
                                            <button
                                                type="button"
                                                className="btn flex-fill text-white fw-semibold py-2 rounded-3"
                                                style={{
                                                    background: "linear-gradient(115deg, #951629, #b42332)",
                                                    border: "none"
                                                }}
                                                onClick={handleNext}
                                            >
                                                Next
                                                <i className="bi bi-arrow-right ms-2"></i>
                                            </button>
                                        ) : (
                                            <button
                                                type="submit"
                                                className="btn flex-fill text-white fw-semibold py-2 rounded-3"
                                                style={{
                                                    background: "linear-gradient(115deg, #951629, #b42332)",
                                                    border: "none"
                                                }}
                                            >
                                                Create Account
                                                <i className="bi bi-check-circle ms-2"></i>
                                            </button>
                                        )}
                                    </div>

                                    <div className="text-center mt-4">
                                        Already have an account?{" "}
                                        <a href="/login.html">Login</a>
                                    </div>

                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {showEmailPreview && (
                <RegistrationEmailTemplate
                    user={formData}
                    onClose={() => setShowEmailPreview(false)}
                />
            )}

            <Footer />
        </>
    );
}

export default Registration;
