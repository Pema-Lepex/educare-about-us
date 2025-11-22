import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menus } from "./ManuList";
import { blueLogo, MenuIcon, XMarkIcon } from "assets";

interface Props {
  hidden?: boolean;
}

const MainNavigation = React.forwardRef<HTMLElement, Props>(
  ({ hidden = false }, ref) => {
    const navigate = useNavigate();
    const location = useLocation();
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
        className="fixed top-0 w-full bg-white dark:bg-bgColor-900 shadow-md dark:shadow-gray-800 z-50 transition-transform duration-300 "
        style={{ transform: hidden ? "translateY(-100%)" : "translateY(0)" }}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div onClick={() => handleNavigate("/")} className="cursor-pointer">
            <img
              src={blueLogo}
              alt="Educare Logo"
              className="inline md:h-6 h-4 w-auto mr-2"
            />
          </div>
          <div className="hidden lg:flex space-x-6">
            {Menus.map((menu, index) => {
              const isActive = location.pathname === menu.ref;
              return (
                <button
                  key={index}
                  onClick={() => handleNavigate(menu.ref)}
                  className={`md:text-lg text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "text-primary-600 font-semibold border-b-2 border-primary-600"
                      : "text-gray-700 dark:text-gray-300 hover:text-primary-500"
                  }`}
                >
                  {menu.title}
                </button>
              );
            })}
          </div>
          <div className="lg:flex gap-2 hidden">
            <a
              href="https://www.educareskill.com/#/login"
              target="_blank"
              className="bg-primary-500 text-white hover:bg-primary-700 px-5 py-2 rounded-md cursor-pointer"
            >
              Sign in
            </a>
            <a
              href="https://www.educareskill.com/#/signup"
              target="_blank"
              className="bg-primary-500 text-white hover:bg-primary-700 px-5 py-2 rounded-md cursor-pointer"
            >
              Sign up
            </a>
          </div>
          <button
            type="button"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((s) => !s)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200"
          >
            {open ? (
              <XMarkIcon className="size-5" />
            ) : (
              <MenuIcon className="size-6" />
            )}
          </button>
        </div>
        <div
          className={`lg:hidden absolute left-0 right-0 top-full bg-white dark:bg-bgColor-900 shadow-md transition-transform duration-200 origin-top ${
            open ? "scale-y-100" : "scale-y-0"
          }`}
        >
          <nav className="px-4 py-3">
            {Menus.map((menu, index) => {
              const isActive = location.pathname === menu.ref;
              return (
                <div
                  key={index}
                  className="py-2 border-b last:border-b-0 border-gray-100 dark:border-gray-800"
                >
                  <button
                    onClick={() => handleNavigate(menu.ref)}
                    className={`w-full text-left text-base font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-primary-600 font-semibold"
                        : "text-gray-700 dark:text-gray-200 hover:text-primary-500"
                    }`}
                  >
                    {menu.title}
                  </button>
                </div>
              );
            })}
            <div className="lg:hidden gap-2 flex mt-2">
            <a
              href="https://www.educareskill.com/#/login"
              target="_blank"
              className="bg-primary-500 text-white hover:bg-primary-700 px-5 py-2 rounded-md cursor-pointer"
            >
              Sign in
            </a>
            <a
              href="https://www.educareskill.com/#/signup"
              target="_blank"
              className="bg-primary-500 text-white hover:bg-primary-700 px-5 py-2 rounded-md cursor-pointer"
            >
              Sign up
            </a>
          </div>
          </nav>
        </div>
      </header>
    );
  }
);

export default MainNavigation;
