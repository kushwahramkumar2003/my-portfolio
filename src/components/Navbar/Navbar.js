import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/RKLogo11.png";
import { Link } from "react-scroll";
import contactImg from "../../assets/contact.png";
// import menu from "../../assets/menu.png";
// import menu from "../../assets/menu.png";
import menu from "../../assets/menu.gif";
import { Link as Link2 } from "react-router-dom";
// import Login from "../Login/Login";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <Link
        spy={true}
        smooth={true}
        offset={-100}
        activeClass="deactive"
        to="intro"
        duration={500}
        className="logoLink"
      >
        <img src={logo} alt="Logo" className="logo" />
      </Link>

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
          offset={20}
          activeClass="active"
          to="blog"
          duration={500}
          className="desktopMenuListItem"
        >
          Blogs
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
      <div className="btns">
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

        <Link2 to={"/login"}>
          <button className="loginBtn">Login</button>
        </Link2>
      </div>
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
          to="blog"
          duration={500}
          className="listItem"
          onClick={() => {
            setShowMenu(false);
          }}
        >
          Blogs
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
        <span
          className="listItem"
          onClick={() => {
            setShowMenu(false);
          }}
        >
          Login
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
