import React from "react";
import img from "../../../assets/portfolio-6.png";
import "./projectCard.css";
const ProjectCard = () => {
  return (
    <div className="projectCard">
      <h2>Title</h2>
      <img src={img} alt="" className="projectImg" />
      <p>Description</p>
      <button className="projectCardBtn">Edit</button>
      <button className="projectCardBtn">Update</button>
    </div>
  );
};

export default ProjectCard;
