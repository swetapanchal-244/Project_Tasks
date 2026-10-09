import { useState } from "react";

function ProfileForm({ title, initialData, fields, onSave }) {
    const [formData, setFormData] = useState(initialData);
    const [isEditing, setIsEditing] = useState(false);

    const gradient =
        "linear-gradient(115deg, #951629 0%, #b42332 55%, #a51d30 100%)";

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSave = (e) => {
        e.preventDefault();
        onSave(formData);
        setIsEditing(false);
        alert("Profile updated successfully!");
    };

    const handleCancel = () => {
        setFormData(initialData);
        setIsEditing(false);
    };

    return (
        <div className="card border-0 rounded-4 shadow-sm">
            <div className="card-body p-4 p-lg-5">

                <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
                    <div>
                        <h4 className="fw-bold text-dark mb-1">
                            {title}
                        </h4>
                        <p className="text-secondary mb-0">
                            View and manage your personal information.
                        </p>
                    </div>

                    {!isEditing && (
                        <button
                            type="button"
                            className="btn text-white rounded-3 px-4"
                            style={{ background: gradient }}
                            onClick={() => setIsEditing(true)}
                        >
                            <i className="bi bi-pencil-fill me-2"></i>
                            Edit Profile
                        </button>
                    )}
                </div>

                <form onSubmit={handleSave}>
                    <div className="row g-4">
                        {fields.map((field) => (
                            <div
                                className="col-md-6"
                                key={field.name}
                            >
                                <label
                                    htmlFor={field.name}
                                    className="form-label fw-semibold"
                                >
                                    {field.label}
                                </label>

                                {field.type === "select" ? (
                                    <select
                                        id={field.name}
                                        name={field.name}
                                        className="form-select py-2"
                                        value={formData[field.name] || ""}
                                        onChange={handleChange}
                                        disabled={!isEditing}
                                    >
                                        {field.options.map((option) => (
                                            <option
                                                key={option}
                                                value={option}
                                            >
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                ) : (
                                    <input
                                        id={field.name}
                                        type={field.type || "text"}
                                        name={field.name}
                                        className="form-control py-2"
                                        value={formData[field.name] || ""}
                                        onChange={handleChange}
                                        disabled={!isEditing}
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    {isEditing && (
                        <div className="d-flex flex-wrap gap-2 mt-4">
                            <button
                                type="submit"
                                className="btn text-white fw-semibold px-4 py-2 rounded-3"
                                style={{ background: gradient }}
                            >
                                <i className="bi bi-check-circle-fill me-2"></i>
                                Save Changes
                            </button>

                            <button
                                type="button"
                                className="btn btn-light border px-4 py-2 rounded-3"
                                onClick={handleCancel}
                            >
                                Cancel
                            </button>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}

export default ProfileForm;