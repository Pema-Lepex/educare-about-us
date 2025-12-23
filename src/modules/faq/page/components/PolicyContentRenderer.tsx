import React from "react";
import { CommonParagraph } from "components";
import { renderTextWithLinks } from "utils/helpers/renderTextWithLinks";
import { ListItem, PolicyContentProps } from "props/Commonprops";

const listStyles = {
  // ordered
  decimal: "list-decimal",
  lowerAlpha: "list-[lower-alpha]",
  upperAlpha: "list-[upper-alpha]",
  lowerRoman: "list-[lower-roman]",
  upperRoman: "list-[upper-roman]",
  decimalLeadingZero: "list-[decimal-leading-zero]",

  // unordered
  disc: "list-disc",
  circle: "list-[circle]",
  square: "list-[square]",

  // position
  inside: "list-inside",
  outside: "list-outside",
};

interface RenderListProps {
  items: ListItem[];
  style?: string;
  level?: number;
}

const RenderList: React.FC<RenderListProps> = ({
  items,
  style = "disc",
  level = 0,
}) => {
  const isOrdered =
    style === "decimal" || style?.includes("Alpha") || style?.includes("Roman");

  const ListTag = isOrdered ? "ol" : "ul";

  return (
    <ListTag
      className={`
        ${listStyles[style as keyof typeof listStyles] || "list-disc"}
        ml-${level === 0 ? "6" : "8"}
        space-y-2 text-gray-700
      `}
    >
      {items.map((item, index) => (
        <li key={index} className="leading-relaxed">
          {item.text && renderTextWithLinks(item.text)}

          {item.items && item.items.length > 0 && (
            <div className="ml-3">
              <RenderList
              items={item.items}
              style={item.style ?? "square"}
              level={level + 1}
            />
            </div>
          )}
        </li>
      ))}
    </ListTag>
  );
};
interface PolicyProps {
  content?: PolicyContentProps[] | null;
  contentWithNO?: PolicyContentProps[] | null;
}

const PolicyContentRenderer = ({ content, contentWithNO }: PolicyProps) => {
  const renderItem = (
    item: PolicyContentProps | undefined,
    index: number,
    isNumbered: boolean
  ) => {
    if (!item) return null;

    const prefix = isNumbered ? `${index + 1}. ` : "";

    // Paragraph
    if (item.type === "paragraph") {
      return (
        <CommonParagraph
          key={index}
          className="mb-4 text-gray-700 leading-relaxed"
        >
          {isNumbered && <span className="mr-1">{prefix}</span>}
          {renderTextWithLinks(item.text)}
        </CommonParagraph>
      );
    }

    // List
    if (item.type === "list" && item.items) {
      return (
        <div key={index} className="mb-6">
          {item.title && (
            <CommonParagraph className="mb-2 text-gray-700">
              {isNumbered && <span className="mr-1">{prefix}</span>}
              {item.title}
            </CommonParagraph>
          )}

          <RenderList items={item.items} style={item.style} />
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
