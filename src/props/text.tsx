export interface Media {
  type: "image" | "video";
  src: string;
}
export interface MemebershipProps {
  id:number;
  memebrshipType: string;
  imageSrc: string;
  yearlyCost: string;
  halfYearlyCost: string;
  monthlyCost: string;
  benefits: string[];
}

export interface FeedBackCarouselProps {
  id: number;
  img: string;
  title: string;
  feedBack: string;
  author: string;
}
export interface WhyChooseUsShortDetailsProps {
  id: number;
  title: string;
  icon: string;
  description1: string;
}
export interface ContentProvidedDetailsProps {
  id: number;
  title: string;
  image: string;
  description1: string;
  benefits?: string[];
}
export interface LeaderProps {
  id: number;
  name: string;
  image: string;
  position: string;
}

export interface TeamProps {
  id: number;
  img?: string;
  name: string;
  position: string;
  description: string;
}

export interface BlogProps {
  id: number;
  title: string;
  subject: string;
  content: string;
  image?: string;
}
export interface SlideProps {
  id: number;
  img: string;
  title: string;
}
export interface SocialMediaProps {
  id: number;
  img: string;
  title: string;
  url: string
}

export interface educareKidsProp {
  id: string;
  title: string;
  desc: string;
  borderClass: string;
  titleClass: string;
  isAccordion: boolean;
  items?: educareKideItemsProps[];
}

export interface educareKideItemsProps {
  title: string;
  desc: string;
  bgClass: string;
}
export interface ListItem {
  text?: string;
  style?: string;          
  items?: ListItem[];    
}

export interface ContentProps {
  type: "paragraph" | "list";
  text?: string;
  title?: string;
  style?: string;
  items?: ListItem[];
}
export interface SectionsProps {
  id:string;
  heading: string;
  contentWithNO?: ContentProps[] | null;
  content?:ContentProps[] | null
}
export interface TermsOfUseProps {
 title: string;
 sections: SectionsProps[]
}

import React from "react";
import { CommonParagraph1 } from "components";
import { renderTextWithLinks } from "utils/helpers/renderTextWithLinks";

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
    style === "decimal" ||
    style?.includes("Alpha") ||
    style?.includes("Roman");

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
            <RenderList
              items={item.items}
              style={item.style ?? "circle"}
              level={level + 1}
            />
          )}
        </li>
      ))}
    </ListTag>
  );
};
interface PolicyContentProps {
  content?: ContentProps[] | null;
  contentWithNO?: ContentProps[] | null;
}

const PolicyContentRenderer = ({
  content,
  contentWithNO,
}: PolicyContentProps) => {
  
const renderItem = (
    item: ContentProps | undefined,
    index: number,
    isNumbered: boolean
  ) => {
    if (!item) return null;

    const prefix = isNumbered ? `${index + 1}. ` : "";

    // Paragraph
    if (item.type === "paragraph") {
      return (
        <CommonParagraph1
          key={index}
          className="mb-4 text-gray-700 leading-relaxed"
        >
          {isNumbered && <span className="mr-1">{prefix}</span>}
          {renderTextWithLinks(item.text)}
        </CommonParagraph1>
      );
    }

    // List
    if (item.type === "list" && item.items) {
      return (
        <div key={index} className="mb-6">
          {item.title && (
            <CommonParagraph1 className="mb-2 text-gray-700 font-medium">
              {isNumbered && <span className="mr-1">{prefix}</span>}
              {item.title}
            </CommonParagraph1>
          )}

          <RenderList
            items={item.items}
            style={item.style}
          />
        </div>
      );
    }

    return null;
  };

  return (
    <>
      {content?.map((item, index) =>
        renderItem(item, index, false)
      )}
      {contentWithNO?.map((item, index) =>
        renderItem(item, index, true)
      )}
    </>
  );
};

export default PolicyContentRenderer;

export const privacyPolicy: TermsOfUseProps = {
  title: "Privacy Policy",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      content: [
        {
          type: "list",
          title: "You agree to:",
          style: "decimal",
          items: [
            {
              text: "Follow all rules",
              items: [
                { text: "No abuse" },
                {
                  text: "No misuse",
                  items: [{ text: "No automation" }, { text: "No scraping" }],
                },
              ],
            },
            {
              text: "Provide accurate information",
            },
          ],
        },
      ],
    },
  ],
};