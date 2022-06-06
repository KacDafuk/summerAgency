import React from "react";
import H1Header from "../H1Header/H1Header";
import styles from "./ImageWithText.module.css";
import { useLocation } from "react-router-dom";
import { headerImagesData } from "../../../assets/headerImages/headerImagesData";
type ImageWithTextProps = {
  children: JSX.Element;
  headerText?: string;
  centerVertically?: true;
  centerHorizontally?: true;
  imageSrc?: string;
};
const ImageWithText = ({
  children,
  headerText,
  centerHorizontally,
  centerVertically,
  imageSrc,
}: ImageWithTextProps) => {
  const { pathname } = useLocation();
  function getRightImage() {
    const curPath = pathname.slice(1);
    if (imageSrc) return imageSrc;
    return headerImagesData[curPath as keyof typeof headerImagesData];
  }
  function getRightHeaderText() {
    if (headerText) return headerText;
    switch (pathname) {
      case "/main":
        return "We design physical and digital solutions. Our focus is on delivering  tasteful and functional products";
      case "/about":
        return "We bring innovative products to life";
      case "/services":
        return "Full-service product development company";
      case "/career":
        return "Summer is the place where you’re free to drive your professional destiny";
      case "/contact":
        return "Where to find us";
    }
    return "";
  }
  return (
    <article
      className={styles.imageWithText}
      style={{
        backgroundImage: `url(${getRightImage()})`,
      }}
    >
      {children}
      <H1Header
        text={getRightHeaderText()}
        centerVertically={centerVertically}
        centerHorizontally={centerHorizontally}
      />
    </article>
  );
};

export default ImageWithText;
