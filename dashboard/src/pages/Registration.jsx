import { useState } from "react";
import BloodGroupDropdown from "../components/BloodGroupDropdown";
import Footer from "../components/Footer";
import useForm from "../hooks/useForm";
import { Helmet } from "react-helmet-async";

function Registration() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
        setShowPassword(false);
        setShowConfirmPassword(false);
    });

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

                                <form onSubmit={handleSubmit} noValidate>
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
                                                onChange={handleChange}
                                                className="form-control"
                                                placeholder="Enter your full name"
                                                required
                                                aria-invalid={!!errors.fullName}
                                                aria-describedby={errors.fullName ? "fullName-error" : undefined}
                                            />
                                        </div>

                                        {errors.fullName && (
                                            <small id="fullName-error" className="text-danger" role="alert">
                                                {errors.fullName}
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
                                                onChange={handleChange}
                                                className="form-control"
                                                placeholder="Enter your email"
                                                required
                                                aria-invalid={!!errors.email}
                                                aria-describedby={errors.email ? "email-error" : undefined}
                                            />
                                        </div>

                                        {errors.email && (
                                            <small id="email-error" className="text-danger" role="alert">
                                                {errors.email}
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
                                                onChange={handleChange}
                                                className="form-control"
                                                placeholder="Enter your mobile number"
                                                required
                                                aria-invalid={!!errors.phone}
                                                aria-describedby={errors.phone ? "phone-error" : undefined}
                                            />
                                        </div>

                                        {errors.phone && (
                                            <small id="phone-error" className="text-danger" role="alert">
                                                {errors.phone}
                                            </small>
                                        )}
                                    </div>

                                    <div className="mb-3">
                                        <BloodGroupDropdown
                                            value={formData.bloodGroup}
                                            onChange={handleChange}
                                            name="bloodGroup"
                                            label="Blood Group"
                                            required
                                        />

                                        {errors.bloodGroup && (
                                            <small className="text-danger" role="alert">
                                                {errors.bloodGroup}
                                            </small>
                                        )}
                                    </div>

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
                                                onChange={handleChange}
                                                className="form-control"
                                                placeholder="Create password"
                                                required
                                                aria-invalid={!!errors.password}
                                                aria-describedby={errors.password ? "password-error" : undefined}
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

                                        {errors.password && (
                                            <small id="password-error" className="text-danger" role="alert">
                                                {errors.password}
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
                                                onChange={handleChange}
                                                className="form-control"
                                                placeholder="Confirm password"
                                                required
                                                aria-invalid={!!errors.confirmPassword}
                                                aria-describedby={errors.confirmPassword ? "confirmPassword-error" : undefined}
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

                                        {errors.confirmPassword && (
                                            <small id="confirmPassword-error" className="text-danger" role="alert">
                                                {errors.confirmPassword}
                                            </small>
                                        )}
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn w-100 text-white fw-semibold py-2 rounded-3"
                                        style={{
                                            background: "linear-gradient(115deg, #951629 0%, #b42332 55%, #a51d30 100%)",
                                            border: "none"
                                        }}
                                    >
                                        Create Account
                                    </button>

                                    <div className="text-center mt-4">
                                        Already have an account?{" "}
                                        <a href="/login.html">
                                            Login
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Registration;
