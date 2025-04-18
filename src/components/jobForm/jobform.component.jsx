import React from "react";

import "./jobForm.styles.scss";
const JobForm = () => {
  return (
    <div className="job-form">
      <div className="job-form_wrapper">
        <h2>Apply for this position</h2>
        <form
          name="job-application"
          method="POST"
          data-netlify="true"
          encType="multipart/form-data"
          netlify-honeypot="bot-field"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            maxWidth: "500px",
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

          <label htmlFor="coverLetter">Cover Letter *</label>
          <textarea name="coverLetter" rows="5" required></textarea>

          <label htmlFor="resume">Upload Resume (PDF or DOC) *</label>
          <input type="file" name="resume" accept=".pdf,.doc,.docx" required />

          <button type="submit" className="btn btn--gold">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobForm;
