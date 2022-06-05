import React from "react";
import CircularSlider from "../../components/CircularSlider/CircularSlider";
import WhatWeDoAccordion from "../../components/WhatWeDoAccordion/WhatWeDoAccordion";
import styles from "./Services.module.css";
import ServicesList from "./ServicesList/ServicesList";
import { servicesSliderData } from "../../assets/sliderData/servicesSlider/servicesSlider";
const Services = () => {
  return (
    <main>
      <article className={styles.accordionWithListContainer}>
        <WhatWeDoAccordion />
        <ServicesList />
      </article>

      <CircularSlider sliderData={servicesSliderData} />
    </main>
  );
};

export default Services;
