import React from "react";
import H2HeaderWithDescription from "../../../../components/H2HeaderWithDescription/H2HeaderWithDescription";
import LightHeader from "../../../../components/LightHeader/LightHeader";
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
    <section className={styles.headerContainerCharacteristic}>
      {header === "Innovation" && (
        <section>
          <LightHeader text={"JOIN OUR CREW"} color="black" />
          <p className={styles.innovationText}>
            Are you passionate about new technologies and have great ideas about
            hardware, software or design? Do you dream of working with people
            who push you to do better? If yes, then Summer is the place where
            you’re free to drive your professional destiny.
          </p>
        </section>
      )}
      <img
        src={imageSrc}
        alt="no image found :("
        className={styles.characteristicImage}
      />
      <div className={styles.breakLine}></div>
      <H2HeaderWithDescription
        text={header}
        description={text}
        counter={number}
      />
    </section>
  );
};

export default Characteristic;
