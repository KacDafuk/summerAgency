import React from "react";
import styles from "./WorkProject.module.css";
import { ProjectProps } from "../../../../sharedTypes/sharedProject";
import LightHeader from "../../../../components/LightHeader/LightHeader";
import TechnologiesList from "../../../../components/TechnologiesList/TechnologiesList";
import H2HeaderWithDescription from "../../../../components/H2HeaderWithDescription/H2HeaderWithDescription";
const WorkProject = ({
  h1Text,
  h2Text,
  text,
  technologies,
  backgroundUrl,
}: ProjectProps) => {
  function getRightHeaderColor() {
    if (h2Text.trim() === "Coca-Cola Magic Galaxy") return "white";
    return "black";
  }
  return (
    <article className={styles.worksProjectContainer}>
      <section
        className={styles.projectImageOuter}
        style={{ backgroundImage: `url(${backgroundUrl})`, width: "100%" }}
      >
        <section className={styles.projectImageInner}>
          <LightHeader text={h1Text} color={getRightHeaderColor()} />
          <TechnologiesList technologies={technologies} />
        </section>
      </section>
      <section className={styles.projectInfo}>
        <H2HeaderWithDescription
          text={h2Text}
          description={text}
          color={"white"}
        />
      </section>
    </article>
  );
};

export default WorkProject;
