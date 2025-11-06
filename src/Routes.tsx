import { PageNotFound } from "components";
import AboutUs from "modules/about-us/AboutUs";
import Home from "modules/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
         <Route path="/" element={<Home />} />
         <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
