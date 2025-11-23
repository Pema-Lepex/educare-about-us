import { memebershipDetails } from "assets/content/about-us/AboutUs";

const MembershipReadMore: React.FC = () => {
  return (
    <>
      <section className="px-4 sm:px-8 lg:px-16 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {memebershipDetails.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 space-y-4"
            >
              <img
                src={item.imageSrc}
                alt={`${item.memebrshipType} Membership`}
                className="w-auto h-34 sm:h-42 lg:h-60 rounded-lg object-cover"
              />
              <h3 className="text-xl font-bold">{item.memebrshipType}</h3>
              <div className="text-center">
                <p>Yearly: {item.yearlyCost}</p>
                <p>Half-Yearly: {item.halfYearlyCost}</p>
                <p>Monthly: {item.monthlyCost}</p>
              </div>
              <ul className="flex flex-wrap justify-center items-center space-x-1 text-sm text-gray-700">
                {item.benefits.map((benefit:string, i:number) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default MembershipReadMore;
