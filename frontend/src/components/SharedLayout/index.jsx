import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loader from "components/Loader/Loader";
import styles from "./SharedLayout.module.css";

const SharedLayout = () => {
  return (
    <div className={styles.container}>
      Header
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      Footer
    </div>
  );
};

export default SharedLayout;
