import PropTypes from "prop-types";
import styles from "./Switch.module.css";
import { selectTheme } from "redux/theme/selectors";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "redux/theme/slice";

const Switch = ({ onChange, className }) => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  return (
    <div className={`${className}`}>
      <input
        id="switch"
        className={styles.input}
        type="checkbox"
        checked={theme === "light" ? false : true}
        onChange={onChange ? onChange : () => dispatch(toggleTheme())}
      />
      <label className={styles.label} htmlFor="switch"></label>
    </div>
  );
};

Switch.propTypes = {
  onChange: PropTypes.func,
  className: PropTypes.string,
};

export default Switch;
