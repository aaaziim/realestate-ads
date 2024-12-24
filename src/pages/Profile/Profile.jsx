import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);

  if (!user) {
    return <p>No user information available. Please log in.</p>;
  }
    return (
        <div className="max-w-sm mx-auto bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center py-10">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={user.photoURL || 'https://via.placeholder.com/150'}
            alt={user.displayName || 'User'}
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {user.displayName || 'Anonymous User'}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {user.email || 'No email available'}
          </span>
        </div>
      </div> 
    );
};

export default Profile;