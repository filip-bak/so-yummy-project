import { Triangle } from "react-loader-spinner";
import styles from "./Loader.module.css";

const Loader = ({
  visible = false,
  wrapperClass,
  color = "#8baa36",
  width = 70,
  height = 70,
  refresh = false,
}) => {
  return (
    <Triangle
      height={height}
      width={width}
      color={refresh ? "#3cbc81" : color}
      ariaLabel="triangle-loading"
      visible={visible}
      wrapperClass={refresh ? styles["refresh-loader"] : wrapperClass}
    />
  );
};
export default Loader;
