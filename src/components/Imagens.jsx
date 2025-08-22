import React from "react";

const Imagens = (props) => {
  return (
    <div>
      <img
        className="w-[15px] hover:w-[20px] h-[15px] hover:h-[20px] mt-1 cursor-pointer"
        {...props}
      />
    </div>
  );
};
export default Imagens;
