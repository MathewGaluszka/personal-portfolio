import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import { SITE } from "../data/site";
import "../assets/styles/Main.scss";

function HeroLinks() {
  return (
    <>
      <a href={SITE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <LinkedInIcon />
      </a>
      <a href={SITE.resumePath} download={SITE.resumeFileName} aria-label="Download resume">
        <DescriptionOutlinedIcon />
      </a>
      <a href={SITE.github} target="_blank" rel="noreferrer" aria-label="GitHub">
        <GitHubIcon />
      </a>
    </>
  );
}

function Main() {
  return (
    <div className="container" id="home">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={`${process.env.PUBLIC_URL}/avatar.svg`} alt="Mathew Galuszka" />
        </div>
        <div className="content">
          <div className="social_icons">
            <HeroLinks />
          </div>
          <h1>{SITE.name}</h1>
          <p>{SITE.headline}</p>
          <div className="mobile_social_icons">
            <HeroLinks />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
