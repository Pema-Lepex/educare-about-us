import MainLayout from "layouts/MainLayout";
import HomeContent from "./components/HomeContent";

const Home: React.FC = () => {
  return(
    <MainLayout>
       <HomeContent/>
    </MainLayout>
  );
};

export default Home;