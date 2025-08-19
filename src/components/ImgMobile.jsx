import { useState } from "react";
import React from "react";
import Button from "./Button";

const ImgMobile = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  const handleImageClick = () => {
    // Calcula o índice da próxima imagem.
    // Se for a última imagem, volta para a primeira (índice 0).
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  };

  return (
    <div className="w-[375px]">
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
