import { IntermediateLevel } from "assets/content/why-choose-us/WhyChooseUs";
import { CommonHeader4, CommonParagraph2, CommonParagraph3 } from "components";

type Item = {
  title: string;
  desc: string;
  bgClass: string;
};

const bgClasses = [
  "bg-orange-50",
  "bg-violet-50",
  "bg-emerald-50",
  "bg-rose-50",
  "bg-slate-50",
  "bg-yellow-50",
  "bg-orange-50"
];

const IntermediateLevelContent: React.FC = () => {
  const items: Item[] = IntermediateLevel.map((it, i) => ({
    title: it.title,
    desc: it.desc,
    bgClass: it.bgClass || bgClasses[i % bgClasses.length]
  }));

  return (
    <section className="px-4 py-10">
      <div className="mx-auto max-w-5xl rounded-2xl border border-rose-200 bg-white shadow-[0_12px_22px_rgba(0,0,0,0.08)]">
        <div className="px-6 pt-6">
          <CommonHeader4 className="font-extrabold text-rose-600">
            Intermediate Level Content
          </CommonHeader4>
          <CommonParagraph2 className="mt-2 text-slate-600">
            Advanced content for Classes VII - XII
          </CommonParagraph2>
        </div>

        <div className="space-y-4 px-6 pb-6 pt-5">
          {items.map(it =>
            <div
              key={it.title}
              className={[
                "rounded-xl px-6 py-5 shadow-[0_8px_16px_rgba(0,0,0,0.06)]",
                it.bgClass
              ].join(" ")}
            >
              <CommonParagraph2 className="text-sm font-extrabold text-slate-800">
                {it.title}
              </CommonParagraph2>
              <CommonParagraph3 className="mt-2 text-sm leading-relaxed text-slate-600">
                {it.desc}
              </CommonParagraph3>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default IntermediateLevelContent;
