import Logo from "components/Logo";
import styles from "./Navigation.module.css";
import icon from "../../../images/icons.svg";
import Switch from "components/Switch";
import NavList from "./NavList";

const Navigation = () => {
  const isProfileImg = false;

  return (
    <nav className={styles.container}>
      <Logo className={styles.logo} />
      <NavList />

      <div className={styles.box}>
        <div className={styles.profile}>
          {isProfileImg ? (
            <img className={styles.img} src="" alt="Profile" />
          ) : (
            <div className={styles.img}>
              <svg className={styles["user-icon"]}>
                <use href={`${icon}#icon-user`}></use>
              </svg>
            </div>
          )}
          <span className={styles.name}>Olena</span>
        </div>
        <Switch className={styles["theme-switch"]} />

        <button className={styles["btn-mobile-nav"]}>
          <svg className={styles["burger-menu-icon"]}>
            <use href={`${icon}#icon-burger-menu`}></use>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
