import React from "react";
import { Link } from "react-router-dom";
import "../Form.css";

const Intro = () => {
  return (
    <div className="form m-auto">
      <div className="p-8 w-full text-center relative form-bg grid">
        <h1 className="text-3xl text-white text-center pb-4">
          Welcome to <span className="text-blue-200">Bright Flash</span>
        </h1>
        <Link to="/login" className="grid">
          <button className="mt-2 bg-gradient-to-r from-red-400 to-red-600 text-white py-2 outline-none w-100 rounded-full text-lg">
            Login
          </button>
        </Link>
        <Link to="/signup" className="grid">
          <button className="mt-2 bg-gradient-to-r from-red-400 to-red-600 text-white py-2 outline-none w-100 rounded-full text-lg">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Intro;
