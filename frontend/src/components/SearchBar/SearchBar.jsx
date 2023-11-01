import Button from "components/Button";
import css from "./SearchBar.module.css";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";

export const SearchBar = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = async evt => {
    setSearchParams(params => {
      params.set("query", evt.query.value);
      return params;
    });
    evt.preventDefault();
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.container}>
          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            required
            placeholder="Search..."
            name="query"
            defaultValue={searchParams.get("query")}
          ></input>
          <Button>Search</Button>
        </div>
        {children}
      </form>
    </>
  );
};

SearchBar.propTypes = {
  handleSubmit: PropTypes.func,
  children: PropTypes.node,
};
