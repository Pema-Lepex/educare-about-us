import { TeamProfileImage, TeamProfileImage1 } from "assets";
import { CommonHeader1, CommonHeader3, CommonHeader4, CommonParagraph3 } from "components";

export default function TeamProfileSection() {
  return (
    <section className="w-full relative">
      <div className="relative">
        <img
          src={TeamProfileImage1}
          alt=""
          className="w-full h-auto block lg:hidden"
        />

        <img
          src={TeamProfileImage}
          alt=""
          className="w-full h-auto hidden lg:block"
        />

        <div className="absolute inset-0 bg-blue-500/50" />

        <div className="absolute inset-x-0 md:bottom-0 top-0 flex flex-col items-center text-center justify-center">
          <CommonHeader1 className="font-bold text-yellow-300">
            Team Profile
          </CommonHeader1>
          <CommonHeader4 className=" font-bold text-white max-w-2xl mx-auto">
            The Creative Minds and Artists Working Behind the Scenes
          </CommonHeader4>

          <CommonParagraph3 className="md:mt-4 mt-1 text-white max-w-2xl mx-auto pb-3 ">
            At Educare Skill, we have a dedicated team of young Bhutanese
            professionals with a deep passion for the art of storytelling and
            content development.
          </CommonParagraph3>
        </div>
      </div>
    </section>
  );
}
