import { RightArrowIcon } from 'assets';
import React, { useState } from 'react';

// Sample data for the slides
const slides = [
  { id: 1, color: 'bg-red-500', text: 'Innovative Solutions' },
  { id: 2, color: 'bg-blue-500', text: 'Dedicated Team' },
  { id: 3, color: 'bg-green-500', text: 'Global Reach' },
  { id: 4, color: 'bg-purple-500', text: 'Sustainable Growth' },
  { id: 5, color: 'bg-yellow-500', text: 'Customer Focus' },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-xl shadow-2xl bg-gray-100">
        
        {/* Carousel Wrapper - Uses transform to slide */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            // Each slide occupies 100% of the wrapper's width
            <div
              key={slide.id}
              className="w-full flex-shrink-0 flex items-center justify-center h-96 p-8"
              // You would replace the color with an actual image
            >
              <div className={`${slide.color} w-full h-full rounded-lg flex items-center justify-center text-white`}>
                <h2 className="text-4xl font-extrabold">{slide.text}</h2>
              </div>
            </div>
          ))}
        </div>

        {/* --- Slider Controls (Modern, subtle buttons) --- */}
        <div className="absolute inset-y-0 left-0 flex items-center">
          <button
            onClick={prevSlide}
            className="p-3 ml-4 text-white bg-gray-800/30 rounded-full hover:bg-gray-800/60 transition"
            aria-label="Previous Slide"
          >
            <RightArrowIcon className="w-6 h-6" />
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button
            onClick={nextSlide}
            className="p-3 mr-4 text-white bg-gray-800/30 rounded-full hover:bg-gray-800/60 transition"
            aria-label="Next Slide"
          >
            <RightArrowIcon className="w-6 h-6" />
          </button>
        </div>
        
        {/* --- Indicators (Minimal dots) --- */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Carousel;