import { TeamProfileImage, TeamProfileImage1 } from "assets";

export default function TeamProfileSection() {
  return (
    <section className="w-full relative">
      <div className="relative">
        {/* TeamProfileImage1 for small and medium screens, TeamProfileImage for large screens */}
        <img
          src={TeamProfileImage1}
          alt=""
          className="w-full h-auto relative block lg:hidden"
        />
        <img
          src={TeamProfileImage}
          alt=""
          className="w-full h-auto relative hidden lg:block"
        />
        <div className="absolute inset-x-0 md:bottom-0 top-0 flex flex-col items-center text-center justify-center">
          <h2 className="font-bold text-yellow-300 md:text-5xl sm:text-xl">
            Team Profile
          </h2>
          <h3 className="md:text-2xl font-bold text-white max-w-2xl sm:text-sm mx-auto">
            The Creative Minds and Artists Working Behind the Scenes
          </h3>

          <p className="mt-4 text-white max-w-2xl mx-auto pb-3 md:text-base text-[12px]">
            At Educare Skill, we have a dedicated team of young Bhutanese
            professionals with a deep passion for the art of storytelling and
            content development.
          </p>
        </div>
      </div>
    </section>
  );
}
