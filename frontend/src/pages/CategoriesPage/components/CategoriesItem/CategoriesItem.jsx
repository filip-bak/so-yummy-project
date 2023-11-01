import css from "./CategoriesItem.module.css";

export const CategoriesItem = ({ image, title }) => {
  return (
    <li className={css.item} key={image}>
      <div className={css.container}>
        <img src={image} className={css.image} alt={title}></img>
        <p className={css.label}>{title}</p>
      </div>
    </li>
  );
};
