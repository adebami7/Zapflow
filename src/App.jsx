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

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <main>
              <Hero id="home" />
              <Services id="services" />
              <AboutUs id="about" />
              <BusinessTypes id="businesstypes" />
              <Pricing id="pricing" />
              <FAQs id="faqs" />
              <Testimonials id="testimonials" />
              <ContactUs id="contact" />
            </main>
          }
        />

        {/* Blog,HelpCenter,Termsconditions page */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/legal/:tab" element={<LegalPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}
