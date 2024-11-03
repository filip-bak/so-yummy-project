import usePlaceholderImage from "@hooks/usePlaceholder";
import defaultImage from "@images/defaults/defaultImageStandard.jpg";
import { useNavigate } from "react-router-dom";
import styles from "./CardMeal.module.css";

export const CardMeal = ({ meal }) => {
  const navigate = useNavigate();

  const displayedImage = usePlaceholderImage(meal.preview, defaultImage);

  return (
    <li className={styles.item} key={meal?._id}>
      <div
        className={styles.container}
        onClick={() => navigate(`/recipes/${meal?._id}`)}
      >
        <img
          src={displayedImage}
          alt={meal?.title}
          className={styles.image}
        ></img>
        <p className={styles.label}>{meal?.title}</p>
      </div>
    </li>
  );
};
