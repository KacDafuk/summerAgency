import React from "react";
import styles from "./Project.module.css";
import { ProjectProps } from "../../../../sharedTypes/sharedProject";
import LightHeader from "../../../../components/LightHeader/LightHeader";
import H2HeaderWithDescription from "../../../../components/H2HeaderWithDescription/H2HeaderWithDescription";
import TechnologiesList from "../../../../components/TechnologiesList/TechnologiesList";
const Project = ({
  h1Text,
  h2Text,
  text,
  action,
  technologies,
  backgroundUrl,
}: ProjectProps) => {
  return (
    <article
      style={{ backgroundImage: `url(${backgroundUrl})` }}
      className={styles.projectBackground}
    >
      <article className={styles.project}>
        <LightHeader text={h1Text} color={"black"} />

        <H2HeaderWithDescription
          text={h2Text}
          description={text}
          button={{ text: "Soon more", variation: "white", action: action }}
        />

        <TechnologiesList technologies={technologies} />
      </article>
    </article>
  );
};

export default Project;
