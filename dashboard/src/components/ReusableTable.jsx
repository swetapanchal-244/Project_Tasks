import { flexRender } from "@tanstack/react-table";

function ReusableTable({
    table,
    emptyMessage = "No records found."
}) {
    const rows = table.getRowModel().rows;

    return (
        <div className="table-responsive reusable-table-wrapper">
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
                    {rows.length > 0 ? (
                        rows.map((row) => (
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
                                colSpan={table.getVisibleLeafColumns().length || 1}
                                className="text-center py-4 text-muted"
                            >
                                {emptyMessage}
                            </td>
                        </tr>
                    )}
                </tbody>

            </table>
        </div>
    );
}

export default ReusableTable;
