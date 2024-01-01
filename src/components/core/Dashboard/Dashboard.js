import React, { useState } from "react";
import { Link } from "react-scroll";
import { Link as Link2 } from "react-router-dom";
import logo from "../../../assets/RKLogo11.png";
import menu from "../../../assets/menu.png";
import "./dashboard.css";
// import bg from "../../../assets/myPhoto.png";
import Profile from "../Profile/Profile";
import Projects from "../Projects/Projects";
const Dashboard = () => {
  let [showMenu, setShowMenu] = useState();
  // let [name, setName] = useState("Ramkumar Kushwah");
  // let [password, setPassword] = useState("");
  // let [confirmPassword, setConfirmPassword] = useState("");
  // let [Bg, setBg] = useState(bg);
  let [profile, setProfile] = useState(true);
  let [project, setProject] = useState(false);
  let [skills, setSkills] = useState(false);
  let [resume, setResume] = useState(false);
  let [companies, setCompanies] = useState(false);

  console.log(skills, resume, companies);

  return (
    <div className="dashboard">
      {/* navbar  */}
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
            onClick={() => {
              setProfile(true);
              setSkills(false);
              setProject(false);
              setResume(false);
              setCompanies(false);
            }}
          >
            Profile
          </Link>

          <Link
            spy={true}
            smooth={true}
            offset={-50}
            activeClass="active"
            to="skills"
            duration={500}
            className="desktopMenuListItem"
            onClick={() => {
              setProfile(false);
              setSkills(true);
              setProject(false);
              setResume(false);
              setCompanies(false);
            }}
          >
            Skills
          </Link>
          <Link
            spy={true}
            smooth={true}
            offset={-50}
            activeClass="active"
            to="works"
            duration={500}
            className="desktopMenuListItem"
            onClick={() => {
              setProfile(false);
              setSkills(false);
              setProject(true);
              setResume(false);
              setCompanies(false);
            }}
          >
            Projects
          </Link>
          <Link
            spy={true}
            smooth={true}
            offset={-50}
            activeClass="active"
            to="clients"
            duration={500}
            className="desktopMenuListItem"
            onClick={() => {
              setProfile(false);
              setSkills(false);
              setProject(false);
              setResume(false);
              setCompanies(true);
            }}
          >
            Companies
          </Link>
          <Link
            spy={true}
            smooth={true}
            offset={-50}
            activeClass="active"
            to="clients"
            duration={500}
            className="desktopMenuListItem"
            onClick={() => {
              setProfile(false);
              setSkills(false);
              setProject(false);
              setResume(true);
              setCompanies(false);
            }}
          >
            Resume
          </Link>
        </div>
        <div className="btns">
          <Link2 to={"/login"}>
            <button className="loginBtn">Logout</button>
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
        <div
          className="navMenu"
          style={{ display: showMenu ? "flex" : "none" }}
        >
          <Link
            spy={true}
            smooth={true}
            offset={-100}
            activeClass="active"
            to="intro"
            duration={500}
            className="listItem"
            // onClick={() => {
            //   setShowMenu(false);
            // }}
            onClick={() => {
              setProfile(true);
              setSkills(false);
              setProject(false);
              setResume(false);
              setCompanies(false);
            }}
          >
            Profile
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
              setProfile(false);
              setSkills(true);
              setProject(false);
              setResume(false);
              setCompanies(false);
            }}
          >
            Skills
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
              setProfile(false);
              setSkills(false);
              setProject(true);
              setResume(false);
              setCompanies(false);
            }}
          >
            Projects
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
              setProfile(false);
              setSkills(false);
              setProject(false);
              setResume(false);
              setCompanies(true);
            }}
          >
            Companies
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
              setProfile(false);
              setSkills(false);
              setProject(false);
              setResume(true);
              setCompanies(false);
            }}
          >
            Resume
          </Link>
          <span
            className="listItem"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            Logout
          </span>
        </div>
      </nav>

      {/* Profile */}
      {profile && (
        <div className="profile">
          {" "}
          <Profile />{" "}
        </div>
      )}

      {/* Skills */}
      <div></div>
      {/* Projects */}
      {project && (
        <div>
          <Projects />
        </div>
      )}

      {/* Companies */}
      <div></div>
      {/* Resume */}
      <div></div>
    </div>
  );
};

export default Dashboard;
