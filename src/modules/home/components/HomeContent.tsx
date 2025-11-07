import { landing3 } from "assets";
import { EducareVisionContent } from "assets/content/VissionAndMission";
import React from "react";
import { useNavigate } from "react-router-dom";

const HomeContent: React.FC = () => {
  const navigate = useNavigate();
  const handleClickedLearnMore = () => {
    navigate("/about");
  }
  return (
    <div
      className="p-10 min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${landing3})` }}
    >
      <div className="max-w-5xl mx-auto text-center text-white space-y-10">
        <h1 className="text-xl font-bold">{EducareVisionContent.title}</h1>
        <p className="text-4xl font-bold">"{EducareVisionContent.content}"</p>
        <button onClick={()=>handleClickedLearnMore()} className="mt-6 px-6 py-3 border-2 hover:border-primary-500 hover:text-primary-600 text-white font-semibold rounded-md  transition">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default HomeContent;
