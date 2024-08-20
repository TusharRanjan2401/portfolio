import React from "react";
import { getImageUrl } from "../../utils";
import aboutMe from "../../../assets/about/aboutMe.png";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img className={styles.aboutImage} src={aboutMe} alt="About me" />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Front-end developer</h3>
              <p>
                I have experience in frontend frameworks and libraries like
                React and Angualar in building responsive and optimized sites.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="server icon" />
            <div className={styles.aboutItemText}>
              <h3>Back-end developer</h3>
              <p>
                I have experience developing fast and optimized backend systems
                and developing restful APIs using backend techs like NodeJS and expressJS with
                handling the databases using MySQL and MongoDB.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
