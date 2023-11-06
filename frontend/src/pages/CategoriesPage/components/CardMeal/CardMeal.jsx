import styles from "./CardMeal.module.css";
import { useNavigate } from "react-router-dom";
import defaultImage from "images/defaults/defaultImageStandard.jpg";

export const CardMeal = ({ meal }) => {
  const navigate = useNavigate();
  return (
    <li className={styles.item} key={meal?._id}>
      <div
        className={styles.container}
        onClick={() => navigate(`/recipes/${meal?._id}`)}
      >
        <img
          src={meal?.thumb || defaultImage}
          alt={meal?.title}
          className={styles.image}
        ></img>
        <p className={styles.label}>{meal?.title}</p>
      </div>
    </li>
  );
};
