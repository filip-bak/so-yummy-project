import Logo from "components/Logo";
import NavList from "../NavList";
import styles from "./MobileNavigation.module.css";
import Switch from "components/Switch";
import icons from "../../../images/icons.svg";

const MobileNavigation = ({ handleClose }) => {
  return (
    <div className={styles.container}>
      <Logo className={styles.logo} />

      <div className={styles.modal}>
        <NavList mobile={true} />
      </div>

      <button className={styles.close} onClick={handleClose}>
        <svg className={styles["close-icon"]}>
          <use href={`${icons}#icon-close`}></use>
        </svg>
      </button>

      <Switch id="switch-mobile" className={styles.switch} />
    </div>
  );
};

export default MobileNavigation;
