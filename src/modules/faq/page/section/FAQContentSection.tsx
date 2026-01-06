import React, { useState } from "react";
import { educareSkillFAQ } from "assets/content/faq/FAQ";
import {
  renderFormattedText,
  renderTextWithLinks,
} from "utils/helpers/renderTextWithLinks";
import { CommonHeader1, CommonParagraph1 } from "components";

interface AccordionItemProps {
  header: string;
  text: string;
  isActive: boolean;
  onToggle: () => void;
  accentColor: string; // New prop for dynamic coloring
}

const colors = [
  "#F34800", // orange
  "#981AF7", // purple
  "#00A642", // green
  "#E5001A", // red
  "#215FF8", // blue
  "#FFA202", // yellow
];

const AccordionItem: React.FC<AccordionItemProps> = ({
  header,
  text,
  isActive,
  onToggle,
  accentColor,
}) => {
  return (
    <div
      className={`mb-6 w-full rounded-2xl bg-white transition-all duration-300 border shadow-sm hover:shadow-md`}
      style={{ borderColor: accentColor }}
    >
      <button
        className="flex w-full items-center justify-between p-5 text-left focus:outline-none"
        onClick={onToggle}
      >
        <div className="w-full flex items-center justify-between">
          <h4
            className="md:text-2xl text:lg  font-bold text-slate-800"
            style={{ color: accentColor }}
          >
            {header && renderTextWithLinks(header)}
          </h4>
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
            style={{ backgroundColor: `${accentColor}15` }}
          >
            <svg
              className={`duration-300 ease-in-out ${
                isActive ? "rotate-180" : ""
              }`}
              width="17"
              height="10"
              viewBox="0 0 17 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.28687 8.43257L15.7631 2.70784C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.5249 1.38489 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063"
                stroke={accentColor}
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isActive ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pb-6 px-5">
          <CommonParagraph1 className="text-base font-medium leading-relaxed whitespace-pre-line">
            {text && renderFormattedText(text, accentColor)}
          </CommonParagraph1>
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative z-20 overflow-hidden pb-20 pt-16 lg:pb-[90px] md:mb-10">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <CommonHeader1 className=" font-extrabold text-slate-900 ">
            Frequently Asked Questions
          </CommonHeader1>
          <div className="mt-4 h-1.5 w-24 bg-primary-500 mx-auto rounded-full"></div>
        </div>

        <div className="mx-auto max-w-6xl 3xl:max-w-[70%]">
          {educareSkillFAQ?.faqs.map((faq: any, index: number) => (
            <AccordionItem
              key={index}
              header={faq.question}
              text={faq.answer}
              isActive={activeIndex === index}
              onToggle={() => handleToggle(index)}
              accentColor={colors[index % colors.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
