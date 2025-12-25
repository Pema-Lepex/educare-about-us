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
export interface ContentProps {
  type:string;
  text?:string;
  style?:string;
  title?: string;
  items?: string[]
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
export interface ListItem {
  text?: string;
  style?: string;          
  items?: ListItem[];    
}

export interface PolicyContentProps {
  type: "paragraph" | "list";
  text?: string;
  title?: string;
  style?: string;
  items?: ListItem[];
}
export interface PolicySectionsProps {
  id:string;
  heading: string;
  contentWithNO?: PolicyContentProps[] | null;
  content?:PolicyContentProps[] | null
}
export interface PrivacyPolicyProps {
  title: string;
 sections: PolicySectionsProps[]
}
