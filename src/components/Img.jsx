import React, { useState } from "react";
import Imagem1 from "/image-product-1.jpg";
import Imagem2 from "/image-product-2.jpg"
import Imagem3 from "/image-product-3.jpg"
import Imagem4 from "/image-product-4.jpg"

const ImageGallery = () => {
  const [selectedImageId, setSelectedImageId] = useState(null);

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

  const handleImageClick = (imageId) => {
    // Se a imagem já estiver selecionada, deseleciona. Caso contrário, seleciona.
    setSelectedImageId(selectedImageId === imageId ? null : imageId);
  };

  return (
    <div className="flex justify-center gap-4 p-4 max-[640px]:hidden max-[1114px]:w-[350px] ">
      {images.map((image) => (
        <img
          key={image.id}
          src={image.src}
          alt={image.alt}
          onClick={() => handleImageClick(image.id)}
          className={`
            w-25 h-25 cursor-pointer rounded-lg border-4 transition-all duration-300 ease-in-out
            hover:scale-105 hover:opacity-90
            ${
              // se for
              selectedImageId === image.id
                ? //   faz isso
                  "scale-110 border-amber-700 opacity-30 shadow-lg"
                : // se nao faz isso
                  "border-transparent opacity-80"
            }
          `}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
