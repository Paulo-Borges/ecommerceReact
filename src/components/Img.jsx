import React, { useState } from "react";

const ImageGallery = () => {
  const [selectedImageId, setSelectedImageId] = useState(null);

  const images = [
    {
      id: 1,
      src: "../../images/image-product-1-thumbnail.jpg",
      alt: "Imagem 1",
    },
    {
      id: 2,
      src: "../../images/image-product-2-thumbnail.jpg",
      alt: "Imagem 2",
    },
    {
      id: 3,
      src: "../../images/image-product-3-thumbnail.jpg",
      alt: "Imagem 3",
    },
    {
      id: 4,
      src: "../../images/image-product-4-thumbnail.jpg",
    },
  ];

  const handleImageClick = (imageId) => {
    // Se a imagem já estiver selecionada, deseleciona. Caso contrário, seleciona.
    setSelectedImageId(selectedImageId === imageId ? null : imageId);
  };

  return (
    <div className="flex justify-center gap-4 p-4 max-[375px]:hidden max-[1114px]:w-[350px] ">
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
