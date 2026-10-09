
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { showSuccess } from "../components/Notification";
import FormInput from "../components/FormInput";
import BloodGroupDropdown from "../components/BloodGroupDropdown";

function BloodRequest() {
    const gradient =
        "linear-gradient(115deg, #951629 0%, #b42332 55%, #a51d30 100%)";

    const handleSubmit = (e) => {
        e.preventDefault();
        showSuccess("Blood request submitted successfully!");
    };

    return (
        <div className="min-vh-100 bg-light">
            <Navbar
                name="Sweta"
                role="Patient"
                profileImage="/profile.jpg"
            />

            <div className="d-flex">
                <Sidebar role="patient" />

                <main className="container-fluid p-3 p-lg-4">
                    <div
                        className="card border-0 rounded-4 shadow-sm text-white mb-4"
                        style={{ background: gradient }}
                    >
                        <div className="card-body p-4 p-lg-5">
                            <span className="badge bg-white text-danger mb-3">
                                PATIENT SERVICES
                            </span>

                            <h2 className="fw-bold mb-2">
                                Blood Request
                            </h2>

                            <p className="mb-0">
                                Submit a request for blood when you need it.
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
                                    <i className="bi bi-droplet-fill fs-4"></i>
                                </div>

                                <div>
                                    <h4 className="fw-bold text-dark mb-1">
                                        Request Details
                                    </h4>
                                    <p className="text-secondary small mb-0">
                                        Fill in the details below to submit your request.
                                    </p>
                                </div>
                            </div>

                            <hr className="border-danger-subtle mb-4" />

                            <form onSubmit={handleSubmit}>
                                <div className="row g-4">
                                    <div className="col-md-6">
                                        <FormInput
                                            label="Patient Name"
                                            name="patientName"
                                            placeholder="Enter patient name"
                                            required
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <BloodGroupDropdown required />
                                    </div>

                                    <div className="col-md-6">
                                        <FormInput
                                            label="Required Units"
                                            type="number"
                                            name="requiredUnits"
                                            placeholder="Enter required units"
                                            required
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">
                                            Urgency
                                        </label>

                                        <select
                                            className="form-select"
                                            name="urgency"
                                            defaultValue=""
                                            required
                                        >
                                            <option value="" disabled>
                                                Select Urgency
                                            </option>
                                            <option value="Normal">Normal</option>
                                            <option value="Urgent">Urgent</option>
                                            <option value="Emergency">Emergency</option>
                                        </select>
                                    </div>

                                    <div className="col-md-6">
                                        <FormInput
                                            label="Hospital Name"
                                            name="hospitalName"
                                            placeholder="Enter hospital name"
                                            required
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">
                                            Required Date
                                        </label>

                                        <input
                                            type="date"
                                            name="requiredDate"
                                            className="form-control"
                                            required
                                        />
                                    </div>

                                    <div className="col-12">
                                        <label className="form-label fw-semibold">
                                            Additional Information
                                        </label>

                                        <textarea
                                            className="form-control"
                                            name="additionalInformation"
                                            rows="4"
                                            placeholder="Enter additional information"
                                        ></textarea>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-end mt-4">
                                    <button
                                        type="submit"
                                        className="btn text-white fw-semibold px-4 py-2 rounded-3"
                                        style={{
                                            background:
                                                "linear-gradient(115deg, #951629 0%, #b42332 55%, #a51d30 100%)",
                                            border: "none"
                                        }}
                                    >
                                        <i className="bi bi-droplet-fill me-2"></i>
                                        Submit Blood Request
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

export default BloodRequest;
