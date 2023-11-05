import Logo from "components/Logo";
import styles from "./Navigation.module.css";
import mobileStyles from "../MobileNavigation/MobileNavigation.module.css";
import icon from "../../../images/icons.svg";
import Switch from "components/Switch";
import NavList from "../NavList";
import MobileNavigation from "../MobileNavigation";
import UserEditModal from "components/UserEditModal";
import { useSelector } from "react-redux";
import { selectIsRefreshing, selectUser } from "redux/auth/selectors";
import Loader from "components/Loader";
import { PopUp } from "components/PopUp/PopUp";
import { useState } from "react";

const Navigation = () => {
  const [btnPopUp, setBtnPopUp] = useState(false);
  const isProfileImg = false;

  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  const handleClick = () => {
    document
      ?.querySelector(`.${mobileStyles.container}`)
      ?.classList.add(mobileStyles["mobile-open"]);
    document
      ?.querySelector(`.${mobileStyles.container}`)
      ?.classList.remove(mobileStyles["mobile-close"]);

    // const scrollBarCompensation = window.innerWidth - document.body.offsetWidth;
    // document.body.style.overflow = "hidden";
    // document.body.style.paddingRight = scrollBarCompensation;
  };
  const handleClose = () => {
    document
      ?.querySelector(`.${mobileStyles.container}`)
      ?.classList.add(mobileStyles["mobile-close"]);
    document
      ?.querySelector(`.${mobileStyles.container}`)
      ?.classList.remove(mobileStyles["mobile-open"]);

    // document.body.style.overflow = "";
    // document.body.style.paddingRight = "";
  };
  const popUpToggle = () => {
    setBtnPopUp(prev => !prev);
  };
  return (
    <nav className={styles.container}>
      <Logo className={styles.logo} />
      <NavList />

      <div className={styles.box}>
        <Loader
          refresh={true}
          width={"100%"}
          height={"100%"}
          visible={isRefreshing}
        />
        <div>
          <div onClick={popUpToggle} className={styles.profile}>
            {isProfileImg ? (
              <img className={styles.img} src="" alt="Profile" />
            ) : (
              <div className={styles.img}>
                <svg className={styles["user-icon"]}>
                  <use href={`${icon}#icon-user`}></use>
                </svg>
              </div>
            )}
            {user?.name ? <span className={styles.name}>{user.name}</span> : ""}
          </div>
          <PopUp trigger={btnPopUp} />
        </div>

        <Switch id="switch" className={styles["theme-switch"]} />

        <button className={styles["btn-mobile-nav"]} onClick={handleClick}>
          <svg className={styles["burger-menu-icon"]}>
            <use href={`${icon}#icon-burger-menu`}></use>
          </svg>
        </button>
      </div>
      <div>
        <UserEditModal />
      </div>

      <MobileNavigation handleClose={handleClose} />
    </nav>
  );
};

export default Navigation;
