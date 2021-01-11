import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed flex bg-gradient-to-r w-screen from-yellow-400 via-red-500 to-pink-500 justify-around items-center p-5 ">
      <h1 className="flex items-center font-semibold font-sans text-2xl text-white">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <h2 className="p-0.5">Analyzer</h2>
      </h1>
      <div className="flex justify-around md:w-1/3 sm:w-1/2 text-white items-center">
        <Link to="/">Home</Link>
        <Link to="/about">Dashboard</Link>
        <Link
          className="border-2 border-blue-100 py-0.5 px-1 border-opacity-50 rounded-sm"
          to="/contact"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
