import { PageNotFound } from "components";
import AboutUs from "content/about-us/AboutUs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
         <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
