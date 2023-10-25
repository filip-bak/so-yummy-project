import css from "./SearchType.module.css";

export const SearchType = () => {
  return (
    <>
      <label for="searchType" className={css.label}>
        Search by:
        <select id="searchType" name="searchType">
          <option value="title">Title</option>
          <option value="ingredients">Ingredients</option>
        </select>
      </label>
    </>
  );
};
