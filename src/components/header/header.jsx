import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./header.styles.scss";

const Header = (props) => {
  return (
    <div className="headerWrapper">
      <div className="headerFlexBox">
        <div className="headerFlexBox_Logo">
          <h2>
            <Link to="/">MH Consultancy</Link>
          </h2>
        </div>

        <div className="headerFlexBox_DesktopMenu">
          <div className="headerFlexBox_DesktopMenu_Left">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>

              <li className="dropdown">
                <span>About</span>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink to="/about/organization">
                      About Organization
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about/team">About the Team</NavLink>
                  </li>
                </ul>
              </li>

              <li>
                <NavLink to="/service">Services</NavLink>
              </li>

              <li className="dropdown">
                <span>Career</span>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink to="/search-job">Search Jobs</NavLink>
                  </li>
                  <li>
                    <NavLink to="/submit-resume">Submit Resume</NavLink>
                  </li>
                </ul>
              </li>

              <li>
                <NavLink to="/contact">Contact Us</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
