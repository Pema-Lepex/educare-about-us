import AboutPage from "./page/AboutPage";
import MainAppLayout from "layouts/MainAppLayout";

const AppAbout:React.FC = () => {
  return (
   <MainAppLayout isHomePage={true}>
      <AboutPage/>
    </MainAppLayout>
  )
}
export default AppAbout;