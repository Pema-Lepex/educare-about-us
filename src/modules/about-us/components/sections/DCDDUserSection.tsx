import { CommonHeader, CommonParagraph, LearnMoreButton } from "components";
import { useNavigate } from "react-router-dom";

const DCDDUserSection: React.FC = () => {
      const navigate = useNavigate();
  const handleClickedLearnMore = () => {
    navigate("/about-free-dcdd-users");
  }
  return (
    <>
      <section className="text-center max-w-3xl mx-auto leading-relaxed my-16 space-y-4 px-4 ">
        <CommonHeader>Free tools for DCDD Users</CommonHeader>
        <CommonParagraph>
          <strong> Educare Skill</strong> is the first online learning platform
          in Bhutan. The platform is available as a mobile app as well as a
          website The platform offers entertaining educational content for our
          children.
        </CommonParagraph>
        <LearnMoreButton
          onClick={() => handleClickedLearnMore()}
          className="hover:bg-primary-500 hover:text-white border border-primary-600"
        />
      </section>
    </>
  );
};
export default DCDDUserSection;
