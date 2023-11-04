import PropTypes from "prop-types";
import styles from "./Switch.module.css";
import { selectTheme } from "redux/theme/selectors";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "redux/theme/slice";

const Switch = ({ id = "switch", onChange, className }) => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  return (
    <div className={`${className}`}>
      <input
        id={id}
        className={styles.input}
        type="checkbox"
        checked={theme === "light" ? false : true}
        onChange={onChange ? onChange : () => dispatch(toggleTheme())}
      />
      <label className={styles.label} htmlFor={id}></label>
    </div>
  );
};

Switch.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

export default Switch;
