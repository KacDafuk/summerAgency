import React from "react";
import H2HeaderWithDescription from "../../../components/H2HeaderWithDescription/H2HeaderWithDescription";
import LightHeader from "../../../components/LightHeader/LightHeader";
import styles from "./AboutTeam.module.css";
const AboutTeam = () => {
  return (
    <article className={styles.aboutTeamContainer}>
      <article className={styles.aboutTeamTextWrapper}>
        <article className={styles.aboutTeamText}>
          <LightHeader text="MULTIDISCIPLINARY TEAM" color="white" />
          <p className={styles.aboutTeamParagraph}>
            {" "}
            We are company built by young and inspiring people. Each of us has
            unique skills, adding value to our team and every work we do. We are
            determined to create the best solutions for our customers and
            constantly increase our knowledge base with up-to-date standards.
          </p>
          <p className={styles.aboutTeamSummary}>
            Cooperation with Summer Agency team means being a few steps ahead of
            the competition, while reaching your goals and setting new trends.
          </p>
        </article>
      </article>
      <section className={styles.aboutTeamNumbers}>
        <H2HeaderWithDescription
          text="50"
          counter={1}
          description={"People"}
          color="white"
          fontSizeH2="--font-xx-lg"
          fontSizeDescription="--font-x-md"
        />
        <H2HeaderWithDescription
          text="100"
          counter={2}
          description={"Apps developed"}
          color="white"
          fontSizeH2="--font-xx-lg"
          fontSizeDescription="--font-x-md"
        />
        <H2HeaderWithDescription
          text="30+"
          counter={3}
          description={"Hardware product design"}
          color="white"
          fontSizeH2="--font-xx-lg"
          fontSizeDescription="--font-x-md"
        />
      </section>
    </article>
  );
};

export default AboutTeam;
