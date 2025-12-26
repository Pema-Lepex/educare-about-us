import React from "react";
import { Slider1 } from "assets";
import AnimateOnScroll from "utils/helpers/AnimationOnScroll";
import { SlideProps } from "props/Commonprops";
import Carousel from "components/Carousel";
import MissionSection from "./sections/MissionSection";
import EducareSkillSection from "./sections/EducareSkillSection";
import GuideSection from "./sections/GuideSection";
import DownloadOptionSection from "./sections/DownloadOptionSection";
import { slides } from "./components/SliderContent";
import AccessContentInfoSection from "./sections/AccessContentInfoSection";

const AboutPage: React.FC = () => {
  const sections = [
    <MissionSection key="mission" />,
    <EducareSkillSection key="educareSkill" />,
    <AccessContentInfoSection key="accessContentInfoSection" />,
    <GuideSection key="guide" />,
    <DownloadOptionSection key="download" />,
  ];

  return (
    <div>
      <AnimateOnScroll animation="zoom-in" delay={300}>
        <section className="relative space-y-4" id="about-carousel">
          <Carousel slides={slides} />
        </section>
      </AnimateOnScroll>

      {sections.map((section) => (
        <AnimateOnScroll animation="fade-up" delay={300} key={section.key}>
          {section}
        </AnimateOnScroll>
      ))}
    </div>
  );
};

export default AboutPage;
