import { GraduateContent, IntermediateLevel } from "assets/content/why-choose-us/WhyChooseUs";
import { CommonHeader4, CommonParagraph1, CommonParagraph2, CommonParagraph3 } from "components";

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

const Graduate: React.FC = () => {
  const items: Item[] = GraduateContent.map((item, index) => ({
    title: item.title,
    desc: item.desc,
    bgClass: item.bgClass || bgClasses[index % bgClasses.length]
  }));

  return (
    <section className="px-4 py-10 ">
      <div className="mx-auto max-w-5xl 3xl:max-w-full 3xl:px-36 rounded-2xl border border-yellow-200 bg-white shadow-[0_12px_22px_rgba(0,0,0,0.08)] pb-10 space-y-4 xl:space-y-5 4xl:space-y-10">
        <div className="px-6 pt-6 space-y-4 xl:space-y-5 4xl:space-y-10">
          <CommonHeader4 className="font-extrabold text-rose-600">
            Graduate / BCSE Content
          </CommonHeader4>
          <CommonParagraph1 className="mt-2 text-slate-600">
           Comprehensive Dzongkha lessons covering grammar and language, reading and writing concepts, easy-to-understand and simplified narration and explanations of difficult terminologies, exam-oriented tutorials, and solved questions (MCQs and Q&As), which are mandatory Dzongkha test parameters for the RCSC examinations, and for anyone wishing to improve their Dzongkha.
          </CommonParagraph1>
        </div>

        <div className="space-y-4 px-6 pb-6 pt-5 xl:space-y-5 4xl:space-y-10">
          {items.map(it =>
            <div
              key={it.title}
              className={[
                "rounded-xl px-6 py-5 shadow-[0_8px_16px_rgba(0,0,0,0.06)]",
                it.bgClass
              ].join(" ")}
            >
              <CommonParagraph1 className="text-sm font-extrabold text-slate-800">
                {it.title}
              </CommonParagraph1>
              <CommonParagraph2 className="mt-2 text-sm leading-relaxed text-slate-600">
                {it.desc}
              </CommonParagraph2>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Graduate;
