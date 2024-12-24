import { useContext, useState } from "react";
import { NavLink } from "react-router-dom"; 
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
    const [terms, setTerms] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    const {registerUser, updateUserProfile} = useContext(AuthContext)

    const handleSignUp = (e) =>{
        e.preventDefault()
        const name = e.target.name.value; 
        const photoURL = e.target.photoURL.value; 
        const email = e.target.email.value; 
        const password = e.target.password.value; 
        const confirmPassword = e.target.confirmPassword.value;
        const acceptTerms = e.target.terms.checked;
        console.log(name, email, password, confirmPassword, acceptTerms)

        registerUser(email,password)
        .then(res => {
            updateUserProfile(name,photoURL)
        })
        .then( )
        e.target.reset()
    }
     
    return (
        <div>
            

            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white bg-green-500 p-2 rounded-lg text-center">
                                Create an account
                            </h1>
                            <form onSubmit={handleSignUp} className="space-y-4 md:space-y-6"    >
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                    <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                </div>
                                <div>
                                    <label htmlFor="photoURL" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo URL</label>
                                    <input type="text" name="photoURL" id="photoURL" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="namecompany.com/img" required="" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                </div>
                                <div className="relative">
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type={showPassword? "text":"password"} name="password" id="password" placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />{showPassword?<FaRegEyeSlash onClick={() => setShowPassword(!showPassword)} className="absolute top-10 right-2"  />:<FaRegEye onClick={() => setShowPassword(!showPassword)} className="absolute top-10 right-2" />}
                                         
                                </div>
                                <div className="relative">
                                    <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                    <input type={showPassword2? "text":"password"} name="confirmPassword" id="confirmPassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />{showPassword2?<FaRegEyeSlash onClick={() => setShowPassword2(!showPassword2)} className="absolute top-10 right-2"  />:<FaRegEye onClick={() => setShowPassword2(!showPassword2)} className="absolute top-10 right-2" />}
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input onChange={() => setTerms(!terms)} id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500 text-green-500 " href="#">Terms and Conditions</a></label>
                                    </div>
                                </div>
                                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-green-500 p-2    ">Create an account</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400 ">
                                    Already have an account? <NavLink to="/signin" className="font-medium text-primary-600 hover:underline dark:text-primary-500 bg-green-500 p-2 rounded-lg text-center text-white">Login here</NavLink>
                                </p>
                            </form>
                            { <p className="text-red-500"> </p>}
                          
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignUp;