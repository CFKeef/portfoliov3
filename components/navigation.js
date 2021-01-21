import React from "react";
import Link from "next/link";

import Logo from "../public/images/tri.svg";
import styles from "../styles/Navigation.module.scss";

const Navigation = () => {
  return (
    <header className={styles.navContainer}>
      <Link href={"/"}>
        <a>
          <img src={Logo} />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <Link href="/contact">
              <a className={styles.contactBtn}>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
