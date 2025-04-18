import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { SlMagnifier, SlArrowRight } from "react-icons/sl";

import Layout from "../../components/layout/layout";
import "./searchJob.styles.scss";

const jobData = [
  {
    title: "IT Consultant Manager",
    description: "IT consultant",
    link: "/it-consultant-manager",
    category: "IT consultant",
  },
  {
    title: "Digital Marketing",
    description: "Digital marketing",
    link: "/digital-marketing",
    category: "digital marketing",
  },
  {
    title: "Mechanical Design Engineer",
    description: "Design engineer",
    link: "/design-engineer",
    category: "design engineer",
  },
];

const JobSearch = () => {
  //State
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Job Category");

  //Handle search filter
  const filterdJob = jobData.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchInput.toLowerCase()) ||
      job.description.toLowerCase().includes(searchInput.toLowerCase()) ||
      job.category.toLowerCase().includes(searchInput.toLowerCase());

    const matchCategory =
      selectedCategory === "All Job Category" ||
      job.category.toLowerCase() === selectedCategory.toLowerCase();

    return matchesSearch && matchCategory;
  });

  return (
    <Layout>
      <Helmet>
        <title>MHConsultancy | Careers </title>
      </Helmet>
      <div className="searchJob_wrapper container">
        <div className="heroSection ">
          <h1>Search Jobs</h1>
        </div>
        <div className="jobListings">
          <div className="jobListings_searchbar">
            <input
              type="text"
              placeholder="Search Jobs"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <SlMagnifier />

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="category-dropdown"
            >
              <option>All Job Category</option>
              <option>Design engineer</option>
              <option>Digital marketing</option>
              <option>IT consultant</option>
            </select>
          </div>
          <div className="jobListings_searchResults">
            {filterdJob.map((job, index) => (
              <div key={index} className="jobCard">
                <h3>{job.title}</h3>
                <p>{job.description}</p>
                <Link to={job.link}>
                  {" "}
                  More Details <SlArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default JobSearch;
