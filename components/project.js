import React from "react";
import styles from "../styles/ProjectCard.module.scss";

const Project = (props) => {
  const handleBackgroundColor = (index) => {
    const modulo = index % 3;
    switch (modulo) {
      case 0:
        return styles.redBackground;
      case 1:
        return styles.greenBackground;
      case 2:
        return styles.purpleBackground;
    }
  };

  return (
    <li
      className={`${styles.listContainer} ${handleBackgroundColor(
        props.index
      )}`}
    >
      <div className={styles.cardContainer}>
        <div className={styles.cardImg}>
          <img
            src={props.project.image}
            draggable={false}
            alt={props.project.name + " Logo"}
          />
        </div>
        <div className={styles.projText}>
          <h2>{props.project.name}</h2>
          <p className={styles.textDesc}>{props.project.description}</p>
          <h2>Tech</h2>
          <p className={styles.techP}>{props.project.tech}</p>
        </div>
        <div className={styles.btns}>
          {props.project.github === null ? (
            <div className={styles.privateRepo}>
              <span>Private</span>
            </div>
          ) : (
            <div className={styles.gitLink}>
              <a
                className={handleBackgroundColor(props.index + 1)}
                href={props.project.github}
              >
                Github
              </a>
            </div>
          )}
          {props.project.live === null ? null : (
            <div className={styles.liveLink}>
              <a href={props.project.live}>Visit</a>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default Project;
