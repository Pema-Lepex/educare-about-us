import Carousel from "components/Carousel";
import { slides } from "../components/SliderContent";
import MainSectionPage from "modules/why-choose-us/page/sections/MainSectionPage";
import EndorsementSection from "../sections/EndorsementSection";
import { content } from "assets/content/about/About";

const ExploreEducareContentReadMore: React.FC = () => {
  return (
    <>
      <section className="relative space-y-4" id="about-carousel">
        <Carousel slides={slides} />
      <EndorsementSection paragraphs={
        <>
        <p>{content.content1}</p>
        <p>{content.content2}</p>
        </>
      } />
      </section>
      <MainSectionPage isEducareContent />
    </>
  );
};

export default ExploreEducareContentReadMore;
