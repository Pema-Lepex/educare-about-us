import Carousel from "components/Carousel";
import { ExploreEducareContentSlides } from "../components/SliderContent";
import MainSectionPage from "modules/why-choose-us/page/sections/MainSectionPage";
import EndorsementSection from "../sections/EndorsementSection";


const ExploreEducareContentReadMore: React.FC = () => {
  return (
    <>
      <section className="relative space-y-4" id="about-carousel">
        <Carousel slides={ExploreEducareContentSlides} />
        <EndorsementSection/>
      </section>
      <MainSectionPage isEducareContent />
      <div className="w-full lg:h-40 4xl:h-[500px] 5xl:h-[700px]"></div>
    </>
  );
};

export default ExploreEducareContentReadMore;
