import { TeamProfileImage } from "assets";

export default function TeamProfileSection() {
  return (
    <section className="w-full relative">
      <div className="relative">
        <img src={TeamProfileImage} alt="" className="w-full h-auto relative" />
        <div className="absolute top-0" ></div>
       
      </div>
       {/* <div className="relative max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Team Profile
          </h2>
          <h3 className="text-3xl font-bold text-white md:text-5xl">
            The Creative Minds and Artists Working Behind the Scenes
          </h3>
          <p className="mt-4 text-white max-w-2xl">
            At Educare Skill, we have a dedicated team of young Bhutanese
            professionals with a deep passion for the art of storytelling and
            content development.
          </p>
        </div> */}
    </section>
  );
}
