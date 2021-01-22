import Link from "next/link";
import React from "react";

import github from "../public/images/github.svg";
import linkedin from "../public/images/linkedin.svg";
import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div>
        <Link href={"https://github.com/CFKeef"} passHref={true}>
          <a>
            <img src={github} alt="Link to my github" />
          </a>
        </Link>
        <Link href={"https://www.linkedin.com/in/patryckg/"} passHref={true}>
          <a>
            <img src={linkedin} alt="Link to my linkedin" />
          </a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
