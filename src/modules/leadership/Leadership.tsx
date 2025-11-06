import MainLayout from "layouts/MainLayout";

const Leadership: React.FC = () => {
  return (
    <MainLayout>
      <div className="p-10">
        <h1 className="text-4xl font-bold mb-6">Leadership Page</h1>
        <p className="text-lg text-gray-700">
          Welcome to the leadership page! Here you'll find information about our
          leadership team and their vision for the organization.
        </p>
      </div>
    </MainLayout>
  );
};

export default Leadership;
