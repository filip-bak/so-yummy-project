import css from "./SearchResultItem.module.css";

export const SearchResultItem = ({ image, title }) => {
  return (
    <li className={css.item} key={image}>
      <div className={css.container}>
        <img src={image} className={css.image} alt="a recipe"></img>
        <p className={css.label}>{title}</p>
      </div>
    </li>
  );
};
