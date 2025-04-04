import React from "react";
import { Link } from "react-router-dom";
import "./section1.styles.scss";

const Section1 = () => {
  return (
    <div className="section1Wrapper">
      <div className="container-responsive-max">
        <div className="section1_content">
          <div className="section1_mainheading">
            <h1>Comprehensive Talent Acquisition</h1>
          </div>
          <div className="section1_subheading">
            <h2>
              We provide tailored recruitment services across IT, ITES,
              Insurance, ITIS, BFSI, BPO, Sales, and Manufacturing industries,
              ensuring expertise in every placement.
            </h2>
          </div>
          <div className="section1_actionButton">
            <Link to="/contact">
              <button className="btn btn--gold">
                Get Started - Register now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
