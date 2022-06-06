import React from "react";
import styles from "./Position.module.css";
import { Position as PositionType } from "../../../../sharedTypes/sharedCareer";
import H2HeaderWithDescription from "../../../../components/H2HeaderWithDescription/H2HeaderWithDescription";
type PositionProps = PositionType & {
  counter: number;
};
const Position = ({ position, where, type, counter }: PositionProps) => {
  return (
    <article className={styles.position}>
      <article className={styles.jobHeader}>
        <H2HeaderWithDescription
          text={position}
          description=""
          counter={counter}
        />
        <i className="fa-solid fa-arrow-right fa-3x"></i>
      </article>

      <p className={styles.jobInfo}>
        <div>
          <strong>Where: </strong>
          {where}
        </div>
        <div>
          <strong>Type: </strong>
          {type}
        </div>
      </p>
    </article>
  );
};

export default Position;
