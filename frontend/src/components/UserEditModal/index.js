import css from "./UserEditModal.module.css";
import { useEffect } from "react";
import icon from "../../images/icons.svg";

const UserEditModal = ({ onClose }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <>
      <div className={css.Overlay}>
        <div className={css.ModalWindow}>
          <div className={css.UserContainer}>
            <button
              className={css.ClsBtn}
              onClick={() => {
                onClose();
              }}
            >
              <svg className={css.CloseIcon}>
                <use href={`${icon}#icon-close`}></use>
              </svg>
            </button>

            <div className={css.UserAvatar}>
              <svg className={css.PictureIcon}>
                <use href={`${icon}#icon-user`}></use>
              </svg>
            </div>
            <form className={css.ModalForm}>
              <label className={css.ModalForm}>
                <input
                  type={"file"}
                  accept={"image/jpeg,image/png,image/gif"}
                  className={css.FilesInput}
                />
                <svg className={css.AddAvatarIcon}>
                  <use href={`${icon}#icon-avatar-plus`}></use>
                </svg>
              </label>
              <label className={css.UserNameLabel}>
                <input className={css.UserNameInput} />

                <svg className={css.Pencil}>
                  <use href={`${icon}#icon-pencil`}></use>
                </svg>
                <svg className={css.User}>
                  <use href={`${icon}#icon-input-user`}></use>
                </svg>
              </label>
              <button className={css.SubmitBtn}>Save changes</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserEditModal;
