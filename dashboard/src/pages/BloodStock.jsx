
import { useState } from "react";
import {
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    useReactTable,
} from "@tanstack/react-table";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const data = [
    { bloodGroup: "A+", availableUnits: 25, status: "Available" },
    { bloodGroup: "A-", availableUnits: 8, status: "Low" },
    { bloodGroup: "B+", availableUnits: 30, status: "Available" },
    { bloodGroup: "B-", availableUnits: 5, status: "Low" },
    { bloodGroup: "O+", availableUnits: 40, status: "Available" },
    { bloodGroup: "O-", availableUnits: 3, status: "Critical" },
    { bloodGroup: "AB+", availableUnits: 12, status: "Available" },
    { bloodGroup: "AB-", availableUnits: 6, status: "Low" },
];

const columns = [
    {
        id: "srNo",
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
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 5,
    });

    const table = useReactTable({
        data,
        columns,
        state: {
            pagination,
        },
        onPaginationChange: setPagination,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

    const totalRows = table.getFilteredRowModel().rows.length;
    const pageRows = table.getRowModel().rows;
    const startRecord = totalRows === 0
        ? 0
        : pagination.pageIndex * pagination.pageSize + 1;
    const endRecord = Math.min(
        (pagination.pageIndex + 1) * pagination.pageSize,
        totalRows
    );

    return (
        <>
            <Navbar
                name="Admin"
                role="Administrator"
                profileImage="/profile.jpg"
            />

            <div className="d-flex">
                <Sidebar role="admin" activeMenu="Blood Stock" />

                <div className="container-fluid p-3 p-md-4">
                    <div className="card border-0 shadow-sm rounded-4">
                        <div className="card-body p-3 p-md-4">
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

                            <div className="table-responsive">
                                <table className="table table-hover align-middle mb-0">
                                    <thead className="table-light">
                                        {table.getHeaderGroups().map((headerGroup) => (
                                            <tr key={headerGroup.id}>
                                                {headerGroup.headers.map((header) => (
                                                    <th key={header.id}>
                                                        {header.isPlaceholder
                                                            ? null
                                                            : flexRender(
                                                                header.column.columnDef.header,
                                                                header.getContext()
                                                            )}
                                                    </th>
                                                ))}
                                            </tr>
                                        ))}
                                    </thead>

                                    <tbody>
                                        {pageRows.length > 0 ? (
                                            pageRows.map((row) => (
                                                <tr key={row.id}>
                                                    {row.getVisibleCells().map((cell) => (
                                                        <td key={cell.id}>
                                                            {flexRender(
                                                                cell.column.columnDef.cell,
                                                                cell.getContext()
                                                            )}
                                                        </td>
                                                    ))}
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td
                                                    colSpan={columns.length}
                                                    className="text-center py-4"
                                                >
                                                    No blood stock records found.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 mt-4">
                                <div className="d-flex align-items-center gap-2">
                                    <label
                                        htmlFor="pageSize"
                                        className="text-muted small"
                                    >
                                        Rows per page:
                                    </label>

                                    <select
                                        id="pageSize"
                                        className="form-select form-select-sm"
                                        style={{ width: "75px" }}
                                        value={pagination.pageSize}
                                        onChange={(event) =>
                                            table.setPageSize(Number(event.target.value))
                                        }
                                    >
                                        {[5, 10, 20].map((size) => (
                                            <option key={size} value={size}>
                                                {size}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <span className="text-muted small">
                                    Showing {startRecord}–{endRecord} of {totalRows} records
                                </span>

                                <nav aria-label="Blood stock pagination">
                                    <ul className="pagination pagination-sm mb-0 flex-wrap">
                                        <li
                                            className={`page-item ${!table.getCanPreviousPage() ? "disabled" : ""
                                                }`}
                                        >
                                            <button
                                                type="button"
                                                className="page-link"
                                                onClick={() => table.previousPage()}
                                                disabled={!table.getCanPreviousPage()}
                                            >
                                                Previous
                                            </button>
                                        </li>

                                        {Array.from(
                                            { length: table.getPageCount() },
                                            (_, index) => index
                                        ).map((pageIndex) => (
                                            <li
                                                key={pageIndex}
                                                className={`page-item ${pagination.pageIndex === pageIndex
                                                        ? "active"
                                                        : ""
                                                    }`}
                                            >
                                                <button
                                                    type="button"
                                                    className="page-link"
                                                    onClick={() =>
                                                        table.setPageIndex(pageIndex)
                                                    }
                                                >
                                                    {pageIndex + 1}
                                                </button>
                                            </li>
                                        ))}

                                        <li
                                            className={`page-item ${!table.getCanNextPage() ? "disabled" : ""
                                                }`}
                                        >
                                            <button
                                                type="button"
                                                className="page-link"
                                                onClick={() => table.nextPage()}
                                                disabled={!table.getCanNextPage()}
                                            >
                                                Next
                                            </button>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BloodStock;
