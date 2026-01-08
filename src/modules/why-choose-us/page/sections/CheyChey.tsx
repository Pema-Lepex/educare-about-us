import { CheyCheyData } from "assets/content/why-choose-us/WhyChooseUs";
import { CommonHeader3, CommonHeader4, CommonParagraph1, CommonParagraph2, CommonParagraph3 } from "components";

const GamepadIcon = () =>
  <svg
    className="size-4 xl:size-5 2xl:size-6 4xl:size-8 5xl:size-9 text-slate-500"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M6.5 8.5A4.5 4.5 0 0 0 2 13v3.2A3.8 3.8 0 0 0 5.8 20h.4a3.7 3.7 0 0 0 2.8-1.3l1.2-1.4a2.5 2.5 0 0 1 3.6 0l1.2 1.4A3.7 3.7 0 0 0 19.8 20h.4A3.8 3.8 0 0 0 24 16.2V13a4.5 4.5 0 0 0-4.5-4.5h-13zM8.3 12.4h1.2v1.2h1.2v1.2H9.5V16H8.3v-1.2H7.1v-1.2h1.2v-1.2zM17.2 13.2a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm2.1 2.1a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
  </svg>;

const CheyCheyContent: React.FC = () => {
  const entry = CheyCheyData?.[0] ?? { title: "CheyChey", intro: "", games: [] };
  const items = entry.games || [];

  // split into 2 columns (left/right)
  const left = items.filter((_, i) => i % 2 === 0);
  const right = items.filter((_, i) => i % 2 === 1);

  return (
    <section className="px-4 py-10">
      <div className="mx-auto max-w-5xl 3xl:max-w-full 3xl:px-36 rounded-2xl border-2 border-violet-300 bg-white shadow-[0_12px_22px_rgba(0,0,0,0.08)]">
        <div className="px-6 pt-6 space-y-4 xl:space-y-5 4xl:space-y-10">
          <CommonHeader4 className=" font-extrabold text-violet-600">
            {entry.title}
          </CommonHeader4>
          <CommonParagraph1 className="mt-3 text-sm leading-relaxed text-slate-600">
            {entry.intro}
          </CommonParagraph1>
        </div>

        {/* Pills */}
        <div className="grid grid-cols-1 gap-4 px-6 pb-6 pt-6 md:grid-cols-2">
          <div className="space-y-4 xl:space-y-5 4xl:space-y-10">
            {left.map(items =>
              <div
                key={items}
                className="flex items-center gap-3 rounded-xl bg-violet-50 px-4 py-3 shadow-[0_8px_16px_rgba(0,0,0,0.06)]"
              >
                <GamepadIcon />
                <CommonParagraph2 className="text-sm font-semibold text-slate-700">
                  {items}
                </CommonParagraph2>
              </div>
            )}
          </div>

          <div className="space-y-4 xl:space-y-5 4xl:space-y-10">
            {right.map(item =>
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl bg-violet-50 px-4 py-3 shadow-[0_8px_16px_rgba(0,0,0,0.06)]"
              >
                <GamepadIcon/>
                <CommonParagraph2 className="text-sm font-semibold text-slate-700">
                  {item}
                </CommonParagraph2>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheyCheyContent;
