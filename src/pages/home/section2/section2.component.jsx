import React from "react";
import "./section2.styles.scss";
import home03 from "../../../assets/home03.jpg";

const Section2 = () => {
  return (
    <div className="section2Wrapper">
      {/* Left Side - Image */}
      <div className="section2_image">
        <img src={home03} alt="About Us" />
      </div>

      {/* Right Side - Content */}
      <div className="section2_content">
        <h3 className="section2_smallHeading">About Us</h3>
        <h2 className="section2_mainHeading">
          We provide tailored recruitment solutions
        </h2>
        <p className="section2_paragraph">
          Morpheus Hunt Consulting is a leading recruitment consultancy
          dedicated to bridging the gap between top-tier talent and dynamic
          organizations. With our expertise in headhunting and candidate search,
          we help businesses achieve their goals by identifying the right
          skilled professionals. Our success is rooted in our ability to
          understand the specific needs of both employers and employees,
          ensuring the perfect match. We operate with a global outlook, serving
          both domestic and international clients, offering tailored recruitment
          solutions backed by cutting-edge technology and a highly experienced
          team.
        </p>
      </div>
    </div>
  );
};

export default Section2;
