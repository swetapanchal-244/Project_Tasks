import { useState, useMemo, useEffect } from "react";
import {
    createColumnHelper,
    getCoreRowModel,
    useReactTable
} from "@tanstack/react-table";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";
import ReusableTable from "../components/ReusableTable";

function DonorHome() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [donations, setDonations] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const gradient =
        "linear-gradient(115deg, #951629 0%, #b42332 55%, #a51d30 100%)";

    const savedProfile = JSON.parse(
        localStorage.getItem("donorProfile") ||
        '{"name":"Sweta Panchal"}'
    );

    const donorName = savedProfile.name || "Sweta Panchal";

    useEffect(() => {
        const savedDonations = JSON.parse(
            localStorage.getItem("donationHistory") || "[]"
        );

        setDonations(savedDonations);
    }, []);

    const filterdDonations = useMemo(() => {
        const search = searchTerm.trim().toLowerCase();

        if (!search) return donations;

        return donations.filter((donation) =>
            [
                donation.id,
                donation.bloodGroup,
                donation.hospital,
                donation.location,
                donation.status,
                donation.date,
                donation.units
            ].some((value) =>
                String(value || "").toLowerCase().includes(search)
            )
        );
    }, [donations, searchTerm]);

    const columnHelper = createColumnHelper();

    const columns = useMemo(() => [
        columnHelper.accessor("id", {
            header: "Donation ID",
            cell: info => (
                <span className="fw-semibold text-danger">
                    {info.getValue()}
                </span>
            )
        }),

        columnHelper.accessor("date", {
            header: "Donation Date"
        }),

        columnHelper.accessor("bloodGroup", {
            header: "Blood Group"
        }),

        columnHelper.accessor("units", {
            header: "Units"
        }),

        columnHelper.accessor("hospital", {
            header: "Hospital / Blood Bank"
        }),

        columnHelper.accessor("status", {
            header: "Status",
            cell: info => (
                <span className="badge bg-success-subtle text-success">
                    {info.getValue()}
                </span>
            )
        })
    ], []);

    const table = useReactTable({
        data: filterdDonations,
        columns,
        getCoreRowModel: getCoreRowModel()
    });

    return (
        <div className="min-vh-100 d-flex flex-column bg-light">
            <Navbar
                name={donorName}
                role="Donor"
                profileImage="/profile.webp"
            />

            <div className="d-flex flex-grow-1 donor-layout">

                <div
                    className={`donor-sidebar-wrapper ${sidebarOpen ? "sidebar-open" : ""
                        }`}
                >
                    <Sidebar role="donor" activeMenu="Dashboard" />
                </div>

                <main className="flex-grow-1 min-w-0 p-3 p-md-4 donor-main">
                    <button
                        type="button"
                        className="btn btn-danger d-lg-none donor-menu-toggle mb-3"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        aria-expanded={sidebarOpen}
                        aria-label="Toggle donor menu"
                    >
                        <i
                            className={`bi ${sidebarOpen ? "bi-x-lg" : "bi-list"
                                } me-2`}
                        ></i>
                        {sidebarOpen ? "Close Menu" : "Menu"}
                    </button>

                    <div
                        className="card border-0 rounded-4 shadow-sm text-white mb-4"
                        style={{ background: gradient }}
                    >
                        <div className="card-body p-3 p-md-4 p-lg-5">
                            <span className="badge bg-white text-danger mb-3">
                                DONOR DASHBOARD
                            </span>

                            <h2 className="fw-bold">
                                Welcome Back, {donorName}!
                            </h2>

                            <p className="mb-0">
                                Thank you for donating blood and helping save lives.
                            </p>
                        </div>
                    </div>

                    <div className="mb-4">
                        <h4 className="fw-bold text-dark mb-1">
                            Donation Overview
                        </h4>

                        <p className="text-secondary mb-0">
                            Your contribution to saving lives.
                        </p>
                    </div>

                    <div className="row g-3 g-md-4">
                        <DashboardCard
                            title="Total Donations"
                            value="02"
                            icon="bi-droplet-fill"
                            color="#a51d30"
                        />

                        <DashboardCard
                            title="Lives Impacted"
                            value="06"
                            icon="bi-heart-pulse-fill"
                            color="#a51d30"
                        />

                        <DashboardCard
                            title="Upcoming Donations"
                            value="01"
                            icon="bi-calendar2-check"
                            color="#a51d30"
                        />

                        <DashboardCard
                            title="Donor Status"
                            value="Active"
                            icon="bi-patch-check-fill"
                            color="#a51d30"
                        />
                    </div>

                    <div className="card border-0 rounded-4 shadow-sm mt-4">

                        <div className="card-body p-3 p-md-4">

                            <div className="mb-4">
                                <h4 className="fw-bold text-dark mb-1">
                                    Search Donation Records
                                </h4>

                                <p className="text-secondary mb-0">
                                    Find your previous donation details.
                                </p>
                            </div>

                            <div className="row mb-4">
                                <div className="co-md-8 col-lg-6">

                                    <label className="form-label fw-semibold">
                                        Search Donations
                                    </label>

                                    <div className="input-group">

                                        <span className="input-group-text bg-white">
                                            <i className="bi bi-search text-danger"></i>
                                        </span>

                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search ID, blood group, hospital or status..."
                                            value={searchTerm}
                                            onChange={(e) =>
                                                setSearchTerm(e.target.value)
                                            }
                                        />

                                        {searchTerm && (
                                            <button
                                                type="button"
                                                className="btn btn-outline-danger"
                                                onClick={() => setSearchTerm("")}
                                            >
                                                Clear
                                            </button>
                                        )}
                                    </div>

                                    <small className="text-secondary d-block mt-2">
                                        Showing {filterdDonations.length} of {donations.length} donations
                                    </small>

                                </div>
                            </div>

                            <ReusableTable
                                table={table}
                                emptyMessage={
                                    searchTerm
                                        ? "No matching donation records found."
                                        : "No donation records available. Submit a donation request to see your records here."
                                }
                            />

                        </div>
                    </div>

                </main>
            </div>
        </div>
    );
}

export default DonorHome;
