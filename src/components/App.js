import React, { useEffect, useState } from "react";
import Navbar from './Navbar'
import Carousel from './Carousel';
import Features from './Features';
import Award from "./Award";


function App() {

  return (
    <div>

      <Navbar />
      <Carousel />
    
      <Features />
      <h4 className="awardText">AWARD WINNING PLATFORM & SERVICES</h4>
      <Award />

    </div>
  );
}

export default App;