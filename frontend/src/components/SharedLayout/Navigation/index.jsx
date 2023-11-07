import Loader from "components/Loader";
import Logo from "components/Logo";
import { LogoutModal } from "components/LogoutModal/LogoutModal";
import { PopUp } from "components/PopUp/PopUp";
import Switch from "components/Switch";
import UserEditModal from "components/UserEditModal";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  selectAvatarUrl,
  selectGlobalLoading,
  selectIsRefreshing,
  selectUser,
} from "redux/auth/selectors";
import icon from "../../../images/icons.svg";
import MobileNavigation from "../MobileNavigation";
import mobileStyles from "../MobileNavigation/MobileNavigation.module.css";
import NavList from "../NavList";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const [btnPopUp, setBtnPopUp] = useState(false);
  const [userModalOpen, setUserModalOpen] = useState(false);
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);

  const location = useLocation();
  const isDarkRecipePage = location.pathname.startsWith("/recipes/");
  const isDarkMainPage = location.pathname === "/";
  const avatarURL = useSelector(selectAvatarUrl);

  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoading = useSelector(selectGlobalLoading);

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
      <NavList dark={isDarkRecipePage} />

      <div className={styles.box}>
        {/* Refresh user loader */}
        <Loader
          refresh={true}
          color="#3498db"
          width={"100%"}
          height={"100%"}
          visible={isRefreshing}
        />
        {/* Global loader */}
        <Loader
          refresh={true}
          width={"100%"}
          height={"100%"}
          visible={isLoading}
        />
        <div>
          <div onClick={popUpToggle} className={styles.profile}>
            {avatarURL ? (
              <img className={styles.img} src={avatarURL} alt="Profile" />
            ) : (
              <div className={styles.img}>
                <svg className={styles["user-icon"]}>
                  <use href={`${icon}#icon-user`}></use>
                </svg>
              </div>
            )}
            {user?.name ? (
              <span
                className={`${styles.name} ${isDarkRecipePage && styles.dark} ${
                  isDarkMainPage && styles["dark-main"]
                }`}
              >
                {user.name}
              </span>
            ) : (
              ""
            )}
          </div>
          <PopUp
            trigger={btnPopUp}
            userModalEdit={setUserModalOpen}
            onLogout={setLogoutModalOpen}
          />
        </div>

        <Switch id="switch" className={styles["theme-switch"]} />

        <button
          className={`${styles["btn-mobile-nav"]} ${
            isDarkRecipePage && styles.dark
          }`}
          onClick={handleClick}
        >
          <svg className={styles["burger-menu-icon"]}>
            <use href={`${icon}#icon-burger-menu`}></use>
          </svg>
        </button>
      </div>
      {userModalOpen && (
        <div className={styles.backdrop}>
          <UserEditModal onClose={() => setUserModalOpen(false)} />
        </div>
      )}
      <LogoutModal
        onClose={() => setLogoutModalOpen(false)}
        open={logoutModalOpen}
      />
      <MobileNavigation handleClose={handleClose} />
    </nav>
  );
};

export default Navigation;
