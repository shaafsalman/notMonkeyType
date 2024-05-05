const generateVerificationCode = () => {
    const code = Math.floor(100000 + Math.random() * 900000); // Generate a random 6-digit number
    return code.toString(); // Convert number to string
};

module.exports = { generateVerificationCode };