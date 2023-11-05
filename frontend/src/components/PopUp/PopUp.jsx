import styles from "./PopUp.module.css";
import Button from "components/Button";
import icons from "../../images/icons.svg";
import { useNavigate } from "react-router-dom";

export function PopUp(props) {
  let navigate = useNavigate();
  const routeProfile = () => {
    let path = `#`;
    navigate(path);
  };

  const routLogOut = () => {
    let path = `#`;
    navigate(path);
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
        className={styles.logoutBtn}
        size="small"
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
