import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project" key={project.slug}>
            <Link to={`/projects/${project.slug}`}>
              <img src={project.image} className="zoom" alt={`${project.title} thumbnail`} width="100%" />
            </Link>
            <Link to={`/projects/${project.slug}`}>
              <h2>{project.title}</h2>
            </Link>
            <p>{project.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
