import React from "react";

const Imagens = (props) => {
  return (
    <div>
      <img
        className="w-[15px] h-[15px]  mt-1 cursor-pointer hover:h-[20px]"
        {...props}
      />
    </div>
  );
};
export default Imagens;
