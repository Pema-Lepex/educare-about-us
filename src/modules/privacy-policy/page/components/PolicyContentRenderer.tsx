import React from "react";
import { CommonParagraph } from "components";
import { renderTextWithLinks } from "utils/helpers/renderTextWithLinks";
import { ContentProps } from "props/Commonprops";

const listStyles: any = {
  decimal: "list-decimal" ,
  disc: "list-disc",
};

interface PolicyContentProps {
  content?: ContentProps[] | null;
  contentWithNO?: ContentProps[] | null;
}

const PolicyContentRenderer = ({
  content,
  contentWithNO,
}: PolicyContentProps) => {
  const renderItem = (item: ContentProps | undefined, index: number, isNumbered: boolean) => {

    

    if (item?.type === "paragraph") {
      const prefix = isNumbered ? `${index + 1}. ` : "";
      return (
        <CommonParagraph
          key={index}
          className="mb-4 text-gray-700 leading-relaxed"
        >
          {isNumbered && <span className="mr-1">{prefix}</span>}
          {renderTextWithLinks(item?.text)}
        </CommonParagraph>
      );
    }

    if (item?.type === "list") {
      const prefix = isNumbered ? `${index + 1}. ` : "";
      return (
        <div key={index} className="mb-6">
          {item?.title && (
            <CommonParagraph
              key={index}
              className="mb-4 text-gray-700 leading-relaxed"
            >
              {isNumbered && <span className="mr-1">{prefix}</span>}
              {item?.title}
            </CommonParagraph>
          )}

          <ul
            className={`${
              listStyles[((item?.style) ?? "disc") as keyof typeof listStyles] || "list-disc"
            } ml-6 space-y-2 text-gray-700`}
          >
            {(item?.items ?? []).map((listItem: string, i: number) => (
              <li key={i} className="leading-relaxed">
                {renderTextWithLinks(listItem)}
              </li>
            ))}
          </ul>
        </div>
      );
    }

    return null;
  };

  return (
    <>
      {content?.map((item, index) => renderItem(item, index, false))}
      {contentWithNO?.map((item, index) => renderItem(item, index, true))}
    </>
  );
};

export default PolicyContentRenderer;
