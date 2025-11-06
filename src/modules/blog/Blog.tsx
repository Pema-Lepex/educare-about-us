import MainLayout from "layouts/MainLayout";

const Blog: React.FC = () => {
  return (
    <MainLayout>
      <div className="p-10">
        <h1 className="text-4xl font-bold mb-6">Blog Page</h1>
        <p className="text-lg text-gray-700">
          Welcome to the blog page! Here you'll find the latest articles and
          updates on various topics. Stay tuned for more content coming soon!
        </p>
      </div>
    </MainLayout>
  );
};

export default Blog;
