function PageLoader() {
    return (
        <div
            className="page-loader"
            role="status"
            aria-live="polite"
            aria-label="Loading page"
        >
            <div className="loader-content">
                <div className="loader-spinner">
                    <i className="bi bi-heart-pulse-fill"></i>
                </div>

                <h5>BloodLink</h5>
                <p>Loading, please wait...</p>
            </div>
        </div>
    );
}

export default PageLoader;
