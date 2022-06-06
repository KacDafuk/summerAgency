import React from "react";
import Brands from "../../components/Brands/Brands";
import ImageWithText from "../../components/Header/ImageWithText/ImageWithText";
import SeeProjectsLink from "../../components/SeeProjectsLink/SeeProjectsLink";
import styles from "./About.module.css";
import AboutTeam from "./AboutTeam/AboutTeam";
import AboutTeamSlider from "./AboutTeamSlider/AboutTeamSlider";
import About2Src from "../../assets/headerImages/Images/about2.jpg";
const About = () => {
  return (
    <article className={styles.aboutContainer}>
      <AboutTeam />
      <ImageWithText
        headerText="We are specialist who
        serves people’s needs"
        centerHorizontally={true}
        centerVertically={true}
        imageSrc={About2Src}
      >
        <></>
      </ImageWithText>
      <AboutTeamSlider />
      <Brands />
      <SeeProjectsLink />
    </article>
  );
};

export default About;
