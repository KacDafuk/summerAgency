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
  if (pathname.includes("/works")) {
    return (
      <WorksHeader>
        <Navbar />
      </WorksHeader>
    );
  }
  if (pathname === "/contacts") {
    return <div>CONTACTS</div>;
  }

  return <div>error</div>;
};

export default Header;
