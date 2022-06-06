import React from "react";
import LightHeader from "../../LightHeader/LightHeader";
import H1Header from "../H1Header/H1Header";
import styles from "./ContactHeader.module.css";
type ContactHeaderProps = {
  children: JSX.Element;
};
const ContactHeader = ({ children }: ContactHeaderProps) => {
  return (
    <article className={styles.contactHeader}>
      {children}
      <H1Header text="Where to find us" white={true} />
      <article className={styles.companyInfo}>
        <article className={styles.companyInfoArticle}>
          <LightHeader text={"Where To Find Us"} color="white" />
          <span>ul. Wadowicka 7</span>
          <span>30-347 Kraków</span>
        </article>
        <article className={styles.invoice}>
          <LightHeader text="Invoice Information" color="white" />
          <p className={styles.invoiceText}>
            SUMMER AGENCY sp. z o.o. ul. Wadowicka 7, 30-347 Kraków NIP:
            6793111245
          </p>
        </article>
      </article>
    </article>
  );
};

export default ContactHeader;
