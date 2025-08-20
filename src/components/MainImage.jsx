import React from "react";
import { useState } from "react";

const MainImage = () => {
  const [replace, setReplace] = useState(0);

  const images = [
    {
      id: 1,
      src: "../../images/image-product-1.jpg",
      alt: "Imagem 1",
    },
    {
      id: 2,
      src: "../../images/image-product-2.jpg",
      alt: "Imagem 2",
    },
    {
      id: 3,
      src: "../../images/image-product-3.jpg",
      alt: "Imagem 3",
    },
    {
      id: 4,
      src: "../../images/image-product-4.jpg",
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
        className="w-[450px] max-[375px]:hidden rounded-md cursor-pointer"
      />
    </div>
  );
};

export default MainImage;
