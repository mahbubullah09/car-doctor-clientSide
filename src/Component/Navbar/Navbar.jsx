import { Link, NavLink } from "react-router-dom";
import { AiOutlineSearch, AiOutlineShopping } from "react-icons/ai";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  const navLink = (
    <div className=" gap-4 flex flex-col lg:flex-row ">
      <ul className="py-1 relative group ">
      
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? " text-black hover:text-[#FF3811]  " : "text-black hover:text-[#FF3811]  ")}
        >
            
        
        
          Home
          <span className="absolute -bottom-0 left-1/2 w-0 h-0.5 bg-[#FF3811] group-hover:w-1/2 group-hover:transition-all"></span>
          <span className="absolute -bottom-0 right-1/2 w-0 h-0.5 bg-[#FF3811] group-hover:w-1/2 group-hover:transition-all"></span>
        </NavLink>
      </ul>

      <ul className="py-1 relative group">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-black hover:text-[#FF3811] " : " text-black hover:text-[#FF3811]  "
          }
        >
          {" "}
          About
          <span className="absolute -bottom-0 left-1/2 w-0 h-0.5 bg-[#FF3811] group-hover:w-1/2 group-hover:transition-all"></span>
          <span className="absolute -bottom-0 right-1/2 w-0 h-0.5 bg-[#FF3811] group-hover:w-1/2 group-hover:transition-all"></span>
        </NavLink>
      </ul>

      <ul className="py-1 relative group">
        <NavLink
          to="/services"
          className={({ isActive }) => (isActive ? " text-black hover:text-[#FF3811]   " : "text-black hover:text-[#FF3811] ")}
        >
          {" "}
          Services
          <span className="absolute -bottom-0 left-1/2 w-0 h-0.5 bg-[#FF3811] group-hover:w-1/2 group-hover:transition-all"></span>
          <span className="absolute -bottom-0 right-1/2 w-0 h-0.5 bg-[#FF3811] group-hover:w-1/2 group-hover:transition-all"></span>
        </NavLink>
      </ul>
      <ul className="py-1 relative group">
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? " text-black hover:text-[#FF3811]   " : "text-black hover:text-[#FF3811] ")}
        >
          {" "}
          Blog
          <span className="absolute -bottom-0 left-1/2 w-0 h-0.5 bg-[#FF3811] group-hover:w-1/2 group-hover:transition-all"></span>
          <span className="absolute -bottom-0 right-1/2 w-0 h-0.5 bg-[#FF3811] group-hover:w-1/2 group-hover:transition-all"></span>
        </NavLink>
      </ul>
      <ul className="py-1 relative group">
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? " text-black hover:text-[#FF3811]  " : "text-black hover:text-[#FF3811] ")}
        >
          {" "}
          Contact
          <span className="absolute -bottom-0 left-1/2 w-0 h-0.5 bg-[#FF3811] group-hover:w-1/2 group-hover:transition-all"></span>
          <span className="absolute -bottom-0 right-1/2 w-0 h-0.5 bg-[#FF3811] group-hover:w-1/2 group-hover:transition-all"></span>
        </NavLink>
      </ul>
    </div>
  );

  return (
    <div>
      <div className="navbar Montserrat font-semibold  max-w-6xl mx-auto ">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
            >
              {navLink}
            </ul>
          </div>
          <img className="w-16" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex  ">
          <ul className="menu menu-horizontal px-4 ">{navLink}</ul>
        </div>
        <div className="navbar-end"></div>
        <div>
        <div className="py-1 flex gap-2  text-xl mx-2 font-semibold">
            <AiOutlineShopping/>
            <AiOutlineSearch/>
            </div>
        <button className=" py-2 px-5 font-semibold rounded-md  border border-[#FF3811] text-[#FF3811] hover:bg-[#FF3811] hover:text-white">
        Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
