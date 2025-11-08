import { ImpactOfEducare, impactOfEducare } from "assets/content/impact/Impact";
import { CommonParagraph } from "components";
import DCDDImpactSection from "./section/DCDDImpactSection";

const ImpactContent = () => {
  return (
    <>
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-white space-y-4 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center pb-5">Impact</h1>
        <CommonParagraph>
          <ImpactOfEducare />
        </CommonParagraph>
      </section>
      <DCDDImpactSection/>
    </>
  );
};
export default ImpactContent;
