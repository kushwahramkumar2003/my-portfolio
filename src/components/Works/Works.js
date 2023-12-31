import React, { useEffect, useState } from "react";
import "./works.css";

import ProjectCard from "../core/LandingPage/ProjectCard/ProjectCard";
import fetchData from "./../service/fetchData";

const Works = () => {
  let [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchData().then((data) => {
      setProjects(data);
    });
  }, []);

  return (
    <section id="works">
      <h2 className="worksTitle">My Projects</h2>
      <span>
        Every project is an opportunity to innovate, learn, and create solutions
        that make a difference. Each line of code represents a step toward
        shaping a better, more connected future.{" "}
      </span>
      <div className="worksImgs">
        {projects.map((project) => {
          return (
            <ProjectCard
              title={project.title}
              img={project.projectImageUrl}
              link={project.link}
              desc={project.description}
              className="worksImg"
            />
          );
        })}
      </div>
      <button className="workBtn">See More</button>
    </section>
  );
};

export default Works;
