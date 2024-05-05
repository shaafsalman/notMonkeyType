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
    const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
        expiresIn: "7d",
    });
    return token;
};


const User = mongoose.models.users || mongoose.model("User", userSchema);

userSchema.statics.deleteUnverifiedUsers = async function () {
    try {
        const currentTime = new Date();
        const thirtySecondsAgo = new Date(currentTime.getTime() - 30000);
        
        const unverifiedUsers = await this.find({
            verified: false,
            createdAt: { $lte: thirtySecondsAgo }
        });
        
        // Delete unverified users
        if (unverifiedUsers.length > 0) {
            await this.deleteMany({ _id: { $in: unverifiedUsers.map(user => user._id) } });
            console.log("Unverified users deleted successfully");
        }
    } catch (error) {
        console.error("Error deleting unverified users:", error);
    }
};


const validate = (data) => {
    const schema = Joi.object({
        firstName: Joi.string().required().label("First Name"),
        lastName: Joi.string().required().label("Last Name"),
        email: Joi.string().email().required().label("Email"),
        password: Joi.string().required().label("Password"),
    });
    return schema.validate(data);
};

module.exports = { User, validate };
