import { Link } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";

function MaintainancePage() {
    return (
        <div className="maintenance-page">

            <div className="maintenance-theme">
                <ThemeToggle />
            </div>

            <div className="maintenance-content">

                <div className="maintenance-icon">
                    <i className="bi bi-tools"></i>
                </div>

                <h1>We'll Be Back Soon!</h1>

                <h2>BloodLink is Under Maintenance</h2>

                <p>
                    We're currently working on improving our website
                    to provied you with a better experience.
                    We'll be back shortly. Thank you for your patience!
                </p>

                <div className="maintenance-status">
                    <span className="maintenance-dot"></span>
                    Website Maintenance in Progress
                </div>

                <Link to="/" className="maintenance-home-btn">
                    <i className="bi bi-house-door me-2"></i>
                    Back to Home
                </Link>

                <div className="maintenance-brand">
                    <i className="bi bi-heart-pulse-fill"></i>
                    BloodLink: Share Life, Give Blood
                </div>

            </div>
        </div>
    );
}

export default MaintainancePage;