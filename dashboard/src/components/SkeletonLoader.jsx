function SkeletonLoader({ type = "card", count = 4 }) {
    const skeletonItems = Array.from(
        { length: count },
        (_, index) => index
    );

    if (type === "table") {
        return (
            <div className="table-responsive">
                <table className="table align-middle">
                    <thead>
                        <tr>
                            {Array.from({ length: 5 }, (_, index) => (
                                <th key={index}>
                                    <div className="skeleton skeleton-text"></div>
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {skeletonItems.map((item) => (
                            <tr key={item}>
                                {Array.from({ length: 5 }, (_, index) => (
                                    <td key={index}>
                                        <div className="skeleton skeleton-text"></div>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }

    return (
        <div className="row g-4">
            {skeletonItems.map((item) => (
                <div className="col-md-6 col-xl-3" key={item}>
                    <div className="card border-0 rounded-4 shadow-sm h-100">
                        <div className="card-body p-4">
                            <div className="skeleton skeleton-circle mb-3"></div>

                            <div className="skeleton skeleton-text w-75 mb-3"></div>

                            <div className="skeleton skeleton-heading w-50 mb-3"></div>

                            <div className="skeleton skeleton-text w-100"></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SkeletonLoader;