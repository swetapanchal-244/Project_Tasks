import { useState } from "react";

function useForm(initialValues, validate, onSubmit) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "",
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate(values);

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            onSubmit(values);
        }
    };

    const resetForm = () => {
        setValues(initialValues);
        setErrors({});
    };

    return {
        values,
        errors,
        handleChange,
        handleSubmit,
        resetForm,
    };
}

export default useForm;