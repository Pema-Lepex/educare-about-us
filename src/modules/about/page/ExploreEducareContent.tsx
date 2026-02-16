import MainLayout from "layouts/MainLayout";
import ExploreEducareContentReadMore from "./read-more/ExploreEducareContentReadMore";

const ExploreEducareContent: React.FC = () => {
  return (
    <MainLayout>
      <div
        className="w-full  bg-cover bg-center bg-no-repeat min-h-screen"
      >
        <ExploreEducareContentReadMore />
      </div>
    </MainLayout>
  );
};
export default ExploreEducareContent;
