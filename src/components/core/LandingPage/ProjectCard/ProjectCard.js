import React from "react";
import "./projectCard.css";

const ProjectCard = ({ title, img, link, desc }) => {
  return (
    <div className="projCard">
      <a href={link} className="projCard__link">
        <div className="projCard__img">
          <img src={img} alt={title} className="projCard__img--image" />
        </div>
        <div className="projCard__content">
          <h2 className="projCard__title">{title}</h2>
          <p className="projCard__desc">{desc}</p>
          <div className="projCard__footer"></div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
