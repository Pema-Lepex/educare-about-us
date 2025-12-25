import { CommonHeader4, CommonParagraph2, CommonParagraph3 } from "components";

type Item = {
  title: string;
  desc: string;
  bgClass: string; // pastel background per card
};

const PrimaryLevelContent: React.FC = () => {
  const items: Item[] = [
    {
      title: "Gakyid Lobdra (ECCD to Class VI)",
      desc:
        "The Gakyid Lobdra series is a foundational Dzongkha series where our lively class learns foundational lessons and concepts through fun exercises and engaging activities.",
      bgClass: "bg-orange-50"
    },
    {
      title: "Basic Dzongkha (Classes PP to VI)",
      desc:
        "The Basic Dzongkha series introduces fundamental grammar and language concepts, transforming classroom learning into simplified and interactive lessons.",
      bgClass: "bg-violet-50"
    },
    {
      title:
        "Read Aloud Stories, Essays, and Poems from Textbooks (Class IV-XII)",
      desc:
        "Stories, essays, and poems from textbooks are available as read-aloud videos, featuring soothing narration and beautiful illustrations that help students learn Dzongkha through engaging visuals.",
      bgClass: "bg-emerald-50"
    },
    {
      title: "Exam-Oriented Tutorials (Class IV-XII)",
      desc:
        "In-depth exam-oriented tutorials, such as Q&As and MCQs are provided, enabling students to prepare for their exams effectively by practicing solved questions from past papers.",
      bgClass: "bg-rose-50"
    }
  ];

  return (
    <section className="px-4 py-10">
      <div className="mx-auto max-w-5xl rounded-2xl border border-emerald-200 bg-white shadow-[0_12px_22px_rgba(0,0,0,0.08)]">
        <div className="px-6 pt-6">
          <CommonHeader4 className=" font-extrabold text-emerald-600">
            Primary Level Content
          </CommonHeader4>
          <CommonParagraph2 className="mt-2 text-slate-600">
            Comprehensive content for Classes PP to VI
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

export default PrimaryLevelContent;
