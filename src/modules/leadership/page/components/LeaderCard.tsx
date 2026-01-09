type Leader = {
  name: string;
  role: string;
  image: string;
  isFounder?: boolean;
};
const LeaderCard = ({ name, role, image, isFounder = false }: Leader) => (
  <div className="flex flex-col items-center relative z-10">
    <div
      className={`
      bg-white rounded-2xl py-6 px-3 border border-customOriange-200 shadow-md mb-4 
      flex flex-col items-center justify-center overflow-hidden
      ${isFounder ? "w-44 h-52 md:w-52 md:h-64 lg:w-[15rem] lg:h-[18rem] xl:w-[18rem] xl:h-[22rem] 2xl:w-[22rem] 2xl:h-[26rem] 3xl:w-[26rem] 3xl:h-[30rem] 4xl:w-[30rem] 4xl:h-[36rem] 5xl:w-[36rem] 5xl:h-[42rem]" : "w-36 h-44 md:w-44 md:h-56"}
    `}
    >
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover rounded-xl"
      />
      <div className="text-center">
        <h4 className="text-border-customOriange-200 font-bold text-sm md:text-base xl:text-lg 2xl:text-xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl leading-tight">
          {name}
        </h4>
        <p className=" text-[10px] md:text-base xl:text-lg 2xl:text-lg 3xl:text-xl 4xl:text-2xl 5xl:text-3xl  text-primary-500 font-medium mt-1">
          {role}
        </p>
      </div>
    </div>
  </div>
);
export default LeaderCard;