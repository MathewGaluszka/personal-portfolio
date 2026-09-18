import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { SITE } from "../data/site";
import "../assets/styles/Footer.scss";

function Footer() {
  return (
    <footer>
      <div>
        <a href={SITE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <LinkedInIcon />
        </a>
        <a href={SITE.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <GitHubIcon />
        </a>
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
      </div>
      <p>
        {SITE.name} · {SITE.headline}
      </p>
    </footer>
  );
}

export default Footer;
