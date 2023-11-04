import css from "./SigninForm.module.css";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import Button from "components/Button";

export const SigninForm = () => {
  return (
    <div className={css.registerFormWrapper}>
      <div className={css.background}></div>
      <Formik>
        <form noValidate>
          <div className={css.title}>Sign In</div>
          <div className={css.fields}>
            <label className={css.label} htmlFor="email">
              <input
                className={css.field}
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </label>
            <label className={css.label} htmlFor="password">
              <input
                className={css.field}
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </label>
          </div>

          <Button variant="secondary" size="large" unique="short" type="submit">
            Sign In
          </Button>
        </form>
      </Formik>

      <Link className={css.registerLink} to={"/register"}>
        Registration
      </Link>
    </div>
  );
};
