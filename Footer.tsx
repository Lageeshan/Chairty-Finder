import React from "react";
import styles from "./Footer.module.scss";
import github from "../../images/github-icon.svg";
import linkedin from "../../images/linkedin-icon.svg";

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <p>
        Made with{" "}
        <span role="img" aria-label="Fun icon">
          🥳
        </span>{" "}
        by <a href="http://jundymek.com" title="http://jundymek.com"><span className={styles.footerDistinction}>jundymek</span></a>
      </p>
      <ul className={styles.footerList}>
        <li className={styles.footerListItem}>
          <a href="https://github.com/jundymek" title="https://github.com/jundymek">
            <img className={styles.footerIcon} src={github} alt="Github icon" />
          </a>
        </li>
        <li className={styles.footerListItem}>
          <a href="https://www.linkedin.com/in/lukasz-dymek/" title="https://www.linkedin.com/in/lukasz-dymek/">
            <img className={styles.footerIcon} src={linkedin} alt="Linkedin icon" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
