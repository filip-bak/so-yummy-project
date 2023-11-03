import styles from "./CardMeal.module.css";

export const CardMeal = ({ image, title }) => {
  return (
    <li className={styles.item} key={image}>
      <div className={styles.container}>
        <img src={image} className={styles.image} alt={title}></img>
        <p className={styles.label}>{title}</p>
      </div>
    </li>
  );
};
