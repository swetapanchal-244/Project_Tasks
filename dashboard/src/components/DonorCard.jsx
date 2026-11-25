function DonorCard({ donor }) {
    const {
        name,
        bloodGroup,
        location,
        phone,
        available,
    } = donor;

    return (
        <div className="card donor-profile-card h-100 border-0">
            <div className="card-body p-4">

                <div className="d-flex justify-content-between align-items-start mb-3">

                    <div className="donor-avatar">
                        <i className="bi bi-person-fill"></i>
                    </div>

                    <span className={`badge rounded-pill ${available ? "bg-success-subtle text-success" : "bg-secondary-subtal text-secondary"
                        }`}>
                        <i className="bi bi-circle-fill me-1"></i>
                        {available ? "Available" : "Unavailable"}
                    </span>

                </div>

                <h5 className="fw-bold mb-1">{name}</h5>

                <div className="donor-blood-group mb-3">
                    <i className="bi bi-droplet-fill me-2"></i>
                    {bloodGroup}
                </div>

                <div className="donor-card-info">
                    <p>
                        <i className="bi bi-geo-alt-fill"></i>
                        <span>{location}</span>
                    </p>

                    <p>
                        <i className="bi bi-telephone-fill"></i>
                        <span>{phone}</span>
                    </p>
                </div>

                <a
                    href={`tel:${phone}`}
                    className={`btn w-100 mt-3 ${available ? "btn-danger" : "btn-secondary disabled"
                        }`}
                    aria-disabled={!available}
                    onClick={(event) => {
                        if (!available) event.preventDefault();
                    }}
                >
                    <i className="bi bi-telephone me-2"></i>
                    Contact Donor
                </a>
            </div>
        </div>
    );
}

export default DonorCard;