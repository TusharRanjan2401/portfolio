import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:myemail@gmail.com">tushar.ranjan2401@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="Linkedin icon"
          />
          <a href="https://www.linkedin.com/in/tushar-ranjan-6896961aa/">
            Linkedin/TusharRanjan
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Email icon" />
          <a href="https://github.com/TusharRanjan2401">Github/TusharRanjan</a>
        </li>
      </ul>
    </footer>
  );
};
