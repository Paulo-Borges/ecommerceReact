import React from "react";

const Li = (props) => {
  return (
    <div className="">
      <li
        className="text-gray-400 hover:text-gray-400/60 cursor-pointer  border-b-2 border-transparent hover:border-amber-700 transition-all duration-500 pb-8 "
        {...props}
      ></li>
    </div>
  );
};
export default Li;
