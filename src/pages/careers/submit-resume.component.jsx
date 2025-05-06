import React from "react";
import { Helmet } from "react-helmet";

import Layout from "../../components/layout/layout";
import "./submit-resume.styles.scss";

const SubmitResume = () => {
  return (
    <Layout>
      <Helmet>
        <title>MHConsultancy | Careers </title>
      </Helmet>
      <div className="submit-resume_wrapper container">
        <div className="heroSection">
          <h1>Submit Resume</h1>
        </div>
        <form
          name="submit-resume"
          method="POST"
          data-netlify="true"
          encType="multipart/form-data"
          netlify-honeypot="bot-field"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          {/* Hidden input for Netlify */}
          <input type="hidden" name="form-name" value="job-application" />
          <input type="hidden" name="bot-field" />

          <label htmlFor="fullName">Full Name *</label>
          <input type="text" name="fullName" placeholder="Your Name" required />

          <label htmlFor="email">Email *</label>
          <input type="email" name="email" placeholder="email id" required />

          <label htmlFor="phone">Phone *</label>
          <input type="tel" name="phone" placeholder="phone number" required />

          <label htmlFor="qualification">Qualification *</label>
          <input
            type="text"
            name="qualification"
            placeholder="Your highest degree"
            required
          />

          <label htmlFor="desgination">Job Role </label>
          <input
            type="text"
            name="desgination"
            placeholder="Current designation"
          />

          <label htmlFor="experience">Years of Experience *</label>
          <input
            type="text"
            name="experience"
            placeholder="no of years"
            required
          />

          <label htmlFor="resume">Upload Resume (PDF or DOC) *</label>
          <input type="file" name="resume" accept=".pdf,.doc,.docx" required />

          <button type="submit" className="btn btn--gold">
            Submit Application
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default SubmitResume;
