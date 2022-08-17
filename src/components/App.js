import React from "react";
import Navbar from './Navigation_Bar/Navbar'
import Carousel from './Carousel/Carousel';
import Features from './Features';
import Awards from "./Awards";
import Aspects from "./Aspects";
import AccountSection from "./AccountSection";
import StepSection from "./StepSection";
import Footer from "./Footer";

function App() {

  return (
    <div>

      <Navbar />
      <Carousel />
    
      <Features />
      <Awards />

      <Aspects />
      <AccountSection />

      <StepSection />
      <Footer />

    </div>
  );
}

export default App;