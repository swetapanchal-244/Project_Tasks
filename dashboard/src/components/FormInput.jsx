function FormInput({
    label,
    type = "text",
    name,
    value,
    onChange,
    placeholder,
    required = false,
}) {
    return (
        <div className="mb-3">
            <label className="form-label fw-semibold">
                {label}
            </label>

            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className="form-control"
            />
        </div>
    );
}

export default FormInput;