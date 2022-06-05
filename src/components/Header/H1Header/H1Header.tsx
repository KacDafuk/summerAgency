import React from "react";
import styles from "./H1Header.module.css";
type H1HeaderProps = {
  text: string;
  white?: true;
};
const H1Header = ({ text, white }: H1HeaderProps) => {
  return (
    <h1 className={styles.mainHeader} style={white && { color: "white" }}>
      {text}
    </h1>
  );
};

export default H1Header;
