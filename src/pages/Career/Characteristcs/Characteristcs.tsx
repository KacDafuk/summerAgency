import React from "react";
import styles from "./Characteristcs.module.css";
import Characteristic from "./Characteristic/Characteristic";
import { CharacteristcsArray } from "../../../assets/Career/careerCharactersticsData";

const Characteristcs = () => {
  return (
    <article className={styles.characteristcsContainer}>
      {CharacteristcsArray.map((data) => (
        <Characteristic {...data} />
      ))}
    </article>
  );
};

export default Characteristcs;

// JOIN OUR CREW
// Are you passionate about new technologies and have great ideas about hardware, software or design? Do you dream of working with people who push you to do better? If yes, then Summer is the place where you’re free to drive your professional destiny.
