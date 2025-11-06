import MainLayout from "layouts/MainLayout";

const Team: React.FC = () => {
  return (
    <MainLayout>
      <div className="p-10">
        <h1 className="text-4xl font-bold mb-6">Team Page</h1>
        <p className="text-lg text-gray-700">
          Welcome to the team page! Here you'll find information about our team
          members and their roles within the organization.
        </p>
      </div>
    </MainLayout>
  );
};

export default Team;
