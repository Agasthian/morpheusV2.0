import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { SlMenu } from "react-icons/sl";

import "./header.styles.scss";

const Header = (props) => {
  const [toggleHamburger, setToggleHamburger] = useState(false);

  return (
    <div className="headerWrapper">
      <div className="headerFlexBox">
        <div className="headerFlexBox_Logo">
          <h2>
            <Link to="/">MH Consultancy</Link>
          </h2>
        </div>

        {/* Desktop Menu */}
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

        {/* Mobile menu -  */}
        <div className="headerFlexBox_MobileMenu">
          {/* <button class="ui icon button">Menu</button> */}
          <SlMenu
            className="hamburger-icon"
            onClick={() => setToggleHamburger(!toggleHamburger)}
          />
          {/* //Mobile Navbar */}

          <div
            className={`headerFlexBox_MobileMenu_mobile_list ${
              toggleHamburger ? "open" : "close"
            }`}
          >
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about/organization">About Organization</NavLink>
              </li>
              <li>
                <NavLink to="/about/team">About the Team</NavLink>
              </li>
              <li>
                <NavLink to="/service">Services</NavLink>
              </li>
              <li>
                <NavLink to="/search-job">Search Jobs</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact Us</NavLink>
              </li>
            </ul>
          </div>
        </div>
        {/* End of mobile menu */}
      </div>
    </div>
  );
};

export default Header;
