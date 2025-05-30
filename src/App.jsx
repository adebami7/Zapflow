import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./sections/AboutUs";
import ContactUs from "./sections/ContactUs";
import FAQs from "./sections/FAQs";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import HelpCenter from "./pages/HelpCenter";
import Navbar from "./sections/Navbar";
import Pricing from "./sections/Pricing";
import Services from "./sections/Services";
import BusinessTypes from "./sections/BusinessTypes";
import Testimonials from "./sections/Testimonials";
import Integrations from "./pages/Integrations";
import Academy from "./pages/Academy";
import AcademyContent from "./pages/AcademyContent";
import About from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";
import Careers from "./pages/Careers";
import PricingPage from "./pages/PricingPage";
import FAQ from "./pages/FAQ";
import UseCases from "./pages/UseCases";
import TermsAndConditions from "./pages/TermsAndConditions";
import RefundPolicy from "./pages/RefundPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Blog from "./pages/Blog";
import BlogContent from "./pages/BlogContent";

export default function App() {
  return (
    <Router>
      <ScrollToTop />

      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Hero id="home" />
              <Services id="services" />
              <AboutUs id="about" />
              <BusinessTypes id="business-types" />
              <Pricing id="pricing" />
              <FAQs id="faqs" />
              <Testimonials id="testimonials" />
              <ContactUs id="contact" />
            </main>
          }
        />

        <Route path="/integrations" element={<Integrations />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/academy/:title" element={<AcademyContent />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:title" element={<BlogContent />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/faqs" element={<FAQ />} />
        <Route path="/use-cases" element={<UseCases />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/help-center" element={<HelpCenter />} />
      </Routes>

      <Footer />
    </Router>
  );
}
