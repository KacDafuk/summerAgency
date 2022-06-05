import React from "react";
import Project from "./Project/Project";
import styles from "./Projects.module.css";
import BankingHigoSrc from "../../../assets/Projects/imagesProjects/bankingHigo.png";
import BankingKycSrc from "../../../assets/Projects/imagesProjects/bankingKyc.png";
import { useNavigate } from "react-router-dom";
const Projects = () => {
  const navigate = useNavigate();
  function navigateToKyc() {
    navigate("/works");
  }
  return (
    <article className={styles.projectsContainer}>
      <Project
        h1Text={"HEALTHCARE"}
        h2Text={"Higo"}
        text={"Small medical device and telemedical solution"}
        technologies={["HARDWARE", "DESIGN", "UI/UX", "IOS", "ANDROID", "WEB"]}
        backgroundUrl={BankingHigoSrc}
      />
      <Project
        h1Text={"BANKING"}
        h2Text={"KYC"}
        text={"Small medical device and telemedical solution"}
        technologies={["UI/UX", "IOS", "ANDROID", "WEB"]}
        backgroundUrl={BankingKycSrc}
        action={navigateToKyc}
      />
    </article>
  );
};

export default Projects;
// HEALTHCARE
// Higo
// Small medical device and telemedical solution

// Soon more
// →
// HARDWARE DESIGN UI/UX IOS ANDROID WEB
// BANKING
// KYC
// Authentication and Customer
// Onboarding

// Read more
// →
// UI/UX IOS ANDROID WEB
