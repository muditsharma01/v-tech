import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar";
import Services from "./Pages/Services";
import DesignAndEngineering from "./Pages/DesignAndEngineering";
import Footer from "./Components/Footer";
import QualityAssurance from "./Pages/QualityAssurance";
import Ims from "./Pages/Ims";
import ProjectManagement from "./Pages/ProjectManagement";
import Esg from "./Pages/Esg";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />}></Route>
          <Route path="/services/design-and-engineering" element={<DesignAndEngineering />} />
          <Route path="/services/quality-assurance" element={<QualityAssurance />} />
          <Route path="/services/ims" element={<Ims />} />
          <Route path="/services/project-management" element={<ProjectManagement />} />
          <Route path="/services/esg" element={<Esg />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
