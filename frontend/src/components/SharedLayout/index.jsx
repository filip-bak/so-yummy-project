import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loader from "components/Loader";
import styles from "./SharedLayout.module.css";
import PolicyAndTerms from "components/PolicyAndTerms";
import { Footer } from "components/Footer/Footer";
import Navigation from "./Navigation";
import { ToastContainer } from "react-toastify";

const SharedLayout = () => {
  return (
    <div className={styles.container}>
      <script src="dist/notiflix-aio-3.2.6.min.js"></script>
      <ToastContainer />

      <Navigation />

      <Suspense fallback={<Loader visible={true} />}>
        <Outlet />
      </Suspense>
      <Footer />
      <PolicyAndTerms />
      {/* <div className={styles.backgroundImage1}></div> */}
      {/* <div className={styles.backgroundImage2}></div> */}
    </div>
  );
};

export default SharedLayout;
