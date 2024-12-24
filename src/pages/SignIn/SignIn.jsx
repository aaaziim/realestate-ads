import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {  useContext, useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";



const SignIn = () => {

    const {userLogin} = useContext(AuthContext)

    const location = useLocation()
    console.log(location)

    const navigate = useNavigate()
    
    const [showPassword, setShowPassword] = useState(false);

    const handleSignIn = (e) =>{
        e.preventDefault() 
        const email = e.target.email.value; 
        const password = e.target.password.value; 
        userLogin( email, password )
        .then(res=>{
            navigate(location?.state ? location.state : '/')
        })
        .catch(error => console.log(error))
    }


    return (
        <div>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white bg-green-500 p-2 rounded-lg text-center">
                                Sign In To Your Account
                            </h1>
                            <form onSubmit={handleSignIn}  className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="email"
                                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input 
                                    type="email" 
                                    name="email"
                                    
                                    id="email" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                </div>
                                <div className="relative">
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type={showPassword? "text":"password"} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />{showPassword?<FaRegEyeSlash onClick={() => setShowPassword(!showPassword)} className="absolute top-10 right-2"  />:<FaRegEye onClick={() => setShowPassword(!showPassword)} className="absolute top-10 right-2" />}
                                </div>
                                <div>


                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        </div>
                                    <div className="ml-3 text-sm">
                                        <a  className="font-medium text-primary-600 hover:underline dark:text-primary-500 text-green-500 cursor-pointer" >Forget Password?</a> 
                                    </div>
                                </div>
                                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-green-500 p-2    ">Sign In</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400 ">
                                    Not Registered? <NavLink to="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500 bg-green-500 p-2 rounded-lg text-center text-white">Register Here</NavLink>
                                </p>
                            </form>
                            {   <p className="text-red-500"></p>}
                           
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignIn;