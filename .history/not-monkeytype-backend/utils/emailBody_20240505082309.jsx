import React from 'react';

import logoImage from './../assets/Logo2Transparent.png';
import CoverGifGIF from './../assets/loginGIF.gif';
import FooterImage from './../assets/footer.png';


const EmailBody = ({ firstName, lastName, verificationCode }) => {
  return (
    <div className="bg-gray-100 p-8">
      <div className="flex justify-center mb-6">
        {/* GIF Cover */}
        <img
          src="https://example.com/gif-cover.gif"
          alt="GIF Cover"
          className="w-full h-auto"
        />
      </div>
      <div className="flex items-center mb-6">
        {/* Logo */}
        <img
          src="https://example.com/logo.png"
          alt="Logo"
          className="w-16 h-16 mr-4"
        />
        {/* Greeting */}
        <div>
          <p className="text-lg font-bold">Dear {firstName} {lastName},</p>
          <p className="text-gray-700 mt-2">
            Welcome to notMonkeyType, your new favorite typing speed game! 
            We're thrilled to have you on board.
          </p>
        </div>
      </div>
      <div className="mb-6">
        {/* Verification Code */}
        <p className="text-gray-700">
          Please use the following verification code to complete your registration:
        </p>
        <p className="text-3xl font-bold text-blue-500 mt-2">{verificationCode}</p>
      </div>
      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm">
        <div className="mt-8">
          <p>Questions or concerns? Reach out to us at <a href="mailto:notmonkeytype@gmail.com" className="text-blue-500">notmonkeytype@gmail.com</a></p>
        </div>
        <div className="mt-8">
          <p>&copy; 2024 notMonkeyType. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default EmailBody;
