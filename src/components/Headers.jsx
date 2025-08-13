import React from "react";
import cart from "../../images/icon-cart.svg";
import avatar from "../../images/image-avatar.png";

const Headers = () => {
  return (
    <header className="flex justify-between w-[1440px] items-center py-8 border-b border-gray-300 m-auto ">
      <nav className="flex items-center space-x-8 ">
        <h1 className="font-bold text-2xl mb-2">sneakers</h1>
        <ul className="flex space-x-4">
          <li className="text-gray-400">Collections</li>
          <li className="text-gray-400">Men</li>
          <li className="text-gray-400">Women</li>
          <li className="text-gray-400">About</li>
          <li className="text-gray-400">Contact</li>
        </ul>
      </nav>
      <ul className="flex space-x-8">
        <li>
          <img src={cart} className="w-[15px] h-[15px] mt-1" alt="" />
        </li>
        <li className="">
          <img src={avatar} className="w-[25px] h-[25px]" alt="" />
        </li>
      </ul>
    </header>
  );
};

export default Headers;
