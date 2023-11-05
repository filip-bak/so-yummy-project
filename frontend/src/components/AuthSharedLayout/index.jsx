import { Outlet } from "react-router-dom";
import css from "./AuthSharedLayout.module.css";

const AuthSharedLayout = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <Outlet />
      </div>
    </section>
  );
};

export default AuthSharedLayout;
