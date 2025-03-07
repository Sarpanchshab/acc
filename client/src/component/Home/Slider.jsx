import { useState, useEffect } from "react";

const images = [
  "/img/slider/1.jpg",
  "/img/slider/2.png",
  "/img/slider/3.png",
];

export default function SimpleCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(nextSlide, 3000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isHovered]);

  return (
    <div 
      className="relative w-full  mx-auto overflow-hidden rounded-lg shadow-lg bg-gray-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Wrapper */}
      <div className="relative w-full flex justify-center bg-gray-300">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`absolute w-full h-auto max-h-[550px] object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100 relative" : "opacity-0 absolute"
            }`}
          />
        ))}
      </div>

      {/* Navigation Buttons - Only Arrows, No Background */}
      <button 
        onClick={prevSlide} 
        className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 z-10 
                   text-white text-2xl sm:text-3xl font-bold drop-shadow-lg 
                   hover:scale-110 transition duration-300"
      >
        &#10094;
      </button>
      
      <button 
        onClick={nextSlide} 
        className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 z-10 
                   text-white text-2xl sm:text-3xl font-bold drop-shadow-lg 
                   hover:scale-110 transition duration-300"
      >
        &#10095;
      </button>

      {/* Dots Indicator - Clean & Responsive */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-blue-500 scale-125" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
