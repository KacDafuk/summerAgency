import React from "react";
import styles from "./Brands.module.css";
const Brands = () => {
  return (
    <article className={styles.logosContainerWrapper}>
      <article className={styles.logosContainer}>
        <section className={styles.flexRow}>
          <i className="fa-brands fa-cc-mastercard"></i>
          <i className="fa-brands fa-microsoft"></i>
          <i className="fa-brands fa-google"></i>
          <i className="fa-brands fa-facebook-square"></i>
          <i className="fa-brands fa-twitter-square"></i>
        </section>
        <section className={styles.flexRow}>
          <i className="fa-brands fa-cc-mastercard"></i>
          <i className="fa-brands fa-microsoft"></i>
          <i className="fa-brands fa-google"></i>
          <i className="fa-brands fa-facebook-square"></i>
          <i className="fa-brands fa-twitter-square"></i>
        </section>
      </article>
    </article>
  );
};

export default Brands;
