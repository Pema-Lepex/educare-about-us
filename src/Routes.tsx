import React, { Suspense, lazy } from "react";
import { PageNotFound } from "components";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LoadingIndicator from "layouts/components/Loading";

// Lazy-loaded page components — each becomes a separate JS chunk
const About = lazy(() => import("modules/about/About"));
const Impact = lazy(() => import("modules/impact/Impact"));
const WhyChooseUs = lazy(() => import("modules/why-choose-us/WhyChooseUs"));
const Leadership = lazy(() => import("modules/leadership/Leadership"));
const Blog = lazy(() => import("modules/blog/Blog"));
const Career = lazy(() => import("modules/career/Career"));
const Contact = lazy(() => import("modules/contact/Contact"));
const FAQ = lazy(() => import("modules/faq/FAQ"));
const ForDCDDUsers = lazy(() => import("modules/about/page/ForDCDDUsers"));
const GiftCoupon = lazy(() => import("modules/about/page/GiftCoupon"));
const HowToGetStarted = lazy(() => import("modules/about/page/HowToGetStarted"));
const RegistrationGuide = lazy(() => import("modules/about/page/RegistrationGuide"));
const PrivacyPolicy = lazy(() => import("modules/privacy-policy/PrivacyPolicy"));
const TermsOfUse = lazy(() => import("modules/terms-of-use/TermsOfUse"));
const ExploreEducareContent = lazy(() => import("modules/about/page/ExploreEducareContent"));

const REDIRECTS: Record<string, string> = {
    '/aboutus/how-to-get-started': '/aboutus/membership',
    // add more as needed
};
const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingIndicator />}>
        <Routes>
          {Object.entries(REDIRECTS).map(([oldPath, newPath]) => (
              <Route key={oldPath} path={oldPath} element={<Navigate to={newPath} replace />} />
          ))}
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Navigate to="/aboutus" replace />} />
          {/* About page routes */}

          <Route path="/aboutus" element={<About />} />
          <Route
            path="/aboutus/membership"
            element={<HowToGetStarted />}
          />
          <Route
            path="/aboutus/registration-guide"
            element={<RegistrationGuide />}
          />
          <Route path="/aboutus/for-dcdd-users" element={<ForDCDDUsers />} />
          <Route
            path="/aboutus/gift-coupon"
            element={<GiftCoupon />}
          />
          <Route
            path="/aboutus/explore-educare-content"
            element={<ExploreEducareContent />}
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
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
