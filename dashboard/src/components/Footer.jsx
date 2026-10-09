
function Footer() {
    return (
        <footer
            className="mt-4 mt-lg-5 text-white shadow-sm"
            style={{
                background: "linear-gradient(110deg, #951629 0%, #b42332 55%, #a51d30 100%)",
                borderTop: "3px solid #e85b6a"
            }}
        >
            <div className="container-fluid px-3 px-lg-4 py-3">
                <div className="row align-items-center gy-3">
                    <div className="col-md-6 text-center text-md-start">
                        <a
                            href="/"
                            className="d-inline-flex align-items-center gap-2 text-decoration-none text-white"
                        >
                            <i className="bi bi-heart-pulse-fill fs-5"></i>
                            <span className="fw-bold fs-5">BloodLink</span>
                        </a>

                        <p className="small mb-0 mt-1">
                            Share Life, Give Blood.
                            <i className="bi bi-heart-fill ms-2 text-white-50"></i>
                        </p>
                    </div>

                    <div className="col-md-6 text-center text-md-end">
                        <p className="small mb-1">
                            © 2026 BloodLink. All Rights Reserved.
                        </p>
                        <p className="small text-white-50 mb-0">
                            Every donation can make a difference.
                            <i className="bi bi-heart-fill ms-2"></i>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
