import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from "../Components/HeroSection";
import WhatWe from "../Components/WhatWe";
import About from "../Components/About";
import Know from "../Components/Know";
import Goal from "../Components/Goal";
import Expertise from "../Components/Expertise";

import '../Assets/index/main.css'
function HomePage() {
  return (
    <>
        <Navbar/>
      <HeroSection/>
      <div className="container mt-5">
        <About/>
      </div>
      <div>
        <WhatWe/>
      </div>
      <div>
        <Know/>
      </div>
      <div>
        <Goal/>
      </div>
      <div>
        <Expertise/>
      </div>
      <div>
       
      </div>
    
    </>
  )
}

export default HomePage