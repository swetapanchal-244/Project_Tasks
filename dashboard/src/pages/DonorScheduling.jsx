import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { showSuccess } from "../components/Notification";

function DonorScheduling() {
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
                    activeMenu="Donation Scheduling"
                />

                <div className="container-fluid p-4">

                    <div className="card border-0 shadow-sm rounded-4">

                        <div className="card-body p-4">


                            <div className="mb-4">

                                <h3 className="fw-bold mb-1">
                                    Blood Donation Scheduling
                                </h3>

                                <p className="text-muted mb-0">
                                    Schedule your blood donation appointment
                                </p>

                            </div>

                            <div className="row g-4">


                                <div className="col-md-6">

                                    <label className="form-label fw-semibold">
                                        Donation Date
                                    </label>

                                    <input
                                        type="date"
                                        className="form-control"
                                    />

                                </div>

                                <div className="col-md-6">

                                    <label className="form-label fw-semibold">
                                        Donation Time
                                    </label>

                                    <input
                                        type="time"
                                        className="form-control"
                                    />

                                </div>


                                <div className="col-md-6">

                                    <label className="form-label fw-semibold">
                                        Hospital / Blood Bank
                                    </label>

                                    <select className="form-select">

                                        <option value="">
                                            Select Hospital / Blood Bank
                                        </option>

                                        <option>
                                            City Hospital
                                        </option>

                                        <option>
                                            Civil Hospital
                                        </option>

                                        <option>
                                            Sterling Hospital
                                        </option>

                                        <option>
                                            Red Cross Blood Bank
                                        </option>

                                    </select>

                                </div>


                                <div className="col-md-6">

                                    <label className="form-label fw-semibold">
                                        Blood Group
                                    </label>

                                    <select className="form-select">

                                        <option value="">
                                            Select Blood Group
                                        </option>

                                        <option>A+</option>
                                        <option>A-</option>
                                        <option>B+</option>
                                        <option>B-</option>
                                        <option>O+</option>
                                        <option>O-</option>
                                        <option>AB+</option>
                                        <option>AB-</option>

                                    </select>

                                </div>


                                <div className="col-12">

                                    <label className="form-label fw-semibold">
                                        Additional Notes
                                    </label>

                                    <textarea
                                        className="form-control"
                                        rows="4"
                                        placeholder="Enter any additional notes"
                                    ></textarea>

                                </div>

                            </div>

                            <div className="mt-4">

                                <button
                                    type="button"
                                    className="btn btn-danger rounded-pill px-4"
                                    onClick={() => showSuccess("Donation appointment scheduled successfully!")}
                                >
                                    <i className="bi bi-calendar-check-fill me-2"></i>
                                    Schedule Donation
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}

export default DonorScheduling;