import React from "react";
import styles from "../styles/Content.module.scss";
import Mural from "../public/images/mural.svg";

const Hero = () => {
  return (
    <section className={styles.contentContainer}>
      <div className={styles.textContainer}>
        <h1>
          Hi I'm <mark>Patryck Golebiewski</mark>
        </h1>
        <h2>
          Full Stack Developer and Computer Science Student based in{" "}
          <mark>NYC</mark>
        </h2>
      </div>
      <div className={styles.muralContainer}>
        <img src={Mural} />
      </div>
    </section>
  );
};

export default Hero;
