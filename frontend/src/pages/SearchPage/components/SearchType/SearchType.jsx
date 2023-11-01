import { useDispatch } from "react-redux";
import css from "./SearchType.module.css";
import { setQueryType } from "redux/recipes/slice";
import { useSearchParams } from "react-router-dom";

export const SearchType = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const handleOnChange = evt => {
    dispatch(setQueryType(evt.target.value));
  };

  return (
    <div className={css.select_div}>
      <label htmlFor="queryType" className={css.label}>
        Search by:
        <select
          className={css.select_box}
          id="queryType"
          name="queryType"
          onChange={handleOnChange}
          defaultValue={searchParams.get("queryType")}
        >
          <option value="query">Title</option>
          <option value="ingredient">Ingredients</option>
        </select>
      </label>
    </div>
  );
};
