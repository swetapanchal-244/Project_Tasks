function DashboardCard({ title, value, icon, color = "#a51d30" }) {
    return (
        <div className="col-12 col-sm-6 col-xl-4">
            <div className="card dashboard-stat-card h-100 border-0 rounded-4 shadow-sm">
                <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-start mb-4">
                        <div
                            className="dashboard-stat-icon d-flex align-items-center justify-content-center rounded-3"
                            style={{
                                background: `linear-gradient(135deg, ${color}, #861426)`
                            }}
                        >
                            <i className={`bi ${icon} fs-4 text-white`}></i>
                        </div>

                        <span className="badge rounded-pill bg-danger-subtle text-danger px-3 py-2">
                            <i className="bi bi-activity me-1"></i>
                            Overview
                        </span>
                    </div>

                    <p className="text-secondary mb-2 dashboard-stat-title">
                        {title}
                    </p>

                    <h3 className="fw-bold text-dark mb-0 dashboard-stat-value">
                        {value}
                    </h3>

                    <hr className="my-3" />

                    <div className="d-flex justify-content-between align-items-center">
                        <small className="text-secondary">
                            BloodLink Statistics
                        </small>
                        <i
                            className="bi bi-arrow-up-right text-danger"
                            aria-hidden="true"
                        ></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardCard;