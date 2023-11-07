import Button from "components/Button";
import css from "./SearchBar.module.css";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";

export const SearchBar = ({ children, dark }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleQuerySubmit = evt => {
    evt.preventDefault();
    setSearchParams(params => {
      params.set("query", evt.target.query.value);
      params.set("queryType", evt.target.queryType?.value);
      return params;
    });
  };

  return (
    <>
      <form className={css.form} onSubmit={handleQuerySubmit}>
        <div className={css.container}>
          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            required
            minLength={3}
            placeholder="Search..."
            name="query"
            defaultValue={searchParams.get("query")}
          ></input>
          <Button type="submit" dark={dark ? dark : false}>
            Search
          </Button>
        </div>
        {children}
      </form>
    </>
  );
};

SearchBar.propTypes = {
  children: PropTypes.node,
  dark: PropTypes.bool,
};
