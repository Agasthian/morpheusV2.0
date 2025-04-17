import React from "react";
import { Helmet } from "react-helmet";

import Layout from "../../components/layout/layout";
import "./services.styles.scss";

import {
  FaComputer,
  FaMoneyBill1Wave,
  FaHeadset,
  FaIndustry,
} from "react-icons/fa6";

const Services = () => {
  return (
    <Layout>
      <Helmet>
        <title>MHConsultancy | Services </title>
      </Helmet>
      <section className="servicesPage">
        <div className="heroSection container">
          <h1>Our Services</h1>
          <h3>
            At <b>Morpheus Hunt Consulting</b>, we offer{" "}
            <b>specialized recruitment</b>
            services across multiple sectors, ensuring businesses find the right
            talent to drive their success. Our expertise spans across:
          </h3>
        </div>

        <div className="serviceWrapper">
          <div className="servicesGrid container">
            <div className="serviceCard">
              <i class="serviceCard__icon">
                <FaComputer />
              </i>
              <h3>IT & Non-IT Recruitment</h3>
              <p>
                • Hiring{" "}
                <b>
                  IT Developers, Testers, Business Analysts, Data Scientists,
                  Project Managers, SAP, Oracle, Scrum Masters, UI/UX Designers,
                  Network Engineers,
                </b>{" "}
                and<b> IT Support Professionals.</b>
              </p>
              <p>
                • Recruiting{" "}
                <b>
                  HR executives, sales professionals, marketing managers,
                  operations specialists,
                </b>{" "}
                and administrative staff for non-IT roles.
              </p>
            </div>

            <div className="serviceCard">
              <i class="serviceCard__icon">
                <FaMoneyBill1Wave />
              </i>
              <h3>BFSI Recruitment</h3>
              <p>
                • Sourcing professionals for Investment Banking, Financial
                Controller and{" "}
                <b> Manager, Credit Managers, and Relationship Managers.</b>
              </p>
              <p>
                • Identifying talent for roles in{" "}
                <b>
                  Insurance Underwriting, Actuarial Analysis, and Wealth
                  Management.
                </b>
              </p>
            </div>

            <div className="serviceCard">
              <i class="serviceCard__icon">
                <FaHeadset />
              </i>
              <h3>BPO Recruitment</h3>
              <p>
                • Hiring{" "}
                <b>
                  Customer Service Representatives, Technical Support
                  Specialists,
                </b>{" "}
                Telecallers, Quality Analysts, and Trainers.
              </p>
              <p>
                • Recruiting leadership roles such as{" "}
                <b>BPO Operations Managers and Process Trainers.</b>
              </p>
            </div>

            <div className="serviceCard">
              <i class="serviceCard__icon">
                <FaIndustry />
              </i>
              <h3>Manufacturing & Infrastructure</h3>
              <p>
                •{" "}
                <b>
                  Placing Engineers, Production Managers, Quality Control
                  Analysts, and Supply Chain Experts{" "}
                </b>{" "}
                in Automobile, Mechanical, Electrical, and Electronics
                industries.
              </p>
              <p>
                • Hiring skilled professionals for{" "}
                <b>EPC (Engineering, Procurement, and Construction)</b>,
                Construction, and Infrastructure projects.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
