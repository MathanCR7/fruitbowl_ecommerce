import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/authActions";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <nav className="bg-gray-900 p-4 fixed top-0 w-full flex justify-between">
      <Link to="/dashboard" className="text-white text-lg font-bold">
        Dashboard
      </Link>
      <button onClick={() => dispatch(logout())} className="text-red-400">
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
