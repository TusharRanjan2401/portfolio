import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Tushar</h1>
        <p className={styles.description}>
          I'm a full-stack developer with experience in frontend technologies
          like React and Angular,and handling RestFul APIs,NoSql and Sql
          databases. Reach out to me if you like to learn more!
        </p>
        <a
          href="mailto:tushar.ranjan2401@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero Image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
