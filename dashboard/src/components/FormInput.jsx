function FormInput({
    label,
    type = "text",
    name,
    value,
    onChange,
    placeholder,
    required = false,
}) {

    const inputId = `form-${name}`;

    return (
        <div className="mb-3">
            <label
                htmlFor={inputId}
                className="form-label fw-semibold"
            >
                {label}
                {required && (
                    <span className="text-danger ms-1" aria-hidden="true">
                        *
                    </span>
                )}
                {required && (
                    <span className="visually-hidden"> (required)</span>
                )}
            </label>

            <input
                id={inputId}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                aria-required={required}
                className="form-control"
            />
        </div>
    );
}

export default FormInput;