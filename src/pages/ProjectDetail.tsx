import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { getProjectBySlug } from "../data/projects";
import "../assets/styles/ProjectDetail.scss";

function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [slug]);

  if (!project) {
    return (
      <div className="project-detail-page">
        <div className="project-detail-inner">
          <p className="project-kicker">Personal project</p>
          <h1>Project not found</h1>
          <p>That project is not in this portfolio yet.</p>
          <Link className="back-link" to="/#projects">
            Back to projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      <div className="project-detail-inner">
        <Link className="back-link" to="/#projects">
          Back to projects
        </Link>
        <p className="project-kicker">Personal project</p>
        <h1>{project.title}</h1>
        <p className="project-summary">{project.summary}</p>
        {(project.liveUrl || project.githubUrl) && (
          <div className="project-actions">
            {project.liveUrl && (
              <a
                className="project-action"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                <OpenInNewIcon fontSize="small" />
                Live demo
              </a>
            )}
            {project.githubUrl && (
              <a
                className="project-action"
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon fontSize="small" />
                GitHub
              </a>
            )}
          </div>
        )}
        <img src={project.image} alt={`${project.title} preview`} />
        {project.writeup.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

export default ProjectDetail;
