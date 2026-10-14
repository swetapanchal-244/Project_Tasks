import { useEffect } from "react";

function AlertMessage({
    type = "success",
    message,
    onClose,
}) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose?.();
        }, 4000);

        return () => clearTimeout(timer);
    }, [onClose]);

    const alertClasses = {
        success: "alert-success",
        error: "alert-danger",
        warning: "alert-warning",
    };

    const alertIcons = {
        success: "bi-check-circle-fill",
        error: "bi-x-circle-fill",
        warning: "bi-exclamination-triangle-fill",
    };

    return (
        <div
            className={`alert ${alertClasses[type] || alertClasses.success} alert-dismissible fade show d-flex align-items-center gap-2`}
            role="alert"
        >
            <i
                className={`bi ${alertIcons[type] || alertIcons.success}`}
            ></i>

            <span>{message}</span>

            <button
                type="button"
                className="btn-close ms-auto"
                aria-label="Close"
                onClick={onClose}
            ></button>
        </div>
    );
}

export default AlertMessage;