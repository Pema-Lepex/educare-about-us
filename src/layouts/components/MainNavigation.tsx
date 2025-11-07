import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menus } from "./ManuList";
import { MenuIcon, XMarkIcon } from "assets";

interface Props {
  hidden?: boolean;
}

const MainNavigation = React.forwardRef<HTMLElement, Props>(({ hidden = false }, ref) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavigate = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <header
      ref={ref as any}
      className="fixed top-0 w-full bg-white dark:bg-bgColor-900 shadow-md dark:shadow-gray-800 z-50 transition-transform duration-300"
      style={{ transform: hidden ? "translateY(-100%)" : "translateY(0)" }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div
          onClick={() => handleNavigate("/")}
          className="md:text-2xl sm:text-xl text-base font-bold text-gray-800 dark:text-white cursor-pointer md:hover:text-black"
        >
          iBEST Technologies
        </div>

        <div className="hidden lg:block">
          {Menus.map((menu, index) => (
            <ul key={index} className="inline-block ml-4">
              <li
                onClick={() => handleNavigate(menu.ref)}
                className="md:text-lg sm:text-base mx-1 text-sm font-medium text-gray-600 dark:text-gray-300 cursor-pointer hover:text-gray-900 dark:hover:text-white hover:font-extrabold transition-opacity duration-300"
              >
                {menu.title}
              </li>
            </ul>
          ))}
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((s) => !s)}
          className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 focus:outline-none"
        >
          {open ? (
            <XMarkIcon className="size-5"/>
          ) : (
            <MenuIcon className="size-6"/>
          )}
        </button>
      </div>

      <div
        className={`lg:hidden absolute left-0 right-0 top-full bg-white dark:bg-bgColor-900 shadow-md transition-transform duration-200 origin-top ${
          open ? "scale-y-100" : "scale-y-0"
        }`}
        style={{ transformOrigin: "top" }}
        aria-hidden={!open}
      >
        <nav className="px-4 py-3">
          {Menus.map((menu, index) => (
            <div key={index} className="py-2 border-b last:border-b-0 border-gray-100 dark:border-gray-800">
              <button
                onClick={() => handleNavigate(menu.ref)}
                className="w-full text-left text-base font-medium text-gray-700 dark:text-gray-200"
              >
                {menu.title}
              </button>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
});

export default MainNavigation;