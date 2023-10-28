import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loader from "components/Loader";
import styles from "./SharedLayout.module.css";
import PolicyAndTerms from "components/PolicyAndTerms";

const SharedLayout = () => {
  return (
    <div className={styles.container}>
      Navigacja
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      Footer
      <PolicyAndTerms />
      {/* <div className={styles.backgroundImage1}></div> */}
      {/* <div className={styles.backgroundImage2}></div> */}
    </div>
  );
};

export default SharedLayout;
