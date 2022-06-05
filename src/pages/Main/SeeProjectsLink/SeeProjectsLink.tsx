import React from "react";
import styles from "./SeeProjectsLink.module.css";
import { Link } from "react-router-dom";
// "../../../assets/allProjects.png"
const SeeProjectsLink = () => {
  return (
    <article className={styles.linkWrapper}>
      <Link to="/works" className={styles.projectsLink}>
        SEE ALL PROJECTS
        <i className={`fa-solid fa-arrow-right ${styles.linkArrow}`}></i>
      </Link>
    </article>
  );
};

export default SeeProjectsLink;
