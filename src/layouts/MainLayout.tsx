// ...existing code...
import React, { useEffect, useRef, useState } from "react";
import MainFooter from "./components/MainFooter";
import MainNavigation from "./components/MainNavigation";

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
    <div className="min-h-screen flex flex-col">
      <MainNavigation ref={headerRef} hidden={navHidden} />
      <main
        className="flex-grow hide-scrollbar"
        style={{ paddingTop: headerHeight }}
      >
        {children}
      </main>
      <MainFooter />
    </div>
  );
};

export default MainLayout;