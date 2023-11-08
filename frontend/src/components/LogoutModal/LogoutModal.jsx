import Button from "components/Button";
import styles from "./LogoutModal.module.css";
import icons from "../../images/icons.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "redux/auth/actions";
import React from "react";
import { notifySuccess } from "shared/notification";

export function LogoutModal({ onClose, open }) {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const routLogOut = () => {
    dispatch(logout());
    navigate("/welcome");
    notifySuccess("Logged out successfully.");
  };
  // const handleModalClose = () => {
  //   onClose();
  // };

  return open ? (
    <div className={styles.backdrop}>
      <div className={styles.container}>
        <button onClick={onClose} className={styles.exitBtn}>
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
          <Button variant="secondary" unique="reverse" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
