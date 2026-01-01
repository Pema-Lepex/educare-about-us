import { BCSEImage } from "assets";

export const TeamProfileHeader = {
    title:"Team Profile",
    subTitle:"The Creative Minds and Artists Working Behind the Scenes",
    description:"At Educare Skill, we have a dediicated team of young Bhutanese professionals with a deep passion for the art of story telling and content development."
}

export const TeamProfile = [
  {
    id:1,
    team: "Management Team",
    colorCode:"",
    prfile: BCSEImage,
    teamNote: `The management team serves as the operational backbone of any organization, steering strategy and driving execution. Composed of leaders from key functional areas such as finance, operations, and marketing, this group translates vision into actionable plans. An effective team combines diverse expertise with cohesive leadership, fostering innovation, managing risk, and inspiring the broader workforce. Their collective experience, judgment, and ability to adapt are critical determinants of a company's stability, growth, and long-term success, making them pivotal to both daily excellence and future ambitions.`,
    subTeamcategory: [],
  },
  {
    id:2,
    team: "Producation Team",
    colorCode:"",
    prfile: BCSEImage,
    teamNote: "",
    subTeamcategory: [
      {
        id:1,
        team: "Creative Director / Content Writers",
        prfile: BCSEImage,
        teamNote: `After the inception of an idea, the creative director/content writer writes a script, which undergoes a series of reviews until it is solidified into a fully-fledged screenplay. Creative Director/Content Writer acts as project coordinator or director, working with the team, ensuring that the desired quality is met.`,
      },
      {
        id:2,
        team: "Storyboard Artists / Illustrators",
        prfile: BCSEImage,
        teamNote: `After the script/screenplay has been developed, the storyboard artist/illustrator works on the storyboard, which is used as a visual and chronological guide for the production team.`,
      },
      {
        id:3,
        team: "BG Artists",
        prfile: BCSEImage,
        teamNote: `With just a stylus in hand, they create the worlds for characters to exist in. Working closely with the project director and the production team, our team of BG artists designs and paints the settings for our stories, including scenic landscapes, interiors, and many more.`,
      },
      {
        id:4,
        team: "2D/#D Animators",
        prfile: BCSEImage,
        teamNote: `After the storyboard is completed, it is then pushed to our team of Animators, where every action and dialogue is animated frame-by-frame, bringing characters and stories to life.`,
      },
    ],
  },
];
