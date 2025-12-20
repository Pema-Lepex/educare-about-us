import React, { useState, useEffect } from "react";
import { feedBack } from "assets/content/about/About";
import { LeftArrowIcon, RightArrowIcon } from "assets";

const FeedBackCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === feedBack.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [feedBack.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? feedBack.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === feedBack.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full h-[350px] sm:h-[400px] md:h-[500px] m-auto relative group overflow-hidden">
      <div
        className="w-full h-full bg-center bg-cover duration-700 transition-all ease-in-out"
        style={{ backgroundImage: `url(${feedBack[currentIndex].img})` }}
      ></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <p className="text-white text-base sm:text-lg md:text-2xl lg:text-4xl font-medium italic lg:max-w-4xl max-w-xl leading-relaxed">
          "{feedBack[currentIndex].feedBack}"
        </p>
        <p className="text-gray-200 text-sm sm:text-base mt-3">
          — {feedBack[currentIndex].author}
        </p>
      </div>

      <div
        className="
          absolute w-full flex justify-center gap-10 bottom-4 
          sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 sm:justify-between sm:px-6
        "
      >
        <button
          onClick={prevSlide}
          className="
            text-white hover:text-primary-200 p-2 sm:p-3 rounded-full transition
            sm:absolute sm:left-4 sm:top-1/2 sm:-translate-y-1/2 
            sm:opacity-0 sm:group-hover:opacity-100 sm:transition-opacity
          "
        >
          <LeftArrowIcon className="lg:size-[100px] md:size-[80px] size-[40px]" />
        </button>

        <button
          onClick={nextSlide}
          className="
            text-white hover:text-primary-200 p-2 sm:p-3 rounded-full transition
            sm:absolute sm:right-4 sm:top-1/2 sm:-translate-y-1/2 
            sm:opacity-0 sm:group-hover:opacity-100 sm:transition-opacity
          "
        >
          <RightArrowIcon className="lg:size-[100px] md:size-[80px] size-[40px]" />
        </button>
      </div>
    </div>
  );
};

export default FeedBackCarousel;
