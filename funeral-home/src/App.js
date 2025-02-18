import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Offer from "./components/Offer";
import About from "./components/About";
import Contact from "./components/Contact";
import Map from "./components/Map";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Offer />
      <About />
      <Contact />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
