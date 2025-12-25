import { 
  PenTool, 
  Palette, 
  Layers, 
  MonitorPlay, 
  Video, 
  Music, 
  Clapperboard 
} from 'lucide-react';

export const productionData = [
  {
    title: "Creative Director / Content Writers",
    icon: <PenTool className="w-6 h-6 text-purple-600" />,
    description: "After the inception of an idea, the creative director/content writer writes a script, which undergoes a series of reviews until it is solidified into a fully-fledged screenplay. Creative Director/Content Writer acts as project coordinator or director, working with the team, ensuring that the desired quality is met.",
    fullWidth: true,
  },
  {
    title: "Storyboard Artists / Illustrators",
    icon: <Palette className="w-6 h-6 text-purple-600" />,
    description: "After the script/screenplay has been developed, the storyboard artist/illustrator works on the storyboard, which is used as a visual and chronological guide for the production team.",
  },
  {
    title: "BG Artists",
    icon: <Layers className="w-6 h-6 text-purple-600" />,
    description: "With just a stylus in hand, they create the worlds for characters to exist in. Working closely with the project director and the production team, our team of BG artists designs and paints the settings for our stories, including scenic landscapes, interiors, and many more.",
  },
  {
    title: "2D/3D Animators",
    icon: <MonitorPlay className="w-6 h-6 text-purple-600" />,
    description: "After the storyboard is completed, it is then pushed to our team of Animators, where every action and dialogue is animated frame-by-frame, bringing characters and stories to life.",
  },
  {
    title: "Videographers",
    icon: <Video className="w-6 h-6 text-purple-600" />,
    description: "Our videography team records video content and films footage. They dictate the visual presentation, using a wide variety of camera angles and movements to tell a story or to capture a scene.",
  },
  {
    title: "Music Director",
    icon: <Music className="w-6 h-6 text-purple-600" />,
    description: "Every great film, short video, or animation needs music that sets the mood and builds emotion. Our music director composes powerful music and sound design that perfectly complements the content, bringing it to life.",
  },
  {
    title: "Visual Editors",
    icon: <Clapperboard className="w-6 h-6 text-purple-600" />,
    description: "After the production process, our team of editors packages the final product by assembling footage, inserting seamless transitions, and adding visually striking effects, creating content of the highest quality.",
  },
];