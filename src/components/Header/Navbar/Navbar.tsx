import React, { useState } from "react";
import styles from "./navbar.module.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [navVisible, setNavVisible] = useState(false);
  const navigate = useNavigate();
  function goToMain() {}
  function getNavSmallScreenDisplay() {
    return navVisible ? styles.navActive : styles.navHidden;
  }
  return (
    <nav>
      <ul className={styles.nav}>
        <li className={styles.navLogo} onClick={() => navigate("/main")}>
          <Link to="/main"></Link>
        </li>
        <li className={styles.navLinksOuter}>
          <ul className={`${styles.navLinks} ${getNavSmallScreenDisplay()}`}>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/works/all">Works</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/career">Career</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </li>
      </ul>
      <button
        className={styles.toggleBtn}
        onClick={() => setNavVisible(!navVisible)}
      >
        <i className="fa-solid fa-bars "></i>
      </button>
    </nav>
  );
};

export default Navbar;
