import React from "react";
import { Link } from "react-router-dom";

import "./footer.styles.scss";
// import {Container} from '../../themes/utils'

const FooterNew = () => {
  return (
    <div className="footerSection">
      <div className="container">
        <div className="footerItemsAll">
          <div className="footerItem">
            <div className="heading">Company</div>
            <p className="footerText">
              Morpheus Hunt Consulting Pvt Ltd, <br />
              Suite 1E, ELCANSO Complex,
              <br />
              No:10 Casa Major Road,
              <br />
              Egmore, Chennai 600008, <br />
              India
            </p>
          </div>
          <div className="footerItem">
            <div className="heading">Let's Talk</div>
            <Link to="/" className="footerText">
              Home
            </Link>
            <Link to="/about/organization" className="footerText">
              About
            </Link>
            <Link to="/service" className="footerText">
              Service
            </Link>
            <Link to="/search-job" className="footerText">
              Search Job
            </Link>
            <Link to="/contact" className="footerText">
              Contact Us
            </Link>
          </div>
          <div className="footerItem">
            <div className="heading">Connect With Us</div>
            <p className="footerText">+91-8646-007-007.</p>
            <p className="footerText">+91-7305-654-701.</p>
            <p className="footerText">admin@morpheushunt.co.in</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterNew;
