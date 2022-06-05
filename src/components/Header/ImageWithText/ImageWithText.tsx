import React from "react";
import H1Header from "../H1Header/H1Header";
import styles from "./ImageWithText.module.css";
type ImageWithTextProps = {
  children: JSX.Element;
};
const ImageWithText = ({ children }: ImageWithTextProps) => {
  return (
    <article className={styles.imageWithText}>
      {children}
      <H1Header
        text="We design physical and digital solutions. Our focus is on delivering
      tasteful and functional products"
      />
    </article>
  );
};

export default ImageWithText;
