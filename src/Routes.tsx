import { PageNotFound } from "components";
import AboutUs from "modules/about-us/AboutUs";
import Blog from "modules/blog/Blog";
import Home from "modules/home/Home";
import Impact from "modules/impact/Impact";
import Leadership from "modules/leadership/Leadership";
import Team from "modules/team/Team";
import WhyChooseUs from "modules/why-choose-us/WhyChooseUs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
         <Route path="/" element={<Home />} />
         <Route path="/about-us" element={<AboutUs />} />
         <Route path="/impact" element={<Impact />} />
         <Route path="/why-choose-us" element={<WhyChooseUs />} />
         <Route path="/leadership" element={<Leadership />} />
         <Route path="/team" element={<Team />} />
         <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
