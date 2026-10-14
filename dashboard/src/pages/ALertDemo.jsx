import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import AlertMessage from "../components/AlertMessage";

function AlertDemo() {
    const [alert, setAlert] = useState(null);

    const showAlert = (type, message) => {
        setAlert({ type, message });
    };

    return (
        <div>
            <Navbar />

            <div className="d-flex">
                <Sidebar />

                <main className="flex-grow-1 p-4">
                    <h2 className="fw-bold mb-2">
                        Alert Component Demo
                    </h2>

                    <p className="text-muted mb-4">
                        Test success, error, and warning alerts.
                    </p>

                    {alert && (
                        <AlertMessage
                            type={alert.type}
                            message={alert.message}
                            onClose={() => setAlert(null)}
                        />
                    )}

                    <div className="d-flex flex-wrap gap-2">
                        <button
                            className="btn btn-success"
                            onClick={() =>
                                showAlert(
                                    "success",
                                    "Operation completed successfully!"
                                )
                            }
                        >
                            Success Alert
                        </button>

                        <button
                            className="btn btn-danger"
                            onClick={() =>
                                showAlert(
                                    "error",
                                    "Something went wrong!"
                                )
                            }
                        >
                            Error Alert
                        </button>

                        <button
                            className="btn btn-warning"
                            onClick={() =>
                                showAlert(
                                    "warning",
                                    "Please check your information!"
                                )
                            }
                        >
                            Warning Alert
                        </button>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default AlertDemo;