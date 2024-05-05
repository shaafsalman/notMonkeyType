import React from 'react';
import logoImage from './../assets/Logo2Transparent.png';
import CoverGifGIF from './../assets/loginGIF.gif';
import FooterImage from './../assets/footer.png';

const EmailBody = ({ firstName, lastName, verificationCode }) => {
  return (
    <div className="bg-white p-8">
      {/* GIF as Cover */}
      <img src={CoverGifGIF} alt="Cover GIF" className="w-full" />

      {/* Logo at the left corner */}
      <img src={logoImage} alt="Logo" className="absolute top-0 left-0 w-16 h-16 p-2" />

      {/* Dear Name message */}
      <p className="text-lg font-semibold mt-8">Dear {firstName} {lastName},</p>
      <p className="mt-4">Welcome to notMonkeyType!</p>
      <p className="mt-4">We're thrilled to have you onboard. To get started with our typing speed game, please verify your account by using the following code:</p>

      {/* Verification Code */}
      <p className="mt-4">Verification Code: <strong>{verificationCode}</strong></p>

      {/* Footer */}
      <footer className="bg-white lg:grid lg:grid-cols-5 mt-8 p-8">
        <div className="relative block h-32 lg:col-span-2 lg:h-full">
          <img
            src={FooterImage}
            alt="Footer Background"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-500"> Call us </p>
              <a href="tel:03174532990" className="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl">0317-4532990</a>
            </div>

            <ul className="mt-8 space-y-1 text-sm text-gray-700">
              <li>Contact Us At</li>
              <a href="mailto:notmonkeytype@gmail.com" className="block text-sm font-medium text-gray-900 hover:opacity-75 sm:text-2xl">notmonkeytype@gmail.com</a>
            </ul>

            {/* Add social media icons */}
          </div>

          <div className="mt-12 border-t border-gray-100 pt-12">
            <div className="sm:flex sm:items-center sm:justify-between">
              <ul className="flex flex-wrap gap-4 text-xs">
                <li><a href="#" className="text-gray-500 transition hover:opacity-75">Terms & Conditions</a></li>
                {/* Add links for Privacy Policy, Cookies, etc. */}
              </ul>
              <p className="mt-8 text-xs text-gray-500 sm:mt-0">&copy; 2024. ViaEyes. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EmailBody;
