import "./App.css";
// import Hero from "./sections/Hero";
// import Navbar from "./sections/Navbar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Glance from "./components/Glance";
import About from "./components/About";
import Services from "./components/Services";
import Features from "./components/Features";
import Team from "./components/Team";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";


export default function App() {
  return (
    <main>
      {/* <Navbar />
      <Hero /> */}
      <Header />
      <Hero />
      <Glance />
      <About />
      <Services />
      <Features /> 
      <Team />
      <Pricing />
      <Footer />
    </main>
  );
}
