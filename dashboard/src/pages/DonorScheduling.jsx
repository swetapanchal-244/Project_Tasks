
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { showSuccess } from "../components/Notification";
import BloodGroupDropdown from "../components/BloodGroupDropdown";

function DonorScheduling() {
    const gradient =
        "linear-gradient(115deg, #951629 0%, #b42332 55%, #a51d30 100%)";

    const handleSubmit = (e) => {
        e.preventDefault();
        showSuccess("Donation appointment scheduled successfully!");
    };

    return (
        <div className="min-vh-100 bg-light">
            <Navbar
                name="Sweta"
                role="Donor"
                profileImage="/profile.jpg"
            />

            <div className="d-flex">
                <Sidebar role="donor" />

                <main className="container-fluid p-3 p-lg-4">
                    <div
                        className="card border-0 rounded-4 shadow-sm text-white mb-4"
                        style={{ background: gradient }}
                    >
                        <div className="card-body p-4 p-lg-5">
                            <span className="badge bg-white text-danger mb-3">
                                DONOR SERVICES
                            </span>

                            <h2 className="fw-bold mb-2">
                                Blood Donation Scheduling
                            </h2>

                            <p className="mb-0">
                                Schedule your blood donation appointment at a convenient time.
                            </p>
                        </div>
                    </div>

                    <div className="card border-0 rounded-4 shadow-sm">
                        <div className="card-body p-4 p-lg-5">
                            <div className="d-flex align-items-center gap-3 mb-4">
                                <div
                                    className="d-flex align-items-center justify-content-center rounded-3"
                                    style={{
                                        width: "48px",
                                        height: "48px",
                                        backgroundColor: "#fbe7ea",
                                        color: "#a51d30"
                                    }}
                                >
                                    <i className="bi bi-calendar-check-fill fs-4"></i>
                                </div>

                                <div>
                                    <h4 className="fw-bold text-dark mb-1">
                                        Appointment Details
                                    </h4>
                                    <p className="text-secondary small mb-0">
                                        Choose your donation date, time and location.
                                    </p>
                                </div>
                            </div>

                            <hr className="border-danger-subtle mb-4" />

                            <form onSubmit={handleSubmit}>
                                <div className="row g-4">
                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">
                                            Donation Date
                                        </label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="donationDate"
                                            required
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">
                                            Donation Time
                                        </label>
                                        <input
                                            type="time"
                                            className="form-control"
                                            name="donationTime"
                                            required
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">
                                            Hospital / Blood Bank
                                        </label>
                                        <select
                                            className="form-select"
                                            name="hospital"
                                            defaultValue=""
                                            required
                                        >
                                            <option value="" disabled>
                                                Select Hospital / Blood Bank
                                            </option>
                                            <option value="City Hospital">
                                                City Hospital
                                            </option>
                                            <option value="Civil Hospital">
                                                Civil Hospital
                                            </option>
                                            <option value="Sterling Hospital">
                                                Sterling Hospital
                                            </option>
                                            <option value="Red Cross Blood Bank">
                                                Red Cross Blood Bank
                                            </option>
                                        </select>
                                    </div>

                                    <div className="col-md-6">
                                        <BloodGroupDropdown required />
                                    </div>

                                    <div className="col-12">
                                        <label className="form-label fw-semibold">
                                            Additional Notes
                                        </label>
                                        <textarea
                                            className="form-control"
                                            name="additionalNotes"
                                            rows="4"
                                            placeholder="Enter any additional notes"
                                        ></textarea>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-end mt-4">
                                    <button
                                        type="submit"
                                        className="btn text-white fw-semibold px-4 py-3 rounded-pill"
                                        style={{
                                            background:
                                                "linear-gradient(115deg, #951629 0%, #b42332 55%, #a51d30 100%)",
                                            border: "none"
                                        }}
                                    >
                                        <i className="bi bi-calendar-check-fill me-2"></i>
                                        Schedule Donation
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default DonorScheduling;
