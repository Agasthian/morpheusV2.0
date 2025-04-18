import React from "react";
import { Helmet } from "react-helmet";
import { SlArrowLeftCircle } from "react-icons/sl";
import { Link } from "react-router-dom";

import Layout from "../../../../components/layout/layout";
import JobForm from "../../../../components/jobForm/jobform.component";
import "./designEngineer.styles.scss";

const DesignEngineer = () => {
  return (
    <Layout>
      <Helmet>
        <title>MHConsultancy | Careers </title>
      </Helmet>
      <div className="designEng_wrapper container">
        <div className="heroSection ">
          <h1>Mechanical Design Engineer</h1>
        </div>
        <Link to="/search-job">
          <SlArrowLeftCircle />
          &nbsp;Back
        </Link>
        <div className="job-description">
          <div className="content">
            <h2>Job Description</h2>
            <ul>
              <li>Understand customer requirements and business objectives</li>
              <li>
                Provide strategic advice on using technology to achieve goals
              </li>
              <li>
                Manage IT initiatives and collaborate with in-house technical
                staff
              </li>
              <li>
                Design IT systems and networks ensuring the right architecture
                and functionality
              </li>
              <li>Support new technology implementation</li>
              <li>Train users in new and existing IT systems</li>
              <li>Provide assistance with technical issues</li>
              <li>Revise existing systems and suggest improvements</li>
              <li>Produce reports</li>
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

export default DesignEngineer;
