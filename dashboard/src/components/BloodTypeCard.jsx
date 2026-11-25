function BloodTypeCard({ bloodGroup, availableUnits, status }) {
    const statusClass =
        status === "Critical"
            ? "critical"
            : status === "Low"
                ? "low"
                : "available";

    return (
        <div className={`blood-type-card ${statusClass}`}>
            <div className="blood-type-icon">
                <i className="bi bi-droplet-fill"></i>
            </div>

            <h3>{bloodGroup}</h3>

            <p className="blood-units">
                {availableUnits} <span>Units</span>
            </p>

            <span className={`blood-status ${statusClass}`}>
                {status}
            </span>
        </div>
    );
}

export default BloodTypeCard;