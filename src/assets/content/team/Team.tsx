import {  BGArtistsProfile, ContentWritersProfile, IllustratorsProfile, ManagementTeamProfile, MusicDirectorProfile, SoftwareDevelopersProfile, ThreeDAnimatorProfile, TwoDAnimatorProfile, VideographersProfile, VisualEditorsProfile } from "assets";

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
    prfile: ManagementTeamProfile,
    teamNote: `Our management team drives efficiency, growth, and excellence across the organization. The adept team oversees operations, manages finances, and ensures smooth administrative processes. The management team brings all members together to focus on achieving the company’s common goals.`,
    subTeamcategory: [],
  },
  {
    id:2,
    team: "Production Team",
    colorCode:"",
    prfile: "",
    teamNote: "",
    subTeamcategory: [
      {
        id:1,
        team: "Creative Director / Content Writers",
        prfile: ContentWritersProfile,
        teamNote: `After the inception of an idea, the creative director/content writer writes a script, which undergoes a series of reviews until it is solidified into a fully-fledged screenplay. Creative Director/Content Writer acts as project coordinator or director, working with the team, ensuring that the desired quality is met.`,
      },
      {
        id:2,
        team: "Storyboard Artists / Illustrators",
        prfile: IllustratorsProfile,
        teamNote: `After the script/screenplay has been developed, the storyboard artist/illustrator works on the storyboard, which is used as a visual and chronological guide for the production team.`,
      },
      {
        id:3,
        team: "BG Artists",
        prfile: BGArtistsProfile,
        teamNote: `With just a stylus in hand, they create the worlds for characters to exist in. Working closely with the project director and the production team, our team of BG artists designs and paints the settings for our stories, including scenic landscapes, interiors, and many more.`,
      },
      {
        id:4,
        team: "2D Animators",
        prfile: TwoDAnimatorProfile,
        teamNote: `After the storyboard is completed, it is then pushed to our team of Animators, where every action and dialogue is animated frame-by-frame, bringing characters and stories to life.`,
      },
      {
        id:5,
        team: "3D Animators",
        prfile: ThreeDAnimatorProfile,
        teamNote: `After the storyboard is completed, it is then pushed to our team of Animators, where every action and dialogue is animated frame-by-frame, bringing characters and stories to life.`,
      },
      {
        id:6,
        team: "Videographers",
        prfile: VideographersProfile,
        teamNote: `Our videography team records video content and films footage. They dictate the visual presentation, using a wide variety of camera angles and movements to tell a story or to capture a scene.`,
      },
      {
        id:7,
        team: "Music Director",
        prfile: MusicDirectorProfile,
        teamNote: `Every great film, short video, or animation needs music that sets the mood and builds emotion. Our music director composes powerful music and sound design that perfectly complements the content, bringing it to life.`,
      },
      {
        id:8,
        team: "Visual Editors",
        prfile: VisualEditorsProfile,
        teamNote: `After the production process, our team of editors packages the final product by assembling footage, inserting seamless transitions, and adding visually striking effects, creating content of the highest quality.`,
      },
      {
        id:8,
        team: "Software Developers",
        prfile: SoftwareDevelopersProfile,
        teamNote: `Our dedicated team of software developers designs, develops, and maintains our websites and applications, ensuring operations run smoothly and the needs of users are met. They write clean, efficient code, troubleshoot issues, and collaborate with teams to deliver reliable and scalable digital solutions.`,
      },
    ],
  },
];
