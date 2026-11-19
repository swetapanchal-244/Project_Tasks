import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import AlertMessage from "../components/AlertMessage";
import { Helmet } from "react-helmet-async";

function AlertDemo() {
    const [alert, setAlert] = useState(null);

    const showAlert = (type, message) => {
        setAlert({ type, message });
    };

    return (
        <div>

            <Helmet>
                <title>Alert Component Demo | BloodLink</title>
                <meta
                    name="description"
                    content="Test success, error and warning alert messages using the reusable alert component in BloodLink."
                />
                <meta
                    name="keywords"
                    content="BloodLink, React alert component, success alert, error alert, warning alert"
                />
                <meta property="og:title" content="Alert Component Demo | BloodLink" />
                <meta
                    property="og:description"
                    content="Explore success, error and warning notifications in BloodLink."
                />
                <meta property="og:type" content="website" />
            </Helmet>

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