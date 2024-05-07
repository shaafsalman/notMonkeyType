const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    verified: { type: Boolean, default: false }, 
    verificationCode: { type: String }, 
});

userSchema.methods.generateAuthToken = function () {
    const payload = {
        _id: this._id,
        email: this.email,
        name: this.firstName 
    };

    const token = jwt.sign(payload, process.env.JWTPRIVATEKEY, {
        expiresIn: "7d",
    });
    return token;
};

userSchema.statics.deleteUnverifiedUsers = async function () {
    try
     {
        await this.deleteMany({ verified: false });
        console.log("Unverified users deleted successfully.");
    } 
    catch (error) 
    {
        console.error("Error deleting unverified users:", error);
    }
};

const User = mongoose.models.users || mongoose.model("User", userSchema);

const validate = (data) => {
    const schema = Joi.object({
        firstName: Joi.string().required().label("First Name"),
        lastName: Joi.string().required().label("Last Name"),
        email: Joi.string().email().required().label("Email"),
        password: Joi.string().required().label("Password"),
    });
    return schema.validate(data);
};


userSchema.methods.changePassword = async function (currentPassword, newPassword) {
    try {
        // Check if current password matches
        if (currentPassword !== this.password) {
            throw new Error("Current password is incorrect.");
        }
        // Update password
        this.password = newPassword;
        await this.save();
        console.log("Password changed successfully.");
    } catch (error) {
        console.error("Error changing password:", error);
        throw error;
    }
};

const getFirstNameById = async (userId) => {
    try {
        const user = await User.findById(userId);
        if (!user) {
            throw new Error("User not found.");
        }
        return user.firstName;
    } catch (error) {
        console.error("Error fetching user by ID:", error);
        throw error;
    }
};


// Add method to delete account
userSchema.methods.deleteAccount = async function () {
    try {
        await this.remove();
        console.log("Account deleted successfully.");
    } catch (error) {
        console.error("Error deleting account:", error);
        throw error;
    }
};

module.exports = { User, validate };
