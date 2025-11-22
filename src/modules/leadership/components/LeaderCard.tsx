import { LeaderProps } from "props/Commonprops";

export const FounderCard: React.FC<{
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
          <p className="text-2xl font-bold text-primary-500">{leader.name}</p>
          <p className="text-xl font-semibold text-primary-400">
            {leader.position}
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
        </div>
      </div>
    </>
  );
};
