
function DashboardCard({ title, value, icon, color = "#a51d30" }) {
    return (
        <div className="col-12 col-sm-6 col-xl-4">
            <div className="card h-100 border-0 rounded-4 shadow-sm border-start border-4 border-danger">
                <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-start mb-4">
                        <div
                            className="d-flex align-items-center justify-content-center rounded-3"
                            style={{
                                width: "52px",
                                height: "52px",
                                backgroundColor: "#fbe7ea",
                                color: color
                            }}
                        >
                            <i className={`bi ${icon} fs-4`}></i>
                        </div>
                        <span className="badge rounded-pill text-danger bg-light">
                            <i className="bi bi-activity"></i>
                        </span>
                    </div>

                    <p className="text-secondary mb-2">{title}</p>
                    <h3 className="fw-bold text-dark mb-0">{value}</h3>

                    <hr className="my-3 border-danger-subtle" />

                    <div className="d-flex justify-content-between align-items-center">
                        <small className="text-secondary">BloodLink Overview</small>
                        <i className="bi bi-arrow-up-right text-danger"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardCard;
