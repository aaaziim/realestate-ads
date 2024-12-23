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
    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    <FaSearch className="absolute right-3 top-4 text-cyan-200 " />
  </div>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
    <div tabIndex={0} role="button">
      <div className="">
      <FaUserAlt className="bg-white h-10 w-10 p-2 rounded-full text-black" />
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