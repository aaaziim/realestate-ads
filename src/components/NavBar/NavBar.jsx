import React, { useContext } from 'react';
import { Navigate, NavLink } from 'react-router-dom';
import { AuthContext } from "../../providers/AuthProvider";

const NavBar = () => {


	const {user, logOut} = useContext(AuthContext)

	const handleLogOut = ()=>{
		logOut()
		.then(()=>  Navigate('/'))
		 .catch()
		   }

    return (
        <div>
            <header className="p-4 dark:bg-gray-100 dark:text-gray-800">
	<div className="container flex justify-between h-16 mx-auto">
		<NavLink to="/" aria-label="Back to homepage" className="flex items-center p-2">
			AAA Estate
		</NavLink>
		<ul className="items-stretch hidden space-x-3 md:flex">
			<li className="flex">
				<NavLink to="/"  className={({ isActive }) =>
                            `flex items-center px-4 -mb-1 border-b-2 dark:border- ${isActive ? "border-blue-500 text-blue-500" : "border-transparent"}`
                        }>Home</NavLink>
			</li>
			<li className="flex">
				<NavLink to="/allestates"  className={({ isActive }) =>
                            `flex items-center px-4 -mb-1 border-b-2 dark:border- ${isActive ? "border-blue-500 text-blue-500" : "border-transparent"}`
                        }>All Estates</NavLink>
			</li>
			{user && <li className="flex">
				<NavLink to="/profile"  className={({ isActive }) =>
                            `flex items-center px-4 -mb-1 border-b-2 dark:border- ${isActive ? "border-blue-500 text-blue-500" : "border-transparent"}`
                        }>Profile</NavLink>
			</li> }

			{user && <li className="flex">
				<NavLink to="/updateprofile"  className={({ isActive }) =>
                            `flex items-center px-4 -mb-1 border-b-2 dark:border- ${isActive ? "border-blue-500 text-blue-500" : "border-transparent"}`
                        }>Update Profile</NavLink>
			</li> }
			
			{user? <li className="flex">
				<button onClick={handleLogOut}  >Logout</button>
			</li> :<>
			<li className="flex">
				<NavLink to="/login"  className={({ isActive }) =>
                            `flex items-center px-4 -mb-1 border-b-2 dark:border- ${isActive ? "border-blue-500 text-blue-500" : "border-transparent"}`
                        }>Sign In</NavLink>
			</li>
			<li className="flex">
				<NavLink to="/register"  className={({ isActive }) =>
                            `flex items-center px-4 -mb-1 border-b-2 dark:border- ${isActive ? "border-blue-500 text-blue-500" : "border-transparent"}`
                        }>Sign Up</NavLink>
			</li>
			
			</> }
			
			
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