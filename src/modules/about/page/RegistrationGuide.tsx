import MainLayout from "layouts/MainLayout";
import { RegistrationGuideBGImage } from "assets";
import RegistraionGuideReadMore from "./read-more/RegistraionGuideReadMore";

const RegistrationGuide: React.FC = () => {
  return (
    <MainLayout>
      <div
        className="w-full  bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${RegistrationGuideBGImage})` }}
      >
        <RegistraionGuideReadMore />
      </div>
    </MainLayout>
  );
};
export default RegistrationGuide;
