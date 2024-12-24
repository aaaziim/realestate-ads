import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Navigate, useNavigate } from 'react-router-dom';

const UpdateProfile = () => {

    const {updateUserProfile} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleProfileUpdate =(e) =>{
        e.preventDefault()
        const name = e.target.name.value; 
        const photoURL = e.target.photoURL.value; 
        updateUserProfile(name,photoURL)
        .then(()=> {navigate('/profile');})
    }

    return (
        <div className='flex flex-col justify-center items-center'>
          <div className="w-full  bg-white rounded-lg  shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white bg-green-500 p-2 rounded-lg text-center">
                                Update Profile
                            </h1>
                            <form onSubmit={handleProfileUpdate} 
                            className="space-y-4  md:space-y-6"    >
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                    <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                </div>
                                <div>
                                    <label htmlFor="photoURL" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo URL</label>
                                    <input type="text" name="photoURL" id="photoURL" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="namecompany.com/img" required="" />
                                </div>
                               
                             
                                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-green-500 p-2    ">Update Profile</button>
                                
                            </form>
                          
                        </div>
                    </div>
        </div>
    );
};

export default UpdateProfile;