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

    return (
        <div className="mb-3">
            <label className="form-label fw-semibold">
                {label}
            </label>

            <select
                className="form-select"
                name={name}
                value={value}
                onChange={onChange}
                required={required}
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