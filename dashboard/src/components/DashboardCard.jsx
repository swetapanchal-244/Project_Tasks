const DashboardCard = ({ title, value, icon, color }) => {

    return (
        <div className="col-md-6 col-lg-3 mb-4">
            <div className="card shadow-sm border-0 rounded-4 h-100">
                <div className="card-body d-flex justify-content-between align-items-center">

                    <div>
                        <h6 className="text-muted mb-2">{title}</h6>
                        <h3 className="fw-bold">{value}</h3>
                    </div>

                    <div
                        className="d-flex justify-content-center align-items-center rounded-circle"
                        style={{
                            width: "60px",
                            height: "60px",
                            backgroundColor: color,
                            color: "white",
                        }}

                    >
                        <i className={`${icon} fs-3`}></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardCard;