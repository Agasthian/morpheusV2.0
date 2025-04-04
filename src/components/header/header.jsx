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
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/service">Services</NavLink>
              </li>
              <li>
                <NavLink to="/careers">Careers</NavLink>
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
