import { useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const { pathname } = useLocation();

    const floatingPages = [
        "/",
        "/registration",
        "/forgot-password"
    ];

    const isFloating = floatingPages.includes(pathname);

    return (
        <button
            type="button"
            className={`theme-toggle-btn ${isFloating ? "theme-toggle-floating" : ""
                }`}
            onClick={toggleTheme}
            title="Toggle Theme"
            aria-label="Toggle dark mode"
        >
            <i
                className={`bi ${theme === "light"
                        ? "bi-moon-stars-fill"
                        : "bi-sun-fill"
                    }`}
                aria-hidden="true"
            ></i>

            <span>
                {theme === "light" ? "Dark Mode" : "Light Mode"}
            </span>
        </button>
    );
}

export default ThemeToggle;
