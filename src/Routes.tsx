import { PageNotFound } from "components";
import AboutUs from "modules/about/About";
import ForDCDDUsers from "modules/about/page/ForDCDDUsers";
import GiftCoupon from "modules/about/page/GiftCoupon";
import HowToGetStarted from "modules/about/page/HowToGetStarted";
import RegistrationGuide from "modules/about/page/RegistrationGuide";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Impact from "modules/impact/Impact";
import WhyChooseUs from "modules/why-choose-us/WhyChooseUs";
import Leadership from "modules/leadership/Leadership";
import Team from "modules/team/Team";
import Blog from "modules/blog/Blog";
import Career from "modules/career/Career";
import Contact from "modules/contact/Contact";
const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Navigate to="/about" replace />} />
        {/* About page routes */}
        
        <Route path="/about" element={<AboutUs />} />
        <Route
          path="/about/how-to-get-started?"
          element={<HowToGetStarted />}
        />
        <Route
          path="/about/registration-guide"
          element={<RegistrationGuide />}
        />
        <Route
          path="/about/for-dcdd-users"
          element={<ForDCDDUsers />}
        />
        <Route
          path="/about/gift-coupon-the-gift-of-learning"
          element={<GiftCoupon />}
        />
        {/* Impact page routes */}
        <Route path="/impact" element={<Impact />} />
         {/* Why Choose Us page routes */}
        <Route path="/why-choose-us" element={<WhyChooseUs />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/team" element={<Team />} />
        <Route path="/career" element={<Career />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
