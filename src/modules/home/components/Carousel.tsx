import React, { useState, useEffect } from "react";

const Carousel = () => {
  const slides = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      title: "Beautiful Landscape",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
      title: "City Night Lights",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
      title: "Mountain Adventure",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="w-full h-[400px] m-auto py-8 px-4 relative group">
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover duration-700"
        style={{ backgroundImage: `url(${slides[currentIndex].img})` }}
      ></div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-5 text-white bg-black/30 hover:bg-black/50 p-2 rounded-full"
      >
        ❮
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 right-5 text-white bg-black/30 hover:bg-black/50 p-2 rounded-full"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="flex justify-center py-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`cursor-pointer text-2xl ${
              index === currentIndex ? "text-blue-500" : "text-gray-400"
            }`}
          >
            •
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
