import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [deleted, setDeleted] = useState(false);
  
  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/profile', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, 
          },
        });
        console.log('Response:', response); // Add this line
        setEmail(response.data.email);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
  
    fetchUserData();
  }, []); 
  

  const handleChangePassword = async () => {
    try {
      await axios.post('/api/changePassword', {
        currentPassword,
        newPassword,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, 
        },
      });
      alert('Password changed successfully!');
    } catch (error) {
      console.error('Error changing password:', error);
      alert('Failed to change password. Please try again.');
    }
  };

  const handleDeleteAccount = async () => {
    try {
      await axios.post('/api/deleteAccount', {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, 
        },
      });
      localStorage.removeItem('token');
      setDeleted(true);
    } catch (error) {
      console.error('Error deleting account:', error);
      alert('Failed to delete account. Please try again.');
    }
  };

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
        <div className="flex justify-center items-center h-full">
          <div className="max-w-screen-xl rounded-lg ml- my-20 mr-20 ml-20 overflow-hidden shadow-lg bg-gradient-to-br from-purple-500 to-indigo-600">
            <div className="px-6 py-4">
              <div className="mx-4 min-h-screen max-w-screen-xl sm:mx-8 xl:mx-auto">
                <div className="grid grid-cols-8 pt-3 sm:grid-cols-10">
                  <div className="col-span-12 overflow-hidden rounded-xl sm:bg-gray-50 sm:px-8 sm:shadow">
                    <div className="pt-4">
                      <div className="font-bold text-4xl mb-2">Profile</div>
                    </div>
                    <hr className="mt-4 mb-8" />
                    <p className="py-2 text-xl font-semibold">Email Address</p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-gray-600">Your email address is <strong>{email}</strong></p>
                    </div>
                    <hr className="mt-4 mb-8" />
                    <p className="py-2 text-xl font-semibold">Password</p>
                    <div className="flex items-center">
                      <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-3">
                        <label htmlFor="current-password">
                          <span className="text-sm text-gray-500">Current Password</span>
                          <input type="password" id="current-password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" />
                        </label>
                        <label htmlFor="new-password">
                          <span className="text-sm text-gray-500">New Password</span>
                          <input type="password" id="new-password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" />
                        </label>
                      </div>
                      <button className="mt-2 rounded-lg bg-indigo-900 px-4 py-2 text-white" onClick={handleChangePassword}>Save Password</button>
                    </div>
                    <hr className="mt-4 mb-8" />
                    <div className="mb-10">
                      <p className="py-2 text-xl font-semibold">Delete Account</p>
                      <button className="mt-2 rounded-lg bg-red-900 px-4 py-2 text-white" onClick={handleDeleteAccount}>Delete Account</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      )}
    </>
  );
};

export default Profile;
