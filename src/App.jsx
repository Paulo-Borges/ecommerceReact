import Headers from "../src/components/Headers";
import cart from "/icon-cart.svg";
import { useState } from "react";
import ImageGallery from "./components/Img";
import ImgMobile from "../../ecommerceReact/src/components/ImgMobile";
import MainImage from "../src/components/MainImage";
import Imagens from "../src/components/Imagens";
import Cart from "../src/components/Cart";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

function App() {
  const [incrementar, setIncrementar] = useState(0);
  const [cartOpen, setCartOpen] = useState("");
  const [capital, setCapital] = useState(125.0);

  function handleClick() {
    setIncrementar(incrementar + 1);
    return incrementar;
  }

  function somar() {
    setCapital((prevCapital) => prevCapital + 125.0);
  }

  function menos() {
    setCapital((prevCapital) => {
      if (prevCapital > 125.0) {
        return prevCapital - 125.0;
      }
      return capital;
    });
  }

  const toggleCart = (event) => {
    event.preventDefault();
    setCartOpen(!cartOpen);
  };

  function click() {
    setIncrementar((prevState) => {
      if (prevState > 0) {
        return prevState - 1;
      }
      return incrementar;
    });
  }

  return (
    <div className="bg-[hsl(0, 0%, 100%)] w-screen max-[640px]:w-[620px] h-screen">
      <Headers onClick={toggleCart} className="" />
      <section className="flex max-[640px]:flex-col w-[1350px]  max-[640px]:w-[620px] justify-around m-auto max-[640px]:mx-0 pt-15 max-[640px]:pt-5 ">
        <div className="max-[1114px]:w-[350px] ">
          <div className="min-[640px]:hidden">
            <ImgMobile />
          </div>
          <MainImage />
          <div className=" w-[450px]">
            <ImageGallery />
          </div>
        </div>
        <main className="w-[600px]  mt-15 ">
          <p className="max-[640px]:pl-5 max-[640px]:text-gray-400">
            SNEAKER COMPANY
          </p>
          <h1 className="text-5xl max-[640px]:text-4xl font-medium max-[640px]:font-bold max-[640px]:pl-5 mb-7 max-[640px]:mb-5 mt-5 ">
            Fall Limited Edition Sneakers
          </h1>
          <p className="w-[600px] mb-7 max-[640px]:pl-5">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they´ll whithstand everything
            the weather can offer.
          </p>
          <div className="max-[640px]:flex max-[640px]:justify-between max-[640px]:w-[600px] max-[640px]:pl-5">
            <div className="flex items-center gap-4 mb-4">
              <span className="font-bold text-3xl">$ 125.00</span>
              <span className="bg-black text-white text-sm py-1 px-2 rounded-md">
                50%
              </span>
            </div>
            <div className="font-bold line-through mb-7">
              $ {capital.toFixed(2)}
            </div>
          </div>
          <div className="flex gap-3 max-[640px]:flex-col max-[640px]:pl-5">
            <div className="flex gap-4 max-[640px]:gap-58 bg-gray-200 w-[100px] max-[640px]:w-full rounded-md justify-center items-center cursor-pointer">
              <button
                onClick={click}
                className="text-orange-400 font-bold cursor-pointer"
              >
                <FaMinus onClick={menos} />
              </button>
              <button className="font-bold mt-1 cursor-pointer">
                {incrementar}
              </button>
              <button
                onClick={handleClick}
                className="text-orange-400 font-bold cursor-pointer"
              >
                <FaPlus onClick={somar} />
              </button>
            </div>
            <button
              className="flex gap-3 bg-amber-500 py-3 max-[640px]:py-1 max-[640px]:mb-15 justify-center w-[300px] max-[640px]:w-full rounded-md cursor-pointer"
              onClick={toggleCart}
            >
              <Imagens src={cart} className="w-[15px] h-[15px] mt-0.5" />
              <p className="text-black font-bold cursor-pointer">Add to cart</p>
            </button>
          </div>
        </main>
      </section>
      <Cart className={cartOpen ? "block" : "hidden"} />
    </div>
  );
}

export default App;
