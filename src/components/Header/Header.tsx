import React from "react";
import styles from "./Header.module.css";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import WorksHeader from "./WorksHeader/WorksHeader";
import ImageWithText from "./ImageWithText/ImageWithText";
const pathsImageWithText = ["/main", "/about", "/services", "/career", "/"];
const pathsCustomHeader = ["/works", "/contacts"];
const Header = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  function isImageWithTextPath() {
    return pathsImageWithText.includes(pathname);
  }

  if (isImageWithTextPath()) {
    return (
      <ImageWithText>
        <Navbar />
      </ImageWithText>
    );
  }
  switch (pathname) {
    case "/works":
      return (
        <WorksHeader>
          <Navbar />
        </WorksHeader>
      );
    case "/contacts":
      return <div></div>;
  }
  return <div>error</div>;
};

export default Header;
