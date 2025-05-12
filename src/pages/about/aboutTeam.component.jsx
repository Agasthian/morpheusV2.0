import React from "react";
import { Helmet } from "react-helmet";

import Layout from "../../components/layout/layout";
import Team01 from "../../assets/team01.jpg";
import Team02 from "../../assets/team02.jpeg";
import "./aboutTeam.styles.scss";

const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>MHConsultancy | About Team </title>
      </Helmet>
      <div className="abtTeam">
        <div className="container">
          <h1 className="centerAlign">About the Team</h1>

          <section className="team01">
            <div className="team01_content">
              <h3 className="subHeading">Mr. Ashique Anish - Director </h3>
              <p>
                Mr. Ashique Anish S is a seasoned entrepreneur and business
                leader, currently serving as the Director of Morpheus Hunt
                Consulting Pvt Ltd, based in Chennai, Tamil Nadu. With a strong
                foundation in business management, he is an alumnus of the
                Xavier Institute of Management and Entrepreneurship in
                Bangalore, India.
              </p>
              <br />
              <p>
                At Morpheus Hunt Consulting, Mr. Anish plays a pivotal role in
                steering the company's strategic direction and fostering growth.
                His leadership is characterized by a commitment to innovation
                and excellence, driving the organization to new heights in the
                consulting industry.
              </p>{" "}
              <br />
              <p>
                Mr. Anish's professional journey reflects a blend of academic
                rigor and practical experience, positioning him as a respected
                figure in the business community. His dedication to continuous
                learning and adaptability has been instrumental in navigating
                the dynamic landscape of modern business.
              </p>{" "}
              <br />
              <p>
                Beyond his corporate responsibilities, Mr. Anish is known for
                his collaborative approach and mentorship, contributing to the
                development of future leaders in the industry. His vision and
                strategic insights continue to inspire those around him, making
                a lasting impact on the organizations he leads and the broader
                business ecosystem.
              </p>
            </div>
            <div className="team01_photo">
              <img src={Team01} alt="Mr. Ashique Anish - Director" />
            </div>
          </section>
          <section className="team02">
            <div className="team02_content">
              <h3 className="subHeading">
                Mr. Baiju Akshay - Managing Director{" "}
              </h3>
              <p>
                Mr. Baiju Akshay is the Managing Director of Morpheus Hunt
                Consulting Pvt Ltd, a distinguished firm specializing in
                harnessing the power of advanced analytics to address and solve
                complex business challenges. With a strong academic foundation
                in Mechanical Engineering from Velammal Engineering College —
                one of Chennai’s leading engineering institutions — coupled with
                professional certification in Data Science, Mr. Akshay brings a
                unique combination of technical proficiency and strategic
                insight to every initiative he leads. His educational background
                has equipped him with the analytical rigor and problem-solving
                mindset essential for navigating today’s fast-paced and
                data-driven business environment.
              </p>{" "}
              <br />
              <p>
                Throughout his career, Mr. Akshay has demonstrated an
                exceptional ability to bridge the gap between technical
                excellence and business strategy. Under his visionary
                leadership, Morpheus Hunt Consulting has grown into a trusted
                partner for organizations seeking to leverage data for smarter
                decision-making, operational optimization, and sustained growth.
                His approach emphasizes the practical application of
                cutting-edge analytics, ensuring that clients are not only
                equipped with sophisticated tools but also empowered with
                actionable insights that drive real-world impact.
              </p>{" "}
              <br />
              <p>
                Mr. Akshay’s unwavering commitment to innovation and excellence
                positions him as a forward-thinking leader in the consulting
                industry. By continuously adapting to emerging technologies and
                business trends, he ensures that Morpheus Hunt Consulting
                remains at the forefront of delivering customized, value-driven
                solutions across various sectors. His work reflects a deep
                understanding of both the technical and strategic dimensions of
                modern business, making him a key figure in shaping data-centric
                strategies that enable clients to stay competitive and
                future-ready.
              </p>{" "}
              <br />
            </div>
            <div className="team02_photo">
              <img src={Team02} alt="Mr. Baiju Akshay - Managing Director" />
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default About;
