import { PageNotFound } from "components";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Impact from "modules/impact/Impact";
import WhyChooseUs from "modules/why-choose-us/WhyChooseUs";
import Leadership from "modules/leadership/Leadership";
import Blog from "modules/blog/Blog";
import Career from "modules/career/Career";
import Contact from "modules/contact/Contact";
import FAQ from "modules/faq/FAQ";
import ForDCDDUsers from "modules/about/page/ForDCDDUsers";
import GiftCoupon from "modules/about/page/GiftCoupon";
import HowToGetStarted from "modules/about/page/HowToGetStarted";
import RegistrationGuide from "modules/about/page/RegistrationGuide";
import PrivacyPolicy from "modules/privacy-policy/PrivacyPolicy";
import TermsOfUse from "modules/terms-of-use/TermsOfUse";
import About from "modules/about/About";
const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Navigate to="/aboutus" replace />} />
        {/* About page routes */}
        
        <Route path="/aboutus" element={<About />} />
        <Route
          path="/aboutus/how-to-get-started?"
          element={<HowToGetStarted />}
        />
        <Route
          path="/aboutus/registration-guide"
          element={<RegistrationGuide />}
        />
        <Route
          path="/aboutus/for-dcdd-users"
          element={<ForDCDDUsers />}
        />
        <Route
          path="/aboutus/gift-coupon-the-gift-of-learning"
          element={<GiftCoupon />}
        />
        {/* Impact page routes */}
        <Route path="/impact" element={<Impact />} />
         {/* Why Choose Us page routes */}
        <Route path="/why-choose-us" element={<WhyChooseUs />} />
        <Route path="/team" element={<Leadership />} />
        <Route path="/career" element={<Career />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/termsofuse" element={<TermsOfUse />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
