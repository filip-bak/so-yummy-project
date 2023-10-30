import Button from "components/Button";
import css from "./SearchBar.module.css";
import PropTypes from "prop-types";

export const SearchBar = ({ handleSubmit, children }) => {
  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.container}>
          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search..."
            name="searchFilter"
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
