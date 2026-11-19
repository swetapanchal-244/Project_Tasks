import { Link } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";

function NotFound() {
    return (
        <div className="not-found-page">

            <div className="not-found-theme">
                <ThemeToggle />
            </div>

            <div className="not-found-content">

                <div className="not-found-icon">
                    <i className="bi bi-exclamation-circle"></i>
                </div>

                <h1>404</h1>

                <h2>Oops! Page Not Found</h2>

                <p>
                    Sorry, the page you are looking for
                    doesn't exist or has been moved.
                </p>

                <Link to="/" className="not-found-btn">
                    <i className="bi bi-house-door me-2"></i>
                    Back to Home
                </Link>

                <div className="not-found-brand">
                    <i className="bi bi-heart-pulse-fill"></i>
                    BloodLink: Share Life, Give Blood
                </div>

            </div>
        </div>
    );
}

export default NotFound;