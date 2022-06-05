import React from "react";
import styles from "./SliderHeader.module.css";
type SliderHeaderProps = {
  text: string;
};
const SliderHeader = ({ text }: SliderHeaderProps) => {
  return <h1 className={styles.sliderHeader}>{text}</h1>;
};

export default SliderHeader;
