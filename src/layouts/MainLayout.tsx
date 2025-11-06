import MainFooter from "./components/MainFooter";
import MainNavigation from "./components/MainNavigation";


interface MainLayoutProps {
  children: React.ReactNode;
}
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col hide-scrollbar">
      <div className="mb-20"><MainNavigation /></div>
      <main className="flex-grow hide-scrollbar">{children}</main>
      <MainFooter />
    </div>
  );
};

export default MainLayout;
