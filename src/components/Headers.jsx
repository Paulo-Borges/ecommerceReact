import React from "react";

const Headers = () => {
  return (
    <div className="flex justify-between w-[1440px] items-center p-4">
      <div className="flex items-center space-x-4">
        <h1>sneakers</h1>
        <ul className="flex space-x-4">
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <ul>
        <li>3</li>
        <li>4</li>
      </ul>
    </div>
  );
};

export default Headers;
