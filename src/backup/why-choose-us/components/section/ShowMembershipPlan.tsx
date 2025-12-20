import { CommonHeader, SubmitButton } from "components";

const ShowMembershipPlan: React.FC = () => {
  return (
    <>
      <section>
        <div className="text-center">
          <CommonHeader>
            Get your membership plan to achieve your goals
          </CommonHeader>
          <CommonHeader>Free Sign Up</CommonHeader>
          <p className="my-4">
            Create a free account to access a selection of our learning content
            immediately after signing in to the app.
          </p>
          <SubmitButton
            onClick={() =>
              window.open("https://www.educareskill.com/#/login", "_blank")
            }
          >
            Click to Sign up
          </SubmitButton>
        </div>
      </section>
    </>
  );
};
export default ShowMembershipPlan;
