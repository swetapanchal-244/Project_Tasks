import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function BloodAvailability() {
    const gradient =
        "linear-gradient(115deg, #951629 0%, #b42332 55%, #a51d30 100%)";

    const [bloodGroup, setBloodGroup] = useState("");
    const [location, setLocation] = useState("");
    const [units, setUnits] = useState("1");
    const [searched, setSearched] = useState(false);

    const bloodData = [
        {
            id: 1,
            bloodGroup: "A+",
            location: "Ahmedabad",
            units: 5,
            hospital: "City Care Hospital",
            status: "Available"
        },
        {
            id: 2,
            bloodGroup: "O+",
            location: "Ahmedabad",
            units: 8,
            hospital: "Life Line Blood Bank",
            status: "Available"
        },
        {
            id: 3,
            bloodGroup: "B+",
            location: "Surat",
            units: 3,
            hospital: "Sunrise Hospital",
            status: "Available"
        },
        {
            id: 4,
            bloodGroup: "AB+",
            location: "Rajkot",
            units: 2,
            hospital: "Care Plus Hospital",
            status: "Available"
        },
        {
            id: 5,
            bloodGroup: "O-",
            location: "Ahmedabad",
            units: 4,
            hospital: "Red Cross Blood Bank",
            status: "Available"
        }
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        setSearched(true);
    };

    const filteredData = bloodData.filter((item) => {
        const matchesBloodGroup =
            !bloodGroup || item.bloodGroup === bloodGroup;

        const matchesLocation =
            !location ||
            item.location.toLowerCase().includes(location.trim().toLowerCase());

        const matchesUnits = item.units >= Number(units);

        return matchesBloodGroup && matchesLocation && matchesUnits;
    });

    return (
        <div className="min-vh-100 bg-light">
            <Navbar role="Patient" profileImage="/profile.jpg" />

            <div className="d-flex">
                <Sidebar role="patient" />

                <main className="container-fluid p-3 p-lg-4">
                    <div
                        className="card border-0 rounded-4 shadow-sm text-white mb-4"
                        style={{ background: gradient }}
                    >
                        <div className="card-body p-4 p-lg-5">
                            <span className="badge bg-white text-danger mb-3">
                                BLOOD AVAILABILITY
                            </span>

                            <h2 className="fw-bold mb-2">
                                Find Available Blood
                            </h2>

                            <p className="mb-0">
                                Search for blood units by group and location.
                            </p>
                        </div>
                    </div>

                    <div className="card border-0 rounded-4 shadow-sm mb-4">
                        <div className="card-body p-4">
                            <h5 className="fw-bold mb-4">
                                <i className="bi bi-search me-2 text-danger"></i>
                                Search Blood Availability
                            </h5>

                            <form onSubmit={handleSearch}>
                                <div className="row g-3 align-items-end">
                                    <div className="col-md-4">
                                        <label className="form-label fw-semibold">
                                            Blood Group
                                        </label>

                                        <select
                                            className="form-select py-2"
                                            value={bloodGroup}
                                            onChange={(e) =>
                                                setBloodGroup(e.target.value)
                                            }
                                        >
                                            <option value="">
                                                All Blood Groups
                                            </option>
                                            {[
                                                "A+", "A-", "B+", "B-",
                                                "AB+", "AB-", "O+", "O-"
                                            ].map((group) => (
                                                <option key={group} value={group}>
                                                    {group}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="col-md-4">
                                        <label className="form-label fw-semibold">
                                            Location / City
                                        </label>

                                        <input
                                            type="text"
                                            className="form-control py-2"
                                            placeholder="e.g. Ahmedabad"
                                            value={location}
                                            onChange={(e) =>
                                                setLocation(e.target.value)
                                            }
                                        />
                                    </div>

                                    <div className="col-md-2">
                                        <label className="form-label fw-semibold">
                                            Minimum Units
                                        </label>

                                        <input
                                            type="number"
                                            min="1"
                                            className="form-control py-2"
                                            value={units}
                                            onChange={(e) =>
                                                setUnits(e.target.value)
                                            }
                                            required
                                        />
                                    </div>

                                    <div className="col-md-2">
                                        <button
                                            type="submit"
                                            className="btn text-white w-100 py-2"
                                            style={{ background: gradient }}
                                        >
                                            <i className="bi bi-search me-1"></i>
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="card border-0 rounded-4 shadow-sm">
                        <div className="card-body p-4">
                            <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
                                <h5 className="fw-bold mb-0">
                                    Available Blood Units
                                </h5>

                                <span className="badge rounded-pill text-bg-danger px-3 py-2">
                                    {searched
                                        ? `${filteredData.length} Results`
                                        : `${bloodData.length} Records`}
                                </span>
                            </div>

                            <div className="table-responsive">
                                <table className="table table-hover align-middle mb-0">
                                    <thead className="table-light">
                                        <tr>
                                            <th>Sr. No.</th>
                                            <th>Blood Group</th>
                                            <th>Hospital / Blood Bank</th>
                                            <th>Location</th>
                                            <th>Available Units</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {(searched ? filteredData : bloodData)
                                            .map((item, index) => (
                                                <tr key={item.id}>
                                                    <td>{index + 1}</td>
                                                    <td>
                                                        <span
                                                            className="badge rounded-pill px-3 py-2"
                                                            style={{
                                                                backgroundColor: "#fbe7ea",
                                                                color: "#951629"
                                                            }}
                                                        >
                                                            {item.bloodGroup}
                                                        </span>
                                                    </td>
                                                    <td className="fw-semibold">
                                                        {item.hospital}
                                                    </td>
                                                    <td>{item.location}</td>
                                                    <td>{item.units}</td>
                                                    <td>
                                                        <span className="badge bg-success-subtle text-success px-3 py-2">
                                                            {item.status}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>
                            </div>

                            {searched && filteredData.length === 0 && (
                                <div className="text-center py-5">
                                    <i className="bi bi-search fs-1 text-secondary"></i>
                                    <h6 className="fw-bold mt-3">
                                        No matching blood found
                                    </h6>
                                    <p className="text-secondary mb-0">
                                        Try another blood group or location.
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

export default BloodAvailability;
