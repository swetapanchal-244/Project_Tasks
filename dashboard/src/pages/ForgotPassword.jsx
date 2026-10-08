import { useState } from "react";

function ForgotPassword() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email.trim() === "") {
            alert("Please enter your email address.");
            return;
        }

        alert("Password reset link has been sent to your email.");
    };

    return (
        <section className="forgot-password-section">

            <div className="container">

                <div className="row justify-content-center align-items-center">

                    <div className="col-lg-5 col-md-7">

                        <div className="forgot-password-card">

                            <div className="text-center mb-4">

                                <div className="forgot-icon">
                                    <i className="bi bi-lock-fill"></i>
                                </div>

                                <h2>Forgot Password</h2>

                                <p className="text-muted">
                                    Enter your regirtred email address
                                    to reset your password.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit}>

                                <div className="mb-4">

                                    <label className="form-label fw-semibold">
                                        Email Address
                                    </label>

                                    <div className="input-group custom-input">

                                        <span className="input-group-text">
                                            <i className="bi bi-envelope-fill"></i>
                                        </span>

                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="btn forgot-btn w-100"
                                >
                                    Send Reset Link
                                </button>
                            </form>

                            <div className="text-center mt-4">

                                <a href="/login.html">
                                    <i className="bi bi-arrow-left me-1"></i>
                                    Back to Login
                                </a>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default ForgotPassword;