import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-[#1b2a41]">
      <header className="container">
        <div className="flex justify-between items-center py-4  text-white">
          <h1 className="font-bold text-4xl">
            <Link to="/">ShortLy</Link>
          </h1>

          <div className="space-x-3 font-bold text-xl">
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
