import Button from "components/Button";
import icons from "../../images/icons.svg";
import styles from "./PopUp.module.css";

export function PopUp(props) {
  const routeProfile = () => {
    props.userModalEdit(true);
  };

  const routLogOut = () => {
    props.onLogout(true);
  };

  return props.trigger ? (
    <div className={styles.container}>
      <Button onClick={routeProfile} className={styles.editBtn}>
        <span className={styles.editText}>Edit profile</span>
        <svg className={styles.icon}>
          <use href={`${icons}#icon-pencil`} />
        </svg>
      </Button>
      <Button
        onClick={routLogOut}
        // className={styles.logoutBtn}
        size="medium"
        unique="svg"
      >
        Log out
        <svg className={styles.icon2}>
          <use href={`${icons}#icon-arrow-right-black`} />
        </svg>
      </Button>
    </div>
  ) : (
    ""
  );
}
