import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <header className="p-4 dark:bg-gray-100 dark:text-gray-800">
	<div className="container flex justify-between h-16 mx-auto">
		<NavLink to="/" aria-label="Back to homepage" className="flex items-center p-2">
			AAA Estate
		</NavLink>
		<ul className="items-stretch hidden space-x-3 md:flex">
			<li className="flex">
				<NavLink to="/" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Home</NavLink>
			</li>
			<li className="flex">
				<NavLink to="/allestates" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">All Estates</NavLink>
			</li>
			<li className="flex">
				<NavLink to="/profile" className="flex items-center px-4 -mb-1 border-b-2 dark:border- dark:text-violet-600 dark:border-violet-600">Profile</NavLink>
			</li>
			<li className="flex">
				<NavLink to="/updateprofile" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Update Profile</NavLink>
			</li>
			<li className="flex">
				<NavLink to="/login" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Sign In</NavLink>
			</li>
			<li className="flex">
				<NavLink to="/register" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Sign Up</NavLink>
			</li>
		</ul>
		<button className="flex justify-end p-4 md:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>
        </div>
    );
};

export default NavBar;