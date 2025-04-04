import React from "react";
import "./section3.styles.scss";
import recruitmentImage from "../../../assets/home02.jpg"; // Update with the actual image path
import { FaCheckCircle } from "react-icons/fa"; // Import icons from React Icons

const Section3 = () => {
  const bulletPoints = [
    {
      title: "Proven Track Record",
      description:
        "Successfully placing top professionals in leading organizations across diverse sectors.",
    },
    {
      title: "Personalized Approach",
      description:
        "We take the time to understand your unique requirements, ensuring customized hiring solutions.",
    },
    {
      title: "Cutting-Edge Recruitment Technology",
      description:
        "Our process is driven by AI-powered tools, data analytics, and advanced sourcing methodologies.",
    },
    {
      title: "Global Reach",
      description:
        "We serve both Indian and international clients, allowing businesses to access a vast talent pool.",
    },
    {
      title: "Commitment to Excellence",
      description:
        "Our focus is not just on filling vacancies but on making the perfect match for long-term success.",
    },
  ];

  return (
    <section className="section3Wrapper ">
      <div className="section3_flexWrapper container">
        {/* Left Side - Content */}
        <div className="section3_content">
          <h3 className="section3_smallHeading">Why Choose Us</h3>
          <h2 className="section3_mainHeading">
            Cutting-Edge Recruitment Technology
          </h2>
          <div className="section3_bulletPoints">
            {bulletPoints.map((point, index) => (
              <div key={index} className="bulletPoint">
                <FaCheckCircle className="icon" />
                <div className="bulletContent">
                  <h4>{point.title}</h4>
                  <p>{point.description}</p>
                  <hr />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="section3_image">
          <img src={recruitmentImage} alt="Recruitment Technology" />
        </div>
      </div>
    </section>
  );
};

export default Section3;
