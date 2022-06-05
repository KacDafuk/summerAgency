import React, { useState } from "react";
import { SliderData } from "../../sharedTypes/sliderProps";
import styles from "./CircularSlider.module.css";
type FashionWalkIdx = 0 | 1 | 2; //possible fashion gifs indexes
type Directions = -1 | 1; //get previous image | get next image
export function useCircularSlider(sliderData: SliderData) {
  const [direction, setDirection] = useState<Directions>(1);
  const [currentGifDisplayIdx, setCurrentGifDisplayIdx] =
    useState<FashionWalkIdx>(1);
  function getModal3(numb: number) {
    if (numb < 0) return sliderData.length - 1;
    return numb % sliderData.length;
  }
  function changeImage(direction: Directions) {
    setDirection(direction);
    setCurrentGifDisplayIdx((prevIdx) => {
      return getModal3(prevIdx + direction) as FashionWalkIdx;
    });
  }

  function getSlideClassName(isCurrent = true) {
    function getCorrectCurrentClass() {
      switch (direction) {
        case -1:
          return styles.currentMoveLeft; //get next image
        case 1:
          return styles.currentMoveRight; //get previouse image
      }
    }
    function getCorrectLeaveClass() {
      switch (direction) {
        case -1: //get next image
          return styles.leaveMoveLeft;
        case 1:
          return styles.leaveMoveRight; //get previouse image
      }
    }
    switch (isCurrent) {
      case true:
        return getCorrectCurrentClass();
      case false:
        return getCorrectLeaveClass();
    }
  }
  return {
    direction,
    currentGifDisplayIdx,
    getModal3,
    changeImage,
    getSlideClassName,
  };
}
