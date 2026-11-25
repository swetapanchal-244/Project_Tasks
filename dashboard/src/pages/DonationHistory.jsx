
import { useEffect, useMemo, useState } from "react";
import {
    createColumnHelper,
    getCoreRowModel,
    useReactTable
} from "@tanstack/react-table";
import { Helmet } from "react-helmet-async";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ReusableTable from "../components/ReusableTable";
import DonationTimeline from "../components/DonationTimeline";

function DonationHistory() {
    const [donations, setDonations] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const gradient =
        "linear-gradient(115deg, #951629 0%, #b42332 55%, #a51d30 100%)";

    useEffect(() => {
        const savedDonations = JSON.parse(
            localStorage.getItem("donationHistory") || "[]"
        );

        setDonations(savedDonations);
    }, []);

    const filteredDonations = useMemo(() => {
        const search = searchTerm.trim().toLowerCase();

        if (!search) return donations;

        return donations.filter((donation) =>
            [
                donation.id,
                donation.date,
                donation.bloodGroup,
                donation.units,
                donation.hospital,
                donation.location,
                donation.status
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
            header: "Donation Date",
            cell: info => {
                const date = info.getValue();

                return date
                    ? new Date(date + "T00:00:00").toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric"
                    })
                    : "-";
            }
        }),

        columnHelper.accessor("bloodGroup", {
            header: "Blood Group",
            cell: info => (
                <span
                    className="badge rounded-pill px-3 py-2"
                    style={{
                        backgroundColor: "#fbe7ea",
                        color: "#951629"
                    }}
                >
                    {info.getValue()}
                </span>
            )
        }),

        columnHelper.accessor("units", {
            header: "Units"
        }),

        columnHelper.accessor("hospital", {
            header: "Hospital / Blood Bank"
        }),

        columnHelper.accessor("location", {
            header: "Location"
        }),

        columnHelper.accessor("status", {
            header: "Status",
            cell: info => {
                const status = info.getValue();

                const statusClass =
                    status === "Completed"
                        ? "bg-success-subtle text-success"
                        : status === "Pending"
                            ? "bg-warning-subtle text-warning-emphasis"
                            : "bg-danger-subtle text-danger";

                return (
                    <span className={`badge rounded-pill px-3 py-2 ${statusClass}`}>
                        {status}
                    </span>
                );
            }
        })
    ], []);

    const table = useReactTable({
        data: filteredDonations,
        columns,
        getCoreRowModel: getCoreRowModel()
    });

    const totalDonations = donations.filter(
        donation => donation.status === "Completed"
    ).length;

    const totalUnits = donations
        .filter(donation => donation.status === "Completed")
        .reduce(
            (total, donation) => total + Number(donation.units || 0),
            0
        );

    return (
        <div className="min-vh-100 bg-light">

            <Helmet>
                <title>Donation History | BloodLink</title>

                <meta
                    name="description"
                    content="View your blood donation history, completed donations, donated units and donation records on BloodLink."
                />

                <meta
                    name="keywords"
                    content="BloodLink, donation history, donor records, blood donation, completed donations"
                />

                <meta
                    property="og:title"
                    content="Donation History | BloodLink"
                />

                <meta
                    property="og:description"
                    content="Track your previous blood donations and donation records with BloodLink."
                />

                <meta property="og:type" content="website" />
            </Helmet>

            <Navbar
                name="Sweta"
                role="Donor"
                profileImage="/profile.webp"
            />

            <div className="d-flex">

                <Sidebar role="donor" />

                <main className="container-fluid p-3 p-lg-4 min-w-0">

                    <div
                        className="card border-0 rounded-4 text-white shadow-sm mb-4"
                        style={{ background: gradient }}
                    >
                        <div className="card-body p-4 p-lg-5">

                            <span className="badge bg-white text-danger mb-3">
                                DONOR RECORDS
                            </span>

                            <h2 className="fw-bold mb-2">
                                Blood Donation History
                            </h2>

                            <p className="mb-0">
                                View your previous blood donations and their status.
                            </p>

                        </div>
                    </div>

                    <DonationTimeline />

                    <div className="row g-3 mb-4">

                        <div className="col-md-6">
                            <div className="card border-0 rounded-4 shadow-sm h-100">
                                <div className="card-body p-4 d-flex align-items-center gap-3">

                                    <div
                                        className="rounded-3 d-flex align-items-center justify-content-center"
                                        style={{
                                            width: "52px",
                                            height: "52px",
                                            background: "#fbe7ea",
                                            color: "#951629"
                                        }}
                                    >
                                        <i className="bi bi-droplet-fill fs-4"></i>
                                    </div>

                                    <div>
                                        <p className="text-secondary mb-1">
                                            Completed Donations
                                        </p>

                                        <h3 className="fw-bold mb-0">
                                            {totalDonations}
                                        </h3>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="card border-0 rounded-4 shadow-sm h-100">
                                <div className="card-body p-4 d-flex align-items-center gap-3">

                                    <div
                                        className="rounded-3 d-flex align-items-center justify-content-center"
                                        style={{
                                            width: "52px",
                                            height: "52px",
                                            background: "#fbe7ea",
                                            color: "#951629"
                                        }}
                                    >
                                        <i className="bi bi-heart-pulse-fill fs-4"></i>
                                    </div>

                                    <div>
                                        <p className="text-secondary mb-1">
                                            Total Units Donated
                                        </p>

                                        <h3 className="fw-bold mb-0">
                                            {totalUnits}
                                        </h3>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="card border-0 rounded-4 shadow-sm">

                        <div className="card-body p-3 p-md-4">

                            <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4">

                                <div>
                                    <h5 className="fw-bold mb-1">
                                        Donation Records
                                    </h5>

                                    <p className="text-secondary mb-0">
                                        A record of your previous donations.
                                    </p>
                                </div>

                                <span className="badge rounded-pill text-bg-danger px-3 py-2">
                                    {donations.length} Records
                                </span>

                            </div>

                            <div className="row mb-4">
                                <div className="col-md-8 col-lg-6">

                                    <label className="form-label fw-semibold">
                                        Search Donation Records
                                    </label>

                                    <div className="input-group">

                                        <span className="input-group-text bg-white">
                                            <i className="bi bi-search text-danger"></i>
                                        </span>

                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search ID, blood group, hospital, location or status..."
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
                                        Showing {filteredDonations.length} of {donations.length} donations
                                    </small>

                                </div>
                            </div>

                            <ReusableTable
                                table={table}
                                emptyMessage={
                                    searchTerm
                                        ? "No matching donation records found."
                                        : "No donation history available. Submit a donation request to see your records here."
                                }
                            />

                        </div>
                    </div>

                </main>
            </div>
        </div>
    );
}

export default DonationHistory;
