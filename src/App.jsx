import Headers from "./components/Headers";
import productPrincipal from "../images/image-product-1.jpg";
import product1 from "../images/image-product-1-thumbnail.jpg";
import product2 from "../images/image-product-2-thumbnail.jpg";
import product3 from "../images/image-product-3-thumbnail.jpg";
import product4 from "../images/image-product-4-thumbnail.jpg";
import cart from "../images/icon-cart.svg";
import { useState } from "react";

function App() {
  const [incrementar, setIncrementar] = useState(0);

  function handleClick() {
    setIncrementar(incrementar + 1);
    return incrementar;
  }

  function click() {
    setIncrementar((prevState) => prevState - 1);
    return incrementar;
  }

  return (
    <div className="bg-[hsl(0, 0%, 100%)] w-screen h-screen">
      <Headers />
      <section className="flex w-[1350px] justify-around m-auto pt-15">
        <div>
          <img src={productPrincipal} className="w-[450px] rounded-md" alt="" />
          <ul className="flex w-[450px] space-x-4 mt-4">
            <li>
              <img src={product1} className="rounded-md" alt="" />
            </li>
            <li>
              <img src={product2} className="rounded-md" alt="" />
            </li>
            <li>
              <img src={product3} className="rounded-md" alt="" />
            </li>
            <li>
              <img src={product4} className="rounded-md" alt="" />
            </li>
          </ul>
        </div>
        <main className="w-[600px] mt-15">
          <p>SNEAKER COMPANY</p>
          <h1 className="text-5xl font-medium mb-7 mt-5">
            Fall Limited Edition Sneakers
          </h1>
          <p className="w-[500px] mb-7">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they´ll whithstand everything
            the weather can offer.
          </p>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-bold text-3xl">$125.00</span>
            <span className="bg-black text-white text-sm py-1 px-2 rounded-md">
              50%
            </span>
          </div>
          <div className="font-bold line-through mb-7">$250.00</div>
          <div className="flex gap-3">
            <div className="flex gap-4 bg-gray-200 w-[100px] rounded-md justify-center items-center">
              <button
                onClick={click}
                className="text-orange-400 font-bold cursor-pointer"
              >
                -
              </button>
              <button className="font-bold mt-1 cursor-pointer">
                {incrementar}
              </button>
              <button
                onClick={handleClick}
                className="text-orange-400 font-bold cursor-pointer"
              >
                +
              </button>
            </div>
            <button className="flex gap-3 bg-amber-500 py-3 justify-center w-[300px] rounded-md">
              <img src={cart} className="w-[15px] h-[15px] mt-0.5" alt="" />
              <p className="text-black font-bold cursor-pointer">Add to cart</p>
            </button>
          </div>
        </main>
      </section>
    </div>
  );
}

export default App;
