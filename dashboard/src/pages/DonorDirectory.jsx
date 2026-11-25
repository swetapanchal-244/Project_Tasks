import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DonorCard from "../components/DonorCard";

function DonorDirectory() {
    const [searchTerm, setSearchTerm] = useState("");

    const donors = [
        {
            id: 1,
            name: "Aarav Patel",
            bloodGroup: "A+",
            location: "Ahmedabad, Gujarat",
            phone: "9876543210",
            available: true
        },
        {
            id: 2,
            name: "Priya Shah",
            bloodGroup: "B-",
            location: "Surat, Gujarat",
            phone: "9874561420",
            available: true
        },
        {
            id: 3,
            name: "Rahul Mehta",
            bloodGroup: "O+",
            location: "Vadodara, Gujarat",
            phone: "5469873015",
            avilable: false
        },
        {
            id: 4,
            name: "Neha Desai",
            bloodGroup: "Ahmedabad, Gujarat",
            phone: "7539512648",
            available: true
        },
        {
            id: 5,
            name: "Karan Joshi",
            bloodGroup: "B+",
            location: "Rajkot, Gujarat",
            phone: "6549871230",
            available: true
        },
        {
            id: 6,
            name: "Riya Patel",
            bloodGroup: "O-",
            location: "Gandhinagr, Gujarat",
            phone: "84563215987",
            available: false
        }
    ];

    const filteredDonors = donors.filter((donor) =>
        [
            donor.name,
            donor.bloodGroup,
            donor.location
        ].some((value) =>
            String(value || "")
                .toLowerCase()
                .includes(searchTerm.trim().toLowerCase())
        )
    );

    return (
        <>
            <Helmet>
                <title>Donor Directory | BloodLink</title>
                <meta
                    name="description"
                    content="Explore donor profiles and blood groups with BloodLink."
                />
            </Helmet>

            <Navbar />

            <main className="donor-directory-page">
                <div className="container py-5">

                    <div className="text-center mb-5">
                        <span className="badge bg-danger-subtle text-danger mb-3">
                            BLOODLINK DONOR NETWORK
                        </span>

                        <h1 className="fw-bold">
                            Find Blood Donors
                        </h1>

                        <p className="text-secondary">
                            Connect with donors and help save lives.
                        </p>
                    </div>

                    <div className="row justify-content-center mb-5">
                        <div className="col-md-7 col-lg-6">
                            <label
                                htmlFor="donorSearch"
                                className="form-label fw-semibold"
                            >
                                Search Donors
                            </label>

                            <div className="input-group">
                                <span className="input-group-text bg-white">
                                    <i className="bi bi-search text-danger"></i>
                                </span>

                                <input
                                    id="donorSearch"
                                    type="search"
                                    className="form-control"
                                    placeholder="Search by name, blood group or city..."
                                    value={searchTerm}
                                    onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h4 className="fw-bold mb-0">
                            Available Donor Profiles
                        </h4>

                        <span className="text-secondary">
                            {filteredDonors.length} Donors
                        </span>
                    </div>

                    <div className="row g-4">
                        {filteredDonors.length > 0 ? (
                            filteredDonors.map((donor) => (
                                <div
                                    className="col-12 col-md-6 col-lg-4"
                                    key={donor.id}
                                >
                                    <DonorCard donor={donor} />
                                </div>
                            ))
                        ) : (
                            <div className="col-12 text-center py-5">
                                <i className="bi bi-search display-4 text-secondary"></i>
                                <h5 className="mt-3">
                                    No donors found
                                </h5>
                                <p className="text-secondary">
                                    Tru searching with another name or blood group.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}

export default DonorDirectory;