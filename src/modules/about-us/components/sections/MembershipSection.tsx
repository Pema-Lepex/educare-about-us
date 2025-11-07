import { CommonHeader, CommonParagraph, LearnMoreButton } from "components";
import { useNavigate } from "react-router-dom";

const MembershipSection: React.FC = () => {
      const navigate = useNavigate();
  const handleClickedLearnMore = () => {
    navigate("/about-membership");
  }
  return (
    <>
      <section className="text-center max-w-3xl mx-auto leading-relaxed my-16 space-y-4 px-4 ">
        <CommonHeader>For Commercial Users</CommonHeader>
        <CommonParagraph>
          For commercial users, we offer specialized membership plans that allow the user to utilize our app for learning and skill development.
        </CommonParagraph>
        <LearnMoreButton
          onClick={() => handleClickedLearnMore()}
          className="hover:bg-primary-500 hover:text-white border border-primary-600"
        />
      </section>
    </>
  );
};
export default MembershipSection;
