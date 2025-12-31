import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menus } from "./ManuList";
import { whiteLogo, MenuIcon, XMarkIcon } from "assets";

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
        className="fixed top-0 w-full bg-primary-500 dark:bg-bgColor-900 shadow-md dark:shadow-gray-800 z-50 transition-transform duration-300 px-4 "
        style={{ transform: hidden ? "translateY(-100%)" : "translateY(0)" }}
      >
        <div className="mx-auto px-4 py-4 flex items-center justify-between">
          <div onClick={() => handleNavigate("/")} className="cursor-pointer">
            <img
              src={whiteLogo}
              alt="Educare Logo"
              className="inline md:h-10 xl:h-12 2xl:h-16 3xl:h-20 4xl:h-24 5xl:h-28 h-9 w-auto mr-2"
            />
          </div>
          <div className="hidden lg:flex lg:space-x-2 xl:space-x-4  2xl:space-x-8">
            {Menus.map((menu, index) => {
              const isActive =
                location.pathname === menu.ref ||
                location.pathname.startsWith(menu.ref + "/");
              return (
                <button
                  key={index}
                  onClick={() => handleNavigate(menu.ref)}
                  className={`text-sm sm:text-base md:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl 6xl:text-5xl font-medium transition-all duration-300 ${
                    isActive
                      ? "text-customOriange-100 font-semibold border-b-2 border-customOriange-100"
                      : "text-white hover:text-customOriange-100"
                  }`}
                >
                  {menu.title}
                </button>
              );
            })}
          </div>
          <div className="lg:flex gap-2 hidden">
            <a
              href="https://www.educareskill.com/#/signup"
              target="_blank"
              className="bg-white text-primary-600 hover:bg-primary-100 px-3 xl:px-5 py-2 xl:py-1 3xl:py-3 text-sm sm:text-base md:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl 6xl:text-5xl rounded-md cursor-pointer"
            >
              DCDD Sign In
            </a>
            <a
              href="https://www.educareskill.com/#/login"
              target="_blank"
              className="bg-white text-primary-600 hover:bg-primary-100 px-3 xl:px-5 py-2 xl:py-1 3xl:py-3 text-sm sm:text-base md:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl 6xl:text-5xl rounded-md cursor-pointer"
            >
              Sign In
            </a>
          </div>
          <button
            type="button"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((s) => !s)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-white dark:text-gray-200"
          >
            {open ? (
              <XMarkIcon className="size-5" />
            ) : (
              <MenuIcon className="size-6" />
            )}
          </button>
        </div>
        <div
          className={`lg:hidden absolute left-0 right-0 top-full bg-primary-500 dark:bg-bgColor-900 shadow-md transition-transform duration-200 origin-top ${
            open ? "scale-y-100" : "scale-y-0"
          }`}
        >
          <nav className="px-4 py-3">
            {Menus.map((menu, index) => {
              const isActive =
                location.pathname === menu.ref ||
                location.pathname.startsWith(menu.ref + "/");
              return (
                <div
                  key={index}
                  className={`py-2 border-b last:border-b-0 ${
                    isActive
                      ? "border-customOriange-100 dark:border-gray-800"
                      : "border-primary-100 dark:border-gray-800"
                  } `}
                >
                  <button
                    onClick={() => handleNavigate(menu.ref)}
                    className={`w-full text-left text-base font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-customOriange-100 font-semibold"
                        : "text-white dark:text-gray-200 hover:text-primary-500"
                    }`}
                  >
                    {menu.title}
                  </button>
                </div>
              );
            })}
            <div className="lg:hidden gap-2 flex mt-3">
              <a
                href="https://www.educareskill.com/#/signup"
                target="_blank"
                className="bg-white text-primary-600 hover:bg-primary-100 px-5 py-2 rounded-md cursor-pointer"
              >
                DCDD Sign In
              </a>
              <a
                href="https://www.educareskill.com/#/login"
                target="_blank"
                className="bg-white text-primary-600 hover:bg-primary-100 px-5 py-2 rounded-md cursor-pointer"
              >
                Sign In
              </a>
            </div>
          </nav>
        </div>
      </header>
    );
  }
);

export default MainNavigation;
