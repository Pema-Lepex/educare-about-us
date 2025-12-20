import {
  bronze,
  gold,
  sliver,
} from "assets";
import { CheCheyImage, CheCheyIcon, EducareSkillImage, EducareSkillIcon, PrimaryLevelImage, PrimaryLevelIcon, IntermediateLevelImage, IntermediateLevelIcon, RedFrame, BuleFrame, PurpleFrame, GreenFrame } from "assets/images";
import { landing1, landing2, landing3 } from "backup/images";
import { FeedBackCarouselProps, MemebershipProps } from "props/Commonprops";

export const EducareSkillContent = {
  title: "Educare Skill",
  subTitle:"Your Favorite Dzongkha Tutor!",
  content1: `Educare Skill is Bhutan’s first online learning platform with a wide variety of entertaining and educational content catering to all learners, from children in ECCD centres, students studying in Classes PP to XII, to graduates preparing for their RCSE Examinations, as well as anyone interested in learning and mastering our national language, Dzongkha.`,
  content2: `Educare Skill is officially endorsed by the Department of Culture and Dzongkha Development as the National Dzongkha Learning platform, making it the apex platform for Dzongkha learning not only for those residing in the country but also for those living abroad.`,
};

export const EducareSkillGroupContent =[
  {
    id:1,
    groupName: "CHEYCHEY",
    groupImage: CheCheyImage,
    groupIcon: CheCheyIcon,
    eligibility: "Age 3 - 10 years",
    info: "Learn the fundamentals of Dzongkha through interactive mobile games."
  },
  {
    id:2,
    groupName: "Educare Kids",
    groupImage: EducareSkillImage,
    groupIcon: EducareSkillIcon,
    eligibility: "Age 3 - 16 years",
    info: "Where Dzongkha Learning Comes Alive - Animations. Stories. Rhymes."
  },
  {
    id:3,
    groupName: "Primary Level",
    groupImage: PrimaryLevelImage,
    groupIcon: PrimaryLevelIcon,
    eligibility: "Classes PP - VI",
    info: "The Perfect Dzongkha tutor to help your children build a strong foundation."
  },
  {
    id:4,
    groupName: "Intermediate Level",
    groupImage: IntermediateLevelImage,
    groupIcon: IntermediateLevelIcon,
    eligibility: "Classes VIII - XII",
    info: "Your perfect guide to mastering Dzongkha."
  },
]
export const EducareSkillGuideContent =[
  {
    id:1,
    title: "How To Get Started?",
    frame: BuleFrame,
    href:"/about/how-to-get-started?",
    info: "If you wish to get started on Educare Skill, please register or sign up now and avail our affordable membership plans."
  },
  {
    id:2,
    title: "Registration Guide:",
    frame: RedFrame,
    href:"/about/registration-guide",
    info: "Do you want to register on our platform and watch our amazing content, but you are not quite sure how to do it? Don’t worry. We will help you get started."
  },
  {
    id:3,
    title: "For DCDD Users:",
    frame: PurpleFrame,
    href:"/about/for-dcdd-users",
    info: "With the subsidized support of DCDD, Educare Skill is FREE for students and teachers from Class PP to VI, as well as for ECCD children and facilitators."
  },
  {
    id:4,
    title: "Gift Coupon The Gift of Learning!",
    frame: GreenFrame,
    href:"/about/gift-coupon-the-gift-of-learning",
    info: "With the Educare Skill Gift Coupon, you can give your loved ones the Educare Skill membership plans."
  },
]

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

export const HowToGetStartedContent = {
  title:"How To Get Started?",
  description:"With the subsidized support of DCDD, Educare Skill is FREE for students and teachers in classes PP to VI, as well as for ECCD children and facilitators. If you are eligible for this support, you can click here for more information. (redirects the user to the DCDD user webpage) If you are not eligible for this support and wish to get started on Educare Skill, please register or sign up now and avail our affordable membership plans."
}

export const memebershipDetails: MemebershipProps[] = [
  {
    id:1,
    memebrshipType: "Basic",
    imageSrc: bronze,
    yearlyCost: "Nu.399",
    halfYearlyCost: "Nu.1995",
    monthlyCost: "Nu.3990",
    benefits: ["RA", "NR", "AS", "GL", "CHEYCHEY accessible"],
  },
  {
    id:2,
    memebrshipType: "Standard",
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
    id:3,
    memebrshipType: "Premium",
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

export const MemebershipImportantNotice = {
  title: "Important Notice",
  notice: `
Under the BASIC plan, users can access content such as Read-aloud Stories (RA), Nursery Rhymes (NR), Animation Series (AS), Gaykid Lobra – Foundational Dzongkha (GL) and CHEYCHEY, the interactive learning mobile games. With the Basic membership, you can use it on three devices.

With the STANDARD plan, one can watch and access RA, NR, AS, GL, CHEYCHEY, Basic Dzongkha (BD) and Class IV – VI Tutorials. With the Standard membership, you can use it on four devices.

With the PREMIUM plan, users can access all content on the platform, including RA, NR, AS, GL, CHEYCHEY, BD, Intermediate Dzongkha (ID) and Class IV – XII Tutorials. With the Premium membership, you can use it on five devices.

Before purchasing any Educare Membership plan, please know the categories of content accessible under each membership plan and select the package accordingly.

Once payment is made, there is no refund policy.
`
};


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