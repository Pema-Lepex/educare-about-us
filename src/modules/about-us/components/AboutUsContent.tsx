import React, { lazy } from "react";
import { useNavigate } from "react-router-dom";
import {
  landing4,
  educareVideo,
  landing1,
  Slider1,
} from "assets";
import { Menus } from "layouts/components/ManuList";
import { CommonHeader } from "components";
import AnimateOnScroll from "utils/helpers/AnimationOnScroll";
import HorizontalScroller from "./sections/HorizontalScroller";
import PersonalizedLearningSection from "./sections/PersonalizedLearningSection";
import DCDDUserSection from "./sections/DCDDUserSection";
import MembershipSection from "./sections/MembershipSection";
import { Media, SlideProps } from "props/Commonprops";
import Carousel from "components/Carousel";

const Testimonial = lazy(() => import("./Testimobial"));

const AboutUsContent: React.FC = () => {
  const navigate = useNavigate();

  const listOfMedia:Media[] = [
    { type: "video", src: educareVideo },
    { type: "image", src: landing1 },
    { type: "video", src: educareVideo },
    { type: "image", src: landing4 },
  ];
   const slides: SlideProps[] = [
      { id: 1, img: Slider1, title: "Beautiful Landscape" },
      { id: 2, img: Slider1, title: "City Night Lights" },
      { id: 3, img: Slider1, title: "Mountain Adventure" },
    ];

  const sections = [
    <PersonalizedLearningSection key="personalized" />,
    <HorizontalScroller key="scroller1" mediaList={listOfMedia} />,
    <DCDDUserSection key="dcdd" />,
    <HorizontalScroller key="scroller2" mediaList={listOfMedia} />,
    <MembershipSection key="membership" />,
    <Testimonial key="feedback" />,
  ];

  const handleNavigate = (path: string) => navigate(path);

  return (
    <div>
      <AnimateOnScroll animation="zoom-in" delay={300}>
        <section className="relative space-y-4">
          <Carousel slides={slides} />
        </section>
      </AnimateOnScroll>

      {sections.map((section) => (
        <AnimateOnScroll animation="fade-up" delay={300} key={section.key}>{section}</AnimateOnScroll>
      ))}

      <AnimateOnScroll animation="fade-left" delay={300}>
        <section className="my-10 text-center space-y-10">
          <CommonHeader>Learn More About Educare</CommonHeader>
          <div className="flex flex-wrap justify-center gap-4 p-4">
            {Menus.filter(
              (menu) => menu.title.toLowerCase() !== "about"
            ).map((menu) => (
              <button
                key={menu.title}
                onClick={() => handleNavigate(menu.ref)}
                className="border border-gray-300 rounded-lg px-6 py-3 text-lg font-semibold 
                  text-gray-800 hover:bg-primary-100 hover:text-primary-700 
                  transition duration-200 ease-in-out shadow-sm 
                  flex items-center justify-center"
              >
                {menu.title}
              </button>
            ))}
          </div>
        </section>
      </AnimateOnScroll>
    </div>
  );
};

export default AboutUsContent;
