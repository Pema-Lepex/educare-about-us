import MainLayout from "layouts/MainLayout";
import RegistraionGuideReadMore from "./read-more/RegistraionGuideReadMore";
import { EducarekidsBGImage } from "assets";

const RegistrationGuide: React.FC = () => {
  return (
    <MainLayout>
      <div
        className="w-full bg-white lg:bg-cover lg:bg-center lg:bg-no-repeat"
        style={{ 
          backgroundImage: window.innerWidth >= 1024 ? `url(${EducarekidsBGImage})` : 'none' 
        }}
      >
        <div 
          className="w-full bg-white lg:bg-cover lg:bg-center lg:bg-no-repeat"
          style={{ backgroundImage: `var(--bg-image)` }}
        >
             <style>{`
                div { --bg-image: none; }
                @media (min-width: 1024px) {
                    div { --bg-image: url(${EducarekidsBGImage}); }
                }
             `}</style>
          <RegistraionGuideReadMore />
        </div>
      </div>
    </MainLayout>
  );
};
export default RegistrationGuide;