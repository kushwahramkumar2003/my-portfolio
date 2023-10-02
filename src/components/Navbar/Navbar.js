import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import contactImg from "../../assets/contact.png";
import menu from "../../assets/menu.png";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="desktopMenu">
        <Link
          spy={true}
          smooth={true}
          offset={-100}
          activeClass="active"
          to="intro"
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>

        <Link
          spy={true}
          smooth={true}
          offset={-50}
          activeClass="active"
          to="skills"
          duration={500}
          className="desktopMenuListItem"
        >
          About
        </Link>
        <Link
          spy={true}
          smooth={true}
          offset={-50}
          activeClass="active"
          to="works"
          duration={500}
          className="desktopMenuListItem"
        >
          Portfolio
        </Link>
        <Link
          spy={true}
          smooth={true}
          offset={-50}
          activeClass="active"
          to="clients"
          duration={500}
          className="desktopMenuListItem"
        >
          Clients
        </Link>
      </div>
      <button
        className="desktopMenuBtn"
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <img src={contactImg} className="desktopMenuImg" alt="" />
        Contact Me
      </button>
      <img
        src={menu}
        alt="Menu"
        className="mobMenu"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      />
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          spy={true}
          smooth={true}
          offset={-100}
          activeClass="active"
          to="intro"
          duration={500}
          className="listItem"
          onClick={() => {
            setShowMenu(false);
          }}
        >
          Home
        </Link>

        <Link
          spy={true}
          smooth={true}
          offset={-50}
          activeClass="active"
          to="skills"
          duration={500}
          className="listItem"
          onClick={() => {
            setShowMenu(false);
          }}
        >
          About
        </Link>
        <Link
          spy={true}
          smooth={true}
          offset={-50}
          activeClass="active"
          to="works"
          duration={500}
          className="listItem"
          onClick={() => {
            setShowMenu(false);
          }}
        >
          Portfolio
        </Link>
        <Link
          spy={true}
          smooth={true}
          offset={-50}
          activeClass="active"
          to="clients"
          duration={500}
          className="listItem"
          onClick={() => {
            setShowMenu(false);
          }}
        >
          Clients
        </Link>
        <Link
          spy={true}
          smooth={true}
          offset={-50}
          activeClass="active"
          to="contact"
          duration={500}
          className="listItem"
          onClick={() => {
            setShowMenu(false);
          }}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
