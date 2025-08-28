import Headers from "../src/components/Headers";
import cart from "../images/icon-cart.svg";
import { useState } from "react";
import ImageGallery from "./components/Img";
import ImgMobile from "../../ecommerceReact/src/components/ImgMobile";
import MainImage from "../src/components/MainImage";
import Imagens from "../src/components/Imagens";
import Cart from "../src/components/Cart";
import { FiPlus } from "react-icons/fi";
import { TfiMinus } from "react-icons/tfi";



function App() {
  const [incrementar, setIncrementar] = useState(0);
  const [cartOpen, setCartOpen] = useState("");
  const [capital, setCapital] = useState(125.00)

  function handleClick() {
    setIncrementar(incrementar + 1);
    return incrementar;
  }


  function somar() {
    setCapital(prevCapital => prevCapital + 125.00)
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
    <div className="bg-[hsl(0, 0%, 100%)] w-screen h-screen">
      <Headers onClick={toggleCart} className="" />
      <section className="flex max-[375px]:flex-col w-[1350px] max-[375px]:w-[375px] justify-around m-auto pt-15 max-[375px]:pt-5 ">
        <div>
          <div className="min-[375px]:hidden">
            <ImgMobile />
          </div>
          <MainImage />
          <div className=" w-[450px]">
            <ImageGallery />
          </div>
        </div>
        <main className="w-[600px] max-[375px]:w-[340px] mt-15 max-[375px]:mt-5">
          <p className="max-[375px]:pl-5 max-[375px]:text-gray-400">
            SNEAKER COMPANY
          </p>
          <h1 className="text-5xl max-[375px]:text-3xl font-medium max-[375px]:font-bold max-[375px]:pl-5 mb-7 max-[375px]:mb-5 mt-5 ">
            Fall Limited Edition Sneakers
          </h1>
          <p className="w-[500px] max-[375px]:w-[340px] mb-7 max-[375px]:mb-5 max-[375px]:pl-5 max-[375px]:text-gray-400 max-[375px]:text-sm">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they´ll whithstand everything
            the weather can offer.
          </p>
          <div className="max-[375px]:flex max-[375px]:justify-between max-[375px]:w-[340px] max-[375px]:pl-5">
            <div className="flex items-center gap-4 mb-4">
              <span className="font-bold text-3xl">$ 150.00</span>
              <span className="bg-black text-white text-sm py-1 px-2 rounded-md">
                50%
              </span>
            </div>
            <div className="font-bold line-through mb-7">$ {capital.toFixed(2)}</div>
          </div>
          <div className="flex gap-3 max-[375px]:flex-col max-[375px]:pl-5">
            <div className="flex gap-4 max-[375px]:gap-28 bg-gray-200 w-[100px] max-[375px]:w-full rounded-md justify-center items-center cursor-pointer">
              <button
                onClick={click}
                className="text-orange-400 font-bold cursor-pointer"
              >
                <TfiMinus />
              </button>
              <button className="font-bold mt-1 cursor-pointer">
                {incrementar}
              </button>
              <button
                onClick={handleClick}
                className="text-orange-400 font-bold cursor-pointer"
              >
                <FiPlus  onClick={somar} />
                
              </button>
            </div>
            <button
              className="flex gap-3 bg-amber-500 py-3 max-[375px]:py-1 max-[375px]:mb-15 justify-center w-[300px] max-[375px]:w-full rounded-md cursor-pointer"
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
