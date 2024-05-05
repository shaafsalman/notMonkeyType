import User from './models/User';

const verifyEmail = async (req, res) => {
    try {
        const { firstName, lastName, email, verificationCode } = req.body;

        const user = await User.findOne({ email, verificationCode });

        if (!user) {
            return res.status(400).json({ message: 'Invalid verification code' });
        }

        // Update the user's status to verified
        user.verified = true;
        await user.save();

        return res.status(200).json({ message: 'User verified successfully' });
    } catch (error) {
        console.error('Error confirming user:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

export default verifyEmail;
