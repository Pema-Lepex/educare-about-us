import MainLayout from "layouts/MainLayout";
import ForDCDDUsersReadMore from "./read-more/ForDCDDUsersReadMore";
import { DCDDNewBGImage } from "assets/images/dcdd";

const ForDCDDUsers: React.FC = () => {
  return (
    <MainLayout>
      <div
        className="w-full  bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${DCDDNewBGImage})` }}
      >
        <ForDCDDUsersReadMore />
      </div>
    </MainLayout>
  );
};
export default ForDCDDUsers;
