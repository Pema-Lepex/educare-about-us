import { LeftArrowIcon, RightArrowIcon } from "assets";
import { testimonials } from "assets/content/about/About";
import { CommonHeader2 } from "components";
import { useEffect, useState } from "react";

const Testimonial: React.FC = () => {
  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  const prev = () =>
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);

  const getRotatedTestimonials = () => {
    const arr = [...testimonials];
    return [...arr.slice(index), ...arr.slice(0, index)];
  };

  const rotated = getRotatedTestimonials();

  return (
    <div className="w-full py-20 bg-primary-50 flex flex-col items-center space-y-7">
      <CommonHeader2>Happy Customers</CommonHeader2>
      <div className="w-full flex justify-center items-center gap-6 mb-10">
        <button
          onClick={prev}
          className="md:w-16 md:h-16 w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center text-xl hover:bg-primary-900"
        >
          <LeftArrowIcon className="lg:size-[30px] md:size-[40px] size-[20px]" />
        </button>

        <div className="flex items-center md:gap-6 gap-3">
          {/* Mobile: Only 3 images */}
          <div className="flex md:hidden items-center gap-3">
            {rotated.slice(0, 3).map((t, i) => (
              <div
                key={`mobile-${i}`}
                className={`rounded-full overflow-hidden 
          ${
            i === 1
              ? "scale-110 border border-primary-500 shadow-xl"
              : "opacity-60"
          } 
          h-16 w-16`}
              >
                <img src={t.avatar} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          {/* Desktop / Tablet (Your original layout) */}
          <div className="hidden md:flex items-center md:gap-6 gap-3">
            {rotated.slice(1, 3).map((t, i) => (
              <div
                key={`left-${i}`}
                className="rounded-full overflow-hidden lg:w-36 lg:h-36 md:w-20 md:h-20 h-12 w-12 opacity-60"
              >
                <img src={t.avatar} className="w-full h-full object-cover" />
              </div>
            ))}

            <div className="rounded-full overflow-hidden border-primary-500 shadow-xl scale-110 border lg:w-52 lg:h-52 md:w-36 md:h-36 h-20 w-20">
              <img
                src={rotated[0].avatar}
                className="w-full h-full object-cover"
              />
            </div>

            {rotated.slice(3).map((t, i) => (
              <div
                key={`right-${i}`}
                className="rounded-full overflow-hidden lg:w-36 lg:h-36 h-12 md:w-20 md:h-20 w-12 opacity-60"
              >
                <img src={t.avatar} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={next}
          className="md:w-16 md:h-16 w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center text-xl hover:bg-primary-900"
        >
          <RightArrowIcon className="lg:size-[30px] md:size-[40px] size-[20px]" />
        </button>
      </div>

      <div className="text-center max-w-2xl transition-all duration-500">
        <p className="text-lg text-gray-600 mb-4 italic">“{rotated[0].text}”</p>
        <h3 className="text-xl font-bold">- {rotated[0].name}</h3>
      </div>
    </div>
  );
};
export default Testimonial;
