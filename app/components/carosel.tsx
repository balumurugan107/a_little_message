import { useState, useEffect } from "react";

const carouselImages = [
  "/okkanmani1.jpg",
  "/okkanmani2.jpg",
  "/okkanmani3.jpeg",
  "/okkanmani4.jpg",
  "/pro_image.webp",
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-64 h-64 md:w-96 md:h-96 overflow-hidden rounded-lg shadow-2xl">
      {/* Image container with transition */}
      <div className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {carouselImages.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
        ))}
      </div>

      {/* Left Button */}
      <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:scale-110">
        ◀
      </button>

      {/* Right Button */}
      <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:scale-110">
        ▶
      </button>

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {carouselImages.map((_, index) => (
          <div key={index} className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-400"}`}></div>
        ))}
      </div>
    </div>
  );
}
