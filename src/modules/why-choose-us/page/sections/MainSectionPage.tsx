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

type TabKey =
  | "cheychey"
  | "kids"
  | "primary"
  | "intermediate"
  | "graduate"
  | "ibest";

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

  // content is rendered by individual section components (CheyCheyContent, EducareKidsSection, etc.)

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
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gray-50 4xl:mb-2">
                    <img
                      src={f.icon}
                      alt=""
                      className="h-9 w-9 4xl:w-12 4xl:h-12 5xl:w-16 5xl:h-16 object-contain"
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
                      {f.desc}
                    </CommonParagraph1>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="px-4 pb-16  md:pt-[1050px] lg:pt-[600px] 2xl:pt-[650px] 4xl:pt-[950px] 5xl:pt-[1100px] pt-[1200px]">
        <CommonHeader3 className="text-center font-extrabold tracking-wide text-[#0B2A4A] 4xl:mb-12">
          CONTENT AVAILABLE ON EDUCARE SKILL
        </CommonHeader3>

        <div className="md:mx-20 mt-5 grid grid-cols-2 lg:grid-cols-6 max-w-8xl gap-4 lg:rounded-full rounded-lg border bg-blue-50 px-3 py-2">
          {(
            [
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
            ] as { key: TabKey; label: string; icon: string }[]
          ).map((t) => (
            <button
              key={t.key}
              onClick={() => setActiveTab(t.key)}
              className={[
                // w-full makes it fill the grid cell
                // min-w-0 is REQUIREMENT for truncation to work inside a Grid
                "rounded-full border py-2 px-3 text-xs md:text-base font-semibold transition flex items-center justify-center flex-nowrap w-full min-w-0 overflow-hidden",
                activeTab === t.key
                  ? "border-violet-400 bg-white shadow-[0_10px_18px_rgba(139,92,246,0.18)]"
                  : "border-blue-100 bg-blue-50 hover:bg-blue-100",
              ].join(" ")}
            >
              <img
                src={t.icon}
                alt="icon"
                // flex-shrink-0 keeps the icon from squishing
                className="size-4 xl:size-5 2xl:size-6 4xl:size-8 5xl:size-9 mr-2 flex-shrink-0"
              />

              {/* This span must have truncate and min-w-0 */}
              <span className="truncate min-w-0">
                <CommonParagraph2>{t.label}</CommonParagraph2>
              </span>
            </button>
          ))}
        </div>
        {/* Panel - render the matching section component */}
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
