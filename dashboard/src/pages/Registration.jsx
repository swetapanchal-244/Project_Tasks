import { useState } from "react";
import BloodGroupDropdown from "../components/BloodGroupDropdown";
import Footer from "../components/Footer";

function Registration() {

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        bloodGroup: "",
        password: "",
        confirmPassword: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        if (formData.fullName.trim() === "") {
            alert("Please enter your full name.");
            return;
        }

        if (formData.fullName.trim().split(" ").length < 2) {
            alert("Please enter your first and last name.");
            return;
        }

        if (formData.email.trim() === "") {
            alert("Please enter your email.");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(formData.email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (formData.phone.trim() === "") {
            alert("Please enter your mobile number.");
            return;
        }

        const phonePattern = /^[6-9]\d{9}$/;

        if (!phonePattern.test(formData.phone)) {
            alert("Please enter a valid 10-digit mobile number.");
            return;
        }

        if (formData.bloodGroup === "") {
            alert("Please select your blood group.");
            return;
        }

        if (formData.password.trim() === "") {
            alert("Please create a password.");
            return;
        }

        if (formData.password.length < 8) {
            alert("Password must be at least 8 characters.");
            return;
        }

        if (formData.confirmPassword.trim() === "") {
            alert("Please confirm your password.");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        alert("Registration Successful! ❤️");

        setFormData({
            fullName: "",
            email: "",
            phone: "",
            bloodGroup: "",
            password: "",
            confirmPassword: "",
        });

        setShowPassword(false);
        setShowConfirmPassword(false);
    };

    return (

        <>

            <section className="registration-section">

                <div className="container">

                    <div className="row align-items-center justify-content-center">

                        <div className="col-lg-6 d-flex">

                            <div className="left-panel">

                                <div className="brand-box">

                                    <div className="brand-icon">
                                        <i className="bi bi-heart-pulse-fill"></i>
                                    </div>

                                    <h1>BloodLink</h1>

                                    <h5>Become a Blood Donor</h5>

                                    <p>
                                        Register today and become someone's hero.
                                        A single blood donation can save up to three lives.
                                    </p>

                                    <div className="info-card">

                                        <i className="bi bi-droplet-half"></i>

                                        <span>
                                            Donate Blood, Save Lives ❤️
                                        </span>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="col-lg-5 col-md-8 registration-form-wrapper">

                            <div className="login-card">

                                <div className="text-center mb-4">

                                    <div className="logo-circle">
                                        <i className="bi bi-person-plus-fill"></i>
                                    </div>

                                    <h2>Create Account</h2>

                                    <p className="subtitle">
                                        Join the BloodLink Community
                                    </p>

                                </div>

                                <form onSubmit={handleSubmit}>

                                    <div className="mb-3">

                                        <label className="form-label">
                                            Full Name
                                        </label>

                                        <div className="input-group custom-input">

                                            <span className="input-group-text">
                                                <i className="bi bi-person-fill"></i>
                                            </span>

                                            <input
                                                type="text"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                className="form-control"
                                                placeholder="Enter your full name"
                                            />

                                        </div>

                                    </div>

                                    <div className="mb-3">

                                        <label className="form-label">
                                            Email Address
                                        </label>

                                        <div className="input-group custom-input">

                                            <span className="input-group-text">
                                                <i className="bi bi-envelope-fill"></i>
                                            </span>

                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="form-control"
                                                placeholder="Enter your email"
                                            />

                                        </div>

                                    </div>

                                    <div className="mb-3">

                                        <label className="form-label">
                                            Mobile Number
                                        </label>

                                        <div className="input-group custom-input">

                                            <span className="input-group-text">
                                                <i className="bi bi-telephone-fill"></i>
                                            </span>

                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="form-control"
                                                placeholder="Enter your mobile number"
                                            />

                                        </div>

                                    </div>

                                    <div className="mb-3">

                                        <BloodGroupDropdown
                                            value={formData.bloodGroup}
                                            onChange={handleChange}
                                            name="bloodGroup"
                                            label="Blood Group"
                                            required
                                        />

                                    </div>

                                    <div className="mb-3">

                                        <label className="form-label">
                                            Password
                                        </label>

                                        <div className="input-group custom-input">

                                            <span className="input-group-text">
                                                <i className="bi bi-lock-fill"></i>
                                            </span>

                                            <input
                                                type={showPassword ? "text" : "password"}
                                                name="password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                className="form-control"
                                                placeholder="Create password"
                                            />

                                            <button
                                                type="button"
                                                className="btn bg-white"
                                                onClick={() => setShowPassword(!showPassword)}
                                            >
                                                <i
                                                    className={
                                                        showPassword
                                                            ? "bi bi-eye-slash-fill"
                                                            : "bi bi-eye-fill"
                                                    }
                                                ></i>
                                            </button>

                                        </div>

                                    </div>

                                    <div className="mb-4">

                                        <label className="form-label">
                                            Confirm Password
                                        </label>

                                        <div className="input-group custom-input">

                                            <span className="input-group-text">
                                                <i className="bi bi-shield-lock-fill"></i>
                                            </span>

                                            <input
                                                type={showConfirmPassword ? "text" : "password"}
                                                name="confirmPassword"
                                                value={formData.confirmPassword}
                                                onChange={handleChange}
                                                className="form-control"
                                                placeholder="Confirm password"
                                            />

                                            <button
                                                type="button"
                                                className="btn bg-white"
                                                onClick={() =>
                                                    setShowConfirmPassword(!showConfirmPassword)
                                                }
                                            >
                                                <i
                                                    className={
                                                        showConfirmPassword
                                                            ? "bi bi-eye-slash-fill"
                                                            : "bi bi-eye-fill"
                                                    }
                                                ></i>
                                            </button>

                                        </div>

                                    </div>

                                    <button
                                        type="submit"
                                        className="btn w-100 text-white fw-semibold py-2 rounded-3"
                                        style={{
                                            background:
                                                "linear-gradient(115deg, #951629 0%, #b42332 55%, #a51d30 100%)",
                                            border: "none"
                                        }}
                                    >
                                        Create Account
                                    </button>


                                    <div className="text-center mt-4">

                                        Already have an account?

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