import React, { useState } from "react";
import styles from "./CircularSlider.module.css";
import { useCircularSlider } from "./useCircularSlider";
import { SliderData } from "../../sharedTypes/sliderProps";
import H2HeaderWithDescription from "../H2HeaderWithDescription/H2HeaderWithDescription";
import LightHeader from "../LightHeader/LightHeader";
import H1Header from "../Header/H1Header/H1Header";
import SliderHeader from "./SliderHeader/SliderHeader";

type CircularSliderProps = {
  sliderData: SliderData;
};
const CircularSlider = ({ sliderData }: CircularSliderProps) => {
  const {
    direction,
    currentGifDisplayIdx,
    getModal3,
    changeImage,
    getSlideClassName,
  } = useCircularSlider(sliderData);
  return (
    <article className={styles.slider}>
      <SliderHeader text="services" />
      <button className={styles.prevImageBtn} onClick={() => changeImage(-1)}>
        <i className="fa-solid fa-arrow-right fa-3x"></i>
      </button>
      <button className={styles.nextImageBtn} onClick={() => changeImage(1)}>
        <i className="fa-solid fa-arrow-left fa-3x"></i>
      </button>
      {sliderData.map(({ imgSrc, headerText }, idx) => {
        if (idx === currentGifDisplayIdx)
          return (
            <section
              style={{ backgroundImage: `url(${imgSrc})` }}
              className={`${styles.sliderGif}  ${getSlideClassName()}`}
            >
              <H1Header
                text={headerText}
                white={true}
                centerVertically={true}
              />
            </section>
          );
        else if (idx === getModal3(currentGifDisplayIdx - direction)) {
          return (
            <section
              style={{ backgroundImage: `url(${imgSrc})` }}
              className={`${styles.sliderGif}  ${getSlideClassName(false)}`}
            />
          );
        }
      })}
    </article>
  );
};

export default CircularSlider;
