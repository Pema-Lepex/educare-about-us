import { PrimaryLevel } from "assets/content/why-choose-us/WhyChooseUs";
import { CommonHeader4, CommonParagraph1, CommonParagraph2, CommonParagraph3 } from "components";

type Item = {
  title: string;
  desc: string;
  bgClass: string; // pastel background per card
};

const PrimaryLevelContent: React.FC = () => {

  return (
    <section className="px-4 py-10">
      <div className="mx-auto max-w-5xl 3xl:max-w-full 3xl:px-36 rounded-2xl border pb-10 border-emerald-200 bg-white shadow-[0_12px_22px_rgba(0,0,0,0.08)]">
        <div className="px-6 pt-6 space-y-4 xl:space-y-5 4xl:space-y-10">
          <CommonHeader4 className=" font-extrabold text-emerald-600">
            Primary Level Content
          </CommonHeader4>
          <CommonParagraph1 className="mt-2 text-slate-600">
            Comprehensive Dzongkha lessons, excting stories and other entertaining content for Classes PP - VI
          </CommonParagraph1>
        </div>

        <div className=" px-6 pb-6 pt-5 space-y-4 xl:space-y-5 4xl:space-y-10">
          {PrimaryLevel.map(it =>
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

export default PrimaryLevelContent;
