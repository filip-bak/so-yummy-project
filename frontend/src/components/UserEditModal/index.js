import Button from "components/Button";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateUser, updateUserAvatar } from "redux/auth/actions";
import icon from "../../images/icons.svg";
import css from "./UserEditModal.module.css";

const UserEditModal = ({ onClose }) => {
  const disptach = useDispatch();

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

  const handleSubmit = e => {
    e.preventDefault();
    const { name, avatar } = e.target.elements;
    console.log(avatar.files[0]);
    if (avatar.files[0]) {
      disptach(updateUserAvatar(avatar));
    }
    if (name.value && name.value !== "") {
      disptach(updateUser(name.value));
    }
  };

  // const handleNameChange = (e) => {
  //   disptach(updateUser());
  // };

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
            <form className={css.ModalForm} onSubmit={handleSubmit}>
              <label className={css.ModalForm}>
                <input
                  type={"file"}
                  name="avatar"
                  accept={"image/jpeg,image/png,image/gif"}
                  className={css.FilesInput}
                />
                <svg className={css.AddAvatarIcon}>
                  <use href={`${icon}#icon-avatar-plus`}></use>
                </svg>
              </label>
              <label className={css.UserNameLabel}>
                <input name="name" className={css.UserNameInput} />

                <svg className={css.Pencil}>
                  <use href={`${icon}#icon-pencil`}></use>
                </svg>
                <svg className={css.User}>
                  <use href={`${icon}#icon-input-user`}></use>
                </svg>
              </label>
              <Button
                variant="secondary"
                size="large"
                type="submit"
                // onClick={handleNameChange}
              >
                Save changes
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserEditModal;
