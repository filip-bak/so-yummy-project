import styles from "./PopUp.module.css";
import Button from "components/Button";
import icons from "../../images/icons.svg";

export function PopUp(props) {
  return props.trigger ? (
    <div className={styles.container}>
      <Button className={styles.editBtn}>
        <span className={styles.editText}>Edit profile</span>
        <svg className={styles.icon}>
          <use href={`${icons}#icon-pencil`} />
        </svg>
      </Button>
      <Button className={styles.logoutBtn} size="small" unique="svg">
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
