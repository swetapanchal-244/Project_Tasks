function BloodGroupDropdown({
    value,
    onChange,
    name = "bloodGroup",
    label = "Blood Group",
    required = false,
}) {
    const bloodGroups = [
        "A+",
        "A-",
        "B+",
        "B-",
        "O+",
        "O-",
        "AB+",
        "AB-",
    ];

    const selectId = `blood-group-${name}`;

    return (
        <div className="mb-3">
            <label
                htmlFor={selectId}
                className="form-label fw-semibold"
            >
                {label}

                {required && (
                    <>
                        <span className="text-danger ms-1" aria-hidden="true">
                            *
                        </span>
                        <span className="visually-hidden"> (required)</span>
                    </>
                )}
            </label>

            <select
                id={selectId}
                className="form-select"
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                aria-required={required}
            >
                <option value="">Select Blood Group</option>

                {bloodGroups.map((group) => (
                    <option key={group} value={group}>
                        {group}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default BloodGroupDropdown;