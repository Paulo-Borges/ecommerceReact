import React from "react";
import { useState } from "react";
import Imagem1 from "/image-product-1.jpg";
import Imagem2 from "/image-product-2.jpg"
import Imagem3 from "/image-product-3.jpg"
import Imagem4 from "/image-product-4.jpg"


const MainImage = () => {
  const [replace, setReplace] = useState(0);

  const images = [
    {
      id: 1,
      src: Imagem1,
      alt: "Imagem 1",
    },
    {
      id: 2,
      src: Imagem2,
      alt: "Imagem 2",
    },
    {
      id: 3,
      src: Imagem3,
      alt: "Imagem 3",
    },
    {
      id: 4,
      src: Imagem4,
      alt: "Imagem 4",
    },
  ];

  function nextImgClick() {
    const nextClick = (replace + 1) % images.length;
    setReplace(nextClick);
  }

  return (
    <div>
      <img
        key={images[replace].id}
        src={images[replace].src}
        alt={images[replace].alt}
        onClick={nextImgClick}
        className="w-[450px] max-[375px]:hidden rounded-md cursor-pointer "
      />
    </div>
  );
};

export default MainImage;
