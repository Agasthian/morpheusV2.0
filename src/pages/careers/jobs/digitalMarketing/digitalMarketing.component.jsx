import React from "react";
import { Helmet } from "react-helmet";
import { SlArrowLeftCircle } from "react-icons/sl";
import { Link } from "react-router-dom";

import Layout from "../../../../components/layout/layout";
import JobForm from "../../../../components/jobForm/jobform.component";
import "./digitalMarketing.styles.scss";

const DigitalMarketing = () => {
  return (
    <Layout>
      <Helmet>
        <title>MHConsultancy | Careers </title>
      </Helmet>
      <div className="digitalMarket_wrapper container">
        <div className="heroSection ">
          <h1>Digital Marketing</h1>
        </div>
        <Link to="/search-job">
          <SlArrowLeftCircle />
          &nbsp;Back
        </Link>
        <div className="job-description">
          <div className="content">
            <h2>Job Description</h2>

            <ul>
              <li>
                Plans and executes all web, SEO/SEM, database marketing, email,
                social media, and display advertising campaigns.
              </li>
              <li>Designs, builds, and maintains our social media presence.</li>
              <li>
                Measures and reports performance of all digital marketing
                campaigns and assesses against goals (ROI and KPIs).
              </li>
              <li>
                Identifies trends and insights and optimizes spend and
                performance based on the insights.
              </li>
              <li>
                Brainstorms new and creative growth strategies through digital
                marketing.
              </li>
              <li>
                Plans, executes, and measures experiments and conversion tests.
              </li>
              <li>
                Collaborates with internal teams to create landing pages and
                optimize user experience.
              </li>
              <li>
                Utilizes strong analytical ability to evaluate end-to-end
                customer experience across multiple channels and customer touch
                points.
              </li>
              <li>
                Identifies critical conversion points and drop off points and
                optimizes user funnels.
              </li>
              <li>Collaborates with agencies and other vendor partners.</li>
              <li>Evaluates emerging technologies.</li>
              <li>
                Provides thought leadership and perspective for adoption where
                appropriate.
              </li>
            </ul>
          </div>
          <div className="job-form">
            <JobForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DigitalMarketing;
