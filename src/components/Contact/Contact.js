import React, { useRef } from "react";
// import Walmart from "../../assets/walmart.png";
// import Adobe from "../../assets/adobe.png";
// import Microsoft from "../../assets/microsoft.png";
// import Facebook from "../../assets/facebook.png";

import FacebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter.png";
import YouTubeIcon from "../../assets/youtube.png";
import InstagramIcon from "../../assets/instagram.png";
import c from "../../assets/c.png";
import cpp from "../../assets/c++.png";
import js from "../../assets/javascript.png";
import java from "../../assets/java.png";
import node from "../../assets/node-js.png";
import react from "../../assets/react.png";
import mongo from "../../assets/mongodb.png";
import mysql from "../../assets/mysql.png";
// import solodity from "../../assets/ethereum (copy).png";
import emailjs from "@emailjs/browser";
import "./contact.css";
// import dotenv from "dotenv";
// dotenv.config();

// const SERVICE_ID = process.env.SERVICE_ID;
// const PUBLIC_KEY = process.env.PUBLIC_KEY;
// const TEMPLATE_ID = process.env.TEMPLATE_ID;
const Contact = () => {
  const form = useRef();
  const sendEmail = async (e) => {
    e.prevenddefault();
    try {
      const response = await emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      );
      console.log(response);
      alert("Email Sent !");
      e.target.reset();
    } catch (error) {
      alert("Email Can't be Sent !!", error);
      console.log("Error occur : ", error);
    }
  };
  return (
    <section id="contactPage">
      <div id="clients">
        {/* <h1 className="contactPageTitle">My Clients</h1> */}
        <h1 className="contactPageTitle">My Skills</h1>
        <p className="clientDesc">
          {/* I have the opportunity to work with a diverse group of companies Some
          of the notable companies I have worked with includes */}
          Proficient in MERN stack (MongoDB, Express.js, React.js, Node.js) for
          full-stack web development. Skilled in C, C++, Java, HTML, CSS,
          JavaScript, and experienced in database management using Oracle,
          MySQL, and MongoDB. Additionally, familiar with Solidity for
          blockchain development and enthusiastic about leveraging AI/ML in
          practical applications.
        </p>
        <div className="clientImgs">
          {/* <img src={Walmart} alt="client" className="clientImg" />
          <img src={Adobe} alt="client" className="clientImg" />
          <img src={Microsoft} alt="client" className="clientImg" />
          <img src={Facebook} alt="client" className="clientImg" /> */}
          <img src={node} alt="client" className="clientImg" />
          <img src={js} alt="client" className="clientImg" />
          <img src={java} alt="client" className="clientImg" />
          <img src={react} alt="client" className="clientImg" />
          <img src={cpp} alt="client" className="clientImg" />
          <img src={c} alt="client" className="clientImg" />
          <img src={mongo} alt="client" className="clientImg" />
          <img src={mysql} alt="client" className="clientImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill the form below to discuss any work opportunities
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your name"
            name="your_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your email"
            name="your_email"
          />
          <textarea
            name="message"
            className="msg"
            cols="30"
            rows="5"
            placeholder="Your message"
          ></textarea>
          <button className="submitBtn" type="submit" value="send">
            Submit
          </button>
          <div className="links">
            <img className="link" src={FacebookIcon} alt="Facebook" />
            <img className="link" src={InstagramIcon} alt="Instagram" />
            <img className="link" src={TwitterIcon} alt="Twitter" />
            <img className="link" src={YouTubeIcon} alt="YouTube" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
