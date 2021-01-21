import React from "react";

import styles from "../styles/Projects.module.scss";
import Project from "./project";

import foodLabel from "../public/images/heroimage.svg";
import expensie from "../public/images/expensie.svg";
import Pantry from "../public/images/prodoProj.svg";
import Store from "../public/images/STORE.svg";

const ProjectsList = [
  {
    name: "foodlabel",
    image: foodLabel,
    description:
      "Web Application that allows you to create FDA compliant nutrition fact labels in the simplest way possible",
    tech: "Typescript, NextJS, React, MongoDB, Redux, SASS",
    github: "https://github.com/CFKeef/foodlabel",
    live: null,
  },
  {
    name: "Toymon",
    image: Store,
    description:
      "SAAS solution to improve the buying process for consumers purchasing highly sought after products. I was doing Front end and back end work on the electron application and the site",
    tech: "React, Express, Electron",
    github: null,
    live: null,
  },
  {
    name: "Expensie",
    image: expensie,
    description:
      "CRUD application that assists in the tracking of sales and expenses, improving user experience for reselling items online ",
    tech: "React, Express, SASS, Recharts, Electron",
    github: "https://github.com/CFKeef/ExpensieV2",
    live: null,
  },
  {
    name: "Waste Less",
    image: Pantry,
    description:
      "Planned to be an IoT inventory system for consumer fridges but ended up building a react native app that did just that",
    tech: "React, Postgres, Express, Expo",
    github: "https://github.com/CFKeef/Waste-Less",
    live: null,
  },
];

const Projects = () => {
  const generateProjectCards = () => {
    return (
      <ul>
        {ProjectsList.map((project, index) => {
          return (
            <Project key={"Project" + index} project={project} index={index} />
          );
        })}
      </ul>
    );
  };
  return (
    <section id={"projects"} className={styles.projectsContainer}>
      <div className={styles.header}>
        <span className={`purpleHeader`}>
          <mark>Stuff I've</mark> built
        </span>
      </div>
      <div className={styles.posContainer}>{generateProjectCards()}</div>
    </section>
  );
};

export default Projects;
