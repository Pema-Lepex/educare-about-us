import { CommonHeader2, CommonParagraph1 } from "components";
import ImpactSectionPage from "./sections/ImpactSection";
import { aPlus2, APlus, BgYChooseUsImage, girlMascot } from "assets";

const WhyChooseUsContent: React.FC = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-[#1B5FA8]">
        <img
          src={BgYChooseUsImage}
          alt="Why Choose Us Background"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-70"
        />

        <div className="pointer-events-none absolute inset-0 opacity-15">
          <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,white_0,transparent_35%),radial-gradient(circle_at_80%_30%,white_0,transparent_35%),radial-gradient(circle_at_60%_80%,white_0,transparent_40%)]" />
        </div>

        <div className="relative mx-auto flex lg:flex-row  max-w-8xl  gap-6 3xl:gap-24 4xl:gap-[10rem] px-4 pb-24 pt-12  md:pt-14 justify-center items-center">
          <div className="hidden lg:flex">
            <img
              src={APlus}
              alt="APlus"
              className="hidden sm:block h-auto w-[140px] md:w-[160px] 4xl:w-[350px]"
            />
          </div>

          <div className="text-center">
            <img
              src={girlMascot}
              alt="Mascot"
              className="mx-auto mb-2 w-[220px] md:w-[260px] 4xl:w-[340px]"
            />
            <CommonHeader2 className="text-3xl font-extrabold md:text-4xl text-white">
              Why Choose Us?
            </CommonHeader2>
            <CommonParagraph1 className="mx-auto mt-2 max-w-md 4xl:max-w-xl 5xl:max-w-2xl text-sm leading-relaxed text-white/90">
              Our platform is designed to make learning Dzongkha enjoyable,
              interactive, and engaging for every learner.
            </CommonParagraph1>
          </div>

          <div className="hidden lg:flex">
            <img
              src={aPlus2}
              alt="Graduate"
              className=" h-auto w-[140px] md:w-[160px] 4xl:w-[350px]"
            />
          </div>
        </div>
      </section>

      <ImpactSectionPage />
      <div className="3xl:h-[200px] 4xl:h-[350px] 5xl:h-[450px]"/>
    </>
  );
};

export default WhyChooseUsContent;
