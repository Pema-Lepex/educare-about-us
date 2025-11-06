import React from "react";
import { useNavigate } from "react-router-dom";
import { Menus } from "./ManuList";

interface Props {
  hidden?: boolean;
}

const MainNavigation = React.forwardRef<HTMLElement, Props>(({ hidden = false }, ref) => {
  const navigate = useNavigate();
  return (
    <header
      ref={ref as any}
      className="fixed top-0 w-full bg-white dark:bg-bgColor-900 shadow-md dark:shadow-gray-800 z-50 transition-transform duration-300"
      style={{ transform: hidden ? "translateY(-100%)" : "translateY(0)" }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div
          onClick={() => navigate("/")}
          className="md:text-2xl sm:text-xl text-base font-bold text-gray-800 dark:text-white cursor-pointer text-gray-800 md:hover:text-black"
        >
          iBEST Technologies
        </div>
        <div>
          {Menus.map((menu, index) => (
            <ul key={index} className="inline-block ml-4">
              <li
                onClick={() => navigate(menu.ref)}
                className="md:text-lg sm:text-base mx-1 text-sm font-medium text-gray-600 dark:text-gray-300 cursor-pointer hover:text-gray-900 dark:hover:text-white hover:font-extrabold transition-opacity duration-300"
              >
                {menu.title}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </header>
  );
});

export default MainNavigation;