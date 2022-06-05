import React, { useState } from "react";
import styles from "./WhatWeDoAccordion.module.css";
import { accordionData } from "../../assets/whatWeDoAccordionData";
import Btn from "../Btn/Btn";
import LightHeader from "../LightHeader/LightHeader";
const WhatWeDoAccordion = () => {
  const [curQuestionIdx, setCurQuestionIdx] = useState(0);
  function changeQuestion(idx: number) {
    setCurQuestionIdx(idx);
  }
  function isCurrentQuestion(idx: number) {
    return curQuestionIdx === idx;
  }
  function getArrowClass(idx: number) {
    return isCurrentQuestion(idx) && styles.arrowActive;
  }
  return (
    <article className={styles.accordionQuestionsContainer}>
      <section className={styles.accordionInner}>
        <LightHeader text="WHAT WE DO" color={"white"} />
        <dl>
          {accordionData.map(({ title, text }, idx) => (
            <div
              className={`${styles.accordionQuestion} ${
                isCurrentQuestion(idx) && styles.accordionQuestionActive
              }`}
            >
              <dt
                className={styles.accordionQuestionHeader}
                onClick={() => changeQuestion(idx)}
              >
                <h2>{title}</h2>
                <i
                  className={`fa-solid fa-arrow-down ${getArrowClass(idx)}`}
                ></i>
              </dt>
              <dd className={styles.accordionQuestionText}>{text}</dd>
            </div>
          ))}
        </dl>
      </section>
      <Btn text="Read more" variation="black" />
    </article>
  );
};

export default WhatWeDoAccordion;
