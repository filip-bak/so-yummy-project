import css from "./SearchResultItem.module.css";

export const SearchResultItem = ({ image, key, title }) => {
  return (
    <li className={css.item} key={key}>
      <div className={css.container}>
        <img src={image} className={css.image}></img>
        <p className={css.label}>{title}</p>
      </div>
    </li>
  );
};
