import { ContentProvidedDetails } from "assets/content/why-choose-us/WhyChooseUs";

const WeOffer: React.FC = () => {
  const item = ContentProvidedDetails[0];

  return (
    <section className="flex flex-col items-center justify-center mt-10">
      <div>
        <img src={item.image} alt={item.title} className="w-auto h-72 mb-4" />
        <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
        <p className="max-w-md">{item.description1}</p>

        <h4 className="text-base sm:text-lg md:text-xl font-semibold">
          With {item.title}, you can:
        </h4>

        <ul>
          {item.benefits?.map((benefit:string, idx:number) => (
            <li key={idx} className="list-disc ml-5 my-2">
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WeOffer;
