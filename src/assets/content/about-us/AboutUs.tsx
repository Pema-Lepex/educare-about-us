import {
  bronze,
  gold,
  landing1,
  landing2,
  landing3,
  sliver,
} from "assets/images";
import { FeedBackCarouselProps, MemebershipProps } from "props/Commonprops";

export const AboutContent1: React.FC = () => {
  return (
    <>
      <p>
        <strong> Educare Skill</strong> is the first online learning platform in
        Bhutan. The platform is available as a mobile app as well as a website
        The platform offers entertaining educational content for our children
        These include read aloud videos, animated series, nursery rhymes and
        interactive gamified learning Educare Skill presents three animated
        series: Dr. Carrot, Tales of Four Friends, and Adventures of the Monkey
        King, each consisting of 12 episodes, delivering both entertainment and
        valuable lessons The platform also features animated 24 episodes of
        nursery rhymes with Nono and Daza as lead characters, engaging in fun
        and adventures. Additionally, there are more than 180 colorful
        READ-ALOUD stories like Monkey King and Dragon Tales, available in
        Dzongkha and English, yet designed to help children learn Dzongkha
        easily The platform's interactive gamified learning, CHEYCHEY, provides
        opportunities for children to explore foundational concepts such as
        alphabets, colors, shapes, and many more
      </p>
    </>
  );
};
export const AboutContent2: React.FC = () => {
  return (
    <>
      <p>
        The entire content. as well as the technology, have been developed by
        Bhutanese. The platform is an initiative of iBEST company. More than 100
        Bhutanese professionals and vouth have worked on various aspects of the
        proiect for over a year. Educare Skill has been designed and developed
        using the latest technology Our obiective with the platform is to have
        good Bhutanese content available to our children, and anyone else
        interested in learning. It is intended as a supplement to school
        learning, in a fun and engaging way. We believe that such a platform
        will help make learning easier and more attractive for children In the
        future. Educare Skill will also offer professional, vocational and
        skill-oriented courses, allowing professionals and vouth to enhance
        their knowledge and competencies Our platform would have something for
        all - children, students unemployed, working professionals, and farmers.
      </p>
    </>
  );
};

export const PersonalizedLearningContent = {
  title: "A Personalized Learning resource for All Ages",
  content: `With practice exercises, instructional videos, and a personalized learning dashboard, Educare empowers learners to study at their own pace, both in and out of the classroom. Covering subjects from kindergarten through early college, including, Educare focuses on skill mastery to help learners build the strong foundations they need to succeed in higher education and in their careers.`,
};

export const feedBack: FeedBackCarouselProps[] = [
  {
    id: 1,
    img: landing1,
    title: "Beautiful Landscape",
    feedBack:
      "The way the app uses animations to explain complex chemical reactions is brilliant! My team grasped the concepts much faster than they did with traditional textbooks. The learning videos are also high quality.",
    author: "Tashi Dorji",
  },
  {
    id: 2,
    img: landing2,
    title: "City Night Lights",
    feedBack:
      "We've seen a real uptick in engagement thanks to the gamified challenges. The competitive element makes mandatory training fun, and the short learning videos are perfect for quick refreshers between tasks",
    author: "Jigme Wangchuk",
  },
  {
    id: 3,
    img: landing3,
    title: "Mountain Adventure",
    feedBack:
      "The balance between in-depth video lessons and quick, reinforcing games is perfect. I particularly appreciate that the content is easy to navigate. Adding a few more advanced strategy scenarios would be the only improvement.",
    author: "Sonam Choden",
  },
];

export const memebershipDetails: MemebershipProps[] = [
  {
    memebrshipType: "Bronze",
    imageSrc: bronze,
    yearlyCost: "Nu.399",
    halfYearlyCost: "Nu.1995",
    monthlyCost: "Nu.3990",
    benefits: ["RA", "NR", "AS", "GL", "CHEYCHEY accessible"],
  },
  {
    memebrshipType: "Silver",
    imageSrc: sliver,
    yearlyCost: "Nu.449",
    halfYearlyCost: "Nu.2245",
    monthlyCost: "Nu.4490",
    benefits: [
      "RA",
      "NR",
      "AS",
      "GL",
      "CHEYCHEY",
      "BD",
      "Class IV - VI Tutorials accessible",
    ],
  },
  {
    memebrshipType: "Gold",
    imageSrc: gold,
    yearlyCost: "Nu.499",
    halfYearlyCost: "Nu.2495",
    monthlyCost: "nNu.4990",
    benefits: [
      "RA",
      "NR",
      "AS",
      "GL",
      "CHEYCHEY",
      "BD",
      "Class IV - XII Tutorials accessible",
    ],
  },
];

export const testimonials = [
  {
    name: "Dorji Pem",
    text: "The way the app uses animations to explain complex chemical reactions is brilliant! My team grasped the concepts much faster than they did with traditional textbooks. The learning videos are also high quality.",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    name: "Tashi",
    text: "We've seen a real uptick in engagement thanks to the gamified challenges. The competitive element makes mandatory training fun, and the short learning videos are perfect for quick refreshers between tasks",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Dechen Dema",
    text: "The balance between in-depth video lessons and quick, reinforcing games is perfect. I particularly appreciate that the content is easy to navigate. Adding a few more advanced strategy scenarios would be the only improvement.",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    name: "Norbu Wangchuk",
    text: "The way the app uses animations to explain complex chemical reactions is brilliant! My team grasped the concepts much faster than they did with traditional textbooks. The learning videos are also high quality.",
    avatar: "https://i.pravatar.cc/150?img=55",
  },
  {
    name: "Nobin Rai",
    text: "The balance between in-depth video lessons and quick, reinforcing games is perfect. I particularly appreciate that the content is easy to navigate. Adding a few more advanced strategy scenarios would be the only improvement.",
    avatar: "https://i.pravatar.cc/150?img=41",
  },
];