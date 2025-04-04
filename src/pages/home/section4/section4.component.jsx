import React from "react";
import "./section4.styles.scss";
import {
  FaUserTie,
  FaUniversity,
  FaPhoneVolume,
  FaIndustry,
  FaBuilding,
  FaClipboardList,
} from "react-icons/fa"; // Importing icons from react-icons

const Section4 = () => {
  const services = [
    {
      icon: <FaUserTie className="service-icon" />,
      title: "IT & Non-IT Recruitment",
      description:
        "Hiring IT Developers, Testers, Business Analysts, Data Scientists, Project Managers, SAP, Oracle, Scrum Masters, UI/UX Designers",
    },
    {
      icon: <FaBuilding className="service-icon" />,
      title: "BFSI Recruitment",
      description:
        "Sourcing professionals for Investment Banking, Financial Controller and Manager, Credit Managers, and Relationship Managers.",
    },
    {
      icon: <FaPhoneVolume className="service-icon" />,
      title: "BPO Recruitment",
      description:
        "Hiring Customer Service Representatives, Technical Support Specialists, Telecallers, Quality Analysts, and Trainers.",
    },
    {
      icon: <FaIndustry className="service-icon" />,
      title: "Manufacturing & Infrastructure",
      description:
        "Placing Engineers, Production Managers, Quality Control Analysts, and Supply Chain Experts in Automobile, Mechanical, Electrical",
    },
    {
      icon: <FaUniversity className="service-icon" />,
      title: "Campus to Corporate Programme",
      description:
        "Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      icon: <FaClipboardList className="service-icon" />,
      title: "Psychometric Profiling",
      description:
        "Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <section className="section4Wrapper ">
      <div className="container ">
        <h2 className="section4_heading">Services Offered</h2>
        <div className="servicesGrid">
          {services.map((service, index) => (
            <div key={index} className="serviceCard">
              <div className="serviceIcon">{service.icon}</div>
              <div className="serviceText">
                <h3 className="serviceTitle">{service.title}</h3>
                <p className="serviceDescription">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section4;
