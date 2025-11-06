import MainLayout from "layouts/MainLayout";

const Impact: React.FC = () => {
  return (
    <MainLayout>
      <div className="p-10">
      <h1 className="text-4xl font-bold mb-6">Impact Page</h1>
      <p className="text-lg text-gray-700">
        Welcome to the impact page! Here you'll find information about our
        initiatives and the positive effects we're making in the community.
      </p>
    </div>
    </MainLayout>
  );
};

export default Impact;