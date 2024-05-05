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
        <body style="margin: 0; padding: 0; font-family: 'Poppins', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8f9fa; display: flex; justify-content: center; align-items: center; min-height: 100vh;">

        <div style="max-width: 1000px; background-color: #ffffff; padding: 24px; box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1); border-radius: 12px; color: #212529;">
    
            <div style="text-align: center;">
                <div style="overflow: hidden; border-radius: 12px; margin-bottom: 24px; max-height: 50vh;">
                    <img src="https://i.ibb.co/9HYz7yX/loginGIF.gif" alt="Cover GIF" style="max-width: 100%; margin-bottom: -24%;" />
                </div>          
                <img src="https://i.ibb.co/zH9zXrn/Logo2-Transparent.png" alt="Logo" style="width: 120px; height: auto; margin-bottom: 16px;" />
            </div>
            
            <div style="margin-bottom: 24px; text-align: center;margin-bottom:140px ; color: #6c757d;">
                <h1 style="font-size: 28px; font-weight: bold; margin: 0 0 16px; color: #343a40;">Welcome to notMonkeyType, ${firstName}!</h1>
                <p style="margin-bottom: 24px;font-size: 18px; font-weight: normal">We're thrilled to have you onboard. To get started with our typing speed game, please verify your account by using the following code:</p>
                <div style="background: linear-gradient(45deg, rgba(136, 0, 204, 0.8), rgba(240, 23, 222, 0.8)); backdrop-filter: blur(10px);margin-left:20%; width:60%;padding: 16px; border-radius: 8px; text-align: center;">
                    <p style="font-size: 20px; font-weight: bold; color: #ffffff; margin: 0;">Verification Code: <strong>${verificationCode}</strong></p>
                </div>
            </div>
    
            <footer style="background-color: #ffffff; padding: 16px; border-top: 1px solid #dee2e6; border-radius: 12px; display: flex; justify-content: space-between; align-items: center;">

    <!-- Column 1: Image -->
    <div style="flex-grow: 1; display: flex; align-items: center;">
        <img src="https://i.ibb.co/p0KpHg3/footer.png" alt="Footer Image" style="max-width: 80%; height: auto; border-radius: 8px;" />
    </div>

    <!-- Column 2: Contact Information -->
    <div style="flex-grow: 2; text-align: center;justify-content: center; margin-right:20px">
        <p style="font-size: 18px; color: #6c757d; margin-bottom: 8px;">For assistance, reach out to us:</p>
        <p style="font-size: 24px; font-weight: bold; color: #343a40; margin: 0;"><a href="tel:03174532990" style="text-decoration: none; color: #343a40;">0317-4532990</a></p>
        <p style="font-size: 18px; color: #6c757d; margin-top: 8px; margin-bottom: 0;">notmonkeytype@gmail.com</p>
    </div>

    <!-- Column 3: Social Media -->
    <div style="flex-grow: 1; display: flex; justify-content: flex-end; align-items: center;padding:5px">
        <a href="#" style="text-decoration: none; color: #343a40; margin-left: 8px;"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTia5He74-3f5VR2biYY6yHblJk3hB5NfZnOEVHMWetjg&s" alt="Instagram" style="width: 48px; height: 48px; vertical-align: middle;" /></a>
        <a href="#" style="text-decoration: none; color: #343a40; margin-left: 8px;"><img src="https://simpleicon.com/wp-content/uploads/facebook1-256x256.png" alt="Facebook" style="width: 48px; height: 48px; vertical-align: middle;" /></a>
        <a href="https://github.com/shaafsalman/notMonkeyType.git" style="text-decoration: none; color: #343a40; margin-left: 8px;"><img src="https://res.cloudinary.com/practicaldev/image/fetch/s--i3JOwpme--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev.to/assets/github-logo-ba8488d21cd8ee1fee097b8410db9deaa41d0ca30b004c0c63de0a479114156f.svg" alt="Github" style="width: 48px; height: 48px; vertical-align: middle;" /></a>
    </div>

</footer>

<div style="text-align: center; margin-top: 12px;">
    <p style="font-size: 14px; color: #6c757d;">&copy; 2024 notMonkeyType. All rights reserved.</p>
    <p style="font-size: 14px; color: #6c757d;">Terms & Conditions | Privacy Policy</p>
</div>

        
            
    
        </div>
        </body>
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
