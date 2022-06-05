import React from "react";
import styles from "./H2HeaderWithDescription.module.css";
import { HeaderPropsWithDescription } from "../../sharedTypes/sharedHeader";
import Btn from "../Btn/Btn";
const H2HeaderWithDescription = ({
  text,
  description,
  button,
  color,
}: HeaderPropsWithDescription) => {
  return (
    <section className={styles.headerWithDescriptionContainer}>
      <h2 className={styles.h2Header} style={color && { color: color }}>
        {text}
      </h2>
      <p className={styles.description}>{description}</p>
      {button && (
        <Btn
          text={button.text}
          variation={button.variation}
          action={button.action}
        />
      )}
    </section>
  );
};

export default H2HeaderWithDescription;
