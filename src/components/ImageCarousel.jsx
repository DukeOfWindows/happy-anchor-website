import React from "react";

export default function ImageCarousel({ images }) {
  const [index, setIndex] = React.useState(0);

  const handlePrev = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setIndex((index + 1) % images.length);
  };

  const currentImage = images[index];
  const objectFitClass = currentImage.fit === 'contain' ? 'object-contain' : 'object-cover';

  return (
    <div className="py-12 px-4 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative overflow-hidden">
          <img
            src={`/images/gallery/${currentImage.src}`}
            alt={`Gallery ${index + 1}`}
            className={`w-full max-h-[600px] rounded-xl shadow-md transition-all duration-500 ease-in-out ${objectFitClass} object-${currentImage.position}`}
          />
          <div className="absolute inset-0 flex items-center justify-between px-4">
            <button
              onClick={handlePrev}
              className="w-10 h-10 bg-white text-red-700 rounded-full shadow hover:bg-gray-200"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 bg-white text-red-700 rounded-full shadow hover:bg-gray-200"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
