import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./sections/AboutUs";
import Blog from "./sections/Blog";
import ContactUs from "./sections/ContactUs";
import FAQs from "./sections/FAQs";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import HelpCenter from "./sections/HelpCenter";
import LegalPage from "./sections/LegalPage";
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
        <Route path="/about" element={<About />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/legal/:tab" element={<LegalPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}
