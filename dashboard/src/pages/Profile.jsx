import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ProfileForm from "../components/ProfileForm";
import { Helmet } from "react-helmet-async";

function Profile() {
    const [profile, setProfile] = useState(() => {
        const savedProfile = localStorage.getItem("patientProfile");

        return savedProfile
            ? JSON.parse(savedProfile)
            : {
                name: "Sweta Panchal",
                email: "sweta@example.com",
                phone: "",
                bloodGroup: "O+",
                age: "",
                address: ""
            };
    });

    const gradient =
        "linear-gradient(115deg, #951629 0%, #b42332 55%, #a51d30 100%)";

    const fields = [
        {
            name: "name",
            label: "Full Name",
            type: "text",
            required: true
        },
        {
            name: "email",
            label: "Email Address",
            type: "email",
            required: true
        },
        {
            name: "phone",
            label: "Phone Number",
            type: "tel"
        },
        {
            name: "age",
            label: "Age",
            type: "number",
            min: 1
        },
        {
            name: "bloodGroup",
            label: "Blood Group",
            type: "select",
            options: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]
        },
        {
            name: "address",
            label: "Address",
            type: "text"
        }
    ];

    const handleSave = (updatedProfile) => {
        setProfile(updatedProfile);

        localStorage.setItem(
            "patientProfile",
            JSON.stringify(updatedProfile)
        );
    };

    return (
        <div className="min-vh-100 bg-light">

            <Helmet>
                <title>My Profile | BloodLink</title>

                <meta
                    name="description"
                    content="Manage your BloodLink patient profile, personal information, contact details and blood group information."
                />

                <meta
                    name="keywords"
                    content="BloodLink, patient profile, personal information, patient details, blood group"
                />

                <meta
                    property="og:title"
                    content="My Profile | BloodLink"
                />

                <meta
                    property="og:description"
                    content="View and update your personal information and blood group details on BloodLink."
                />

                <meta property="og:type" content="website" />
            </Helmet>

            <Navbar
                name={profile.name}
                role="Patient"
                profileImage="/profile.webp"
            />

            <div className="d-flex">
                <Sidebar role="patient" />

                <main className="container-fluid p-3 p-lg-4">
                    <div
                        className="card border-0 rounded-4 text-white shadow-sm mb-4"
                        style={{ background: gradient }}
                    >
                        <div className="card-body p-4">
                            <h2 className="fw-bold mb-1">My Profile</h2>

                            <p className="mb-0">
                                Manage your personal and blood group information.
                            </p>
                        </div>
                    </div>

                    <div className="card border-0 rounded-4 shadow-sm">
                        <div className="card-body p-4 p-lg-5">
                            <div className="d-flex flex-wrap align-items-center gap-3 mb-4">
                                <img
                                    src="/profile.webp"
                                    alt="Patient profile"
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
                                        Patient
                                    </span>
                                </div>
                            </div>

                            <hr className="border-danger-subtle mb-4" />

                            <ProfileForm
                                title="Personal Information"
                                initialData={profile}
                                fields={fields}
                                onSave={handleSave}
                            />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Profile;