import css from "./SearchType.module.css";

export const SearchType = () => {
  return (
    <div className={css.select_div}>
      <label for="searchType" className={css.label}>
        Search by:
        <select className={css.select_box} id="searchType" name="searchType">
          <option value="title">Title</option>
          <option value="ingredients">Ingredients</option>
        </select>
      </label>
    </div>
  );
};
