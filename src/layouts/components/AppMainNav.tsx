
import { whiteLogo } from "assets";
import TopNotification from "modules/notification/pages/TopNotification";
import React from "react";

interface Props {
  hidden?: boolean;
}
const AppMainNav = React.forwardRef<HTMLElement, Props>(
  ({ hidden = false }, ref) => {

    return (
     <>
      <header
        ref={ref as any}
        className="fixed top-0 5xl:w-[3200px] mx-auto w-full bg-primary-500 dark:bg-bgColor-900 shadow-md dark:shadow-gray-800 z-50 transition-transform duration-300 "
        style={{ transform: hidden ? "translateY(-100%)" : "translateY(0)" }}
      >
        <TopNotification />
        <div className="mx-auto px-4 py-4 flex items-center justify-between">
          
          <div className="cursor-pointer flex space-x-4 lg:space-x-0">
            
            <img
              src={whiteLogo}
              alt="Educare Logo"
              className="inline md:h-10 lg:h-8 xl:h-12 2xl:h-16 3xl:h-20 4xl:h-24 5xl:h-32 h-9 w-auto mr-2"
            />
          </div>
        </div>
      </header>
     </>
    );
  }
);

export default AppMainNav;
