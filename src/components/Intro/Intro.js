import React from "react";
import "./intro.css";
import bg from "../../assets/myPhoto.png";
import btnImg from "../../assets/hireme.png";
import { Link } from "react-scroll";
const Intro = () => {
  return (
    <div>
      <section id="intro">
        <div className="introContent">
          <span className="hello">Hello, </span>
          <span className="introText">
            I'm <span className="introName">Ramkumar</span>
            <br />
            <span>Full-Stack developer</span>
          </span>
          <p className="introPara">
            I am a skilled Full-Stack developer with experience in creating{" "}
            <br />
            Full-Stack Web Applications
          </p>
          <Link>
            <button className="btn">
              <img src={btnImg} alt="Hire me" className="btnImg" />
              Hire me
            </button>
          </Link>
        </div>
        <img src={bg} alt="profile" className="bg" />
      </section>
    </div>
  );
};

export default Intro;
