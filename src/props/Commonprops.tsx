export interface Media {
  type: "image" | "video";
  src: string;
}
export interface MemebershipProps {
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