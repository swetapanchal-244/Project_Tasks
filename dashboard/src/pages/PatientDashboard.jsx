import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";

function PatientDashboard() {
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
                    activeMenu="Dashboard" />

                <div className="container-fluid p-4">

                    <div className="card border-0 shadow-sm rounded-4 mb-4 bg-danger text-white">
                        <div className="card-body p-4">

                            <h3 className="fw-bold">
                                Welcome Back, Sweta !
                            </h3>

                            <p className="mb-0">
                                Manage your blood requests, appoitments and donor information from one place.
                            </p>
                        </div>
                    </div>


                    <div className="row">

                        <DashboardCard
                            title="Blood Group"
                            value="O+"
                            icon="bi-droplet-fill"
                            color="#dc3545"
                        />

                        <DashboardCard
                            title="Requests"
                            value="05"
                            icon="bi-heart-pulse-fill"
                            color="#0d6efd"
                        />

                        <DashboardCard
                            title="Appointments"
                            value="02"
                            icon="bi-calendar2-check"
                            color="#198754"
                        />

                        <DashboardCard
                            title="Nearby Donors"
                            value="18"
                            icon="bi-people-fill"
                            color="#fd7e14"
                        />

                        <DashboardCard
                            title="Request Status"
                            value="Pending"
                            icon="bi-clock-history"
                            color="#ffc107"
                        />

                        <DashboardCard
                            title="Notifications"
                            value="03"
                            icon="bi-bell-fill"
                            color="#6c757d"
                        />
                    </div>

                </div>

            </div>

        </>
    );
}

export default PatientDashboard;