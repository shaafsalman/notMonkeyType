const nodemailer = require('nodemailer');

const logoImage  = 'https://example.com/assets/Logo2Transparent.png';
const CoverGifGIF = 'https://example.com/assets/loginGIF.gif';
const FooterImage = 'https://example.com/assets/footer.png';

const sendVerificationEmail = async (email, firstName, lastName, verificationCode) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'notMonkeytype@gmail.com',
                pass: 'vgkw lmdu aazc yocm'
            }
        });

        const emailBodyHTML = `
            <div style="background-color: #ffffff; padding: 8px;">
                <!-- GIF as Cover -->
                <img src="${CoverGifGIF}" alt="Cover GIF" style="width: 100%;" />
        
                <!-- Logo at the left corner -->
                <img src="${logoImage}" alt="Logo" style="position: absolute; top: 0; left: 0; width: 16px; height: 16px; padding: 2px;" />
        
                <!-- Dear Name message -->
                <p style="font-size: 18px; font-weight: bold; margin-top: 8px;">Dear ${firstName} ${lastName},</p>
                <p style="margin-top: 4px;">Welcome to notMonkeyType!</p>
                <p style="margin-top: 4px;">We're thrilled to have you onboard. To get started with our typing speed game, please verify your account by using the following code:</p>
        
                <!-- Verification Code -->
                <p style="margin-top: 4px;">Verification Code: <strong>${verificationCode}</strong></p>
        
                <!-- Footer -->
                <footer style="background-color: #ffffff; display: grid; grid-template-columns: repeat(5, 1fr); margin-top: 8px; padding: 8px;">
                    <div style="position: relative; display: block; height: 32px; grid-column: span 2;">
                        <img
                            src="${FooterImage}"
                            alt="Footer Background"
                            style="position: absolute; inset: 0; height: 100%; width: 100%; object-fit: cover;"
                        />
                    </div>
        
                    <div style="padding: 16px; grid-column: span 3; padding-left: 8px;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr;">
                            <div>
                                <p style="font-size: 12px; text-transform: uppercase; color: #808080;"> Call us </p>
                                <a href="tel:03174532990" style="font-size: 20px; font-weight: bold; color: #000000; text-decoration: none;">0317-4532990</a>
                            </div>
        
                            <ul style="margin-top: 8px; list-style-type: none; font-size: 14px; color: #707070;">
                                <li>Contact Us At</li>
                                <a href="mailto:notmonkeytype@gmail.com" style="text-decoration: none; color: #000000;">notmonkeytype@gmail.com</a>
                            </ul>
                        </div>
        
                        <div style="margin-top: 12px; border-top: 1px solid #e6e6e6; padding-top: 12px;">
                            <div style="display: flex; justify-content: space-between;">
                                <ul style="display: flex; flex-wrap: wrap; gap: 4px; font-size: 10px;">
                                    <li><a href="#" style="color: #808080; transition: opacity 0.3s;">Terms & Conditions</a></li>
                                    <!-- Add links for Privacy Policy, Cookies, etc. -->
                                </ul>
                                <p style="margin-top: 8px; font-size: 10px; color: #808080;">&copy; 2024. ViaEyes. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        `;

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

module.exports.sendVerificationEmail = sendVerificationEmail;
