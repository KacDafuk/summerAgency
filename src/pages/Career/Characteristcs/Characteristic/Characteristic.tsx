import React from "react";
import H2HeaderWithDescription from "../../../../components/H2HeaderWithDescription/H2HeaderWithDescription";
import styles from "./Characteristic.module.css";
type CharacteristcsProps = {
  number: number;
  header: string;
  text: string;
  imageSrc: string;
};
const Characteristic = ({
  number,
  header,
  text,
  imageSrc,
}: CharacteristcsProps) => {
  return (
    <section className={styles.characteristic}>
      <img src={imageSrc} alt="no image found :(" />
      <H2HeaderWithDescription text={header} description={text} />
    </section>
  );
};

export default Characteristic;
