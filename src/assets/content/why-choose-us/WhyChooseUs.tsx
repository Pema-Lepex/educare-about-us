import {
  CertificateIcon,
  CompassIcon,
  GlobelIcon,
  landing1,
  landing2,
  landing3,
  landing4,
  MoneyIcon,
} from "assets";
import {
  ContentProvidedDetailsProps,
  WhyChooseUsShortDetailsProps,
} from "props/Commonprops";

export const WhyChooseUsShortDetails: WhyChooseUsShortDetailsProps[] = [
  {
    id: 1,
    icon: MoneyIcon,
    title: "Affordable Pricing",
    description1:
      "We offer competitive pricing without compromising on quality, ensuring you get the best value for your investment.",
  },
  {
    id: 2,
    icon: GlobelIcon,
    title: "Global Reach",
    description1:
      "Our services extend across multiple countries, allowing us to cater to a diverse clientele and meet international standards.",
  },
  {
    id: 3,
    icon: CompassIcon,
    title: "Expert Guidance",
    description1:
      "Our team of experienced professionals provides expert advice and support to help you navigate your options effectively.",
  },
  {
    id: 4,
    icon: CertificateIcon,
    title: "Certified Quality",
    description1:
      "We adhere to industry standards and hold various certifications that attest to our commitment to quality and excellence.",
  },
];

export const ContentProvidedDetails: ContentProvidedDetailsProps[] = [
  {
    id: 1,
    image: landing1,
    title: "Animation Series",
    description1:
      "Access a wide range of learning materials including videos, quizzes, and interactive exercises to enhance your learning experience.",
    benefits: [
      "Engaging visual storytelling",
      "Easy-to-understand explanations",
      "Improves retention through animation",
    ],
  },
  {
    id: 2,
    image: landing2,
    title: "Gakyid Lobdra",
    description1:
      "Learn from experienced instructors who are native Dzongkha speakers and experts in language education.",
    benefits: [
      "Guidance from native speakers",
      "Authentic pronunciation and usage",
      "Structured lessons for all levels",
    ],
  },
  {
    id: 3,
    image: landing3,
    title: "Intermidiate Dzongkha",
    description1:
      "Study at your own pace with our flexible learning options, allowing you to fit language learning into your busy schedule.",
    benefits: [
      "Builds on foundational Dzongkha skills",
      "Improves reading and writing fluency",
      "Flexible pacing for busy learners",
    ],
  },
  {
    id: 4,
    image: landing4,
    title: "Chey Chey",
    description1:
      "Join a community of learners and get support from peers and instructors to help you stay motivated and on track.",
    benefits: [
      "Interactive community support",
      "Collaborative learning activities",
      "Motivation through peer engagement",
    ],
  },
];

