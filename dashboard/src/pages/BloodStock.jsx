import { tableFeatures, useTable } from "@tanstack/react-table";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const features = tableFeatures({});

const data = [
    {
        bloodGroup: "A+",
        availableUnits: 25,
        status: "Available",
    },
    {
        bloodGroup: "A-",
        availableUnits: 8,
        status: "Low",
    },
    {
        bloodGroup: "B+",
        availableUnits: 30,
        status: "Available",
    },
    {
        bloodGroup: "B-",
        availableUnits: 5,
        status: "Low",
    },
    {
        bloodGroup: "O+",
        availableUnits: 40,
        status: "Available",
    },
    {
        bloodGroup: "O-",
        availableUnits: 3,
        status: "Critical",
    },
    {
        bloodGroup: "AB+",
        availableUnits: 12,
        status: "Available",
    },
    {
        bloodGroup: "AB-",
        availableUnits: 6,
        status: "Low",
    },
];

const columns = [
    {
        header: "Sr No.",
        cell: ({ row }) => row.index + 1,
    },
    {
        accessorKey: "bloodGroup",
        header: "Blood Group",
    },
    {
        accessorKey: "availableUnits",
        header: "Available Units",
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ getValue }) => {
            const status = getValue();

            let badgeClass = "bg-success";

            if (status === "Low") {
                badgeClass = "bg-warning text-dark";
            }

            if (status === "Critical") {
                badgeClass = "bg-danger";
            }

            return (
                <span className={`badge ${badgeClass} rounded-pill px-3 py-2`}>
                    {status}
                </span>
            );
        },
    },
];

function BloodStock() {

    const table = useTable({
        features,
        columns,
        data,
    });

    return (
        <>
            {/* Navbar */}
            <Navbar
                name="Admin"
                role="Administrator"
                profileImage="/profile.jpg"
            />

            <div className="d-flex">

                {/* Sidebar */}
                <Sidebar
                    role="admin"
                    activeMenu="Blood Stock"
                />

                {/* Main Content */}
                <div className="container-fluid p-4">

                    <div className="card border-0 shadow-sm rounded-4">

                        <div className="card-body p-4">

                            {/* Page Header */}
                            <div className="d-flex justify-content-between align-items-center mb-4">

                                <div>
                                    <h3 className="fw-bold mb-1">
                                        Blood Stock
                                    </h3>

                                    <p className="text-muted mb-0">
                                        View available blood stock by blood group
                                    </p>
                                </div>

                                <i
                                    className="bi bi-droplet-fill text-danger"
                                    style={{ fontSize: "40px" }}
                                ></i>

                            </div>

                            {/* Blood Stock Table */}
                            <div className="table-responsive">

                                <table className="table table-hover align-middle mb-0">

                                    <thead className="table-light">

                                        {table.getHeaderGroups().map((headerGroup) => (
                                            <tr key={headerGroup.id}>

                                                {headerGroup.headers.map((header) => (
                                                    <th key={header.id}>
                                                        {header.isPlaceholder
                                                            ? null
                                                            : (
                                                                <table.FlexRender
                                                                    header={header}
                                                                />
                                                            )}
                                                    </th>
                                                ))}

                                            </tr>
                                        ))}

                                    </thead>

                                    <tbody>

                                        {table.getRowModel().rows.map((row) => (
                                            <tr key={row.id}>

                                                {row.getAllCells().map((cell) => (
                                                    <td key={cell.id}>
                                                        <table.FlexRender
                                                            cell={cell}
                                                        />
                                                    </td>
                                                ))}

                                            </tr>
                                        ))}

                                    </tbody>

                                </table>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}

export default BloodStock;