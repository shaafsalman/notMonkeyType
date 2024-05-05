const nodemailer = require('nodemailer');
const { EmailBody } = require('./emailBody'); // Ensure correct import path and make sure EmailBody is exported correctly

const sendVerificationEmail = async (email, firstName, lastName, verificationCode) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'notMonkeytype@gmail.com',
                pass: 'vgkw lmdu aazc yocm'
            }
        });

        // Render EmailBody component to HTML
        const emailBodyHTML = ReactDOMServer.renderToStaticMarkup(
            <EmailBody firstName={firstName} lastName={lastName} verificationCode={verificationCode} />
        );

        const mailOptions = {
            from: 'notMonkeytype@gmail.com',
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

module.exports = sendVerificationEmail;
