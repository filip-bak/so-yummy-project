import { Footer } from "components/Footer/Footer";
import PolicyAndTerms from "components/PolicyAndTerms";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navigation from "./Navigation";
import styles from "./SharedLayout.module.css";

const SharedLayout = () => {
  return (
    <div className={styles.container}>
      <script src="dist/notiflix-aio-3.2.6.min.js"></script>
      <ToastContainer />

      <Navigation />

      <Suspense>
        <Outlet />
      </Suspense>

      <Footer />
      <PolicyAndTerms />
    </div>
  );
};

export default SharedLayout;
