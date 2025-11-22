import { PageNotFound } from "components";
import AboutUs from "modules/about-us/AboutUs";
import FreeToolsForDCDDUsersPage from "modules/about-us/FreeToolsForDCDDUsersPage";
import MembershipPage from "modules/about-us/MembershipPage";
import Blog from "modules/blog/Blog";
import Detail from "modules/blog/Detail";
import ThakurSPowdyel from "modules/impact/components/ThakurSPowdyel";
import Impact from "modules/impact/Impact";
import Leadership from "modules/leadership/Leadership";
import Team from "modules/team/Team";
import WeOfferPage from "modules/why-choose-us/WeOfferPage";
import WhyChooseUs from "modules/why-choose-us/WhyChooseUs";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Navigate to="/about" replace />} />
        <Route path="/about" element={<AboutUs />} />
        <Route
          path="/about-free-dcdd-users"
          element={<FreeToolsForDCDDUsersPage />}
        />
        <Route
          path="/about-free-dcdd-users"
          element={<FreeToolsForDCDDUsersPage />}
        />
        <Route path="/about-membership" element={<MembershipPage />} />
        <Route path="/impact" element={<Impact />} />
        <Route
          path="/impact-Thakur-S-Powdyel-clip"
          element={<ThakurSPowdyel />}
        />
        <Route path="/why-choose-us" element={<WhyChooseUs />} />
        <Route path="/why-choose-us-we-offer" element={<WeOfferPage />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/team" element={<Team />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
