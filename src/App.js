import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/main.scss";

const Home = lazy(() => import("./pages/home/home.component"));
const AboutOrg = lazy(() =>
  import("./pages/about/aboutOrganization.component")
);
const AboutTeam = lazy(() => import("./pages/about/aboutTeam.component"));
const Contact = lazy(() => import("./pages/contact/contact.component"));
const JobSearch = lazy(() => import("./pages/careers/searchJob.components"));
const SubmitResume = lazy(() =>
  import("./pages/careers/submit-resume.component")
);
const ItConsultant = lazy(() =>
  import("./pages/careers/jobs/itConsultant/itConsultant.component")
);
const DigitalMarketing = lazy(() =>
  import("./pages/careers/jobs/digitalMarketing/digitalMarketing.component")
);
const DesignEngineer = lazy(() =>
  import("./pages/careers/jobs/designEngineer/designEngineer.component")
);
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
            <Route path="/search-job" element={<JobSearch />} />
            <Route path="/it-consultant-manager" element={<ItConsultant />} />
            <Route path="/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/design-engineer" element={<DesignEngineer />} />
            <Route path="/submit-resume" element={<SubmitResume />} />
            <Route path="/service" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
