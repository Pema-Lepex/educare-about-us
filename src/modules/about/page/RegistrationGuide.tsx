import MainLayout from "layouts/MainLayout";
import RegistraionGuideReadMore from "./read-more/RegistraionGuideReadMore";
import { EducarekidsBGImage } from "assets";

const RegistrationGuide: React.FC = () => {
  return (
    <MainLayout>
      <div
        className="w-full  bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${EducarekidsBGImage})` }}
      >
        <RegistraionGuideReadMore />
      </div>
    </MainLayout>
  );
};
export default RegistrationGuide;
