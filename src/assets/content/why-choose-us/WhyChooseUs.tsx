import {
  CertificateIcon,
  CompassIcon,
  GlobelIcon,
  MoneyIcon,
  QualityLearning,
  InteractiveLearning,
  Approve,
  personalize,
  affortable
} from "assets";
import { landing1, landing2, landing3, landing4 } from "backup/images";
import {
  ContentProvidedDetailsProps,
  WhyChooseUsShortDetailsProps,
  whyChooseUsDetailsProps,
  educareKidsProp,
  educareKideItemsProps,
  cheycheyProps
} from "props/Commonprops";

export const WhyChooseUsShortDetails: WhyChooseUsShortDetailsProps[] = [
  {
    id: 1,
    icon: MoneyIcon,
    title: "Affordable Pricing",
    description1:
      "We offer competitive pricing without compromising on quality, ensuring you get the best value for your investment."
  },
  {
    id: 2,
    icon: GlobelIcon,
    title: "Global Reach",
    description1:
      "Our services extend across multiple countries, allowing us to cater to a diverse clientele and meet international standards."
  },
  {
    id: 3,
    icon: CompassIcon,
    title: "Expert Guidance",
    description1:
      "Our team of experienced professionals provides expert advice and support to help you navigate your options effectively."
  },
  {
    id: 4,
    icon: CertificateIcon,
    title: "Certified Quality",
    description1:
      "We adhere to industry standards and hold various certifications that attest to our commitment to quality and excellence."
  }
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
      "Improves retention through animation"
    ]
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
      "Structured lessons for all levels"
    ]
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
      "Flexible pacing for busy learners"
    ]
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
      "Motivation through peer engagement"
    ]
  }
];

export const whyChooseUsDetails: whyChooseUsDetailsProps[] = [
  {
    title: "Quality Content",
    desc:
      "Our content is not only educational but also entertaining, ensuring that learning is not only effective but also enjoyable.",
    theme: "orange",
    icon: QualityLearning
  },
  {
    title: "Interactive Learning",
    desc:
      "Our content is available in a wide variety of fun and engaging formats, making learning a highly interactive experience.",
    theme: "purple",
    icon: InteractiveLearning
  },
  {
    title: "Approved by Dzongkha Experts and Curriculum-Aligned",
    desc:
      "Our content has been curated in consultation with DCDD and Dzongkha teachers, experts, and caregivers from across the country, undergoing a series of reviews, guaranteeing it is error-free and curriculum-aligned.",
    theme: "green",
    icon: Approve
  },
  {
    title: "Personalized Learning",
    desc:
      "Our content offers a personalised learning experience, helping students in every class.",
    theme: "red",
    icon: personalize
  },
  {
    title: "Affordable Pricing",
    desc:
      "Our membership plans are affordable, ensuring you gain access to high-quality Dzongkha content at minimal cost.",
    theme: "blue",
    icon: affortable
  }
];

export const EducareKIds: educareKidsProp[] = [
  {
    id: "gakyid",
    title: "Gakyid Lobdra",
    desc:
      "The Gakyid Lobdra series is a foundational Dzongkha series where our lively class of troublemakers learns foundational Dzongkha lessons and concepts through fun exercises and engaging activities.",
    borderClass: "border-orange-300",
    titleClass: "text-orange-500",
    isAccordion: false
  },
  {
    id: "nursery",
    title: "Nursery Rhymes",
    desc:
      "Get ready to sing and dance to playful melodies and whimsical lyrics with 24 episodes of the fan-favourite Nono and Daza Nursery Rhyme Series, where learning is all fun and play.",
    borderClass: "border-violet-300",
    titleClass: "text-violet-600",
    isAccordion: false
  },
  {
    id: "animation",
    title: "Entertaining Animation Series",
    desc:
      "Grab some popcorn and binge-watch our amazing collection of animation series, consisting of 36 episodes, where stories come alive with adorable characters and memorable moments.",
    borderClass: "border-emerald-300",
    titleClass: "text-emerald-600",
    isAccordion: true,
    items: [
      {
        title: "The Adventures of the Monkey King",
        desc:
          "Watch the Adventures of the Monkey King, where Zangpo, upon ascending the throne, brings calm to the chaotic forest that he rules, bestowing valuable nuggets of wisdom along the way.",
        bgClass: "bg-orange-50"
      },
      {
        title: "Tales of the Four Friends",
        desc:
          "Tales of the Four Friends, where four close friends, Karma, Tongtong, Zala & Chunku, embark on wild adventures together, gaining a few friends as well as making a few enemies, overcoming obstacles, and showing us the true meaning of friendship.",
        bgClass: "bg-violet-50"
      },
      {
        title: "Doctor Carrot",
        desc:
          "The Doctor Carrot Series, where the wise Doctor Carrot and his quirky vegetable friends show us the importance of leading a healthy lifestyle in the most adorable way possible!",
        bgClass: "bg-emerald-50"
      }
    ]
  },
  {
    id: "readaloud",
    title: "The Dragon Tales and Monkey King Read-Aloud Series",
    desc:
      "There are 180 colourful read-aloud stories, such as the Monkey King and Dragon Tales series, available in both Dzongkha and English, to help children learn Dzongkha easily.",
    borderClass: "border-red-300",
    titleClass: "text-red-600",
    isAccordion: true,
    items: [
      {
        title: "Dragon Tales Read-Aloud Series (133 episodes)",
        desc:
          "An anthological compilation of short stories heavily inspired by the beloved and fabled Jataka Tales. The synchronized read-aloud texts appearing alongside the narration help your child follow word by word, building their foundational reading and writing skills.",
        bgClass: "bg-orange-50"
      },
      {
        title: "Monkey King Read-Aloud Series (48 episodes)",
        desc:
          "This anthological compilation tells stories of the Monkey King and his boundless wisdom, teaching important lessons and morals with every episode. The synchronized read-aloud texts help build foundational reading and writing skills.",
        bgClass: "bg-violet-50"
      }
    ]
  }
];

export const PrimaryLevel: educareKideItemsProps[] = [
  {
    title: "Gakyid Lobdra (ECCD to Class VI)",
    desc:
      "The Gakyid Lobdra series is a foundational Dzongkha series where our lively class learns foundational lessons and concepts through fun exercises and engaging activities.",
    bgClass: "bg-orange-50"
  },
  {
    title: "Basic Dzongkha (Classes PP to VI)",
    desc:
      "The Basic Dzongkha series introduces fundamental grammar and language concepts, transforming classroom learning into simplified and interactive lessons.",
    bgClass: "bg-violet-50"
  },
  {
    title:
      "Read Aloud Stories, Essays, and Poems from Textbooks (Class IV-XII)",
    desc:
      "Stories, essays, and poems from textbooks are available as read-aloud videos, featuring soothing narration and beautiful illustrations that help students learn Dzongkha through engaging visuals.",
    bgClass: "bg-emerald-50"
  },
  {
    title: "Exam-Oriented Tutorials (Class IV-XII)",
    desc:
      "In-depth exam-oriented tutorials, such as Q&As and MCQs are provided, enabling students to prepare for their exams effectively by practicing solved questions from past papers.",
    bgClass: "bg-rose-50"
  }
];

export const IntermediateLevel: educareKideItemsProps[] = [
  {
    title: "Intermediate Dzongkha (Class VII-XII)",
    desc:
      "The Intermediate Dzongkha series explores more advanced grammar and language, making complex Dzongkha topics easier to grasp.",
    bgClass: "bg-orange-50"
  },
  {
    title: "Nyenga, Dayig, & Lekshay Langdor (Class IX-X)",
    desc:
      "Topics such as Nyenga, Dayig, and Lekshay Langdor are all available as comprehensive, exam-oriented tutorials, with every verse accompanied by beautiful illustrations and easy-to-understand explanations.",
    bgClass: "bg-violet-50"
  },
  {
    title: "Chu dha Shingi Tutorials (Class XI-XII)",
    desc:
      "Chu dha Shingi Toenchay are available as comprehensive, exam-oriented tutorials, with every verse accompanied by beautiful illustrations and easy-to-understand explanations.",
    bgClass: "bg-emerald-50"
  },
  {
    title: "Khandro Drowa Zangmo Namthar (Class IX-X)",
    desc:
      "The story of Khandro Drowa Zangmo has been brought to life with beautiful illustrations and soothing narration, allowing students to immerse themselves in this timeless tale.",
    bgClass: "bg-rose-50"
  },
  {
    title: "Azhi Nangsa Namthar (Class XI-XII)",
    desc:
      "The story of Azhi Nangsa has been brought to life with beautiful illustrations and soothing narration, allowing students to immerse themselves in this timeless tale.",
    bgClass: "bg-slate-50"
  },
  {
    title: "Gyelsey Laglen Tutorials (Class IX-X)",
    desc:
      "The sacred texts of Gyelsey Laglen are available as comprehensive, exam-oriented tutorials, with every verse accompanied by beautiful illustrations and simple explanations.",
    bgClass: "bg-orange-50"
  },
  {
    title: "Sheytring Tutorials (Class XI-XII)",
    desc:
      "The sacred texts of Sheytring are available as comprehensive, exam-oriented tutorials, with every verse accompanied by beautiful illustrations and simple explanations.",
    bgClass: "bg-yellow-50"
  }
];

export const cheyChey: cheycheyProps[] = [
  {
    title: "CheyChey - Interactive Gamified Learning",
    intro:
      "Our interactive gamified learning platform, CheyChey provides an opportunity for your child to learn and build a solid Dzongkha foundation with 12 episodes of interactive mobile games.",
    games: [
      "Alphabet Tracing",
      "Colours and Shapes",
      "Numbers",
      "Prepositions",
      "Family Members and Kinship",
      "Wild and Domestic Animals",
      "Fruits",
      "Vegetables",
      "Agent (Jayrappo) [Grammar]",
      "Genitive Case (Dreldra) [Grammar]",
      "Subject Verb Agreement",
      "Sentence Construction"
    ]
  }
];
