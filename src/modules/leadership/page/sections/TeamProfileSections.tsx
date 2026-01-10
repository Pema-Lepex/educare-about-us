import { TeamProfile, TeamProfileHeader } from "assets/content/team/Team";
import {
  CommonHeader2,
  CommonHeader3,
  CommonParagraph1,
  CommonParagraph3,
} from "components";
import { renderTextWithLinks } from "utils/helpers/renderTextWithLinks";

const TeamProfileSection: React.FC = () => {
  return (
    <>
      <section className="space-y-10 max-w-7xl 3xl:max-w-full 3xl:px-36 mx-auto">
        <div className="text-center space-y-4 4xl:space-y-10">
          <div className="relative inline-block w-full">
            <CommonHeader2 className="text-customOriange-200 ">
              {TeamProfileHeader.title}
            </CommonHeader2>
            <CommonParagraph1 className=" w-full flex justify-center text-primary-300 font-bold top-10 text-xl">
              {TeamProfileHeader.fame}
            </CommonParagraph1>
          </div>
          <CommonParagraph1 className="text-primary-500 font-bold">
            {TeamProfileHeader.subTitle}
          </CommonParagraph1>
          <CommonParagraph3 className="text-primary-500">
            {renderTextWithLinks(TeamProfileHeader.description)}
          </CommonParagraph3>
        </div>
        <div>
          {TeamProfile.map((item) => (
            <div key={item.id} className="">
              {item.subTeamcategory.length < 1 ? (
                <div className="w-full space-y-7 mt-7">
                  <CommonHeader3 className={`text-center text-purple-600`}>
                    {item.team}
                  </CommonHeader3>
                  <img
                    src={item.prfile}
                    alt="profile "
                    className="border rounded-3xl w-full"
                  />
                  <div className="rounded-3xl p-5 border border-purple-600 shadow-md bg-blue-50">
                    <CommonParagraph3 className=" text-purple-600">
                      {item.team}
                    </CommonParagraph3>
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
                  <CommonHeader3 className="text-center text-purple-600 my-7">
                    {item.team}
                  </CommonHeader3>
                  {item.subTeamcategory.map((items) => (
                    <div key={items.id} className="w-full space-y-7 mt-7">
                      <img
                        src={items.prfile}
                        alt="profile "
                        className="border rounded-3xl w-full"
                      />
                      <div className="rounded-3xl p-5 border border-purple-600 shadow-md bg-blue-50 space-y-2 2xl:space-y-4 4xl:space-y-6">
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
