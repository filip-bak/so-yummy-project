import { useState } from "react";
import recepiesItems from "../../Data/recipes.json";
import styles from "./CategoriesItems.module.css";
import { Link } from "react-router-dom";

const CategoriesItems = () => {
  const [items] = useState(recepiesItems);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {items.map(val => (
          <Link className={styles.link} key={val._id} to={"/*"}>
            <img className={styles.images} src={val.preview} alt={val.title} />

            <div className={styles.description}>
              <p className={styles.description__item}>{val.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesItems;
