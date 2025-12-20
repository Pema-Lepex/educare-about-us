import MainLayout from "layouts/MainLayout";
import { DCDDPageBackGroundImage } from "assets";
import ForDCDDUsersReadMore from "./read-more/ForDCDDUsersReadMore";

const ForDCDDUsers: React.FC = () => {
  return (
    <MainLayout>
      <div
        className="w-full  bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${DCDDPageBackGroundImage})` }}
      >
        <ForDCDDUsersReadMore />
      </div>
    </MainLayout>
  );
};
export default ForDCDDUsers;
