import React from "react";
import { Helmet } from "react-helmet";
import { FaCheckCircle } from "react-icons/fa";

import Layout from "../../components/layout/layout";
import section1Img from "../../assets/contact02.jpg";
import "./aboutOrganization.styles.scss";

const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>MHConsultancy | About us </title>
      </Helmet>
      <div className="abtOrg_wrapper">
        <div className="container">
          <h1 className="centerAlign">About Organization </h1>
          <section className="abtOrg_section ">
            <div className="abtOrg_section_left">
              <h3 className="subHeading">About Us</h3>
              <p>
                Morpheus Hunt Consulting is a
                <b> leading recruitment consultancy </b>
                dedicated to bridging the gap between <b>top-tier talent </b>and
                <b> dynamic organizations </b>. With our expertise in
                <b> headhunting and candidate search </b> , we help businesses
                achieve their goals by identifying the{" "}
                <b> right skilled professionals. </b> Our success is rooted in
                our ability to understand the specific needs of both{" "}
                <b> employers and employees</b>, ensuring the perfect match. We
                operate with a <b> global outlook</b>, serving both{" "}
                <b> domestic and international clients</b>, offering{" "}
                <b>tailored recruitment solutions </b> backed by cutting-edge
                technology and a highly experienced team.
              </p>
              <br />
              <p>
                We take pride in our ability to attract <b>diverse talent </b>,
                leveraging the <b> latest sourcing tools </b> and our extensive
                professional network. With a proven track record of placing top
                talent across multiple industries, we specialize in identifying
                niche skills and fulfilling{" "}
                <b> critical hiring requirements.</b>
              </p>

              <br />
              <br />
              <h3 className="subHeading"> What do we do?</h3>
              <p>
                At Morpheus Hunt Consulting, we specialize in connecting
                businesses with the best talent through:
              </p>
              <ul>
                <li>
                  Comprehensive Talent Acquisition: We use innovative sourcing
                  strategies and an extensive candidate network to find the
                  perfect fit for your organization.
                </li>
                <li>
                  Industry-Specific Hiring Solutions: We provide tailored
                  recruitment services across IT, ITES, Insurance, ITIS, BFSI,
                  BPO, Sales, and Manufacturing industries, ensuring expertise
                  in every placement.
                </li>
                <li>
                  Strategic Workforce Planning: We assist businesses in building
                  a sustainable talent pool, ensuring they are equipped for
                  future growth and challenges.
                </li>
                <li>
                  Career Guidance & Placement Services: We empower job seekers
                  by providing career counseling, resume building, and interview
                  preparation to match them with the best opportunities.
                </li>
              </ul>
            </div>
            <div className="abtOrg_section_right">
              <img src={section1Img} alt="about org section1 " />
            </div>
          </section>
          <section className="abtOrg_section2">
            <h3 className="subHeading">
              {" "}
              <FaCheckCircle className="icon" />
              &nbsp; Vision Statement
            </h3>
            <p>
              Our vision is to be recognized as the{" "}
              <b> leading HR recruitment consultancy,</b> known for connecting
              <b>forward-thinking companies </b>with the right talent. We are
              committed to fostering{" "}
              <b> inclusivity, innovation, and growth </b>for both employers and
              job seekers. By integrating{" "}
              <b> personalized and data-driven recruitment solutions,</b> we aim
              to <b>redefine the hiring process</b>, helping businesses and
              professionals thrive in an ever-evolving workforce landscape.
            </p>
            <br />
            <br />
            <h3 className="subHeading">
              {" "}
              <FaCheckCircle className="icon" />
              &nbsp; Mission
            </h3>
            <p>
              Our mission is to be an{" "}
              <b> outstanding HR recruitment consultancy</b>, setting industry
              benchmarks in talent acquisition. We strive to provide
              <b>unparalleled recruitment services,</b> ensuring businesses gain
              access to <b> top-tier professionals </b> while empowering
              candidates with career opportunities that align with their
              aspirations. Through our commitment to excellence, we aim to
              become <b>pioneers in the recruitment sector</b>.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default About;
