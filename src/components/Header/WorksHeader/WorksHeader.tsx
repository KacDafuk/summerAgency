import React from "react";
import styles from "./WorksHeader.module.css";
import H1Header from "../H1Header/H1Header";
import TechnologiesList from "../../TechnologiesList/TechnologiesList";
type WorksHeaderProps = {
  children: JSX.Element;
};
const WorksHeader = ({ children }: WorksHeaderProps) => {
  return (
    <article className={styles.worksHeader}>
      {children}
      <H1Header text="Our works" white={true} />
      <TechnologiesList
        technologies={["HARDWARE", "DESIGN", "UI/UX", "IOS", "ANDROID", "WEB"]}
        worksHeader={true}
      />
    </article>
  );
};

export default WorksHeader;
