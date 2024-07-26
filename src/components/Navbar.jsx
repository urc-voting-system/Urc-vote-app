import React, { useState } from "react";
import { logo } from "../assets";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  const MobileView = () => {
    setIsMobile(!isMobile);
  };

  return (
    <div className=" w-full p-5 md:px-20 bg-gray-200 bg-opacity-75 backdrop-blur-xl ">
      <div className="flex justify-between items-center">
        <Link to={"/"}>
          <div className="flex items-center flex-col md:flex-row font-bold text-primary">
            <img src={logo} alt="Logo" className="h-8" />
            <h1>VoteMe</h1>
          </div>
        </Link>
        <div className="hidden md:flex gap-5 ">
          {/* <ul className="flex gap-5">
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul> */}
        </div>
        <div className="md:hidden">
          <button
            onClick={MobileView}
            className="text-2xl font-bold duration-200 ease-out"
          ></button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
