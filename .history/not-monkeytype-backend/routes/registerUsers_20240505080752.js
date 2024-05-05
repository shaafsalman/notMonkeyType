const router = require("express").Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");
const { sendVerificationEmail } = require("../utils/email");
const { generateVerificationCode } = require("../utils/verification");

router.post("/", async (req, res) => {
    console.log("Request to register user");
    try {
        console.log("Received data from frontend:", req.body);

        const { error } = validate(req.body);
        if (error) {
            console.error("Validation error:", error.details[0].message);
            return res.status(400).send({ message: error.details[0].message });
        }

        const user = await User.findOne({ email: req.body.email });
        if (user) {
            console.error("User with given email already exists!");
            return res.status(409).send({ message: "User with given email already exists" });
        }

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        // Generate verification code
        const verificationCode = generateVerificationCode();

        await new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashPassword,
            verified: false, // Mark user as unverified initially
            verificationCode: verificationCode
        }).save();

        await sendVerificationEmail(req.body.email, verificationCode);

        res.status(201).send({ message: "User created successfully. Verification email sent." });
    } catch (error) {
        console.error("Error during registration:", error);
        res.status(500).send({ message: "Internal Server Error" });
    }
});

module.exports = router;