import { useState } from "react";
import React from "react";
import Button from "./Button";
import Imagem1 from "/image-product-1.jpg";
import Imagem2 from "/image-product-2.jpg"
import Imagem3 from "/image-product-3.jpg"    
import Imagem4 from "/image-product-4.jpg"    

const ImgMobile = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  const handleImageClick = () => {
    // Calcula o índice da próxima imagem.
    // Se for a última imagem, volta para a primeira (índice 0).
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  };

  return (
    <div className="w-[630px]">
      <img
        key={images[currentImageIndex].id}
        src={images[currentImageIndex].src}
        alt={images[currentImageIndex].alt}
        className=" cursor-pointer rounded-lg"
      />
      <Button onClick={handleImageClick} />
    </div>
  );
};

export default ImgMobile;
