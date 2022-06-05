import React from "react";
import H1Header from "../../components/Header/H1Header/H1Header";
import WhatWeDoAccordion from "../../components/WhatWeDoAccordion/WhatWeDoAccordion";
import Brands from "./Brands/Brands";
import GetStartedForm from "../../components/GetStartedForm/GetStartedForm";
import styles from "./Main.module.css";
import Projects from "./Projects/Projects";
import SeeProjectsLink from "./SeeProjectsLink/SeeProjectsLink";
const Main = () => {
  return (
    <>
      <WhatWeDoAccordion />
      <Projects />
      <SeeProjectsLink />
      <Brands />
      <GetStartedForm />
    </>
  );
};

export default Main;
