import { useState } from "react";
import { EducareKIds } from "assets/content/why-choose-us/WhyChooseUs";
import type { educareKidsProp, educareKideItemsProps } from "props/Commonprops";

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

export default function ContentAccordionSection() {
  const blocks: educareKidsProp[] = EducareKIds;

  const [openId, setOpenId] = useState<string | null>("animation"); 

  return (
    <section className="mx-auto w-full max-w-4xl space-y-6 px-4 py-10">
      {blocks.map(b => {
        const isOpen = openId === b.id;

        return (
          <div
            key={b.id}
            className={[
              "rounded-2xl border bg-white shadow-[0_10px_18px_rgba(0,0,0,0.08)]",
              b.borderClass
            ].join(" ")}
          >
            {/* Header */}
            <button
              type="button"
              onClick={() => {
                if (!b.isAccordion) return;
                setOpenId(prev => (prev === b.id ? null : b.id));
              }}
              className={[
                "flex w-full items-start justify-between gap-4 px-6 py-5 text-left",
                b.isAccordion ? "cursor-pointer" : "cursor-default"
              ].join(" ")}
            >
              <div>
                <h3 className={`text-base font-extrabold ${b.titleClass}`}>
                  {b.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {b.desc}
                </p>
              </div>

              {b.isAccordion
                ? <div className="mt-1 text-slate-500">
                    <Chevron open={isOpen} />
                  </div>
                : null}
            </button>

            {/* Body */}
            {b.isAccordion
              ? <div
                  className={[
                    "grid overflow-hidden px-6 transition-all duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr] pb-0"
                  ].join(" ")}
                >
                  <div className="min-h-0 space-y-4">
                    {(b.items || []).map((it: string | educareKideItemsProps) => {
                      if (typeof it === "string") {
                        return (
                          <div
                            key={it}
                            className={"rounded-xl px-5 py-4 shadow-[0_6px_14px_rgba(0,0,0,0.06)]"}
                          >
                            <h4 className="text-sm font-extrabold text-slate-800">
                              {it}
                            </h4>
                          </div>
                        );
                      }

                      return (
                        <div
                          key={it.title}
                          className={[
                            "rounded-xl px-5 py-4 shadow-[0_6px_14px_rgba(0,0,0,0.06)]",
                            it.bgClass
                          ].join(" ")}
                        >
                          <h4 className="text-sm font-extrabold text-slate-800">
                            {it.title}
                          </h4>
                          <p className="mt-2 text-sm leading-relaxed text-slate-600">
                            {it.desc}
                          </p>
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
