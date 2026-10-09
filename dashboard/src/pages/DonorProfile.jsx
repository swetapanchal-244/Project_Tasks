import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ProfileForm from "../components/ProfileForm";

function DonorProfile() {
    const [profile, setProfile] = useState(() => {
        const savedProfile = localStorage.getItem("donorProfile");

        return savedProfile
            ? JSON.parse(savedProfile)
            : {
                name: "Sweta Panchal",
                email: "sweta@example.com",
                phone: "",
                bloodGroup: "O+",
                address: "",
                lastDonation: "",
                availability: "Available"
            };
    });

    const gradient = "linear-gradient(115deg, #951629, #b42332 55%, #a51d30)";

    const fields = [
        { name: "name", label: "Full Name", type: "text" },
        { name: "email", label: "Email Address", type: "email" },
        { name: "phone", label: "Phone Number", type: "tel" },
        {
            name: "bloodGroup",
            label: "Blood Group",
            type: "select",
            options: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]
        },
        {
            name: "lastDonation",
            label: "Last Donation Date",
            type: "date"
        },
        {
            name: "availability",
            label: "Donation Availability",
            type: "select",
            options: ["Available", "Unavailable"]
        },
        { name: "address", label: "Address", type: "text" }
    ];

    return (
        <div className="min-vh-100 bg-light">
            <Navbar
                name={profile.name}
                role="Donor"
                profileImage="/profile.jpg"
            />

            <div className="d-flex">
                <Sidebar role="donor" />

                <main className="container-fluid p-3 p-lg-4">
                    <div
                        className="card border-0 rounded-4 text-white shadow-sm mb-4"
                        style={{ background: gradient }}
                    >
                        <div className="card-body p-4">
                            <h2 className="fw-bold mb-1">Donor Profile</h2>
                            <p className="mb-0">
                                Manage your donor details and availability.
                            </p>
                        </div>
                    </div>

                    <div className="card border-0 rounded-4 shadow-sm">
                        <div className="card-body p-4 p-lg-5">
                            <div className="d-flex flex-wrap align-items-center gap-3 mb-4">
                                <img
                                    src="/profile.jpg"
                                    alt="Donor profile"
                                    width="82"
                                    height="82"
                                    className="rounded-circle border border-3 border-danger-subtle"
                                    style={{ objectFit: "cover" }}
                                />

                                <div className="flex-grow-1">
                                    <h4 className="fw-bold mb-1">
                                        {profile.name}
                                    </h4>
                                    <span className="badge rounded-pill px-3 py-2 text-bg-danger">
                                        Blood Donor
                                    </span>
                                </div>
                            </div>

                            <hr className="border-danger-subtle mb-4" />

                            <ProfileForm
                                title="Personal Information"
                                initialData={profile}
                                fields={fields}
                                onSave={(updatedProfile) => {
                                    setProfile(updatedProfile);
                                    localStorage.setItem(
                                        "donorProfile",
                                        JSON.stringify(updatedProfile)
                                    );
                                }}
                            />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default DonorProfile;
