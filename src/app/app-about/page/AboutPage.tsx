import React from "react";
import AnimateOnScroll from "utils/helpers/AnimationOnScroll";
import Carousel from "components/Carousel";
import { slides } from "modules/about/page/components/SliderContent";
import AccessContentInfoSection from "modules/about/page/sections/AccessContentInfoSection";
import DownloadOptionSection from "modules/about/page/sections/DownloadOptionSection";
import EducareSkillSection from "modules/about/page/sections/EducareSkillSection";
import GuideSection from "modules/about/page/sections/GuideSection";
import MissionSection from "modules/about/page/sections/MissionSection";

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
      <div className="lg:h-24 xl:h-0"/>
    </div>
  );
};

export default AboutPage;
