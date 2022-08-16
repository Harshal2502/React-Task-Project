import React from "react";
import Navbar from './Navigation_Bar/Navbar'
import Carousel from './Carousel/Carousel';
import Features from './Features';
import Awards from "./Awards";


function App() {

  return (
    <div>

      <Navbar />
      <Carousel />
    
      <Features />
      <Awards />

    </div>
  );
}

export default App;