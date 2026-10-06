import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { showSuccess } from "../components/Notification";
import FormInput from "../components/FormInput";
import BloodGroupDropdown from "../components/BloodGroupDropdown";

function BloodRequest() {
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
                    activeMenu="Blood Requests"
                />


                <div className="container-fluid p-4">

                    <div className="card border-0 shadow-sm rounded-4">

                        <div className="card-body p-4">


                            <div className="mb-4">

                                <h3 className="fw-bold mb-1">
                                    Blood Request
                                </h3>

                                <p className="text-muted mb-0">
                                    Submit a request for blood when you need it
                                </p>

                            </div>


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

                                    <BloodGroupDropdown
                                        required
                                    />

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

                                    <select className="form-select">

                                        <option value="">
                                            Select Urgency
                                        </option>

                                        <option>Normal</option>
                                        <option>Urgent</option>
                                        <option>Emergency</option>

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
                                        className="form-control"
                                    />

                                </div>


                                <div className="col-12">

                                    <label className="form-label fw-semibold">
                                        Additional Information
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
                                    onClick={() => showSuccess("Blood request submitted successfully!")}
                                >
                                    Submit Blood Request
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}

export default BloodRequest;