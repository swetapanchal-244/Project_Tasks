import { useEffect, useMemo, useState } from "react";
import { createColumnHelper, getCoreRowModel, useReactTable } from "@tanstack/react-table";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ResuableTable from "../components/ReusableTable";

function PatientRequestHistory() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        const savedRequests = JSON.parse(
            localStorage.getItem("patientRequests") || "[]"
        );
        setRequests(savedRequests);
    }, []);

    const columnHelper = createColumnHelper();

    const columns = useMemo(() => [
        columnHelper.accessor("requestId", {
            header: "Request ID",
            cell: info => (
                <span className="fw-semibold text-danger">
                    {info.getValue()}
                </span>
            )
        }),
        columnHelper.accessor("bloodGroup", {
            header: "Blood Group"
        }),
        columnHelper.accessor("requiredUnits", {
            header: "Request Date"
        }),
        columnHelper.accessor("hospitalName", {
            header: "Hospital Name"
        }),
        columnHelper.accessor("status", {
            header: "Request Status",
            cell: info => {
                const status = info.getValue();

                const statusClasses = {
                    Pending: "bg-warning text-dark",
                    Approved: "bg-success",
                    Rejected: "bg-danger",
                    Completed: "bg-primary"
                };

                return (
                    <span className={`badge ${statusClasses[status] || "bg-secondary"}`}>
                        {status}
                    </span>
                );
            }
        })
    ], []);

    const table = useReactTable({
        data: requests,
        columns,
        getCoreRowModel: getCoreRowModel()
    });

    const savedProfile = JSON.parse(
        localStorage.getItem("patientProfile") || '{"name":"Sweta Panchal"}'
    );

    return (
        <div className="min-vh-100 d-flex flex-column bg-light">
            <Navbar
                name={savedProfile.name || "Sweta Panchal"}
                role="Patient"
                profileImage="/profile.webp"
            />

            <div className="d-flex flex-grow-1 patient-layout">

                <button
                    className="btn btn-danger d-lg-none patient-menu-toggle"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    aria-label="Toggle sidebar"
                    aria-expanded={sidebarOpen}
                >
                    <i className="bi bi-list fs-4"></i>
                    <span className="ms-2">Menu</span>
                </button>

                <div className={`patient-sidebar-wrapper ${sidebarOpen ? "sidebar-open" : ""}`}>
                    <Sidebar role="patient" />
                </div>

                <main className="flex-grow-1 min-w-0 p-3 p-md-4 patient-main">

                    <div
                        className="card border-0 rounded-4 shadow-sm text-white mb-4"
                        style={{
                            background: "linear-gradient(115deg, #951629 0%, #b42332 55%, #a51d30 100%)"
                        }}
                    >
                        <div className="card-body p-4 p-lg-5">
                            <span className="badge bg-white text-danger mb-3">
                                PATIENT SERVICES
                            </span>

                            <h2 className="fw-bold mb-2">
                                Request History
                            </h2>

                            <p className="mb-0">
                                View and track all your submitted blood requests.
                            </p>
                        </div>
                    </div>

                    <div className="card border-0 rounded-4 shadow-sm">
                        <div className="card-body p-3 p-md-4">

                            <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-4">
                                <div>
                                    <h4 className="fw-bold text-dark mb-1">
                                        Blood Request Records
                                    </h4>
                                    <p className="text-secondary mb-0">
                                        Total Requests: {requests.length}
                                    </p>
                                </div>

                                <span className="badge rounded-pill text-bg-light border px-3 py-2">
                                    <i className="bi bi-clock-history me-2"></i>
                                    Request History
                                </span>
                            </div>

                            <ResuableTable
                                table={table}
                                emptyMessage="No blood request history found. Submit a blood request to see it here."
                            />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default PatientRequestHistory;