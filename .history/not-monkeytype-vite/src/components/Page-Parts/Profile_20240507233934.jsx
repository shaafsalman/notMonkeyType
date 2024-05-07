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
        <div class="profileMain">
  <div class="flex justify-center items-center h-full">
    <div class="w-full max-w-4xl rounded-lg mx-4 my-5 overflow-hidden shadow-lg bg-gradient-to-br from-purple-500 to-indigo-600">
      <div class="px-6 py-4">
        <div class="max-h-screen sm:px-8 xl:px-12">
          <div class="grid grid-rows-2 sm:grid-cols-2">
            <div class="pt-4">
              <div class="font-bold text-4xl mb-2 text-white">Profile</div>
            </div>
            <hr class="mt-4 mb-8 border-0 bg-white" />
            <div>
              <p class="py-2 text-xl font-semibold text-white">Email Address</p>
              <div class="flex flex-col items-start">
                <p class="text-white">Your email address is <strong>{email}</strong></p>
              </div>
            </div>
            <hr class="mt-4 mb-8 border-0 bg-white" />
            <div class="flex flex-col lg:w-max sm:flex-row mt-10">
            
            
              <div class="lg:w-max sm:w-1/2 pr-4">
                <p class="py-2 text-xl font-semibold text-white">Password</p>
                <div class="flex flex-col items-start">
                  <label for="current-password" class="text-sm text-white">Current Password</label>
                  <input type="password" id="current-password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} class="w-full border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none mb-4 rounded-lg" />
                </div>
              </div>
              


              <div class="lg:w-max sm:w-1/2 pl-4">
                <p class="py-2 text-xl font-semibold text-white">&nbsp;</p>
                <div class="flex flex-col items-start">
                  <label for="new-password" class="text-sm text-white">New Password</label>
                  <input type="password" id="new-password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} class="w-full border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none mb-4 rounded-lg " />
                </div>
              </div>
              <button className="h-10 w-40 mt-1 ml-16 rounded-lg bg-indigo-900  text-white " onClick={handleChangePassword}>Save Password</button>

            </div>


            <hr class="mt-10  mb-8 border-0 bg-white" />
            <div class="mb-10 mt-10">
            <p class="py-2 text-xl font-semibold text-white">Delete Account</p>

            <div class="flex flex-col lg:w-max sm:flex-row">
              
              <p class="text-white mb-4">Deleting your account will permanently remove all data associated with it.</p>
              <button class="ml-20 rounded-lg bg-red-900 px-4 py-2 text-white">Delete Account</button>
            </div>

          
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