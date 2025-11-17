import { LeaderProps } from "props/Commonprops";

export const FounderCard: React.FC<{
  leader: LeaderProps;
}> = ({ leader }) => {
  return (
    <>
      <div
        key={leader.id}
        className="relative flex flex-col items-center text-center max-w-sm md:max-w-md cursor-pointer"
      >
        <div className=" group rounded-lg shadow-xl overflow-hidden">
          <img
            src={leader.image}
            alt={leader.name}
            className="h-72 w-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
          />
          <div
            className="
                  absolute inset-0 bg-primary-500 bg-opacity-90 text-white
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300
                  flex flex-col  items-center p-6
                "
          >
            <p className="text-2xl font-bold">{leader.name}</p>
            <p className="text-lg font-semibold text-primary-100 mb-4">
              {leader.position}
            </p>
            <div className="text-sm mt-2 text-gray-300 overflow-y-auto max-h-50">
              <p>{leader.description}</p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-2xl font-bold text-primary-500">{leader.name}</p>
          <p className="text-xl font-semibold text-primary-400">
            {leader.position}
          </p>
          <p className="text-sm text-gray-600 mt-2 italic">
            {leader.intro_note}
          </p>
        </div>
      </div>
    </>
  );
};
export const OtherLeaderCard: React.FC<{
  leader: LeaderProps;
}> = ({ leader }) => {
  return (
    <>
      <div
        key={leader.id}
        className="relative group flex flex-col items-center text-center max-w-xs mx-auto p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      >
        <img
          src={leader.image}
          alt={leader.name}
          className="h-56 w-56 object-cover rounded-full shadow-md transition-transform duration-300 group-hover:scale-105"
        />

        <div className="mt-4">
          <p className="text-xl font-bold text-primary-500">{leader.name}</p>
          <p className="text-lg font-semibold text-primary-400">
            {leader.position}
          </p>
          <p className="text-sm text-gray-600 italic">{leader.intro_note}</p>
        </div>
        <div
          className="
                absolute inset-0 bg-primary-500 bg-opacity-90 text-white
                opacity-0 group-hover:opacity-100 transition-opacity duration-300
                flex flex-col  items-center p-6 rounded-xl
              "
        >
          <p className="text-xl font-bold">{leader.name}</p>
          <p className="text-md font-semibold text-primary-100 mb-3">
            {leader.position}
          </p>
          <div className="text-sm mt-2 text-gray-300 overflow-y-auto max-h-50">
            <p>{leader.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};
