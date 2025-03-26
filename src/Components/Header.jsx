import React from "react";
import { Link } from "react-scroll";
import "./Header.css";
import menuicon from "../assets/menuicon.png";
import { useState } from "react";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <nav className="navbar">
        <h2>POOJA GOVINDARAJ</h2>
        <div className="menu">
          <Link
            to="home"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="menuItems"
          >
            Home
          </Link>
          <Link
            to="skills"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="menuItems"
          >
            Skills
          </Link>
          <Link
            to="experience"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="menuItems"
          >
            Experience
          </Link>
          <Link
            to="certificate"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="menuItems"
          >
            Certificate
          </Link>

          <Link to="Contact" smooth={true} duration={500}>
            <button className="contact-btn">Contact Me</button>
          </Link>
        </div>

        <img
          src={menuicon}
          className="menu-icon"
          onClick={() => setMobileMenu(!mobileMenu)}
        />
        <div
          className="mobile-menu"
          style={{ display: mobileMenu ? "flex" : "none" }}
        >
          <Link
            to="home"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="mobileMenuItems"
            onClick={() => setMobileMenu(false)}
          >
            Home
          </Link>
          <Link
            to="skills"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="mobileMenuItems"
            onClick={() => setMobileMenu(false)}
          >
            Skills
          </Link>
          <Link
            to="experience"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="mobileMenuItems"
            onClick={() => setMobileMenu(false)}
          >
            Experience
          </Link>
          <Link
            to="certificate"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="mobileMenuItems"
            onClick={() => setMobileMenu(false)}
          >
            Certificate
          </Link>
          <Link
            to="Contact"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="mobileMenuItems"
            onClick={() => setMobileMenu(false)}
          >
            Contact Me
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
