import React from "react";
import styles from "./Btn.module.css";
type BtnProps = {
  text: string;
  variation: "white" | "black";
  action?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  fullWidth?: true;
  type?: "submit";
};
const Btn = ({ variation, text, fullWidth, type, action }: BtnProps) => {
  return (
    <button
      className={`${styles.btn} ${
        variation === "black" ? styles.btnBlack : styles.btnWhite
      } `}
      style={fullWidth && { width: "100%" }}
      type={type}
      onClick={action}
    >
      <span>{text}</span>
      <i className="fa-solid fa-arrow-right"></i>
    </button>
  );
};

export default Btn;
