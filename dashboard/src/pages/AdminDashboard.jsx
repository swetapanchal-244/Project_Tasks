import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";

function AdminDashboard() {
    return (
        <>
            <Navbar
                name="Admin"
                role="Administrator"
                profileImage="/profile.jpg"
            />

            <div className="d-flex">

                <Sidebar 
                    role="admin"
                    activeMenu="Dashboard" />

                <div className="container-fluid p-4">

                    <div className="card border-0 shadow-sm rounded-4 mb-4 bg-danger text-white">

                        <div className="card-body p-4">

                            <h3 className="fw-bold">
                                Welcome Admin !
                            </h3>

                            <p className="mb-0">
                                Manage donors, patients, blood requests and reports efficiently.
                            </p>

                        </div>

                    </div>

                    <div className="row">

                        <DashboardCard
                            title="Total Users"
                            value="350"
                            icon="bi-people-fill"
                            color="#0d6efd"
                        />

                        <DashboardCard
                            title="Total Donors"
                            value="180"
                            icon="bi-heart-pulse-fill"
                            color="#dc3545"
                        />

                        <DashboardCard
                            title="Blood Requests"
                            value="45"
                            icon="bi-droplet-fill"
                            color="#198754"
                        />

                        <DashboardCard
                            title="Hospitals"
                            value="12"
                            icon="bi-hospital-fill"
                            color="#fd7e14"
                        />

                    </div>

                </div>

            </div>
        </>
    );
}

export default AdminDashboard;