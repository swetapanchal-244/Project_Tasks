import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Profile() {
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
                    activeMenu="Profile"
                />

                <div className="container-fluid p-4">

                    <div className="mb-4">
                        <h2 className="fw-bold mb-1">
                            My Profile
                        </h2>

                        <p className="text-muted mb-0">
                            View and manage your personal information
                        </p>
                    </div>

                    <div className="row g-4">

                        <div className="col-lg-4">

                            <div className="card border-0 shadow-sm rounded-4 text-center h-100">

                                <div className="card-body p-4">

                                    <img
                                        src="/profile.jpg"
                                        alt="Profile"
                                        className="rounded-circle mb-3"
                                        style={{
                                            width: "120px",
                                            height: "120px",
                                            objectFit: "cover"
                                        }}
                                    />

                                    <h4 className="fw-bold mb-1">
                                        Sweta Panchal
                                    </h4>

                                    <p className="text-muted mb-3">
                                        Patient
                                    </p>

                                    <span className="badge bg-danger rounded-pill px-3 py-2">
                                        Blood Group: O+
                                    </span>

                                </div>

                            </div>

                        </div>

                        {/* Personal Information */}
                        <div className="col-lg-8">

                            <div className="card border-0 shadow-sm rounded-4">

                                <div className="card-body p-4">

                                    <h4 className="fw-bold mb-4">
                                        Personal Information
                                    </h4>

                                    <div className="row g-4">

                                        <div className="col-md-6">
                                            <label className="form-label text-muted">
                                                Full Name
                                            </label>

                                            <input
                                                type="text"
                                                className="form-control"
                                                value="Sweta Panchal"
                                                readOnly
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label text-muted">
                                                Email
                                            </label>

                                            <input
                                                type="email"
                                                className="form-control"
                                                value="sweta@example.com"
                                                readOnly
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label text-muted">
                                                Phone Number
                                            </label>

                                            <input
                                                type="text"
                                                className="form-control"
                                                value="9876543210"
                                                readOnly
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label text-muted">
                                                Blood Group
                                            </label>

                                            <input
                                                type="text"
                                                className="form-control"
                                                value="O+"
                                                readOnly
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label text-muted">
                                                Date of Birth
                                            </label>

                                            <input
                                                type="text"
                                                className="form-control"
                                                value="24 April 2006"
                                                readOnly
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label text-muted">
                                                Gender
                                            </label>

                                            <input
                                                type="text"
                                                className="form-control"
                                                value="Female"
                                                readOnly
                                            />
                                        </div>

                                        <div className="col-12">
                                            <label className="form-label text-muted">
                                                Address
                                            </label>

                                            <textarea
                                                className="form-control"
                                                rows="3"
                                                value="Ahmedabad, Gujarat"
                                                readOnly
                                            ></textarea>
                                        </div>

                                    </div>

                                    <div className="mt-4">

                                        <button
                                            className="btn btn-danger rounded-pill px-4"
                                        >
                                            <i className="bi bi-pencil-square me-2"></i>
                                            Edit Profile
                                        </button>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}

export default Profile;