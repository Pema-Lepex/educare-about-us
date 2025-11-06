import MainFooter from "./components/MainFooter";
import MainNavigation from "./components/MainNavigation";


interface MainLayoutProps {
  children: React.ReactNode;
}
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="mb-20"><MainNavigation /></div>
      <main className="flex-grow">{children}</main>
      <MainFooter />
    </div>
  );
};

export default MainLayout;
