const { User } = require("../models/user");

const verifyEmail = async (req, res) => {
    console.log("verifying Customer-----------------");
    try {
        const { email, verificationCode } = req.body;
        console.log("Email:", email);
        console.log("Verification code:", verificationCode);

        const user = await User.findOne({ email, verificationCode });

        if (!user) {
            return res.status(400).json({ message: 'Invalid verification code' });
        }

        user.verified = true;
        await user.save();

        return res.status(200).json({ message: 'User verified successfully' });
    } catch (error) {
        console.error('Error confirming user:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = verifyEmail;