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
  counter,
  carouselHeader,
}: HeaderPropsWithDescription) => {
  function getCounter() {
    if (counter) {
      return counter < 10 ? "0" + counter : counter;
    }
  }
  console.log(carouselHeader, description, "CAR");
  return (
    <section
      className={`${styles.headerWithDescriptionContainer} ${
        carouselHeader && styles.carouselHeader
      }`}
    >
      <h2 className={styles.h2Header} style={color && { color: color }}>
        <span className={styles.counter}>{getCounter()}</span>
        <span style={fontSizeH2 && { fontSize: `var(${fontSizeH2})` }}>
          {text}
        </span>
      </h2>
      {description && (
        <p
          className={styles.description}
          style={
            fontSizeDescription && { fontSize: `var(${fontSizeDescription})` }
          }
        >
          {description}
        </p>
      )}
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
