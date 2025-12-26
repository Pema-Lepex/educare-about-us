import {
  affortable,
  Approve,
  InteractiveLearning,
  personalize,
  QualityLearning,
} from "assets";

export const whyChooseUsDetails = [
  {
    title: "Quality Content",
    desc: "Our content is not only educational but also entertaining, ensuring that learning is not only effective but also enjoyable.",
    theme: "orange",
    icon: QualityLearning,
  },
  {
    title: "Interactive Learning",
    desc: "Our content is available in a wide variety of fun and engaging formats, making learning a highly interactive experience.",
    theme: "purple",
    icon: InteractiveLearning,
  },
  {
    title: "Approved by Dzongkha Experts and Curriculum-Aligned",
    desc: "Our content has been curated in consultation with DCDD and Dzongkha teachers, experts, and caregivers from across the country, undergoing a series of reviews, guaranteeing it is error-free and curriculum-aligned.",
    theme: "green",
    icon: Approve,
  },
  {
    title: "Personalized Learning",
    desc: "Our content offers a personalised learning experience, helping students in every class.",
    theme: "red",
    icon: personalize,
  },
  {
    title: "Affordable Pricing",
    desc: "Our membership plans are affordable, ensuring you gain access to high-quality Dzongkha content at minimal cost.",
    theme: "blue",
    icon: affortable,
  },
];

export const EducareKIds = [
  {
    id: "gakyid",
    title: "Gakyid Lobdra",
    desc: "The Gakyid Lobdra series is a foundational Dzongkha series where our lively class of troublemakers learns foundational Dzongkha lessons and concepts through fun exercises and engaging activities.",
    borderClass: "border-orange-300",
    titleClass: "text-orange-500",
    isAccordion: false,
  },
  {
    id: "nursery",
    title: "Nursery Rhymes",
    desc: "Get ready to sing and dance to playful melodies and whimsical lyrics with 24 episodes of the fan-favourite Nono and Daza Nursery Rhyme Series, where learning is all fun and play.",
    borderClass: "border-violet-300",
    titleClass: "text-violet-600",
    isAccordion: false,
  },
  {
    id: "animation",
    title: "Entertaining Animation Series",
    desc: "Grab some popcorn and binge-watch our amazing collection of animation series, consisting of 36 episodes, where stories come alive with adorable characters and memorable moments.",
    borderClass: "border-emerald-300",
    titleClass: "text-emerald-600",
    isAccordion: true,
    items: [
      {
        title: "The Adventures of the Monkey King",
        desc: "Watch the Adventures of the Monkey King, where Zangpo, upon ascending the throne, brings calm to the chaotic forest that he rules, bestowing valuable nuggets of wisdom along the way.",
        bgClass: "bg-orange-50",
      },
      {
        title: "Tales of the Four Friends",
        desc: "Tales of the Four Friends, where four close friends, Karma, Tongtong, Zala & Chunku, embark on wild adventures together, gaining a few friends as well as making a few enemies, overcoming obstacles, and showing us the true meaning of friendship.",
        bgClass: "bg-violet-50",
      },
      {
        title: "Doctor Carrot",
        desc: "The Doctor Carrot Series, where the wise Doctor Carrot and his quirky vegetable friends show us the importance of leading a healthy lifestyle in the most adorable way possible!",
        bgClass: "bg-emerald-50",
      },
    ],
  },
  {
    id: "readaloud",
    title: "The Dragon Tales and Monkey King Read-Aloud Stories",
    desc: "There are 360 colourful read-aloud stories, such as the Monkey King and Dragon Tales series, available in both Dzongkha and English, to help children learn Dzongkha easily.",
    borderClass: "border-red-300",
    titleClass: "text-red-600",
    isAccordion: true,
    items: [
      {
        title: "Dragon Tales Read-Aloud Stories",
        desc: "An anthological compilation of short stories heavily inspired by the beloved and fabled Jataka Tales. The synchronized read-aloud texts appearing alongside the narration help your child follow word by word, building their foundational reading and writing skills.",
        bgClass: "bg-orange-50",
      },
      {
        title: "Monkey King Read-Aloud Stories",
        desc: "This anthological compilation tells stories of the Monkey King and his boundless wisdom, teaching important lessons and morals with every episode. The synchronized read-aloud texts help build foundational reading and writing skills.",
        bgClass: "bg-violet-50",
      },
    ],
  },
];

export const PrimaryLevel = [
  {
    title: "Gakyid Lobdra (ECCD, Classes PP - III)",
    desc: "The Gakyid Lobdra series is a foundational Dzongkha series where our lively class learns foundational lessons and concepts through fun exercises and engaging activities.",
    bgClass: "bg-orange-50",
  },
  {
    title: "Basic Dzongkha (Classes III - VI)",
    desc: "The Basic Dzongkha series introduces fundamental grammar and language concepts, transforming classroom learning into simplified and interactive lessons.",
    bgClass: "bg-violet-50",
  },
  {
    title:
      "Read Aloud Stories, Essays, and Poems from Textbooks (Classes IV - VI)",
    desc: "Stories, essays, and poems from textbooks are available as read-aloud videos, featuring soothing narration and beautiful illustrations that help students learn Dzongkha through engaging visuals.",
    bgClass: "bg-emerald-50",
  },
  {
    title: "Exam-Oriented Tutorials (Class IV - VI)",
    desc: "In-depth exam-oriented tutorials, such as Q&As and MCQs are provided, enabling students to prepare for their exams effectively by practicing solved questions from past papers.",
    bgClass: "bg-rose-50",
  },
];

export const IntermediateLevel = [
  {
    title: "Intermediate Dzongkha (Classes VII - XII)",
    desc: "The Intermediate Dzongkha series explores more advanced grammar and language, making complex Dzongkha topics easier to grasp.",
    bgClass: "bg-orange-50",
  },
  {
    title: "Read Aloud Stories, Essays, and Poems from Textbooks (Classes VII - XII)",
    desc: "Topics such as Nyenga, Dayig, and Lekshay Langdor are all available as comprehensive, exam-oriented tutorials, with every verse accompanied by beautiful illustrations and easy-to-understand explanations.",
    bgClass: "bg-violet-50",
  },
  {
    title: "Exam-Oriented Tutorials (Class VII - XII)",
    desc: "Topics such as Nyenga, Dayig, and Lekshay Langdor are all available as comprehensive, exam-oriented tutorials, with every verse accompanied by beautiful illustrations and easy-to-understand explanations.",
    bgClass: "bg-violet-50",
  },
  {
    title: "Nyenga, Dayig, & Lekshay Langdor (Classes IX - X)",
    desc: "Topics such as Nyenga, Dayig, and Lekshay Langdor are all available as comprehensive, exam-oriented tutorials, with every verse accompanied by beautiful illustrations and easy-to-understand explanations.",
    bgClass: "bg-violet-50",
  },
  {
    title: "Khandro Drowa Zangmo Namthar (Classes IX - X)",
    desc: "The story of Khandro Drowa Zangmo has been brought to life with beautiful illustrations and soothing narration, allowing students to immerse themselves in this timeless tale.",
    bgClass: "bg-rose-50",
  },
  {
    title: "Gyelsey Laglen Tutorials (Classes IX - X)",
    desc: "The sacred texts of Gyelsey Laglen are available as comprehensive, exam-oriented tutorials, with every verse accompanied by beautiful illustrations and simple explanations.",
    bgClass: "bg-orange-50",
  },
  {
    title: "Chu dha Shingi Tutorials (Classes XI - XII)",
    desc: "Chu dha Shingi Toenchay are available as comprehensive, exam-oriented tutorials, with every verse accompanied by beautiful illustrations and easy-to-understand explanations.",
    bgClass: "bg-emerald-50",
  },
  {
    title: "Azhi Nangsa Namthar (Classes XI - XII)",
    desc: "The story of Azhi Nangsa has been brought to life with beautiful illustrations and soothing narration, allowing students to immerse themselves in this timeless tale.",
    bgClass: "bg-slate-50",
  },
  {
    title: "Sheytring Tutorials (Classes XI - XII)",
    desc: "The sacred texts of Sheytring are available as comprehensive, exam-oriented tutorials, with every verse accompanied by beautiful illustrations and simple explanations.",
    bgClass: "bg-yellow-50",
  },
];
export const GraduateContent = [
  {
    title: "Intermediate Dzongkha (Classes VII - XII)",
    desc: "The Intermediate Dzongkha series explores more advanced grammar and language, making complex Dzongkha topics easier to grasp.",
    bgClass: "bg-orange-50",
  },
  {
    title: "Read Aloud Stories, Essays, and Poems from Textbooks (Classes VII - XII)",
    desc: "Topics such as Nyenga, Dayig, and Lekshay Langdor are all available as comprehensive, exam-oriented tutorials, with every verse accompanied by beautiful illustrations and easy-to-understand explanations.",
    bgClass: "bg-violet-50",
  },
  {
    title: "Exam-Oriented Tutorials (Class VII - XII)",
    desc: "Topics such as Nyenga, Dayig, and Lekshay Langdor are all available as comprehensive, exam-oriented tutorials, with every verse accompanied by beautiful illustrations and easy-to-understand explanations.",
    bgClass: "bg-violet-50",
  },
  {
    title: "Nyenga, Dayig, & Lekshay Langdor (Classes IX - X)",
    desc: "Topics such as Nyenga, Dayig, and Lekshay Langdor are all available as comprehensive, exam-oriented tutorials, with every verse accompanied by beautiful illustrations and easy-to-understand explanations.",
    bgClass: "bg-violet-50",
  },
  {
    title: "Khandro Drowa Zangmo Namthar (Classes IX - X)",
    desc: "The story of Khandro Drowa Zangmo has been brought to life with beautiful illustrations and soothing narration, allowing students to immerse themselves in this timeless tale.",
    bgClass: "bg-rose-50",
  },
  {
    title: "Gyelsey Laglen Tutorials (Classes IX - X)",
    desc: "The sacred texts of Gyelsey Laglen are available as comprehensive, exam-oriented tutorials, with every verse accompanied by beautiful illustrations and simple explanations.",
    bgClass: "bg-orange-50",
  },
  {
    title: "Chu dha Shingi Tutorials (Classes XI - XII)",
    desc: "Chu dha Shingi Toenchay are available as comprehensive, exam-oriented tutorials, with every verse accompanied by beautiful illustrations and easy-to-understand explanations.",
    bgClass: "bg-emerald-50",
  },
  {
    title: "Azhi Nangsa Namthar (Classes XI - XII)",
    desc: "The story of Azhi Nangsa has been brought to life with beautiful illustrations and soothing narration, allowing students to immerse themselves in this timeless tale.",
    bgClass: "bg-slate-50",
  },
  {
    title: "Sheytring Tutorials (Classes XI - XII)",
    desc: "The sacred texts of Sheytring are available as comprehensive, exam-oriented tutorials, with every verse accompanied by beautiful illustrations and simple explanations.",
    bgClass: "bg-yellow-50",
  },
];
export const cheyChey = [
  {
    title: "Chey Chey Mobile Game - Interactive Gamified Learning",
    intro:
      "Our interactive gamified learning platform, Chey Chey Mobile Game provides an opportunity for your child to learn and build a solid Dzongkha foundation with 12 episodes of interactive mobile games.",
    games: [
      "Alphabet Tracing",
      "Shapes and Colours",
      "Number",
      "Family Members",
      "Prepositions",
      "Domestic Animals",
      "Fruits",
      "Vegetables",
      "Wild Animals",
      "Agentive Case",
      "Genitive Case",
      "Making Sentence Structure",
    ],
  },
];
