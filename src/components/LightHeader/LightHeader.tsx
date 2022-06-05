import React from "react";
import styles from "./LightHeader.module.css";
type LightHeaderProps = {
  text: string;
  color: "black" | "white";
};
const LightHeader = ({ text, color }: LightHeaderProps) => {
  return (
    <h1 className={styles.lightHeader} style={{ color: color }}>
      {text}
    </h1>
  );
};

export default LightHeader;
