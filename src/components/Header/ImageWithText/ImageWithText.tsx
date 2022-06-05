import React from "react";
import H1Header from "../H1Header/H1Header";
import styles from "./ImageWithText.module.css";
import { useLocation } from "react-router-dom";
type ImageWithTextProps = {
  children: JSX.Element;
};
const ImageWithText = ({ children }: ImageWithTextProps) => {
  const { pathname } = useLocation();
  function getRightHeaderText() {
    switch (pathname) {
      case "/main":
        return "We design physical and digital solutions. Our focus is on delivering  tasteful and functional products";
      case "/about":
        return "We bring innovative products to life";
      case "/services":
        return "Full-service product development company";
      case "/career":
        return "Summer is the place where you’re free to drive your professional destiny";
    }
    return "";
  }
  return (
    <article className={styles.imageWithText}>
      {children}
      <H1Header text={getRightHeaderText()} />
    </article>
  );
};

export default ImageWithText;
