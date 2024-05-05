
const nodemailer = require('nodemailer');

const sendVerificationEmail = async (email, verificationCode) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'notMonkeytype@gmail.com',
                pass: 'your_password' 
            }
        });

        const mailOptions = {
            from: 'your_email@gmail.com',
            to: email,
            subject: 'Email Verification',
            text: `Your verification code is: ${verificationCode}`
        };

        await transporter.sendMail(mailOptions);
        console.log('Verification email sent successfully');
    } catch (error) {
        console.error('Error sending verification email:', error);
    }
};

module.exports = { sendVerificationEmail };
