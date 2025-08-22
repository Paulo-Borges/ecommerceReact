import React from "react";

const Li = (props) => {
  return (
    <div>
      <li
        className="text-gray-400 hover:text-gray-400/60 cursor-pointer"
        {...props}
      ></li>
    </div>
  );
};
export default Li;
