// ...existing code...
import React, { useEffect, useRef, useState } from "react";
import MainFooter from "./components/MainFooter";
import MainNavigation from "./components/MainNavigation";
import ScrollToSection from "utils/helpers/ScrollToSection";
import BottomNotification from "modules/notification/pages/BottomNotification";

interface MainLayoutProps {
  children: React.ReactNode;
}
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const headerRef = useRef<HTMLElement | null>(null);
  const [navHidden, setNavHidden] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const lastY = useRef<number>(0);
  const [showBottomNotification, setShowBottomNotification] = useState(true);

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
    const currentY = window.scrollY;
    const delta = currentY - lastY.current;

    // Ignore tiny movements
    if (Math.abs(delta) < 5) return;

    const isScrollingDown = delta > 0;

    // Hide nav when scrolling down
    setNavHidden(isScrollingDown && currentY > 50);

    // ✅ Show notification when scrolling UP and not at top
    if (!isScrollingDown && currentY > 50) {
      setShowBottomNotification(true);
    }

    // Hide when scrolling down
    if (isScrollingDown) {
      setShowBottomNotification(false);
    }

    lastY.current = currentY;
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
      {showBottomNotification && <BottomNotification />}
      <MainFooter />
    </div>
  );
};

export default MainLayout;