import React from "react";
import AnimateOnScroll from "utils/helpers/AnimationOnScroll";
import Carousel from "components/Carousel";
import MissionSection from "./sections/MissionSection";
import EducareSkillSection from "./sections/EducareSkillSection";
import GuideSection from "./sections/GuideSection";
import DownloadOptionSection from "./sections/DownloadOptionSection";
import { slides } from "./components/SliderContent";
import AccessContentInfoSection from "./sections/AccessContentInfoSection";
import SEO from "components/SEO";

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
      <SEO
          title="About Us | The Mission Behind Educare Skill Bhutan"
          description="Learn about Educare Skill's journey to modernize education in Bhutan. Our team is dedicated to providing high-quality Dzongkha tutorials and interactive digital learning."
          url="https://www.educareskill.com/aboutus"
          keywords="About Educare Skill, Bhutan EdTech, Dzongkha digital learning, Dzonkha tutorials, Education mission Bhutan"
      />
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
