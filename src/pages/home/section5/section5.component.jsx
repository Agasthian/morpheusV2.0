import React from "react";
import { FaMapMarkerAlt, FaBriefcase, FaMoneyBillWave } from "react-icons/fa";
import home04 from "../../../assets/home04.jpg";
import home05 from "../../../assets/home05.jpg";
import home06 from "../../../assets/home06.jpg";
import home07 from "../../../assets/home07.jpg";
import "./section5.styles.scss";

const jobListings = [
  {
    id: 1,
    title: "Software Engineer",
    location: "New York, USA",
    type: "Full-time",
    salary: "$90,000 - $120,000",
    img: home04,
  },
  {
    id: 2,
    title: "Digital Marketing Manager",
    location: "London, UK",
    type: "Part-time",
    salary: "$50,000 - $70,000",
    img: home05,
  },
  {
    id: 3,
    title: "Project Manager",
    location: "Sydney, Australia",
    type: "Remote",
    salary: "$80,000 - $100,000",
    img: home06,
  },
  {
    id: 4,
    title: "Data Scientist",
    location: "Toronto, Canada",
    type: "Full-time",
    salary: "$100,000 - $130,000",
    img: home07,
  },
  {
    id: 5,
    title: "UX/UI Designer",
    location: "Berlin, Germany",
    type: "Contract",
    salary: "$60,000 - $80,000",
    img: home06,
  },
  {
    id: 6,
    title: "HR Manager",
    location: "Mumbai, India",
    type: "Full-time",
    salary: "$40,000 - $60,000",
    img: home07,
  },
];

const Section5 = () => {
  return (
    <section className="jobs">
      <div className="container">
        <h2 className="jobs__heading">Latest Job Opportunities</h2>
        <div className="jobs__grid">
          {jobListings.map((job) => (
            <div className="jobCard" key={job.id}>
              <img src={job.img} alt="demo" className="jobcard__img" />

              <h5 className="jobCard__title">{job.title}</h5>
              <div className="jobCard__info">
                <FaMapMarkerAlt className="jobCard__icon" />
                <p>{job.location}</p>
              </div>
              <div className="jobCard__info">
                <FaBriefcase className="jobCard__icon" />
                <p>{job.type}</p>
              </div>
              <div className="jobCard__info">
                <FaMoneyBillWave className="jobCard__icon" />
                <p>{job.salary}</p>
              </div>
              <button className="jobCard__apply btn btn--gold">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section5;
