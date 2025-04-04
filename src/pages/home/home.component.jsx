import React from "react";
import { Helmet } from "react-helmet";

import Layout from "../../components/layout/layout";
import Section1 from "./section1/section1.component";
import Section2 from "./section2/section2.component";
import Section3 from "./section3/section3.component";
import Section4 from "./section4/section4.component";
import Section5 from "./section5/section5.component";

import "./home.styles.scss";

const Home = () => {
  return (
    <Layout>
      <Helmet>
        <title>MHConsultancy | Home </title>
      </Helmet>
      <div className="homeWrapper">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </div>
    </Layout>
  );
};

export default Home;
