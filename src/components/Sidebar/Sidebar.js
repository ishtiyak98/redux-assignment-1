import React from "react";
import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="col-span-2 bg-blue-600 text-white h-[calc(100vh-25px)] p-5 rounded-lg">
      <ul className="flex gap-3  flex-col h-full">
        <li className="text-xl font-medium">Admin Dashboard</li>
        <hr />
        <li className="mt-5 hover:text-slate-300">
          <Link to="/dashboard">All Blogs</Link>
        </li>
        <li className="hover:text-slate-300">
          <Link to="add-Blog"> Add a blog </Link>
        </li>
        <li className="mt-auto hover:text-slate-300">
          <Link to="/">← Back to Home </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
