import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-primary text-white lg:px-20">
        <div className="navbar-start">
          <Link to={"/"} className="btn btn-ghost normal-case text-xl">Tech-Blog</Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <li>
                <Link to={"/"}>Home</Link>
              </li>

              <li>
                <a>Dashboard</a>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-end">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary  rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>

              <li>
                <a>Item 3ascas</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
