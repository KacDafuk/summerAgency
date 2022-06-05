import React from "react";
import { useParams } from "react-router-dom";
import { projectsData } from "../../../assets/Projects/projectsData";
import WorkProject from "./WorkProject/WorkProject";
import styles from "./WorksProjects.module.css";
const WorksProjects = () => {
  console.log(projectsData, "DATA");
  const { technology } = useParams();

  if (technology === "all") {
    return (
      <article className={styles.workProjectsContainer}>
        {projectsData.map((data) => (
          <WorkProject {...data} />
        ))}
      </article>
    );
  }
  return <div>12312</div>;
};

export default WorksProjects;
