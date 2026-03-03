import MainLayout from "layouts/MainLayout";
import AboutPage from "./page/AboutPage";

const About:React.FC = () => {
  return (
   <MainLayout isHomePage={true}>
      <AboutPage/>
    </MainLayout>
  )
}
export default About;