import nodemailer from 'nodemailer';
import emailBody from './emailBody';

const sendVerificationEmail = async (email, firstName, lastName, verificationCode) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'notMonkeytype@gmail.com',
                pass: 'vgkw lmdu aazc yocm'
            }
        });

        const emailBodyHTML = emailBody({ firstName, lastName, verificationCode });

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

export default sendVerificationEmail;
