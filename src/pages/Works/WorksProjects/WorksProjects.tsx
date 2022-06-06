import React from "react";
import { useParams } from "react-router-dom";
import { projectsData } from "../../../assets/Projects/projectsData";
import {
  Technologies,
  technologiesArray,
} from "../../../sharedTypes/sharedProject";
import WorkProject from "./WorkProject/WorkProject";
import styles from "./WorksProjects.module.css";
const WorksProjects = () => {
  const { technology } = useParams();
  function technologyIncluded(technologyArr: Technologies[]) {
    //UI/UX cannot be passed as param so if there is no technology it means
    // user must have clicked on UI/UX
    for (let technologyArrItem of technologyArr) {
      if (
        technologyArrItem.split("/").join("").toLowerCase() ===
        technology?.toLowerCase()
      )
        return true;
    }
    return false;
  }
  if (technology === "all") {
    return (
      <article className={styles.workProjectsContainer}>
        {projectsData.map((data) => (
          <WorkProject {...data} />
        ))}
      </article>
    );
  }

  return (
    <article className={styles.workProjectsContainer}>
      {projectsData
        .filter(({ technologies }) => technologyIncluded(technologies))
        .map((data) => (
          <WorkProject {...data} />
        ))}
    </article>
  );
};

export default WorksProjects;
