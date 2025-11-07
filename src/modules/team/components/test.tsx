import { useState } from "react";
import { departments } from "./teamNav";

export enum TeamEnum {
  ALL = "All",
  MANAGEMENT = "Management",
  CONTENT_CREATOR = "Content Creator",
  TECHNOLOGIES = "Technologies",
  BG_ARTIST = "Bg Artist",
  TWO_D_ANIMATOR = "2D Animator",
  THREE_D_ANIMATOR = "3D Animators",
  PRODUCTION_TEAM = "Production Team",
}

const TeamContent: React.FC = () => {
  const [openTeam, setOpenTeam] = useState<TeamEnum>(TeamEnum.ALL)
  const handleClick =()=>{}
  return (
    <>
    {departments.map(item=>
    <button onClick={()=>{}} className="mx-2 border p-3">{item}</button>)}
    </>
  );
};

export default TeamContent;
