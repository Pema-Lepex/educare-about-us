import { Media } from "props/Commonprops";
import { useEffect, useRef } from "react";

interface HorizontalScrollerProps {
  mediaList: Media[];
  speed?: number; 
}

export default function HorizontalScroller({ mediaList, speed = 1 }: HorizontalScrollerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const inner = innerRef.current;
    if (!container || !inner) return;

    let rafId = 0;
    let isPaused = false;
    let contentWidth = 0;
    let resumeTimer = 0;

    const recompute = () => {
      contentWidth = inner.scrollWidth / 2 || 0;
      if (contentWidth > 0 && container.scrollLeft >= contentWidth) {
        container.scrollLeft = container.scrollLeft - contentWidth;
      }
    };

    const step = () => {
      if (!isPaused && contentWidth > 0) {
        container.scrollLeft += speed;
        if (container.scrollLeft >= contentWidth) {
          container.scrollLeft = container.scrollLeft - contentWidth;
        }
      }
      rafId = requestAnimationFrame(step);
    };

    const start = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(step);
    };

    const stop = () => {
      cancelAnimationFrame(rafId);
    };

    const pause = () => {
      isPaused = true;
      stop();
      if (resumeTimer) {
        clearTimeout(resumeTimer);
        resumeTimer = 0;
      }
    };

    const resume = (delay = 300) => {
      if (resumeTimer) clearTimeout(resumeTimer);
      resumeTimer = window.setTimeout(() => {
        isPaused = false;
        start();
        resumeTimer = 0;
      }, delay);
    };

    const onMouseEnter = () => pause();
    const onMouseLeave = () => resume(200);
    const onPointerDown = () => pause();
    const onPointerUp = () => resume(300);
    const onTouchStart = () => pause();
    const onTouchEnd = () => resume(300);
    const onWheel = () => {
      pause();
      resume(600);
    };
    const onResize = () => {
      recompute();
    };

    container.addEventListener("mouseenter", onMouseEnter);
    container.addEventListener("mouseleave", onMouseLeave);
    container.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointerup", onPointerUp);
    container.addEventListener("touchstart", onTouchStart, { passive: true });
    container.addEventListener("touchend", onTouchEnd);
    container.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("resize", onResize);
    const imgs = Array.from(container.querySelectorAll("img"));
    let loaded = 0;
    if (imgs.length === 0) {
      recompute();
      start();
    } else {
      imgs.forEach((img) => {
        if ((img as HTMLImageElement).complete) {
          loaded++;
        } else {
          img.addEventListener(
            "load",
            () => {
              loaded++;
              if (loaded === imgs.length) recompute();
            },
            { once: true }
          );
        }
      });
      setTimeout(() => {
        recompute();
        start();
      }, 100);
    }

    return () => {
      stop();
      container.removeEventListener("mouseenter", onMouseEnter);
      container.removeEventListener("mouseleave", onMouseLeave);
      container.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchend", onTouchEnd);
      container.removeEventListener("wheel", onWheel);
      window.removeEventListener("resize", onResize);
      if (resumeTimer) clearTimeout(resumeTimer);
    };
  }, [mediaList, speed]);

  const loopedMedia = [...mediaList, ...mediaList];

  return (
    <section className="bg-transparent">
      <div
        ref={containerRef}
        className="relative overflow-x-auto no-scrollbar hide-scrollbar  py-4 bg-primary-400"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <div
          ref={innerRef}
          className="flex gap-4 will-change-transform w-max"
        >
          {loopedMedia.map((media, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 sm:w-72 md:w-80 lg:w-96 rounded-lg shadow-lg overflow-hidden"
            >
              {media.type === "image" ? (
                <img src={media.src} alt={`Media ${index + 1}`} className="w-full h-full object-cover block" />
              ) : (
                <video src={media.src} className="w-full h-full object-cover block" autoPlay muted loop />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}