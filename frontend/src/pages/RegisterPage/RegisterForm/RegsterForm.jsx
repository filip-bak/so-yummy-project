import css from "./RegisterForm.module.css";
import { ErrorMessage, Field, Formik } from "formik";
import { Link } from "react-router-dom";
import Button from "components/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "redux/auth/actions";
import * as Yup from "yup";
import { selectError } from "redux/auth/selectors";

const initialValue = {
  name: "",
  email: "",
  password: "",
};
const validationSchema = Yup.object({
  name: Yup.string()
    .matches(
      /^[a-zA-Z0-9а-яА-Я]+(([' -][a-zA-Z0-9а-яА-Я ])?[a-zA-Z0-9а-яА-Я]*)*$/,
      "Invalid name"
    )
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email", { minDomainSegments: 2 })
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email"
    )
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(4, "Enter a valid Password"),
  // .matches(/^[a-zA-Z\d]{4,}$/, "Enter a valid Password"),
});

export const RegisterForm = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const dispatch = useDispatch();

  const isError = useSelector(selectError);

  const handleSubmit = (formData, { resetForm }) => {
    dispatch(register(formData));
    setIsSubmit(false);
    resetForm();
  };

  return (
    <div className={css.wrapper}>
      <Formik
        initialValues={initialValue}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        validateOnChange={isSubmit}
        validateOnBlur={false}
      >
        {({ handleSubmit, errors, touched }) => (
          <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <div className={css.background}></div>
            <div className={css["background-t"]}></div>
            <div className={css.title}>Registration</div>
            <div className={css.fields}>
              <label className={css.label} htmlFor="register-name">
                <Field
                  className={`${css.field}  ${
                    errors.name && touched.name ? css["field-error"] : ""
                  }`}
                  id="register-name"
                  type="text"
                  name="name"
                  title="Name may contain only letters, apostrophe, dash and spaces."
                  required
                  // pattern="^[a-zA-Z0-9а-яА-Я]+(([' -][a-zA-Z0-9а-яА-Я ])?[a-zA-Z0-9а-яА-Я]*)*$"
                  placeholder="Name"
                />
                <ErrorMessage name="name" component="p" className="error" />
              </label>
              <label className={css.label} htmlFor="register-email">
                <Field
                  className={`${css.field}  ${
                    errors.email && touched.email && css["field-error"]
                  }`}
                  id="register-email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
                <ErrorMessage name="email" component="p" className="error" />
              </label>
              <label className={css.label} htmlFor="register-password">
                <Field
                  className={`${css.field} ${
                    errors.password && touched.password && css["field-error"]
                  } `}
                  id="register-password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
                <ErrorMessage
                  name="password"
                  component="p"
                  className={`error`}
                />
                <Field name="password">
                  {({ field }) => (
                    <>
                      {field.value.length >= 4 && field.value.length < 10 && (
                        <p className={`error-warning`}>
                          Your password is little secure
                        </p>
                      )}
                      {field.value.length >= 10 && (
                        <p className={`successs`}>Password is secure</p>
                      )}
                    </>
                  )}
                </Field>
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
            {isError === `Invalid email` && (
              <p className={`error`}>Incorrect email.</p>
            )}
            {isError === "Email conflict" && (
              <p className={`error`}>This email address is already in use.</p>
            )}
          </form>
        )}
      </Formik>

      <Link className={css.signInLink} to={"/signin"}>
        Sign in
      </Link>
    </div>
  );
};
