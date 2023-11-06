import styles from "./CardMeal.module.css";

export const CardMeal = ({ meal }) => {
  return (
    <li className={styles.item} key={meal?._id}>
      <div className={styles.container}>
        <img src={meal?.thumb} alt={meal?.title} className={styles.image}></img>
        <p className={styles.label}>{meal?.title}</p>
      </div>
    </li>
  );
};
