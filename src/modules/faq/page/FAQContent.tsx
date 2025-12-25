import { HTGSBGImage } from "assets";
import FAQContentSection from "./section/FAQContentSection";

const FAQContent: React.FC = () => {
  return (
    <div className="w-full  bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${HTGSBGImage})` }}>
      <FAQContentSection />
    </div>
  );
};
export default FAQContent;
