import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";

const Menu = () => (
  <>
    <ScrollLink to="services" smooth={true} duration={100} offset={-90}>
      <p>Services</p>
    </ScrollLink>
    <RouterLink to="/profile">
      <p>Our Profile</p>
    </RouterLink>
    <a
      href="https://cal.com/your-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      Schedule Meeting
    </a>
  </>
);

const Phone_menu = () => (
  <>
    <ScrollLink to="services" smooth={true} duration={100} offset={-90}>
      <p>Services</p>
    </ScrollLink>
    <RouterLink to="/profile">
      <p>Our Profile</p>
    </RouterLink>
    <a
      href="https://cal.com/your-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      Schedule Meeting
    </a>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navbar">
      <a href="/" className="navbar-logo">
        <div className="nav-logo">Progressor Capital</div>
      </a>
      <div className="nav-links">
        <div className="navbar-laptop">
          <Menu />
        </div>
      </div>

      <div className="navbar-phone">
        {toggleMenu ? (
          <RiCloseLine
            className="close-icon"
          
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            className="open-icon"
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <div className="opacity">
            <div className="navbar-phone-container scale-up-center">
              <div className="navbar-phone-links">
                <Phone_menu />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
