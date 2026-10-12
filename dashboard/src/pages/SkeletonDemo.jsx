import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SkeletonLoader from "../components/SkeletonLoader";

function SkeletonDemo() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);
                setError("");

                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch users.");
                }

                const data = await response.json();
                setUsers(data);
            } catch (err) {
                setError("Unable to load data. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const gradient =
        "linear-gradient(115deg, #951629 0%, #b42332 55%, #a51d30 100%)";

    return (
        <div className="min-vh-100 bg-light">
            <Navbar role="Admin" profileImage="/profile.jpg" />

            <div className="d-flex">
                <Sidebar role="admin" />

                <main className="container-fluid p-3 p-lg-4">
                    <div
                        className="card border-0 rounded-4 text-white shadow-sm mb-4"
                        style={{ background: gradient }}
                    >
                        <div className="card-body p-4">
                            <h2 className="fw-bold mb-2">
                                API Skeleton Loader
                            </h2>
                            <p className="mb-0">
                                Loading placeholders while data is being fetched.
                            </p>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h4 className="fw-bold mb-0">User Data</h4>

                        {!loading && !error && (
                            <span className="badge text-bg-danger rounded-pill px-3 py-2">
                                {users.length} Users
                            </span>
                        )}
                    </div>

                    {loading && (
                        <SkeletonLoader type="card" count={4} />
                    )}

                    {error && (
                        <div className="alert alert-danger rounded-3">
                            <p className="mb-2">{error}</p>

                            <button
                                className="btn btn-outline-danger btn-sm"
                                onClick={() => window.location.reload()}
                            >
                                Try Again
                            </button>
                        </div>
                    )}

                    {!loading && !error && (
                        <div className="row g-4">
                            {users.map((user) => (
                                <div
                                    className="col-md-6 col-xl-3"
                                    key={user.id}
                                >
                                    <div className="card border-0 rounded-4 shadow-sm h-100">
                                        <div className="card-body p-4">
                                            <div
                                                className="rounded-circle d-flex align-items-center justify-content-center text-white mb-3"
                                                style={{
                                                    width: "48px",
                                                    height: "48px",
                                                    background: gradient,
                                                    fontSize: "20px",
                                                    fontWeight: "bold"
                                                }}
                                            >
                                                {user.name.charAt(0)}
                                            </div>

                                            <h5 className="fw-bold mb-2">
                                                {user.name}
                                            </h5>

                                            <p className="text-secondary small mb-2">
                                                <i className="bi bi-envelope me-2"></i>
                                                {user.email}
                                            </p>

                                            <p className="text-secondary small mb-2">
                                                <i className="bi bi-building me-2"></i>
                                                {user.company.name}
                                            </p>

                                            <p className="text-secondary small mb-0">
                                                <i className="bi bi-geo-alt me-2"></i>
                                                {user.address.city}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}

export default SkeletonDemo;