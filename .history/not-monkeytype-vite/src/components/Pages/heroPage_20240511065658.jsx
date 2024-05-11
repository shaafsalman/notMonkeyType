import React from 'react';
import Hero_front from '../Spline/hero';
import Footer from '../Page-Parts/Footer';
import { Link } from 'react-router-dom';
import { FaGamepad, FaTrophy } from 'react-icons/fa';

function HeroPage() {
  return (
    <div>
      <div className="fixed flex justify-center w-full top-0 z-10">
        <div className="w-2/4 mt-60 bg-transparent backdrop-filter text-white p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link
                to="/Login"
                className="text-white block px-3 py-2 rounded-md text-base font-medium bg-gradient-to-r from-purple-500 to-indigo-600 mr-4 transition duration-300 ease-in-out hover:opacity-80"
              >
                <FaGamepad className="inline-block mr-1" />
                Login
              </Link>
              <Link
                to="/Register"
                className="text-white block px-3 py-2 rounded-md text-base font-medium bg-gradient-to-r from-purple-500 to-indigo-600 transition duration-300 ease-in-out hover:opacity-80"
              >
                <FaTrophy className="inline-block mr-1" />
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Hero_front />
      <Footer />
    </div>
  );
}

export default HeroPage;
