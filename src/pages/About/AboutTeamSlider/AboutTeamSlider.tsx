import React from "react";
import CircularSlider from "../../../components/CircularSlider/CircularSlider";
import LightHeader from "../../../components/LightHeader/LightHeader";
import styles from "./AboutTeamSlider.module.css";
import CareerSlider from "../../Career/Career";
import { aboutSliderData } from "../../../assets/sliderData/aboutSlider/aboutSliderData";
const AboutTeamSlider = () => {
  return (
    <article className={styles.aboutTeamContainer}>
      <article className={styles.aboutTeamText}>
        <LightHeader text="WHAT THEY SAY" color="white" />
        <p className={styles.aboutTeamParagraph}>
          We believe success comes from working with the best. In order to
          continue advancing our goals, we have always wanted to work with the
          most innovative and leading companies in technology.
        </p>
      </article>
      <section className={styles.aboutSlider}>
        <CircularSlider sliderData={aboutSliderData} />
      </section>
    </article>
  );
};

export default AboutTeamSlider;
