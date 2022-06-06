import React from "react";
import { Link } from "react-router-dom";
import H2HeaderWithDescription from "../H2HeaderWithDescription/H2HeaderWithDescription";
import LightHeader from "../LightHeader/LightHeader";
import styles from "./Footer.module.css";
const technologies = ["Hardware", "Design", "UI/UX", "Ios", "Android", "Web"];
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <article className={styles.companyInfo}>
        <article className={styles.companyInfoArticle}>
          <LightHeader text={"Where To Find Us"} color="white" />
          <span>ul. Wadowicka 7</span>
          <span>30-347 Kraków</span>
        </article>
        <article className={styles.companyInfoArticle}>
          <LightHeader text={"Quick Contact"} color="white" />
          <span>office@summer.agency</span>
          <span> +48 730 904 906</span>
        </article>
        <span className={styles.footerCopyright}>
          © Summer Agency. All rights reserved 2021
        </span>
      </article>
      <article className={styles.footerLinks}>
        <article>
          <LightHeader text="Quick links" color="white" />
          <ul className={styles.footerLinksList}>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/works">Works</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/career">Career</Link>
            </li>
            <li>
              <Link to="/contract">Contract</Link>
            </li>
          </ul>
        </article>
        <article>
          <LightHeader text="Projects" color="white" />
          <ul className={styles.footerLinksList}>
            {technologies.map((technology) => (
              <li>
                <Link to={`/works/${technology}`}>{technology}</Link>
              </li>
            ))}
          </ul>
        </article>
      </article>
    </footer>
  );
};

export default Footer;
