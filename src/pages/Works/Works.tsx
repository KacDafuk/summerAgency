import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Works.module.css";
import WorksProjects from "./WorksProjects/WorksProjects";
const Works = () => {
  return (
    <main>
      <WorksProjects />
    </main>
  );
};

export default Works;
