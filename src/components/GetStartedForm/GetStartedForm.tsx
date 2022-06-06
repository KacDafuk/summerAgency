import React, { useState } from "react";
import H2HeaderWithDescription from "../H2HeaderWithDescription/H2HeaderWithDescription";
import LightHeader from "../LightHeader/LightHeader";
import styles from "./GetStartedForm.module.css";
import { clietnDemands } from "../../assets/formData";
import Btn from "../Btn/Btn";
const GetStartedForm = () => {
  const [currentQuestionDemand, setCurrentQuestionDemand] = useState("Other");
  const [checkedCheckboxes, setCheckedCheckboxes] = useState<string[]>([]);
  const [textInputs, setTextInputs] = useState({
    name: "",
    email: "",
    projectType: "",
    projectAbout: "",
  });
  function modifyTextInputs({
    currentTarget: { id, value },
  }: React.ChangeEvent<HTMLInputElement>) {
    setTextInputs((prevInputs) => ({
      ...prevInputs,
      [id]: value,
    }));
  }
  function submit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    console.table(textInputs);
    console.log(checkedCheckboxes, "YOUR CHECKBOXES");
    alert("check console to see your data");
    setTextInputs({
      name: "",
      email: "",
      projectType: "",
      projectAbout: "",
    });
    setCheckedCheckboxes([]);
  }
  function getCorrectQuestionText() {
    return clietnDemands.find(({ demand }) => currentQuestionDemand === demand)!
      .question;
  }
  function toggleCheckboxValue(value: string) {
    if (checkedCheckboxes.includes(value)) {
      setCheckedCheckboxes((prevChecked) =>
        prevChecked.filter((delVal) => delVal !== value)
      );
      return;
    }
    setCheckedCheckboxes([value, ...checkedCheckboxes]);
  }
  function isChecked(value: string) {
    return checkedCheckboxes.includes(value);
  }
  function changeQuestion(e: React.MouseEvent<HTMLInputElement, MouseEvent>) {
    setCheckedCheckboxes([]);
    setCurrentQuestionDemand(e.currentTarget.value);
  }
  return (
    <article className={styles.getStartedFormContainer}>
      <section className={styles.aboutChallengecontainer}>
        <LightHeader text="CONTACT US" color="white" />
        <H2HeaderWithDescription
          text="Let’s get started"
          description="We're always looking for a challenge.Got a project in mind?"
          color="white"
        />
      </section>
      <form action="" className={styles.getStartedForm}>
        <label htmlFor="name" className={styles.inputLabel}>
          Your Name
        </label>
        <input
          type="text"
          id="name"
          onChange={modifyTextInputs}
          placeholder="Type here"
          required
          value={textInputs["name"]}
        />
        <label htmlFor="email" className={styles.inputLabel}>
          Your Email
        </label>
        <input
          type="email"
          id="email"
          onChange={modifyTextInputs}
          placeholder="Type here"
          required
          value={textInputs["email"]}
        />
        <label
          htmlFor=""
          className={`${styles.inputLabel} ${styles.inputLabelTopGap}`}
        >
          {getCorrectQuestionText()}
        </label>
        <section className={styles.projectTypesContainer}>
          {clietnDemands.map(({ demand }) => (
            <label className={styles.demandInput} key={demand}>
              <span>{demand}</span>
              <input
                type="radio"
                name="type"
                value={demand}
                onClick={changeQuestion}
              />
            </label>
          ))}
        </section>
        <label
          htmlFor=""
          className={`${styles.inputLabel} ${styles.inputLabelTopGap}`}
        >
          {getCorrectQuestionText()}
        </label>

        <section className={styles.projectTypesContainer}>
          {currentQuestionDemand === "Other" ? (
            <input
              type="text"
              placeholder="Type here"
              id="projectType"
              onChange={modifyTextInputs}
              value={textInputs["projectType"]}
            />
          ) : (
            clietnDemands
              .find((item) => item.demand === currentQuestionDemand)!
              .types.map((type) => (
                <label className={styles.demandInput} key={type}>
                  <span>{type}</span>
                  <input
                    type="checkbox"
                    name="type"
                    value={type}
                    checked={isChecked(type)}
                    onClick={() => toggleCheckboxValue(type)}
                  />
                </label>
              ))
          )}
        </section>
        <label
          htmlFor=""
          className={`${styles.inputLabel} ${styles.inputLabelTopGap}`}
        >
          Tell us about the project
        </label>
        <input
          type="text"
          placeholder="Type here"
          id="projectAbout"
          onChange={modifyTextInputs}
          value={textInputs["projectAbout"]}
        />
        <Btn
          text="send"
          variation="black"
          fullWidth={true}
          type="submit"
          action={submit}
        />
      </form>
    </article>
  );
};

export default GetStartedForm;
