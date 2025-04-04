import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/main.scss";

import Home from "./pages/home/home.component";
import About from "./pages/about/about.component";
import Contact from "./pages/contact/contact.component";
import Careers from "./pages/careers/careers.components";
import Services from "./pages/services/services.components";

const App = (props) => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/service" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
