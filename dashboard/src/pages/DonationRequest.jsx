import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import BloodGroupDropdown from "../components/BloodGroupDropdown";

function DonationRequest() {
    return (
        <>
            <Navbar
                name="Sweta"
                role="Patient"
                profileImage="/profile.jpg"
            />

            <div className="d-flex">

                <Sidebar
                    role="patient"
                    activeMenu="Donation Request"
                />

                <div className="container-fluid p-4">

                    <div className="card border-0 shadow-sm rounded-4">

                        <div className="card-body p-4">

                            <div className="mb-4">
                                <h3 className="fw-bold mb-1">
                                    Donation Request
                                </h3>

                                <p className="text-muted mb-0">
                                    Submit a request for blood donation
                                </p>
                            </div>

                            <div className="row g-4">

                                <div className="col-md-6">
                                    <BloodGroupDropdown
                                        required
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">
                                        Required Units
                                    </label>

                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Enter required units"
                                        min="1"
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">
                                        Hospital Name
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter hospital name"
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">
                                        Required Date
                                    </label>

                                    <input
                                        type="date"
                                        className="form-control"
                                    />
                                </div>

                                <div className="col-12">
                                    <label className="form-label fw-semibold">
                                        Reason / Additional Information
                                    </label>

                                    <textarea
                                        className="form-control"
                                        rows="4"
                                        placeholder="Enter additional information"
                                    ></textarea>
                                </div>

                            </div>

                            <div className="mt-4">

                                <button
                                    type="button"
                                    className="btn btn-danger rounded-pill px-4"
                                >
                                    <i className="bi bi-send-fill me-2"></i>
                                    Submit Request
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}

export default DonationRequest;