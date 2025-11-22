const MainFooter: React.FC = () => {
  return (
    <footer className="bg-primary-500 dark:bg-bgColor-900 py-6 ">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <p className="text-white dark:text-white text-sm">&copy; {new Date().getFullYear()} iBEST TECHNOLOGIES. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4 text-sm">
            <a href="#" className="text-white dark:text-white hover:text-blue-600 transition">About</a>
            <a href="#" className="text-white dark:text-white hover:text-blue-600 transition">Contact</a>
            <a href="#" className="text-white dark:text-white hover:text-blue-600 transition">Privacy</a>
          </div>
        </div>
      </footer>
  );
};

export default MainFooter;
