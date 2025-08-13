import React from "react";
import cart from "../../images/icon-cart.svg";
import avatar from "../../images/image-avatar.png";

const Headers = () => {
  return (
    <header className="flex justify-between w-[1440px] max-[1439px]:w-[1100px] items-center py-5 border-b border-gray-300 m-auto ">
      <nav className="flex items-center space-x-8 ">
        <h1 className="font-bold text-2xl mb-2">sneakers</h1>
        <ul className="flex space-x-4">
          <li className="text-gray-400 hover:text-gray-400/60 cursor-pointer">
            Collections
          </li>
          <li className="text-gray-400 hover:text-gray-400/60 cursor-pointer">
            Men
          </li>
          <li className="text-gray-400 hover:text-gray-400/60 cursor-pointer">
            Women
          </li>
          <li className="text-gray-400 hover:text-gray-400/60 cursor-pointer">
            About
          </li>
          <li className="text-gray-400 hover:text-gray-400/60 cursor-pointer">
            Contact
          </li>
        </ul>
      </nav>
      <ul className="flex space-x-8">
        <li>
          <img
            src={cart}
            className="w-[15px] hover:w-[20px] h-[15px] hover:h-[20px] mt-1 cursor-pointer"
            alt=""
          />
        </li>
        <li className="">
          <img
            src={avatar}
            className="w-[25px] h-[25px] cursor-pointer"
            alt=""
          />
        </li>
      </ul>
    </header>
  );
};

export default Headers;
