import React from "react";
import styles from "./TechnologiesList.module.css";
import { Technologies } from "../../sharedTypes/sharedProject";
import { Link } from "react-router-dom";
import WorksHeader from "../Header/WorksHeader/WorksHeader";
type TechnologiesListProps = {
  technologies: Technologies[];
  worksHeader?: boolean;
};
const TechnologiesList = ({
  technologies,
  worksHeader,
}: TechnologiesListProps) => {
  return (
    <section
      className={`${styles.technologyContainer} ${
        worksHeader && styles.technologyContainerWorks
      }`}
    >
      {technologies.map((technology) => (
        <Link
          to={`/works/${technology}`}
          className={`${styles.technologyLink} ${
            worksHeader && styles.technologyLinkWorks
          }`}
        >
          {technology}
        </Link>
      ))}
    </section>
  );
};

export default TechnologiesList;
