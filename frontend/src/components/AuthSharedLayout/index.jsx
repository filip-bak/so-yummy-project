import { Outlet, useLocation } from "react-router-dom";
import css from "./AuthSharedLayout.module.css";
import { useDispatch, useSelector } from "react-redux";
import { resetError } from "redux/auth/slice";
import { Suspense, useEffect } from "react";
import { selectError } from "redux/auth/selectors";
import Loader from "components/Loader";

const AuthSharedLayout = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isError = useSelector(selectError);

  useEffect(() => {
    const isRegisterOrSignInPage =
      location.pathname.includes("register") ||
      location.pathname.includes("signin");

    if (isRegisterOrSignInPage && isError) {
      dispatch(resetError());
    }
    // eslint-disable-next-line
  }, [location.pathname, dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      <section className={css.section}>
        <div className={css.container}>
          <Outlet />
        </div>
      </section>
    </Suspense>
  );
};

export default AuthSharedLayout;
