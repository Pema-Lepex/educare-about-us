import { SlideProps } from "props/Commonprops";
import React, { useState, useEffect } from "react";
interface Props {
  slides: SlideProps[];
}
const Carousel: React.FC<Props> = ({ slides = [] }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (slides.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  if (slides.length === 0) return null;

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };
  return (
    <div className="w-full m-auto relative group ">
      <div
        className="w-full rounded-2xl bg-center bg-cover duration-700 aspect-[16/9]"
        style={{ backgroundImage: `url(${slides[currentIndex].img})` }}
      ></div>

      <button
        onClick={prevSlide}
        className="hidden size-10 text-xl group-hover:flex justify-center items-center absolute top-1/2 -translate-y-1/2 left-5 text-white bg-black/30 hover:bg-black/50 p-2 rounded-full"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="hidden size-10 text-xl group-hover:flex justify-center items-center absolute top-1/2 -translate-y-1/2 right-5 text-white bg-black/30 hover:bg-black/50 p-2 rounded-full"
      >
        ❯
      </button>

      <div className="absolute flex justify-center py-2 z-100 bottom-0 w-full gap-3">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`cursor-pointer text-5xl ${
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
