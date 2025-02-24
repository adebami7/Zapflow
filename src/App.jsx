import "./App.css";
import AboutUs from "./sections/AboutUs";
import ContactUs from "./sections/ContactUs";
import FAQs from "./sections/FAQs";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Pricing from "./sections/Pricing";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero id="home" />
      <AboutUs id="about" />
      <Services id="services" />
      <Pricing id="pricing" />
      <FAQs id="faqs" />
      <Testimonials id="testimonials" />
      <ContactUs id="contact" />
      <Footer />
    </main>
  );
}
