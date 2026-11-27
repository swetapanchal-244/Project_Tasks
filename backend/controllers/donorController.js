const Donor = require("../models/Donor");
const bcrypt = require("bcryptjs");

const registerDonor = async (req, res) => {
    try {
        const {
            fullName,
            email,
            phone,
            bloodGroup,
            password,
            confirmPassword
        } = req.body;

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

        const existingDonor = await Donor.findOne({
            $or: [{ email }, { phone }],
        });

        if (existingDonor) {
            return res.status(409).json({
                message: "Email or phone number already registered",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const donor = await Donor.create({
            fullName,
            email,
            phone,
            bloodGroup,
            password: hashedPassword,
        });

        return res.status(201).json({
            message: "Donor registered successfully",
            donor: {
                id: donor._id,
                fullName: donor.fullName,
                email: donor.email,
                phone: donor.phone,
                bloodGroup: donor.bloodGroup,
            },
        });

    } catch (error) {
        return res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};

module.exports = { registerDonor };