import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/main.scss";

const Home = lazy(() => import("./pages/home/home.component"));
const AboutOrg = lazy(() =>
  import("./pages/about/aboutOrganization.component")
);
const AboutTeam = lazy(() => import("./pages/about/aboutTeam.component"));
const Contact = lazy(() => import("./pages/contact/contact.component"));
const Careers = lazy(() => import("./pages/careers/careers.components"));
const Services = lazy(() => import("./pages/services/services.components"));

const App = (props) => {
  return (
    <>
      <BrowserRouter>
        <Suspense>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/organization" element={<AboutOrg />} />
            <Route path="/about/team" element={<AboutTeam />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/service" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
