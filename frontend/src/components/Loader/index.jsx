import { FallingLines } from "react-loader-spinner";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.container}>
      <FallingLines
        color="#4fa94d"
        width="100"
        visible={true}
        ariaLabel="falling-lines-loading"
      />
    </div>
  );
};
export default Loader;
