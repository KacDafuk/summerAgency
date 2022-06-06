import React from "react";
import styles from "./OpenPositions.module.css";
import { openPositions } from "../../../assets/Career/careerPositions";
import Position from "./Position/Position";
import Btn from "../../../components/Btn/Btn";
const OpenPositions = () => {
  return (
    <main>
      {openPositions.map((pos, idx) => (
        <Position {...pos} counter={idx + 1} />
      ))}
      <article className={styles.contactArticle}>
        <h3 className={styles.contactArticleHeader}>
          Can’t find the one for you right now?
        </h3>
        <p className={styles.contactArticleText}>
          If you are interested in being part of our team, please write below
          your e-mail address.
        </p>
        <Btn variation="white" text="Contact" fullWidth={true} />
      </article>
    </main>
  );
};

export default OpenPositions;
