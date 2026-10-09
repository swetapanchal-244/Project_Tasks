import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import BloodGroupDropdown from "../components/BloodGroupDropdown";

function DonationRequest() {
    const [formData, setFormData] = useState({
        bloodGroup: "",
        units: "",
        hospitalName: "",
        donationDate: "",
        notes: ""
    });

    const [showModal, setShowModal] = useState(false);
    const [donationConfirmed, setDonationConfirmed] = useState(false);

    const gradient =
        "linear-gradient(115deg, #951629 0%, #b42332 55%, #a51d30 100%)";

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setDonationConfirmed(false);
        setShowModal(true);
    };

    const handleConfirmDonation = () => {
        setShowModal(false);
        setDonationConfirmed(true);

        setFormData({
            bloodGroup: "",
            units: "",
            hospitalName: "",
            donationDate: "",
            notes: ""
        });
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
                                DONOR PORTAL
                            </span>

                            <h2 className="fw-bold mb-2">
                                Donation Request
                            </h2>

                            <p className="mb-0">
                                Your blood donation can help save lives.
                                Submit your donation details below.
                            </p>
                        </div>
                    </div>

                    <div className="card border-0 rounded-4 shadow-sm">
                        <div className="card-body p-4 p-lg-5">

                            <div className="mb-4">
                                <h4 className="fw-bold text-dark mb-1">
                                    Donation Details
                                </h4>

                                <p className="text-secondary mb-0">
                                    Fill in the information to continue.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div className="row g-4">

                                    <div className="col-md-6">
                                        <BloodGroupDropdown
                                            value={formData.bloodGroup}
                                            onChange={(value) =>
                                                setFormData((prev) => ({
                                                    ...prev,
                                                    bloodGroup:
                                                        typeof value === "string"
                                                            ? value
                                                            : value?.target?.value || ""
                                                }))
                                            }
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label
                                            htmlFor="units"
                                            className="form-label fw-semibold mb-2"
                                        >
                                            Units to Donate
                                        </label>

                                        <input
                                            id="units"
                                            type="number"
                                            name="units"
                                            className="form-control py-2"
                                            placeholder="Enter number of units"
                                            min="1"
                                            max="1"
                                            value={formData.units}
                                            onChange={handleChange}
                                            required
                                        />

                                        <small className="text-secondary d-block mt-2">
                                            A standard whole-blood donation is
                                            generally one unit.
                                        </small>
                                    </div>

                                    <div className="col-md-6">
                                        <label
                                            htmlFor="hospitalName"
                                            className="form-label fw-semibold mb-2"
                                        >
                                            Hospital / Donation Center
                                        </label>

                                        <input
                                            id="hospitalName"
                                            type="text"
                                            name="hospitalName"
                                            className="form-control py-2"
                                            placeholder="Enter hospital name"
                                            value={formData.hospitalName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label
                                            htmlFor="donationDate"
                                            className="form-label fw-semibold mb-2"
                                        >
                                            Preferred Donation Date
                                        </label>

                                        <input
                                            id="donationDate"
                                            type="date"
                                            name="donationDate"
                                            className="form-control py-2"
                                            min={
                                                new Date()
                                                    .toISOString()
                                                    .split("T")[0]
                                            }
                                            value={formData.donationDate}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="col-12">
                                        <label
                                            htmlFor="notes"
                                            className="form-label fw-semibold mb-2"
                                        >
                                            Additional Notes{" "}
                                            <span className="text-secondary fw-normal">
                                                (Optional)
                                            </span>
                                        </label>

                                        <textarea
                                            id="notes"
                                            name="notes"
                                            className="form-control"
                                            rows="3"
                                            placeholder="Enter any additional information"
                                            value={formData.notes}
                                            onChange={handleChange}
                                        ></textarea>
                                    </div>

                                    <div className="col-12">
                                        <button
                                            type="submit"
                                            className="btn text-white fw-semibold px-4 py-2 rounded-3"
                                            style={{ background: gradient }}
                                        >
                                            <i className="bi bi-heart-pulse-fill me-2"></i>
                                            Submit Donation Request
                                        </button>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </div>

            {showModal && (
                <div
                    className="modal fade show d-block"
                    tabIndex="-1"
                    role="dialog"
                    aria-modal="true"
                    style={{
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        zIndex: 1055
                    }}
                    onClick={(e) => {
                        if (e.target === e.currentTarget) {
                            setShowModal(false);
                        }
                    }}
                >
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content border-0 rounded-4 shadow-lg overflow-hidden">

                            <div
                                className="modal-header text-white border-0"
                                style={{ background: gradient }}
                            >
                                <h5 className="modal-title fw-bold">
                                    <i className="bi bi-heart-pulse-fill me-2"></i>
                                    Confirm Donation
                                </h5>

                                <button
                                    type="button"
                                    className="btn-close btn-close-white"
                                    aria-label="Close"
                                    onClick={() => setShowModal(false)}
                                ></button>
                            </div>

                            <div className="modal-body text-center p-4">
                                <div
                                    className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                                    style={{
                                        width: "75px",
                                        height: "75px",
                                        backgroundColor: "#fbe7ea",
                                        color: "#a51d30",
                                        fontSize: "34px"
                                    }}
                                >
                                    <i className="bi bi-droplet-fill"></i>
                                </div>

                                <h5 className="fw-bold text-dark">
                                    Are you sure?
                                </h5>

                                <p className="text-secondary mb-0">
                                    Do you want to confirm your blood donation
                                    request? Please review your details before
                                    continuing.
                                </p>

                                <div className="text-start bg-light rounded-3 p-3 mt-3">
                                    <p className="mb-2">
                                        <strong>Blood Group:</strong>{" "}
                                        {formData.bloodGroup || "Not selected"}
                                    </p>

                                    <p className="mb-2">
                                        <strong>Units:</strong>{" "}
                                        {formData.units || "Not entered"}
                                    </p>

                                    <p className="mb-2">
                                        <strong>Donation Center:</strong>{" "}
                                        {formData.hospitalName || "Not entered"}
                                    </p>

                                    <p className="mb-0">
                                        <strong>Date:</strong>{" "}
                                        {formData.donationDate || "Not selected"}
                                    </p>
                                </div>
                            </div>

                            <div className="modal-footer border-0 justify-content-center pb-4">
                                <button
                                    type="button"
                                    className="btn btn-light border rounded-3 px-4"
                                    onClick={() => setShowModal(false)}
                                >
                                    Cancel
                                </button>

                                <button
                                    type="button"
                                    className="btn text-white rounded-3 px-4"
                                    style={{ background: gradient }}
                                    onClick={handleConfirmDonation}
                                >
                                    <i className="bi bi-check-circle-fill me-2"></i>
                                    Confirm Donation
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            )}

            {donationConfirmed && (
                <div
                    className="alert alert-success alert-dismissible fade show position-fixed top-0 start-50 translate-middle-x mt-3 shadow"
                    role="alert"
                    style={{
                        zIndex: 1090,
                        width: "min(90%, 450px)"
                    }}
                >
                    <i className="bi bi-check-circle-fill me-2"></i>
                    Donation request confirmed successfully!

                    <button
                        type="button"
                        className="btn-close"
                        aria-label="Close"
                        onClick={() => setDonationConfirmed(false)}
                    ></button>
                </div>
            )}
        </div>
    );
}

export default DonationRequest;