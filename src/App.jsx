import "./App.css";
import AboutUs from "./sections/AboutUs";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Services from "./sections/Services";

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
    </main>
  );
}
