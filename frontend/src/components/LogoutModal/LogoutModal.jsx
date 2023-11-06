import Button from "components/Button";
import styles from "./LogoutModal.module.css";
import icons from "../../images/icons.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "redux/auth/actions";
import { useState } from "react";

export function LogoutModal() {
  const [closeModal, setCloseModal] = useState(true);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const routLogOut = () => {
    dispatch(logout());
    navigate("/welcome");
  };
  const handleModalClose = () => {
    setCloseModal(false);
  };

  return closeModal ? (
    <div className={styles.container}>
      <button onClick={handleModalClose} className={styles.exitBtn}>
        <svg className={styles.exitIcon}>
          <use href={`${icons}#icon-close`}></use>
        </svg>
      </button>
      <p className={styles.logoutModalText}>
        Are you sure you want to log out?
      </p>
      <div className={styles.btnsWrapper}>
        <Button variant="secondary" onClick={routLogOut}>
          Log out
        </Button>
        <Button variant="secondary" unique="reverse" onClick={handleModalClose}>
          Cancel
        </Button>
      </div>
    </div>
  ) : (
    ""
  );
}
