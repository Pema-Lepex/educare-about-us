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

        <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-end gap-6 px-4 pb-24 pt-12 md:grid-cols-3 md:pt-14">
          <div className="order-2 flex justify-center md:order-1 md:justify-start">
            <img
              src={APlus}
              alt="APlus"
              className="hidden sm:block h-auto w-[140px] md:w-[160px]"
            />
          </div>

          <div className="order-1 text-center text-white md:order-2">
            <img
              src={girlMascot}
              alt="Mascot"
              className="mx-auto mb-2 w-[220px] md:w-[260px] "
            />
            <h1 className="text-3xl font-extrabold md:text-4xl">
              Why Choose Us?
            </h1>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-white/90">
              Our platform is designed to make learning Dzongkha enjoyable,
              interactive, and engaging for every learner.
            </p>
          </div>

          <div className="order-3 flex justify-center md:justify-end">
            <img
              src={aPlus2}
              alt="Graduate"
              className="hidden sm:blockh-auto w-[140px] md:w-[160px"
            />
          </div>
        </div>
      </section>

      <ImpactSectionPage />
    </>
  );
};

export default WhyChooseUsContent;
