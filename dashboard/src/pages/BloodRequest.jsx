import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { showSuccess } from "../components/Notification";
import FormInput from "../components/FormInput";
import BloodGroupDropdown from "../components/BloodGroupDropdown";
import { Helmet } from "react-helmet-async";

function BloodRequest() {
    const navigate = useNavigate();

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const [formData, setFormData] = useState({
        patientName: "",
        bloodGroup: "",
        requiredUnits: "",
        urgency: "",
        hospitalName: "",
        requiredDate: "",
        additionalInformation: ""
    });

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

        const existingRequests = JSON.parse(
            localStorage.getItem("patientRequests") || "[]"
        );

        const newRequest = {
            ...formData,
            requestId: `BR-${Date.now().toString().slice(-6)}`,
            requestDate: new Date().toLocaleDateString("en-IN"),
            status: "Pending"
        };

        const updatedRequests = [
            newRequest,
            ...existingRequests
        ];

        localStorage.setItem(
            "patientRequests",
            JSON.stringify(updatedRequests)
        );

        showSuccess("Blood request submitted successfully!");

        setFormData({
            patientName: "",
            bloodGroup: "",
            requiredUnits: "",
            urgency: "",
            hospitalName: "",
            requiredDate: "",
            additionalInformation: ""
        });

        setTimeout(() => {
            navigate("/patient-request-history");
        }, 1000);
    };

    return (
        <div className="min-vh-100 bg-light">
            <Helmet>
                <title>Blood Request | BloodLink</title>

                <meta
                    name="description"
                    content="Submit a blood request on BloodLink by providing your blood group, required units, hospital details and urgency."
                />

                <meta
                    name="keywords"
                    content="BloodLink, blood request, request blood, blood group, emergency blood request, blood donation"
                />

                <meta
                    property="og:title"
                    content="Blood Request | BloodLink"
                />

                <meta
                    property="og:description"
                    content="Submit and manage your blood requirements with BloodLink."
                />

                <meta property="og:type" content="website" />
            </Helmet>

            <Navbar
                name="Sweta"
                role="Patient"
                profileImage="/profile.webp"
            />

            <div className="d-flex patient-layout">
                <button
                    type="button"
                    className="btn btn-danger d-lg-none patient-menu-toggle"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
                    aria-expanded={sidebarOpen}
                    aria-controls="patient-sidebar"
                >
                    <i className="bi bi-list fs-4" aria-hidden="true"></i>
                    <span className="ms-2">Menu</span>
                </button>

                <div
                    id="patient-sidebar"
                    className={`patient-sidebar-wrapper ${sidebarOpen ? "sidebar-open" : ""}`}
                >
                    <Sidebar role="patient" />
                </div>

                <main className="container-fluid p-3 p-lg-4 min-w-0">
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
                                    <i className="bi bi-droplet-fill fs-4" aria-hidden="true"></i>
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
                                            value={formData.patientName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <BloodGroupDropdown
                                            value={formData.bloodGroup}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <FormInput
                                            label="Required Units"
                                            type="number"
                                            name="requiredUnits"
                                            placeholder="Enter required units"
                                            value={formData.requiredUnits}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label
                                            htmlFor="urgency"
                                            className="form-label fw-semibold"
                                        >
                                            Urgency
                                        </label>

                                        <select
                                            id="urgency"
                                            className="form-select"
                                            name="urgency"
                                            value={formData.urgency}
                                            onChange={handleChange}
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
                                            value={formData.hospitalName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label
                                            htmlFor="requiredDate"
                                            className="form-label fw-semibold"
                                        >
                                            Required Date
                                        </label>

                                        <input
                                            id="requiredDate"
                                            type="date"
                                            name="requiredDate"
                                            className="form-control"
                                            value={formData.requiredDate}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="col-12">
                                        <label
                                            htmlFor="additionalInformation"
                                            className="form-label fw-semibold"
                                        >
                                            Additional Information
                                        </label>

                                        <textarea
                                            id="additionalInformation"
                                            className="form-control"
                                            name="additionalInformation"
                                            rows="4"
                                            value={formData.additionalInformation}
                                            onChange={handleChange}
                                            placeholder="Enter additional information"
                                            aria-describedby="additionalInformation-help"
                                        ></textarea>

                                        <small
                                            id="additionalInformation-help"
                                            className="text-muted"
                                        >
                                            Enter any extra details related to your blood request.
                                        </small>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-end mt-4">
                                    <button
                                        type="submit"
                                        className="btn text-white fw-semibold px-4 py-2 rounded-3"
                                        style={{
                                            background: gradient,
                                            border: "none"
                                        }}
                                    >
                                        <i className="bi bi-droplet-fill me-2" aria-hidden="true"></i>
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
