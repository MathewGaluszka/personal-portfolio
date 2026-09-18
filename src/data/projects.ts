import mock01 from "../assets/images/mock01.png";
import mock02 from "../assets/images/mock02.png";
import mock03 from "../assets/images/mock03.png";
import mock04 from "../assets/images/mock04.png";

export type ProjectItem = {
  slug: string;
  title: string;
  summary: string;
  writeup: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: ProjectItem[] = [
  {
    slug: "jukebox-robot-arm",
    title: "Jukebox Robot Arm",
    summary:
      "A mechatronics build that combines mechanical motion, electronics, and control software to play music like a jukebox.",
    writeup: [
      "This page is a placeholder writeup for the Jukebox Robot Arm. The finished case study will cover the mechanical design, electrical controls, and software that make the arm select and play tracks.",
      "Until photos and a full description are added, this page exists so the project lives inside the portfolio instead of linking out to another site.",
    ],
    image: mock01,
  },
  {
    slug: "smarthome-stained-glass-lamp",
    title: "SmartHome Stained Glass Lamp",
    summary:
      "A stained-glass lamp with smart-home controls, blending craft, lighting, and embedded software.",
    writeup: [
      "This page is a placeholder writeup for the SmartHome Stained Glass Lamp. The finished case study will describe the glasswork, lighting circuit, and how the lamp connects to a smart-home setup.",
      "Live demo and GitHub buttons will appear here once those links are ready.",
    ],
    image: mock02,
  },
  {
    slug: "pace-plus-plus",
    title: "PacePlusPlus",
    summary:
      "A software project whose details, stack, and outcomes will be filled in on this page.",
    writeup: [
      "This page is a placeholder writeup for PacePlusPlus. The finished case study will explain the problem it solves, the tools used, and what was learned while building it.",
      "Replace this copy with the real story, screenshots, and any public repo or demo URL.",
    ],
    image: mock03,
  },
  {
    slug: "walk-n-roll",
    title: "Walk N’Roll",
    summary:
      "A mechatronics / biomedical project whose mechanical, electrical, and software pieces will be documented here.",
    writeup: [
      "This page is a placeholder writeup for Walk N’Roll. The finished case study will cover the design intent, how the three mechatronics pillars show up in the build, and the current status of the work.",
      "Optional Live demo and GitHub buttons stay hidden until those URLs are added to the project data.",
    ],
    image: mock04,
  },
];

export function getProjectBySlug(slug: string | undefined): ProjectItem | undefined {
  if (!slug) {
    return undefined;
  }
  return projects.find((project) => project.slug === slug);
}
