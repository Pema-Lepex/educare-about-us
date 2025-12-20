import { Link, useNavigate } from "react-router-dom";
import ImpactSectionPage from "./sections/ImpactSection";

const ImpactPage: React.FC = () => {
   const navigate = useNavigate();
  return (
    <>
      ImpactPage
      <ImpactSectionPage />
    <button
      onClick={() => navigate("/about#about-guide")}
      className="btn bg-black text-white px-3 py-2"
    >
      Learn How to Get Started
    </button>
    </>
  );
};
export default ImpactPage;
