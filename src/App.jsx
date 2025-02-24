import "./App.css";
import AboutUs from "./sections/AboutUs";
import ContactUs from "./sections/ContactUs";
import FAQs from "./sections/FAQs";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Pricing from "./sections/Pricing";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Pricing />
      <FAQs />
      <Testimonials />
      <ContactUs />
    </main>
  );
}
