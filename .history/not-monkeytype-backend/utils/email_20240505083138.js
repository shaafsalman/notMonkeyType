const nodemailer = require('nodemailer');

// Function to send verification email
const sendVerificationEmail = async (email, firstName, lastName, verificationCode) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'notMonkeytype@gmail.com',
                pass: 'vgkw lmdu aazc yocm'
            }
        });

        // HTML body for the email
        const emailBodyHTML = `
            <div>
                <h1>Welcome to Our Email Newsletter</h1>
                <p>Dear ${firstName} ${lastName},</p>
                <p>Thank you for subscribing to our newsletter. We are excited to share updates and news with you.</p>
                <p>Your verification code is: ${verificationCode}</p>
            </div>
        `;

        const mailOptions = {
            from: 'notMonkeytype@gmail.com', // Update with your email address
            to: email,
            subject: 'Email Verification',
            html: emailBodyHTML
        };

        await transporter.sendMail(mailOptions);
        console.log('Verification email sent successfully');
    } catch (error) {
        console.error('Error sending verification email:', error);
    }
};

module.exports = { sendVerificationEmail };
