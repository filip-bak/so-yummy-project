import css from "../../components/RegisterForm/RegisterForm.module.css";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import Button from "components/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "redux/auth/actions";

const initialValue = {
  name: "",
  email: "",
  password: "",
};

export const RegisterForm = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = (value, { resetForm }) => {
    dispatch(register(value));
    setIsSubmit(false);
    resetForm();
  };

  return (
    <div className={css.wrapper}>
      <div className={css.background}></div>
      <Formik
        initialValues={initialValue}
        onSubmit={handleSubmit}
        validateOnChange={isSubmit}
        validateOnBlur={false}
      >
        {({ errors, touched }) => (
          <form noValidate>
            <div className={css.title}>Registration</div>
            <div className={css.fields}>
              <label className={css.label} htmlFor="name">
                <input
                  className={css.field}
                  type="text"
                  name="name"
                  title="Name may contain only letters, apostrophe, dash and spaces."
                  required
                  pattern="^[a-zA-Z0-9а-яА-Я]+(([' -][a-zA-Z0-9а-яА-Я ])?[a-zA-Z0-9а-яА-Я]*)*$"
                  placeholder="Name"
                />
              </label>
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

            <Button
              variant="secondary"
              size="large"
              unique="short"
              type="submit"
              onClick={() => setIsSubmit(true)}
            >
              Sign up
            </Button>
          </form>
        )}
      </Formik>

      <Link className={css.signInLink} to={"/signin"}>
        Sign in
      </Link>
    </div>
  );
};
