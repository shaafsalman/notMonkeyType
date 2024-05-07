import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MessageCard from './mesgCard';

const Profile = () => {
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [deleted, setDeleted] = useState(false);
  const [message, setMessage] = useState({}); // State to manage success/failure message
  const [isMessageVisible, setIsMessageVisible] = useState(false); // State to manage message visibility

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/profile', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, 
          },
        });
        setEmail(response.data.email);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []); 

  // Function to handle changing the password
  const handleChangePassword = async () => {
    try {
      await axios.post('http://localhost:8080/api/profile/changePassword', {
        currentPassword,
        newPassword,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, 
        },
      });
      // Set success message
      setMessage({ heading: 'Success', message: 'Password changed successfully!' });
      // Show message
      setIsMessageVisible(true);
    } catch (error) {
      // Set failure message
      setMessage({ heading: 'Error', message: 'Failed to change password. Please try again.' });
      // Show message
      setIsMessageVisible(true);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      await axios.post('http://localhost:8080/api/profile/deleteAccount', {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, 
        },
      });
      localStorage.removeItem('token');
      setDeleted(true);
    } catch (error) {
      setMessage({ heading: 'Error', message: 'Failed to delete account. Please try again.' });
      setIsMessageVisible(true);
    }
  };

  const closeMessageCard = () => {
    setIsMessageVisible(false);
  };

  // Automatically close the message after 4 seconds
  useEffect(() => {
    if (isMessageVisible) {
      const timer = setTimeout(() => {
        setIsMessageVisible(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [isMessageVisible]);


  
  return (
    <>
      {deleted ? (
        <div className="flex justify-center items-center h-full">
          <div className="max-w-screen-xl rounded-lg ml- my-20 mr-20 ml-20 overflow-hidden shadow-lg bg-gradient-to-br from-purple-500 to-indigo-600">
            <div className="px-6 py-4">
              <p>Your account has been successfully deleted.</p>
              <p><Link to="/login">Click here to login again.</Link></p>
            </div>
          </div>
        </div>
      ) : (
        <div className="profileMain">
          <div className="flex justify-center items-center h-full">
  <div className="w-full max-w-4xl rounded-lg mx-4 my-20 overflow-hidden shadow-lg bg-gradient-to-br from-purple-500 to-indigo-600">
    <div className="px-6 py-4">
      <div className="min-h-screen sm:px-8 xl:px-12">
        <div className="grid grid-rows-1 sm:grid-cols-2">
        <div className="pt-4">
              <div className="font-bold text-4xl mb-2 text-white">Profile</div>
            </div>
            <hr className="mt-4 mb-8" />
            <p className="py-2 text-xl font-semibold text-white">Email Address</p>
            <div className="flex flex-col items-start">
              <p className="text-white">Your email address is <strong>{email}</strong></p>
            </div>
            <hr className="mt-4 mb-8" />
            <p className="py-2 text-xl font-semibold text-white">Password</p>
            <div className="flex flex-col items-start">
              <label htmlFor="current-password" className="text-sm text-white">Current Password</label>
              <input type="password" id="current-password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} className="w-full border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none mb-4" />
              <label htmlFor="new-password" className="text-sm text-white">New Password</label>
              <input type="password" id="new-password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="w-full border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none mb-4" />
              <button className="rounded-lg bg-indigo-900 px-4 py-2 text-white" onClick={handleChangePassword}>Save Password</button>
            </div>
            <hr className="mt-4 mb-8" />
            <div className="mb-10">
              <p className="py-2 text-xl font-semibold text-white">Delete Account</p>
              <button className="rounded-lg bg-red-900 px-4 py-2 text-white" onClick={handleDeleteAccount}>Delete Account</button>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>

            
          

        </div>
        
      )}
      {isMessageVisible && (
        <MessageCard
          Heading={message.heading}
          Message={message.message}
          onClose={closeMessageCard}
        />
      )}
    </>
  );
};

export default Profile;