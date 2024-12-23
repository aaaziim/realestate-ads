import { FaUserAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
      <div className="navbar justify-between  shadow-xl">
        <div >
  <Link className="btn btn-ghost text-xl" to="/">AAA Estate</Link>
        </div>
        <div>
        <div className="form-control relative">
        <form className="max-w-lg mx-auto">
    <div className="flex">
        
        <div className="relative w-full">
            <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-full border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search Anything You Need" required />
            <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-full border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <FaSearch></FaSearch> 
            </button>
        </div>
    </div>
</form>
  </div>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
    <div tabIndex={0} role="button">
      <div className="">
      <FaUserAlt className="bg-amber-100 h-10 w-10 p-2 rounded-full text-black" />
      </div>
    </div>
    <ul
      tabIndex={0}
      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
      <li>
        <a className="justify-between">
          Profile
          <span className="badge">New</span>
        </a>
      </li>
      <li><a>Settings</a></li>
      <li><a>Logout</a></li>
    </ul>
          </div>
        </div>
</div>
  );
};

export default NavBar;