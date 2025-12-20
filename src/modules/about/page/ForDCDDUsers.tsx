import MainLayout from "layouts/MainLayout";
import { RegistrationGuideBGImage } from "assets";
import ForDCDDUsersReadMore from "./read-more/ForDCDDUsersReadMore";

const ForDCDDUsers: React.FC = () => {
  return (
    <MainLayout>
      <div
        className="w-full  bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${RegistrationGuideBGImage})` }}
      >
        <ForDCDDUsersReadMore />
      </div>
    </MainLayout>
  );
};
export default ForDCDDUsers;
