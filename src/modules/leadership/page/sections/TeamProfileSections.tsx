import { TeamProfile, TeamProfileHeader } from "assets/content/team/Team";
import {
  CommonHeader2,
  CommonHeader3,
  CommonParagraph1,
  CommonParagraph2,
  CommonParagraph3,
} from "components";

const TeamProfileSection: React.FC = () => {
  return (
    <>
      <section className="space-y-10">
        <div className="text-center">
          <CommonHeader2 className="text-customOriange-200">
            {TeamProfileHeader.title}
          </CommonHeader2>
          <CommonParagraph2 className="text-white">
            {TeamProfileHeader.subTitle}
          </CommonParagraph2>
          <CommonParagraph3 className="text-primary-300">
            {TeamProfileHeader.description}
          </CommonParagraph3>
        </div>
        <div>
          {TeamProfile.map((item) => (
            <div key={item.id} className="">
              {item.subTeamcategory.length < 1 ? (
                <div className="w-full space-y-7 mt-7">
                  <CommonHeader2 className={`text-center text-purple-600`}>
                    {item.team}
                  </CommonHeader2>
                  <img
                    src={item.prfile}
                    alt="profile "
                    className="border border-purple-600 rounded-3xl"
                  />
                  <div className="rounded-3xl p-5 border border-purple-600 shadow-md bg-blue-50">
                    <CommonParagraph1 className="">
                      {item.teamNote}
                    </CommonParagraph1>
                  </div>
                </div>
              ) : (
                <></>
              )}
              {item.subTeamcategory.length > 1 ? (
                <>
                <CommonHeader2 className="text-center text-purple-600 my-7">
                        {item.team}
                      </CommonHeader2>
                  {item.subTeamcategory.map((items) => (
                    <div key={items.id} className="w-full space-y-7 mt-7">
                      <img
                        src={items.prfile}
                        alt="profile "
                        className="border border-purple-600 rounded-3xl"
                      />
                      <div className="rounded-3xl p-5 border border-purple-600 shadow-md bg-blue-50">
                        <CommonParagraph3 className=" text-purple-600">
                          {items.team}
                        </CommonParagraph3>
                        <CommonParagraph1 className="">
                          {items.teamNote}
                        </CommonParagraph1>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <></>
              )}
            </div>
          ))}
          <img />
        </div>
      </section>
    </>
  );
};
export default TeamProfileSection;
