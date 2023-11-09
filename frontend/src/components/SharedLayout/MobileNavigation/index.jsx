import React, { useState, useEffect } from "react";
import Logo from "components/Logo";
import NavList from "../NavList";
import styles from "./MobileNavigation.module.css";
import Switch from "components/Switch";
import icons from "../../../images/icons.svg";
import mobileImage from "../../../images/mobileMenu/spinachMenu-mobile@1x.png";
import tabletImage from "../../../images/mobileMenu/spinachMenu-tablet@1x.png";

const MobileNavigation = ({ handleClose }) => {
  const [isMobile, setIsMobile] = useState(false);

  const checkIsMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles["logo-box"]}>
        <Logo className={styles.logo} />
      </div>
      <div className={styles.modal}>
        <NavList mobile={true} />
      </div>

      <button className={styles.close} onClick={handleClose}>
        <svg className={styles["close-icon"]}>
          <use href={`${icons}#icon-close`}></use>
        </svg>
      </button>

      <Switch id="switch-mobile" className={styles.switch} />
      <div className={styles.placeholder}>
        <img
          src={isMobile ? mobileImage : tabletImage}
          alt="Leaf"
          className={`${styles.bottomImage}`}
        />
      </div>
    </div>
  );
};

export default MobileNavigation;
