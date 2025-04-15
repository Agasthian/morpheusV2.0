import React, { useState } from "react";
import { Helmet } from "react-helmet";

import Layout from "../../components/layout/layout";
import ContactBg from "../../assets/contact01.jpg";
import "./contact.styles.scss";

const Contact = () => {
  //state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  //handle submit
  const handleSubmit = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <Layout>
      <Helmet>
        <title>MHConsultancy | Contact us </title>
      </Helmet>
      <div className="contact_wrapper ">
        <div className="contact_part1">
          <div className="contact_part1_form container">
            <h1>Contact us page</h1>
            <p>Any questions or remarks ? Write us a message!</p>
            <form
              name="morpheusv2.0form"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="contactForm"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleSubmit}
                required
              />

              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="email"
                placeholder="Your email id"
                value={formData.email}
                onChange={handleSubmit}
              />
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleSubmit}
              />

              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleSubmit}
                required
              ></textarea>
              <button type="submit" className="btn btn--gold">
                Submit
              </button>
            </form>
          </div>
          <div
            className="contact_part1_bg_img"
            style={{ backgroundImage: ` url(${ContactBg})` }}
          ></div>
        </div>
        <div className="contact_part2">
          <div className="contact_part2_map">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.4426731710164!2d80.254288!3d13.0711075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526672b30cc001%3A0xc541d6b92a14c3d1!2sMorpheus%20Hunt%20Consulting%20pvt%20ltd!5e0!3m2!1sen!2sin!4v1744729890013!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="contact_part2_address">
            <h4 className="smallHeading">Address</h4>
            <h3>Morpheus Hunt Consulting pvt ltd</h3>
            <p>
              Morpheus Hunt Consulting pvt ltd, <br />
              Suite 1E,ELCANSO Complex,
              <br />
              No:10 casa major road,
              <br />
              Egmore, Chennai 600008, <br />
              India
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
