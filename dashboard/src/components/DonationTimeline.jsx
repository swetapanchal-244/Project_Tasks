const donationSteps = [
    {
        id: 1,
        title: "Registration",
        description: "Registration as a blood donor and provide your basic details.",
        icon: "bi-person-plus-fill"
    },
    {
        id: 2,
        title: "Health Checkup",
        description: "A basic health screeing is performed to check donor eligibility.",
        icon: "bi-heart-pulse-fill"
    },
    {
        id: 3,
        title: "Blood Donation",
        description: "The donor safely donates blood under medical supervision.",
        icon: "bi-droplet-fill"
    },
    {
        id: 4,
        title: "Blood Testing",
        description: "Collected blood is tested for blood group and safety.",
        icon: "bi-clipboard2-pulse-fill"
    },
    {
        id: 5,
        title: "Blood Storage",
        description: "Tested blood is stored under approprite conditions.",
        icon: "bi-hospital-fill"
    },
    {
        id: 6,
        title: "Blood Distribution",
        description: "Suitable blood units are distributed to patients in need.",
        icon: "bi-truck"
    }
];

function DonationTimeline() {
    return (
        <section className="donation-timeline-section card border-0 rounded-4 shadow-sm mb-4">
            <div className="card-body p-4">
                <div className="mb-4">
                    <span className="donation-journey-badge mb-3">
                        <i className="bi bi-droplet-fill me-2"></i>
                        DONATION JOURNEY
                    </span>

                    <h4 className="fw-bold mb-1">
                        Blood Donation Process
                    </h4>

                    <p className="text-secondary mb-0">
                        Understand the journey of blood donation step by step.
                    </p>
                </div>

                <div className="donation-timeline">
                    {donationSteps.map((step, index) => (
                        <div className="timeline-step" key={step.id}>
                            <div className="timeline-marker">
                                <i className={`bi ${step.icon}`}></i>
                            </div>

                            <div className="timeline-content">
                                <span className="timeline-step-number">
                                    STEP {step.id}
                                </span>

                                <h6>{step.title}</h6>

                                <p>{step.description}</p>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default DonationTimeline;