import React from "react";
import Imagens from "./imagens";
import cartImg from "../../images/image-product-1-thumbnail.jpg";
import deleteCart from "../../images/icon-delete.svg";

const Cart = (props) => {
  return (
    <section className="shadow shadow-gray-400" {...props}>
      <div className="border-b-2 text-gray-500">
        <h1>Cart</h1>
      </div>
      <main className="flex justify-around items-center">
        <div>
          <Imagens src={cartImg} className="w-12 h-12" />
        </div>
        <div>
          <h2>Fall Limited Edition Sneakers</h2>
          <p>
            $125.00 x 3 <span>$375.00</span>
          </p>
        </div>
        <div>
          <Imagens src={deleteCart} />
        </div>
      </main>
      <button className="flex bg-amber-500 py-3 max-[375px]:py-1 max-[375px]:mb-15 justify-center w-[300px] max-[375px]:w-full rounded-md cursor-pointer">
        <p className="text-black font-bold cursor-pointer">Checkout</p>
      </button>
    </section>
  );
};
export default Cart;
