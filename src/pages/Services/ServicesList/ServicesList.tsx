import React from "react";
import H2HeaderWithDescription from "../../../components/H2HeaderWithDescription/H2HeaderWithDescription";
import styles from "./ServicesList.module.css";
const ServicesList = () => {
  return (
    <article className={styles.servicesListContainer}>
      <section>
        <ul className={styles.technologiesList}>
          <li>Web &amp; mobile development</li>
          <li>Embedded Systems Development</li>
          <li>Back-end Developement</li>
          <li>API &amp; CMS development</li>
          <li>DevOps architecture</li>
          <li>Manual &amp; automated QA</li>
          <li>Cloud Computing</li>
          <li>Industrial Design</li>
          <li>UI/UX</li>
        </ul>
      </section>
      <section>
        <ul className={styles.listGeneral}>
          <li>
            <H2HeaderWithDescription
              text="24+"
              description="Tools and technologies we use"
              color="white"
              fontSizeH2="--font-x-lg"
              fontSizeDescription="--font-x-md"
            />
          </li>
          <li>
            <H2HeaderWithDescription
              text="5"
              description="Different types of software development services"
              color="white"
              fontSizeH2="--font-x-lg"
              fontSizeDescription="--font-x-md"
            />
          </li>
        </ul>
      </section>
    </article>
  );
};

export default ServicesList;

//
// 24+
//
// 5
//
