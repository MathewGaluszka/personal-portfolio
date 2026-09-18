import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faCode, faCogs } from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const electricalSkills = [
  "Circuit design",
  "Sensors",
  "Microcontrollers",
  "PCB layout",
  "Arduino",
  "Power electronics",
];

const softwareSkills = [
  "C / C++",
  "Python",
  "Embedded software",
  "React",
  "Git",
  "MATLAB",
];

const mechanicalSkills = [
  "CAD",
  "3D printing",
  "Mechanisms",
  "Prototyping",
  "Materials",
  "Design for manufacture",
];

function Expertise() {
  return (
    <div className="container" id="skills">
      <div className="skills-container">
        <h1>Skills</h1>
        <p className="skills-intro">
          Three pillars from a mechatronics degree. Chip labels here are placeholders and will be
          tightened to match coursework and project work.
        </p>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faBolt} size="3x" />
            <h3>Electrical</h3>
            <p>
              Sensing, actuation, and the circuits that connect mechanical systems to software.
              Wording and emphasis will be refined.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Focus:</span>
              {electricalSkills.map((label) => (
                <Chip key={label} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faCode} size="3x" />
            <h3>Software</h3>
            <p>
              Control logic, embedded code, and application software used to drive mechatronic
              builds. Stack list is a starting point.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Focus:</span>
              {softwareSkills.map((label) => (
                <Chip key={label} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faCogs} size="3x" />
            <h3>Mechanical</h3>
            <p>
              Structure, motion, and physical prototyping — the hardware side of mechatronics
              and biomedical device work.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Focus:</span>
              {mechanicalSkills.map((label) => (
                <Chip key={label} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
