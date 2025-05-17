import "./App.css";
import AboutUs from "./sections/AboutUs";
import ContactUs from "./sections/ContactUs";
import FAQs from "./sections/FAQs";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Pricing from "./sections/Pricing";
import Services from "./sections/Services";
import BusinessTypes from "./sections/BusinessTypes";
import Testimonials from "./sections/Testimonials";

export default function App() {
  return (
    <main>
      <Navbar />
      <div className="">
        <Hero id="home" />
        <Services id="services" />
        <AboutUs id="about" />
        <BusinessTypes id="businesstypes" />
        <Pricing id="pricing" />
        <FAQs id="faqs" />
        <Testimonials id="testimonials" />
        <ContactUs id="contact" />
        <Footer />
      </div>
    </main>
  );
}
