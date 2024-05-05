const User = require("../models/user");

const deleteUserByEmail = async (req, res) => {
    console.log("Deleting User");
    try {
        const { email } = req.body;
        console.log("Email:", email);

        const user = await User.findOneAndDelete({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = deleteUserByEmail;
