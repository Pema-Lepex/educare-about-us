import { useEffect, useState } from "react";
import { whyChooseUsDetails } from "assets/content/why-choose-us/WhyChooseUs";
import CheyCheyContent from "./CheyChey";
import EducareKidsSection from "./EducareKids";
import IntermediateLevelContent from "./IntermidateLevel";
import PrimaryLevelContent from "./PrimaryLevel";
import {
  BCSEIcon,
  CheCheyIcon,
  EducareSkillIcon,
  iBestOrognalIcon,
  IntermediateLevelIcon,
  PrimaryLevelIcon,
} from "assets";
import { useSearchParams } from "react-router-dom";
import { CommonHeader3, CommonParagraph1, CommonParagraph2 } from "components";
import Graduate from "./Graduate";
import IBESTOriginal from "./IBESTOriginal";
import { renderTextWithLinks } from "utils/helpers/renderTextWithLinks";

type TabKey =
  | "cheychey"
  | "kids"
  | "primary"
  | "intermediate"
  | "graduate"
  | "ibest";
interface ContentButton {
  key: TabKey;
  label: string;
  icon: string;
}

const ContentButtons: ContentButton[] = [
  { key: "cheychey", label: "Chey Chey", icon: CheCheyIcon },
  { key: "kids", label: "Educare Kids", icon: EducareSkillIcon },
  {
    key: "primary",
    label: "Primary Level",
    icon: PrimaryLevelIcon,
  },
  {
    key: "intermediate",
    label: "Intermediate Level",
    icon: IntermediateLevelIcon,
  },
  { key: "graduate", label: "Graduate/BCSE", icon: BCSEIcon },
  {
    key: "ibest",
    label: "iBEST Originals",
    icon: iBestOrognalIcon,
  },
];

const MainSectionPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<TabKey>("cheychey");

  const features = whyChooseUsDetails;

  const themeToTab: Record<string, TabKey> = {
    orange: "cheychey",
    purple: "kids",
    green: "primary",
    red: "intermediate",
    blue: "cheychey",
  };

  const borderByTheme: Record<string, string> = {
    orange: "border-[#FF7A00]",
    purple: "border-[#8B5CF6]",
    green: "border-[#22C55E]",
    red: "border-[#EF4444]",
    blue: "border-[#3B82F6]",
  };

  const titleByTheme: Record<string, string> = {
    orange: "text-[#FF7A00]",
    purple: "text-[#8B5CF6]",
    green: "text-[#22C55E]",
    red: "text-[#EF4444]",
    blue: "text-[#3B82F6]",
  };
  useEffect(() => {
    const tabFromUrl = searchParams.get("tab") as TabKey;
    if (
      tabFromUrl &&
      [
        "cheychey",
        "kids",
        "primary",
        "intermediate",
        "graduate",
        "ibest",
      ].includes(tabFromUrl)
    ) {
      setActiveTab(tabFromUrl);

      const contentElement = document.getElementById("content-anchor");
      if (contentElement) {
        contentElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [searchParams]);
  return (
    <div className="bg-white ">
      <section className="-mt-16 px-4 pb-10 absolute w-full">
        <div className="mx-auto grid max-w-6xl 3xl:max-w-full 3xl:px-36 px-0 grid-cols-1 gap-5 4xl:gap-12 lg:grid-cols-6">
          {features.map((f, idx) => {
            const gridClasses = "col-span-1";
            const gridClassess =
              idx < 3
                ? "col-span-2"
                : idx === 3
                ? "col-span-2 lg:col-start-2"
                : "col-span-2 lg:col-start-4";
            return (
              <div
                key={f.title}
                role="button"
                tabIndex={0}
                onClick={() => setActiveTab(themeToTab[f.theme])}
                className={`rounded-2xl border-t-4 bg-white p-5 shadow-md ${
                  borderByTheme[f.theme]
                } ${gridClasses} ${gridClassess} cursor-pointer`}
              >
                <div className="flex flex-col items-start gap-3 4xl:gap-6 4xl:p-8">
                  <div className="grid p-3 place-items-center rounded-xl bg-gray-50 4xl:mb-2">
                    <f.icon
                      className={`w-6 h-6 4xl:w-10 4xl:h-10 5xl:w-14 5xl:h-14 ${
                        titleByTheme[f.theme]
                      }`}
                    />
                  </div>
                  <div>
                    <CommonParagraph1
                      className={` font-extrabold 4xl:mb-4 ${
                        titleByTheme[f.theme]
                      }`}
                    >
                      {f.title}
                    </CommonParagraph1>
                    <CommonParagraph1 className="mt-1 leading-relaxed text-gray-700">
                      {renderTextWithLinks(f.desc)}
                    </CommonParagraph1>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="px-4 pb-16  pt-[1850px] xs:pt-[1500px] sm:pt-[1400px] md:pt-[1350px] lg:pt-[850px] xl:pt-[820px] 2xl:pt-[950px] 3xl:pt-[850px] 4xl:pt-[1200px] 5xl:pt-[1300px]">
        <CommonHeader3 className="text-center font-extrabold tracking-wide text-[#0B2A4A] 4xl:mb-12">
          CONTENT AVAILABLE ON EDUCARE SKILL
        </CommonHeader3>
        <div className="md:mx-20 mt-4 flex flex-wrap justify-center max-w-8xl gap-4 lg:rounded-full rounded-lg border bg-blue-50 px-3 py-2">
          {ContentButtons.map((button) => (
            <button
              key={button.key}
              onClick={() => setActiveTab(button.key)}
              className={[
                "rounded-full border py-2 px-4 text-xs md:text-base font-semibold transition flex items-center justify-center whitespace-nowrap ",
                activeTab === button.key
                  ? "border-violet-400 bg-white shadow-[0_10px_18px_rgba(139,92,246,0.18)]"
                  : "border-blue-100 bg-blue-50 hover:bg-blue-100",
              ].join(" ")}
            >
              <img
                src={button.icon}
                alt="icon"
                className="size-4 xl:size-5 2xl:size-6 4xl:size-8 5xl:size-9 mr-2 flex-shrink-0"
              />
              <span>
                <CommonParagraph2>{button.label}</CommonParagraph2>
              </span>
            </button>
          ))}
        </div>
        <div className="mx-auto mt-4 max-w-6xl 3xl:max-w-full 3xl:px-36 px-0 mb-20">
          {activeTab === "cheychey" && <CheyCheyContent />}
          {activeTab === "kids" && <EducareKidsSection />}
          {activeTab === "primary" && <PrimaryLevelContent />}
          {activeTab === "intermediate" && <IntermediateLevelContent />}
          {activeTab === "graduate" && <Graduate />}
          {activeTab === "ibest" && <IBESTOriginal />}
        </div>
      </section>
    </div>
  );
};

export default MainSectionPage;
