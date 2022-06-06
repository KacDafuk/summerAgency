import React from "react";
import CircularSlider from "../../components/CircularSlider/CircularSlider";
import styles from "./Career.module.css";
import Characteristcs from "./Characteristcs/Characteristcs";
import { careerSliderData } from "../../assets/sliderData/careerSlider/careerSlider";
import OpenPositions from "./OpenPositions/OpenPositions";
const Career = () => {
  return (
    <main>
      <Characteristcs />
      <CircularSlider sliderData={careerSliderData} />
      <OpenPositions />
    </main>
  );
};

export default Career;
