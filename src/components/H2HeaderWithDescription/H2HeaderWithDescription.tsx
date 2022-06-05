import React from "react";
import styles from "./H2HeaderWithDescription.module.css";
import { HeaderPropsWithDescription } from "../../sharedTypes/sharedHeader";
import Btn from "../Btn/Btn";
const H2HeaderWithDescription = ({
  text,
  description,
  button,
  color,
  fontSizeH2,
  fontSizeDescription,
}: HeaderPropsWithDescription) => {
  return (
    <section className={styles.headerWithDescriptionContainer}>
      <h2 className={styles.h2Header} style={color && { color: color }}>
        <span style={fontSizeH2 && { fontSize: `var(${fontSizeH2})` }}>
          {text}
        </span>
      </h2>
      <p
        className={styles.description}
        style={
          fontSizeDescription && { fontSize: `var(${fontSizeDescription})` }
        }
      >
        {description}
      </p>
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
