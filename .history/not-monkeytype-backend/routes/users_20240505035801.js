const router = require("express").Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");

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
            return res.status(409).send({ message: "User with given email already Exist!" });
        }

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        await new User({
            firstName: req.body.first_name,
            lastName: req.body.last_name,
            email: req.body.email,
            password: hashPassword
        }).save();

        res.status(201).send({ message: "User created successfully" });
    } catch (error) {
        console.error("Error during registration:", error);
        res.status(500).send({ message: "Internal Server Error" });
    }
});

module.exports = router;
