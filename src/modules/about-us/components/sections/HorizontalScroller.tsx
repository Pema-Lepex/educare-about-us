import { Media } from "props/Commonprops";
import { useEffect, useRef } from "react";


interface HorizontalScrollerProps {
  mediaList: Media[];
  speed?: number; 
}

export default function HorizontalScroller({ mediaList, speed = 1 }: HorizontalScrollerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let scrollPos = 0;

    const scroll = () => {
      if (!container) return;
      scrollPos += speed;
      if (scrollPos >= container.scrollWidth / 2) {
        scrollPos = 0;
      }
      container.scrollLeft = scrollPos;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    const handleMouseEnter = () => cancelAnimationFrame(animationFrameId);
    const handleMouseLeave = () => (animationFrameId = requestAnimationFrame(scroll));

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [speed]);

  const loopedMedia = [...mediaList, ...mediaList];

  return (
    <section className="bg-transparent hide-scrollbar">
      <div
        ref={containerRef}
        className="flex gap-4 whitespace-nowrap overflow-x-auto scroll-smooth scrollbar-hide hide-scrollbar py-4 bg-primary-400"
      >
        {loopedMedia.map((media, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 sm:w-72 md:w-80 lg:w-96 h-30 sm:h-38 md:h-46 lg:h-54 rounded-lg hide-scrollbar shadow-lg"
          >
            {media.type === "image" ? (
              <img src={media.src} alt={`Media ${index + 1}`} className="w-full h-full object-cover" />
            ) : (
              <video src={media.src} className="w-full h-full object-cover" autoPlay muted loop />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
