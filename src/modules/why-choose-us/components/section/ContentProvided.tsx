import { ContentProvidedDetails } from "assets/content/why-choose-us/WhyChooseUs";
import { CommonHeader, CommonParagraph, LearnMoreButton } from "components";
import { ContentProvidedDetailsProps } from "props/Commonprops";
import { useNavigate } from "react-router-dom";

const ContentProvided: React.FC = () => {
  const navigate = useNavigate();
  const handleClickOnHere = () => {
    navigate("/why-choose-us-we-offer");
  };
  return (
    <section className="mx-4 md:mx-20 my-20">
      <div className="text-center">
        <CommonHeader>What we have to offer</CommonHeader>
      </div>
      {ContentProvidedDetails.map(
        (item: ContentProvidedDetailsProps, index: number) => (
          <div
            key={item.id}
            className={`
            flex flex-col 
            my-10 
            items-center 
            md:flex-row 
            gap-4
            ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}
          `}
          >
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6 space-y-2">
              <CommonHeader>{item.title}</CommonHeader>
              <CommonParagraph>{item.description1}</CommonParagraph>
              <h4 className="text-base sm:text-lg md:text-xl font-semibold">with {item.title}, you can :</h4>
              <ul>
                {item.benefits?.map((benefit, idx) => (
                  <li key={idx} className="list-disc ml-5 my-2">
                    {benefit}
                  </li>
                ))}
              </ul>
               <LearnMoreButton onClick={()=>handleClickOnHere()} className="hover:bg-primary-500 hover:text-white border border-primary-600"/>
            </div>
           
            <div className="md:w-1/2 flex justify-center">
              <img
                src={item.image}
                alt={item.title}
                className=" 
                         object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        )
      )}
    </section>
  );
};

export default ContentProvided;
