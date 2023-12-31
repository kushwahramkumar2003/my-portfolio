import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";
import WebDevelopment from "../../assets/web-development.png";
import BlockChain from "../../assets/ethereum.png";
import AIML from "../../assets/ai-brain-management.png";
const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        {/* I am a skilled and passionate web designer with experience in creating
        visually appealing and user-friendly websites. I have a strong
        understanding of design and a keen eye for detail. I am proficient in
        HTML, CSS, and JavaScript, as well as design software such as Adobe
        Photoshop and illustrator. */}
        Crafting MERN stack applications, AI/ML prototypes, and blockchain
        projects. Solving over 400 coding challenges and fostering
        collaborations for innovative ventures.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img className="skillBarImg" src={WebDevelopment} alt="UIDesign" />
          <div className="skillBarText">
            {/* <h2>UI/UX Design</h2> */}
            <h2>Web development</h2>
            <p>
              Skilled in MERN stack development and front-end proficiency in
              HTML, CSS, and JavaScript, adept at creating dynamic and
              innovative web applications.
            </p>
          </div>
        </div>{" "}
        <div className="skillBar">
          <img className="skillBarImg" src={BlockChain} alt="WebDesign" />
          <div className="skillBarText">
            {/* <h2>Website Design</h2> */}
            <h2>Blockchain</h2>
            <p>
              Proficient in Solidity and experienced in blockchain technology,
              focused on developing decentralized applications and smart
              contracts.
            </p>
          </div>
        </div>{" "}
        <div className="skillBar">
          <img className="skillBarImg" src={AIML} alt="AppDesign" />
          <div className="skillBarText">
            <h2>AI / ML</h2>
            <p>
              Passionate about leveraging AI and ML in practical applications,
              with a focus on problem-solving and crafting innovative solutions
              using AIML algorithms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
