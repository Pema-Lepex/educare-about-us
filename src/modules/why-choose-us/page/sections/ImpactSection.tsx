import { useState } from "react";
import { whyChooseUsDetails } from "assets/content/why-choose-us/WhyChooseUs";
import CheyCheyContent from "./cheyChey";
import EducareKidsSection from "./educareKids";
import IntermediateLevelContent from "./intermidateLevel";
import PrimaryLevelContent from "./primaryLevel";
import { CheCheyIcon, EducareSkillIcon, IntermediateLevelIcon, PrimaryLevelIcon } from "assets";

type TabKey = "cheychey" | "kids" | "primary" | "intermediate";

const ImpactSectionPage: React.FC = () => {
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

  return (
    <div className="bg-white ">
      <section className="-mt-16 px-4 pb-10 absolute w-full">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-5 md:grid-cols-6">
          {features.map((f, idx) => {
            const gridClasses =
              idx < 3
                ? "col-span-2"
                : idx === 3
                ? "col-span-2 md:col-start-2"
                : "col-span-2 md:col-start-4";

            return (
              <div
                key={f.title}
                role="button"
                tabIndex={0}
                onClick={() => setActiveTab(themeToTab[f.theme])}
                className={`rounded-2xl border-2 bg-white p-5 shadow-[0_10px_20px_rgba(0,0,0,0.08)] ${
                  borderByTheme[f.theme]
                } ${gridClasses} cursor-pointer`}
              >
                <div className="flex flex-col items-start gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gray-50">
                    <img
                      src={f.icon}
                      alt=""
                      className="h-9 w-9 object-contain"
                    />
                  </div>
                  <div>
                    <h3
                      className={`text-sm font-extrabold ${
                        titleByTheme[f.theme]
                      }`}
                    >
                      {f.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-gray-700">
                      {f.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="px-4 pb-16 lg:pt-[400px] pt-[1000px]">
        <h2 className="text-center text-2xl font-extrabold tracking-wide text-[#0B2A4A]">
          CONTENT AVAILABLE ON EDUCARE SKILL
        </h2>

        <div className="mx-auto mt-5 grid lg:grid-cols-4 grid-cols-2 max-w-5xl flex-wrap justify-center gap-6 lg:rounded-full rounded-lg border bg-blue-50 px-3 py-2">
          {(
            [
              { key: "cheychey", label: "Chey Chey",icon: CheCheyIcon },
              { key: "kids", label: "Educare Kids", icon:EducareSkillIcon },
              { key: "primary", label: "Primary Level", icon:PrimaryLevelIcon },
              { key: "intermediate", label: "Intermediate Level", icon:IntermediateLevelIcon },
            ] as { key: TabKey; label: string, icon:string }[]
          ).map((t) => (
            <button
              key={t.key}
              onClick={() => setActiveTab(t.key)}
              className={[
                "rounded-full border  justify-center py-2 text-xs font-semibold transition flex gap-1 items-center",
                activeTab === t.key
                  ? "border-violet-400 bg-white shadow-[0_10px_18px_rgba(139,92,246,0.18)]"
                  : "border-blue-100 bg-blue-50 hover:bg-blue-100",
              ].join(" ")}
            >
             <img src={t.icon} alt="gh" className="size-4"/> {t.label}
            </button>
          ))}
        </div>
        {/* Panel - render the matching section component */}
        <div className="mx-auto mt-4 max-w-5xl mb-20">
          {activeTab === "cheychey" && <CheyCheyContent />}
          {activeTab === "kids" && <EducareKidsSection />}
          {activeTab === "primary" && <PrimaryLevelContent />}
          {activeTab === "intermediate" && <IntermediateLevelContent />}
        </div>
      </section>
    </div>
  );
};

export default ImpactSectionPage;
