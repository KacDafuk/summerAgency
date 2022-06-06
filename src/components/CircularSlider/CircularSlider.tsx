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
  function isImgSlider() {
    return sliderData.length > 0 && "imgSrc" in sliderData[0];
  }
  return (
    <article
      className={`${styles.slider} ${!isImgSlider() && styles.textSlider}`}
    >
      {isImgSlider() && <SliderHeader text="services" />}
      <button
        className={`${styles.prevImageBtn} ${
          !isImgSlider() && styles.sliderTextBtn
        }`}
        onClick={() => changeImage(-1)}
      >
        <i className="fa-solid fa-arrow-right fa-3x"></i>
      </button>
      <button
        className={`${styles.nextImageBtn} ${
          !isImgSlider() && styles.sliderTextBtn
        }`}
        onClick={() => changeImage(1)}
      >
        <i className="fa-solid fa-arrow-left fa-3x"></i>
      </button>
      {sliderData.map((data, idx) => {
        if (idx === currentGifDisplayIdx) {
          if ("imgSrc" in data) {
            const { imgSrc, headerText, descriptionText } = data;
            return (
              <section
                style={{ backgroundImage: `url(${imgSrc})` }}
                className={`${styles.sliderGif}  ${getSlideClassName()}`}
              >
                {descriptionText ? (
                  <H2HeaderWithDescription
                    text={headerText}
                    description={descriptionText}
                    color="white"
                    carouselHeader={true}
                  />
                ) : (
                  <H1Header
                    text={headerText}
                    white={true}
                    centerVertically={true}
                  />
                )}
              </section>
            );
          }
          const { quote, author, firm, position } = data;
          return (
            <section
              className={`${styles.sliderGif}  ${getSlideClassName(true)}`}
            >
              <H2HeaderWithDescription
                text={quote}
                description=""
                fontSizeH2="--font-x-lg"
                color="white"
              />
              <div className={styles.quoteInfo}>
                <p>
                  <strong className={styles.authorName}>{author}</strong>
                </p>
                <span className={styles.authorInfo}>
                  {position} {firm}
                </span>
              </div>
            </section>
          );
        } else if (idx === getModal3(currentGifDisplayIdx - direction)) {
          if ("imgSrc" in data) {
            const { imgSrc, headerText, descriptionText } = data;
            return (
              <section
                style={{ backgroundImage: `url(${imgSrc})` }}
                className={`${styles.sliderGif}  ${getSlideClassName(false)}`}
              >
                {descriptionText ? (
                  <H2HeaderWithDescription
                    text={headerText}
                    description={descriptionText}
                    color="white"
                    carouselHeader={true}
                  />
                ) : (
                  <H1Header
                    text={headerText}
                    white={true}
                    centerVertically={true}
                  />
                )}
              </section>
            );
          }

          return (
            <section
              className={`${styles.sliderGif}  ${
                styles.sliderText
              } ${getSlideClassName(true)}`}
            ></section>
          );
        }
      })}
    </article>
  );
};

export default CircularSlider;
