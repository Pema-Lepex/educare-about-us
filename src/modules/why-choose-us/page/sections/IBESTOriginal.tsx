import { useState } from "react";
import { EducareKIds } from "assets/content/why-choose-us/WhyChooseUs";
import type { educareKidsProp, educareKideItemsProps } from "props/Commonprops";
import { CommonHeader4, CommonParagraph1, CommonParagraph2, CommonParagraph3 } from "components";

const Chevron = ({ open }: { open: boolean }) =>
  <svg
    className={`h-5 w-5 transition-transform duration-200 ${open
      ? "rotate-180"
      : "rotate-0"}`}
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
      clipRule="evenodd"
    />
  </svg>;

export default function IBESTOriginal() {
  const blocks: educareKidsProp[] = EducareKIds;

  const [openId, setOpenId] = useState<string | null>("animation"); 

  return (
    <section className="mx-auto max-w-5xl 3xl:max-w-full 3xl:px-36 rounded-2xl border border-emerald-200 bg-white shadow-[0_12px_22px_rgba(0,0,0,0.08)] pb-10 my-12 space-y-4 xl:space-y-5 4xl:space-y-10">
      <div className="px-6 pt-6 space-y-4 xl:space-y-5 4xl:space-y-10">
          <CommonHeader4 className=" font-extrabold text-emerald-600">
            iBEST Originals Content
          </CommonHeader4>
          <CommonParagraph1 className="mt-2 text-slate-600">
            Happy hours for all
          </CommonParagraph1>
        </div>
      {blocks.map(item => {
        const isOpen = openId === item.id;

        return (
          <div
            key={item.id}
            className={[
              "rounded-2xl border bg-white shadow-[0_10px_18px_rgba(0,0,0,0.08)] mx-6 mt-5 mb-5",
              item.borderClass
            ].join(" ")}
          >
            {/* Header */}
            <button
              type="button"
              onClick={() => {
                if (!item.isAccordion) return;
                setOpenId(prev => (prev === item.id ? null : item.id));
              }}
              className={[
                "flex w-full items-start justify-between gap-4 px-6 py-5 text-left",
                item.isAccordion ? "cursor-pointer" : "cursor-default"
              ].join(" ")}
            >
              <div className="space-y-4 xl:space-y-5 4xl:space-y-10">
                <CommonHeader4  className={`t font-extrabold ${item.titleClass}`}>
                  {item.title}
                </CommonHeader4 >
                <CommonParagraph1 className="mt-2 leading-relaxed text-slate-600">
                  {item.desc}
                </CommonParagraph1>
              </div>

              {item.isAccordion
                ? <div className="mt-1 text-slate-500">
                    <Chevron open={isOpen} />
                  </div>
                : null}
            </button>

            {/* Body */}
            {item.isAccordion
              ? <div
                  className={[
                    "grid overflow-hidden px-6 transition-all duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr] pb-0"
                  ].join(" ")}
                >
                  <div className="min-h-0 space-y-4">
                    {(item.items || []).map((it: string | educareKideItemsProps) => {
                      if (typeof it === "string") {
                        return (
                          <div
                            key={it}
                            className={"rounded-xl px-5 py-4 shadow-[0_6px_14px_rgba(0,0,0,0.06)]"}
                          >
                            <CommonParagraph1 className=" font-extrabold text-slate-800">
                              {it}
                            </CommonParagraph1>
                          </div>
                        );
                      }

                      return (
                        <div
                          key={it.title}
                          className={[
                            "rounded-xl px-5 py-4 shadow-[0_6px_14px_rgba(0,0,0,0.06)] ",
                            it.bgClass
                          ].join(" ")}
                        >
                          <CommonParagraph1 className="font-extrabold text-slate-800">
                            {it.title}
                          </CommonParagraph1>
                          <CommonParagraph2 className="mt-2 leading-relaxed text-slate-600">
                            {it.desc}
                          </CommonParagraph2>
                        </div>
                      );
                    })}
                  </div>
                </div>
              : null}
          </div>
        );
      })}
    </section>
  );
}
