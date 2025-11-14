import { ThakurSPowdyel } from "assets";
import { useNavigate } from "react-router-dom";

const ListOfImpact: React.FC = () => {
  const navigate = useNavigate();
  const handleClickedLearnMore = () => {
    navigate("/impact-Thakur-S-Powdyel-clip");
  };
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto p-4 md:p-8 lg:p-16">
        <div>
          <img src={ThakurSPowdyel} alt="ThakurSPowdyel" className="" />
          <h4 onClick={()=>handleClickedLearnMore()} className="text-xl font-bold hover:underline cursor-pointer">
            We are deeply overwhelmed by the profound commendation of our work
            by Thakur S Powdyel, the former education minister.
          </h4>
          <p>
            Such kind words of best wishes coming from one of the visionary
            education thinkers and pioneers in our country, and to ...{" "}
            <span onClick={()=>handleClickedLearnMore()} className="text-blue-700 cursor-pointer hover:underline">
              Read More
            </span>
          </p>
        </div>
        <div>
          <img src={ThakurSPowdyel} alt="ThakurSPowdyel" className="" />
          <h4 onClick={()=>handleClickedLearnMore()} className="text-xl font-bold hover:underline cursor-pointer">
            We are deeply overwhelmed by the profound commendation of our work
            by Thakur S Powdyel, the former education minister.
          </h4>
          <p>
            Such kind words of best wishes coming from one of the visionary
            education thinkers and pioneers in our country, and to ...{" "}
            <span onClick={()=>handleClickedLearnMore()} className="text-blue-700 cursor-pointer hover:underline">
              Read More
            </span>
          </p>
        </div>
        <div>
          <img src={ThakurSPowdyel} alt="ThakurSPowdyel" className="" />
          <h4 onClick={()=>handleClickedLearnMore()} className="text-xl font-bold hover:underline cursor-pointer">
            We are deeply overwhelmed by the profound commendation of our work
            by Thakur S Powdyel, the former education minister.
          </h4>
          <p>
            Such kind words of best wishes coming from one of the visionary
            education thinkers and pioneers in our country, and to ...{" "}
            <span onClick={()=>handleClickedLearnMore()} className="text-blue-700 cursor-pointer hover:underline">
              Read More
            </span>
          </p>
        </div>
        <div>
          <img src={ThakurSPowdyel} alt="ThakurSPowdyel" className="" />
          <h4 onClick={()=>handleClickedLearnMore()} className="text-xl font-bold hover:underline cursor-pointer">
            We are deeply overwhelmed by the profound commendation of our work
            by Thakur S Powdyel, the former education minister.
          </h4>
          <p>
            Such kind words of best wishes coming from one of the visionary
            education thinkers and pioneers in our country, and to ...{" "}
            <span onClick={()=>handleClickedLearnMore()} className="text-blue-700 cursor-pointer hover:underline">
              Read More
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ListOfImpact;
