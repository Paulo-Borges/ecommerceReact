import React from "react";
import Imagens from "../components/Imagens";
import cartImg from "/image-product-1-thumbnail.jpg";
import deleteCart from "/icon-delete.svg";
import { useState, useEffect } from "react";

const Cart = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  function handleDelete() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {},[isOpen])

  return (
    <div className="max-[375px]:w-[365px]">
      {isOpen && (
        <section className="shadow shadow-gray-400" {...props}>
          <div className="bg-white absolute top-20 max-[375px]:top-12 right-50 max-[375px]:right-0 shadow-xl/30 shadow-gray-400 rounded-md p-5">
            <div className="border-b-2 text-gray-300/20">
              <h1 className="mb-5 text-black font-bold">Cart</h1>
            </div>
            <main className="flex justify-around items-center p-5 gap-5">
              <div>
                <Imagens src={cartImg} className="w-12 h-12" />
              </div>
              <div>
                <h2 className="text-gray-400">Fall Limited Edition Sneakers</h2>
                <p className="text-gray-400">
                  $125.00 x 3
                  <span className="font-bold text-black pl-5">$375.00</span>
                </p>
              </div>
              <div className="" onClick={handleDelete}>
                <Imagens src={deleteCart} />
              </div>
            </main>
            <button className="flex bg-amber-500 py-3 max-[375px]:py-1 max-[375px]:mb-15 justify-center w-[300px] max-[375px]:w-full rounded-md cursor-pointer">
              <p className="text-black font-bold cursor-pointer">Checkout</p>
            </button>
          </div>
        </section>
      )}
    </div>
  );
};
export default Cart;
