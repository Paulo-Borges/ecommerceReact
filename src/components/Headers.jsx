import React from "react";
import cart from "../../images/icon-cart.svg";
import avatar from "../../images/image-avatar.png";
import Li from "../components/Li";
import Imagens from "../components/Imagens";
import { useState } from "react";

const Headers = (props) => {
  const [cartOpen, setCartOpen] = useState("");

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <header className="flex justify-between w-[1440px] max-[1439px]:w-[1100px]  max-[375px]:w-[330px] items-center pt-4 max-[375px]:py-0 border-b max-[375px]:border-none border-gray-300 m-auto max-[375px]:mx-3 ">
      <nav className="flex items-center justify-center space-x-8 ">
        <h1 className="font-bold text-2xl mb-8 max-[375px]:mb-0">sneakers</h1>
        <ul className="flex gap-5 pt-2 max-[375px]:hidden">
          <Li>Collections</Li>
          <Li>Men</Li>
          <Li>Women</Li>
          <Li>About</Li>
          <Li>Contact</Li>
        </ul>
      </nav>
      <ul className="flex space-x-8 min-[375px]:mb-8 max-[375px]:mt-3">
        <li>
          <Imagens src={cart} onClick={toggleCart} {...props} />
        </li>
        <li className="bg-transparent hover:bg-amber-400 p-0 rounded-3xl">
          <Imagens src={avatar} className="w-[25px] h-[25px] cursor-pointer" />
        </li>
      </ul>
    </header>
  );
};

export default Headers;
