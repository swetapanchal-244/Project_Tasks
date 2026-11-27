const Patient = require("../models/Patient");
const bcrypt = require("bcryptjs");

const registerPatient = async (req, res) => {
    try {
        const { fullName, email, phone, bloodGroup, password, confirmPassword } = req.body;

        if (!fullName || !email || !phone || !bloodGroup || !password || !confirmPassword) {
            return res.status(400).json({
                message: "All fields are required",
            });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({
                message: "Passwords do not match",
            });
        }

        const existingPatient = await Patient.findOne({
            $or: [{ email }, { phone }],
        });

        if (existingPatient) {
            return res.status(409).json({
                message: "Email or phone number already registered,"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const patient = await Patient.create({
            fullName,
            email,
            phone,
            bloodGroup,
            password: hashedPassword,
        });

        return res.status(201).json({
            message: "Patient registered successfully",
            patient: {
                id: patient._id,
                fullName: patient.fullName,
                email: patient.email,
                phone: patient.phone,
                bloodGroup: patient.bloodGroup,
            },
        });

    } catch (error) {
        return res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};

module.exports = { registerPatient };