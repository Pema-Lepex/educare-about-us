// ...existing code...
import React, { useEffect, useRef, useState } from "react";
import MainFooter from "./components/MainFooter";
import MainNavigation from "./components/MainNavigation";
import ScrollToSection from "utils/helpers/ScrollToSection";

interface MainLayoutProps {
  children: React.ReactNode;
}
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const headerRef = useRef<HTMLElement | null>(null);
  const [navHidden, setNavHidden] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const lastY = useRef<number>(0);

  useEffect(() => {
    const measure = () => {
      const h = headerRef.current?.getBoundingClientRect().height ?? 0;
      setHeaderHeight(h);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;
      if (Math.abs(delta) > 8) {
        setNavHidden(delta > 0 && y > 50); 
        lastY.current = y;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen 5xl:w-[3200px] border border-primary-500 shadow-lg mx-auto w-full 6xl:max-w-8xl flex flex-col relative overflow-hidden pb-[13.9rem] sm:pb-[14rem] md:pb-[13.7rem] lg:pb-32 xl:pb-40 2xl:pb-44 3xl:pb-36 4xl:pb-28 5xl:pb-20 6xl:pb-14">
      <ScrollToSection />
      <MainNavigation ref={headerRef} hidden={navHidden} />
      <main
        className="flex-grow   hide-scrollbar"
        style={{ paddingTop: headerHeight }}
      >
        {children}
      </main>
      <MainFooter />
    </div>
  );
};

export default MainLayout;