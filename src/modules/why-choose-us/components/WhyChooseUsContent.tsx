import { WhyChooseUsShortDetails } from "assets/content/why-choose-us/WhyChooseUs";
import { WhyChooseUsShortDetailsProps } from "props/Commonprops";
import ShowMembershipPlan from "./section/ShowMembershipPlan";
import ContentProvided from "./section/ContentProvided";
import AnimateOnScroll from "utils/helpers/AnimationOnScroll";

const WhyChooseUsContent = () => {
  return (
    <>
      <AnimateOnScroll animation="fade-up" delay={300}>
        <section className="text-center py-20 ">
          <h1 className="text-5xl ">
            Bhutan's number one, Dzongkha learning platform
          </h1>
          <p className="md:px-80 pt-5">
            Our platform is designed to make learning <strong>Dzongkha</strong>,{" "}
            <strong>the national language of Bhutan</strong>, fun, engaging, and
            accessible for students of all ages worldwide.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1">
            {WhyChooseUsShortDetails.map(
              (item: WhyChooseUsShortDetailsProps) => (
                <div
                  className="flex flex-col items-center p-10 space-y-3"
                  key={item.id}
                >
                  <img src={item.icon} alt="Globe icon" className="w-24 h-24" />
                  <h2 className="text-lg font-bold">{item.title}</h2>
                  <p>{item.description1}</p>
                </div>
              )
            )}
          </div>
        </section>
      </AnimateOnScroll>
      {/* <AnimateOnScroll animation="fade-left" delay={300}>
        <ShowMembershipPlan />
      </AnimateOnScroll> */}

      <AnimateOnScroll animation="fade-left" delay={300}>
        <ContentProvided />
      </AnimateOnScroll>
    </>
  );
};
export default WhyChooseUsContent;
