import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loader from "components/Loader/Loader";
import styles from "./SharedLayout.module.css";
import Text from "../Text/Text";

const SharedLayout = () => {
  return (
    <div className={styles.container}>
      Header
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      Footer
      <Text />
    </div>
  );
};

export default SharedLayout;
