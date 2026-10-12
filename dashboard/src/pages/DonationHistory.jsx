import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function DonationHistory() {
    const gradient =
        "linear-gradient(115deg, #951629 0%, #b42332 55%, #a51d30 100%)";

    const [donations] = useState([
        {
            id: 1,
            date: "2026-09-15",
            bloodGroup: "O+",
            units: 1,
            hospital: "City Care Hospital",
            location: "Ahmedabad",
            status: "Completed"
        },
        {
            id: 2,
            date: "2026-06-10",
            bloodGroup: "O+",
            units: 1,
            hospital: "Life Line Blood Bank",
            location: "Ahmedabad",
            status: "Completed"
        },
        {
            id: 3,
            date: "2026-03-05",
            bloodGroup: "O+",
            units: 1,
            hospital: "Sunrise Hospital",
            location: "Surat",
            status: "Completed"
        },
        {
            id: 4,
            date: "2025-12-20",
            bloodGroup: "O+",
            units: 1,
            hospital: "Red Cross Blood Bank",
            location: "Ahmedabad",
            status: "Cancelled"
        }
    ]);

    const totalDonations = donations.filter(
        (donation) => donation.status === "Completed"
    ).length;

    const totalUnits = donations
        .filter((donation) => donation.status === "Completed")
        .reduce((total, donation) => total + donation.units, 0);

    return (
        <div className="min-vh-100 bg-light">
            <Navbar
                role="Donor"
                profileImage="/profile.jpg"
            />

            <div className="d-flex">
                <Sidebar role="donor" />

                <main className="container-fluid p-3 p-lg-4">
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
                        <div className="card-body p-4">
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

                            <div className="table-responsive">
                                <table className="table table-hover align-middle mb-0">
                                    <thead className="table-light">
                                        <tr>
                                            <th>Sr. No.</th>
                                            <th>Donation Date</th>
                                            <th>Blood Group</th>
                                            <th>Units</th>
                                            <th>Hospital / Blood Bank</th>
                                            <th>Location</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {donations.map((donation, index) => (
                                            <tr key={donation.id}>
                                                <td>{index + 1}</td>

                                                <td>
                                                    {new Date(
                                                        donation.date + "T00:00:00"
                                                    ).toLocaleDateString("en-IN", {
                                                        day: "2-digit",
                                                        month: "short",
                                                        year: "numeric"
                                                    })}
                                                </td>

                                                <td>
                                                    <span
                                                        className="badge rounded-pill px-3 py-2"
                                                        style={{
                                                            backgroundColor: "#fbe7ea",
                                                            color: "#951629"
                                                        }}
                                                    >
                                                        {donation.bloodGroup}
                                                    </span>
                                                </td>

                                                <td>{donation.units}</td>

                                                <td className="fw-semibold">
                                                    {donation.hospital}
                                                </td>

                                                <td>{donation.location}</td>

                                                <td>
                                                    <span
                                                        className={`badge rounded-pill px-3 py-2 ${donation.status === "Completed"
                                                                ? "bg-success-subtle text-success"
                                                                : "bg-danger-subtle text-danger"
                                                            }`}
                                                    >
                                                        {donation.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {donations.length === 0 && (
                                <div className="text-center py-5">
                                    <i className="bi bi-clock-history fs-1 text-secondary"></i>
                                    <h6 className="fw-bold mt-3">
                                        No donation history available
                                    </h6>
                                    <p className="text-secondary mb-0">
                                        Your donation records will appear here.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default DonationHistory;